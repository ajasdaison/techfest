import { c as createBEClient } from '../../chunks/supabase-admin_BBOFaI1N.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({
  request,
  cookies,
  redirect
}) => {
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
  return redirect("/protected");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
