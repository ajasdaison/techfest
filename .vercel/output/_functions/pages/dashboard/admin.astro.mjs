import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$Layout } from '../../chunks/Layout_D0y8IvGy.mjs';
import { c as createBEClient } from '../../chunks/supabase-admin_BBOFaI1N.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const supabase = createBEClient({
    request: Astro2.request,
    cookies: Astro2.cookies
  });
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return Astro2.redirect("/");
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", auth.user.id).single();
  if (profile?.role !== "admin") {
    return Astro2.redirect("/dashboard");
  }
  const selectedSlug = Astro2.url.searchParams.get("program");
  const { data: programs, error: progError } = await supabase.from("programs").select("id, slug, type").order("slug");
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
    if (!error) registrations = data;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Techfest Admin | Control Center", "data-astro-cid-hdqf4o2r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#0f172a] text-slate-200 p-4 md:p-8 font-sans" data-astro-cid-hdqf4o2r> <div class="max-w-7xl mx-auto" data-astro-cid-hdqf4o2r> <header class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-6" data-astro-cid-hdqf4o2r> <div data-astro-cid-hdqf4o2r> <h1 class="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" data-astro-cid-hdqf4o2r>
TECHFEST COMMAND CENTER
</h1> <p class="text-slate-400 mt-1" data-astro-cid-hdqf4o2r>Manage registrations and real-time attendance</p> </div> <div class="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700" data-astro-cid-hdqf4o2r> <span class="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400" data-astro-cid-hdqf4o2r>Status: Live</span> </div> </header> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8" data-astro-cid-hdqf4o2r> <aside class="lg:col-span-1 space-y-6" data-astro-cid-hdqf4o2r> <div class="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm" data-astro-cid-hdqf4o2r> <label for="program" class="block text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4" data-astro-cid-hdqf4o2r>
Select Department/Event
</label> <form method="get" data-astro-cid-hdqf4o2r> <select id="program" name="program" class="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all cursor-pointer appearance-none" onchange="this.form.submit()" data-astro-cid-hdqf4o2r> <option value="" data-astro-cid-hdqf4o2r>Choose an event...</option> ${programs?.map((p) => renderTemplate`<option${addAttribute(p.slug, "value")}${addAttribute(p.slug === selectedSlug, "selected")} data-astro-cid-hdqf4o2r> ${p.slug.toUpperCase()} (${p.type})
</option>`)} </select> </form> ${selectedSlug && renderTemplate`<div class="mt-6 pt-6 border-t border-slate-700" data-astro-cid-hdqf4o2r> <div class="text-xs text-slate-500 uppercase mb-1" data-astro-cid-hdqf4o2r>Total Registrations</div> <div class="text-3xl font-mono font-bold text-cyan-400" data-astro-cid-hdqf4o2r>${registrations.length}</div> </div>`} </div> </aside> <section class="lg:col-span-3" data-astro-cid-hdqf4o2r> ${!selectedSlug ? renderTemplate`<div class="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-700 rounded-2xl text-slate-500" data-astro-cid-hdqf4o2r> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-hdqf4o2r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" data-astro-cid-hdqf4o2r></path> </svg> <p data-astro-cid-hdqf4o2r>Select a program from the sidebar to view participants</p> </div>` : renderTemplate`<div class="bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-sm" data-astro-cid-hdqf4o2r> <div class="overflow-x-auto" data-astro-cid-hdqf4o2r> <table class="w-full text-left border-collapse" data-astro-cid-hdqf4o2r> <thead data-astro-cid-hdqf4o2r> <tr class="bg-slate-900/50 border-b border-slate-700" data-astro-cid-hdqf4o2r> <th class="p-4 font-semibold text-cyan-400 uppercase text-xs tracking-wider" data-astro-cid-hdqf4o2r>Participant</th> <th class="p-4 font-semibold text-cyan-400 uppercase text-xs tracking-wider" data-astro-cid-hdqf4o2r>Contact Info</th> <th class="p-4 font-semibold text-cyan-400 uppercase text-xs tracking-wider text-center" data-astro-cid-hdqf4o2r>Attendance</th> </tr> </thead> <tbody class="divide-y divide-slate-700" data-astro-cid-hdqf4o2r> ${registrations.length === 0 ? renderTemplate`<tr data-astro-cid-hdqf4o2r> <td colspan="3" class="p-8 text-center text-slate-500" data-astro-cid-hdqf4o2r>No participants registered yet.</td> </tr>` : registrations.map((r) => renderTemplate`<tr class="hover:bg-slate-700/30 transition-colors group" data-astro-cid-hdqf4o2r> <td class="p-4" data-astro-cid-hdqf4o2r> <div class="font-bold text-white group-hover:text-cyan-300 transition-colors" data-astro-cid-hdqf4o2r>${r.participant_name}</div> <div class="text-xs text-slate-500 mt-0.5" data-astro-cid-hdqf4o2r>ID: ${r.id.split("-")[0]}</div> </td> <td class="p-4" data-astro-cid-hdqf4o2r> <div class="text-sm" data-astro-cid-hdqf4o2r>${r.email}</div> <div class="text-xs text-slate-500 italic" data-astro-cid-hdqf4o2r>${r.phone}</div> </td> <td class="p-4 text-center" data-astro-cid-hdqf4o2r> ${r.attended ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" data-astro-cid-hdqf4o2r>
PRESENT
</span>` : renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20" data-astro-cid-hdqf4o2r>
ABSENT
</span>`} </td> </tr>`)} </tbody> </table> </div> </div>`} </section> </div> </div> </main> ` })} `;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/admin.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/dashboard/admin.astro";
const $$url = "/dashboard/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
