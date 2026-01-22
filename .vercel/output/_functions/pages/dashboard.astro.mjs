import { e as createComponent, f as createAstro } from '../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
import 'clsx';
import { c as createBEClient } from '../chunks/supabase-admin_BBOFaI1N.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const supabase = createBEClient({
    request: Astro2.request,
    cookies: Astro2.cookies
  });
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return Astro2.redirect("/");
  }
  const { data: profile, error } = await supabase.from("profiles").select("role").eq("id", auth.user.id).single();
  if (error || !profile) {
    throw new Error("Profile not found");
  }
  if (profile.role === "admin") {
    return Astro2.redirect("/dashboard/admin");
  }
  return Astro2.redirect("/dashboard/coordinator");
}, "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
