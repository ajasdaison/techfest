 import { createServerClient, parseCookieHeader } from "@supabase/ssr";
 import type { AstroCookies } from "astro";

 export function createBEClient({
 	request,
 	cookies,
 }: {
 	request: Request;
 	cookies: AstroCookies;
 }) {
 	const cookieHeader = request.headers.get("Cookie") || "";

 	return createServerClient(
 		process.env.SUPABASE_URL,
 		process.env.SUPABASE_ANON_KEY,
 		{
 			cookies: {
 				getAll() {
 					const cookies = parseCookieHeader(cookieHeader);
 					return cookies.map(({ name, value }) => ({
 						name,
 						value: value ?? "",
 					}));
 				},
 				setAll(cookiesToSet) {
 					cookiesToSet.forEach(({ name, value, options }) =>
 						cookies.set(name, value, options)
 					);
 				},
 			},
 		}
 	);
 }
