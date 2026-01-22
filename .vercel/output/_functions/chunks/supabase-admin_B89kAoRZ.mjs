import { createServerClient, parseCookieHeader } from '@supabase/ssr';

function createBEClient({
  request,
  cookies
}) {
  const cookieHeader = request.headers.get("Cookie") || "";
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          const cookies2 = parseCookieHeader(cookieHeader);
          return cookies2.map(({ name, value }) => ({
            name,
            value: value ?? ""
          }));
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(
            ({ name, value, options }) => cookies.set(name, value, options)
          );
        }
      }
    }
  );
}

export { createBEClient as c };
