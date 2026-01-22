import { e as createComponent, f as createAstro, k as renderComponent, o as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_D0y8IvGy.mjs';
import { c as createBEClient } from '../chunks/supabase-admin_BBOFaI1N.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const supabase = createBEClient({
    request: Astro2.request,
    cookies: Astro2.cookies
  });
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col items-center justify-center m-30"> <h1 class="text-4xl text-left font-bold mb-12">Sign In to Your Account</h1> <form id="signin-form" class="flex flex-col gap-2 w-1/2"> <label for="email" class="">Enter your email</label> <input type="email" name="email" id="email" placeholder="youremail@example.com" class="border border-gray-500 rounded-md p-2" required> <button type="submit" id="sign-in" class="bg-gray-600 hover:bg-gray-700 p-2 rounded-md text-white font-bold w-full cursor-pointer disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:cursor-not-allowed">Sign In</button> </form> </section> ` })} ${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/login.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
