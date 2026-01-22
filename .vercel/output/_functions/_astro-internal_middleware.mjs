import { d as defineMiddleware, s as sequence } from './chunks/index_Bd9iJzjS.mjs';
import { c as createBEClient } from './chunks/supabase-admin_B89kAoRZ.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CD-0xSos.mjs';
import 'piccolore';
import './chunks/astro/server_DfGMZ1H6.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  console.log("Middleware executing for path:", pathname);
  const supabase = createBEClient({
    request: context.request,
    cookies: context.cookies
  });
  if (pathname === "/dashboard") {
    console.log("Checking auth for protected route");
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      return context.redirect("/");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
