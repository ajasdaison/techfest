import type { APIContext, APIRoute } from "astro";
import { createBEClient } from "../../lib/supabase-admin";

export const GET: APIRoute = async ({
	request,
	cookies,
	redirect,
}: APIContext) => {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");

	if (!code) {
		return redirect("/");
	}

	const supabase = createBEClient({ request, cookies });
	const { error } = await supabase.auth.exchangeCodeForSession(code);

	if (error) {
		console.error("Error exchanging code for session:", error);
		return redirect("/404");
	}

	return redirect("/dashboard");
};
