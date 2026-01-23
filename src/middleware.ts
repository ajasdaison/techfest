---
import { createBEClient } from "./lib/supabase-admin";
import { defineMiddleware } from "astro:middleware";

const protectedRoutes = ["/dashboard"];
const adminRoutes = ["/dashboard/admin"];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, cookies, redirect } = context;
  const { pathname } = url;

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const supabase = createBEClient({ request, cookies });
    const { data: auth } = await supabase.auth.getUser();

    if (!auth.user) {
      return redirect("/");
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", auth.user.id)
      .single();

    if (error || !profile) {
      return redirect("/");
    }

    if (pathname === "/dashboard") {
      if (profile.role === "admin") {
        return redirect("/dashboard/admin");
      } else {
        return redirect("/dashboard/coordinator");
      }
    }

    if (
      adminRoutes.some((route) => pathname.startsWith(route)) &&
      profile.role !== "admin"
    ) {
      return redirect("/dashboard/coordinator");
    }
  }

  return next();
});