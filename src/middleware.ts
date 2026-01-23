import { defineMiddleware } from "astro:middleware";
import { createBEClient } from "./lib/supabase-admin";

export const onRequest = defineMiddleware(async (context, next) => {
	const { pathname } = context.url;

	console.log("Middleware executing for path:", pathname);

	const supabase = createBEClient({
		request: context.request,
		cookies: context.cookies,
	});

	if (pathname === "/dashboard") {
		console.log("Checking auth for protected route");

		const { data } = await supabase.auth.getUser();

		// If no sess, redirect to index
		if (!data.user) {
			return context.redirect("/");
		}
	}

	return next();
});
