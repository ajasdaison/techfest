import { createServerClient, parseCookieHeader } from '@supabase/ssr';

function createBEClient({
  request,
  cookies
}) {
  const cookieHeader = request.headers.get("Cookie") || "";
  return createServerClient(
    undefined                            ,
    undefined                                 ,
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
