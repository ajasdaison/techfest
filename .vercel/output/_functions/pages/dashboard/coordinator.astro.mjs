import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout } from '../../chunks/Layout_D0y8IvGy.mjs';
import { c as createBEClient } from '../../chunks/supabase-admin_BBOFaI1N.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Coordinator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coordinator;
  const supabase = createBEClient({
    request: Astro2.request,
    cookies: Astro2.cookies
  });
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return Astro2.redirect("/");
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", auth.user.id).single();
  if (profile?.role !== "coordinator" && profile?.role !== "admin") {
    return Astro2.redirect("/dashboard");
  }
  const selectedSlug = Astro2.url.searchParams.get("program");
  const { data: programs } = await supabase.from("programs").select("id, slug, type").order("slug");
  let registrations = [];
  if (selectedSlug) {
    const { data, error } = await supabase.from("registrations").select(`
      id,
      participant_name,
      email,
      phone,
      attended,
      programs!inner (
        slug
      )
    `).eq("programs.slug", selectedSlug).order("participant_name");
    if (error) console.error(error.message);
    else registrations = data;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Coordinator Portal | Attendance", "data-astro-cid-5qkdauhi": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0a0f1c] text-slate-100 font-sans p-4 md:p-10" data-astro-cid-5qkdauhi> <div class="max-w-4xl mx-auto" data-astro-cid-5qkdauhi> <header class="mb-10 text-center md:text-left" data-astro-cid-5qkdauhi> <div class="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4" data-astro-cid-5qkdauhi>
Event Operations
</div> <h1 class="text-4xl font-black tracking-tight text-white italic" data-astro-cid-5qkdauhi>
COORDINATOR <span class="text-blue-500" data-astro-cid-5qkdauhi>DASHBOARD</span> </h1> </header> <div class="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl mb-8 backdrop-blur-md" data-astro-cid-5qkdauhi> <form method="get" class="flex flex-col md:flex-row md:items-end gap-4" data-astro-cid-5qkdauhi> <div class="flex-1" data-astro-cid-5qkdauhi> <label class="block mb-3 text-sm font-medium text-slate-400 uppercase tracking-wider" data-astro-cid-5qkdauhi>Select Active Program</label> <div class="relative" data-astro-cid-5qkdauhi> <select name="program" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white appearance-none focus:ring-2 focus:ring-blue-500 outline-none transition-all" onchange="this.form.submit()" data-astro-cid-5qkdauhi> <option value="" data-astro-cid-5qkdauhi>-- Choose Program --</option> ${programs?.map((p) => renderTemplate`<option${addAttribute(p.slug, "value")}${addAttribute(p.slug === selectedSlug, "selected")} data-astro-cid-5qkdauhi> ${p.slug.toUpperCase()} (${p.type})
</option>`)} </select> <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" data-astro-cid-5qkdauhi>
▼
</div> </div> </div> ${selectedSlug && renderTemplate`<div class="bg-blue-600 px-6 py-3 rounded-xl font-bold flex flex-col justify-center items-center" data-astro-cid-5qkdauhi> <span class="text-[10px] uppercase opacity-80" data-astro-cid-5qkdauhi>Total</span> <span class="text-xl leading-none" data-astro-cid-5qkdauhi>${registrations.length}</span> </div>`} </form> </div> ${selectedSlug && renderTemplate`<div class="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl" data-astro-cid-5qkdauhi> <div class="p-6 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center" data-astro-cid-5qkdauhi> <h2 class="font-bold text-lg uppercase tracking-tight" data-astro-cid-5qkdauhi>Participant Check-in</h2> <span class="text-xs text-slate-500" data-astro-cid-5qkdauhi>Showing all records for "${selectedSlug}"</span> </div> <div class="overflow-x-auto" data-astro-cid-5qkdauhi> <table class="w-full" data-astro-cid-5qkdauhi> <thead data-astro-cid-5qkdauhi> <tr class="text-left text-xs text-slate-500 uppercase tracking-widest border-b border-slate-800" data-astro-cid-5qkdauhi> <th class="p-5 font-semibold" data-astro-cid-5qkdauhi>Participant Info</th> <th class="p-5 font-semibold text-center" data-astro-cid-5qkdauhi>Attendance Status</th> </tr> </thead> <tbody class="divide-y divide-slate-800" data-astro-cid-5qkdauhi> ${registrations.length === 0 ? renderTemplate`<tr data-astro-cid-5qkdauhi> <td colspan="2" class="p-10 text-center text-slate-500 italic" data-astro-cid-5qkdauhi>No registrations found for this program.</td> </tr>` : registrations.map((r) => renderTemplate`<tr class="hover:bg-blue-500/5 transition-colors group" data-astro-cid-5qkdauhi> <td class="p-5" data-astro-cid-5qkdauhi> <div class="font-bold text-slate-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight" data-astro-cid-5qkdauhi> ${r.participant_name} </div> <div class="text-sm text-slate-500" data-astro-cid-5qkdauhi>${r.email}</div> </td> <td class="p-5" data-astro-cid-5qkdauhi> <div class="flex justify-center" data-astro-cid-5qkdauhi> <label class="relative inline-flex items-center cursor-pointer" data-astro-cid-5qkdauhi> <input type="checkbox"${addAttribute(r.attended, "checked")}${addAttribute(r.id, "data-id")} class="sr-only peer attended-toggle" data-astro-cid-5qkdauhi> <div class="w-14 h-7 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600" data-astro-cid-5qkdauhi></div> </label> </div> </td> </tr>`)} </tbody> </table> </div> </div>`} </div> </main> ` })} `;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/coordinator.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/coordinator.astro";
const $$url = "/dashboard/coordinator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Coordinator,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
