import { e as createComponent, o as renderScript, n as renderHead, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$TechCard, a as $$RegisterModal } from '../../chunks/RegisterModal_BRvJ_8sj.mjs';
import { s as supabase } from '../../chunks/supabase_CDspt_xR.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$TechFest = createComponent(async ($$result, $$props, $$slots) => {
  const { data: programs, error } = await supabase.from("programs").select(`
    slug,
    type,
    program_details (
      title,
      short_description,
      accent,
      image
    ),
    program_tags (
      tags (
        name
      )
    )
  `);
  if (error) throw error;
  const events = programs.filter((p) => p.type === "event");
  const competitions = programs.filter((p) => p.type === "competition");
  return renderTemplate`<html lang="en" data-astro-cid-bjjjhisr> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Tech Events & Competitions</title>${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/pages/events/tech-fest.astro?astro&type=script&index=0&lang.ts")}<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-bjjjhisr> <div class="min-h-screen px-6 py-12 md:p-16 lg:p-24 max-w-7xl mx-auto" data-astro-cid-bjjjhisr> <!-- EVENTS --> <section class="mb-20 md:mb-24" data-astro-cid-bjjjhisr> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4" data-astro-cid-bjjjhisr>
Events
</h1> <div class="w-16 md:w-24 h-[3px] bg-cyan-400 mb-8 md:mb-12" data-astro-cid-bjjjhisr></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" data-astro-cid-bjjjhisr> ${events.map((event) => renderTemplate`${renderComponent($$result, "TechCard", $$TechCard, { "slug": event.slug, "title": event.program_details.title, "description": event.program_details.short_description, "link": `/events/${event.slug}`, "tag": event.program_tags[0]?.tags?.name ?? "", "image": event.program_details.image, "accent": event.program_details.accent, "data-astro-cid-bjjjhisr": true })}`)} </div> </section> <!-- COMPETITIONS --> <section data-astro-cid-bjjjhisr> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4" data-astro-cid-bjjjhisr>
Competitions
</h1> <div class="w-16 md:w-24 h-[3px] bg-pink-500 mb-8 md:mb-12" data-astro-cid-bjjjhisr></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" data-astro-cid-bjjjhisr> ${competitions.map((comp) => renderTemplate`${renderComponent($$result, "TechCard", $$TechCard, { "slug": comp.slug, "title": comp.program_details.title, "description": comp.program_details.short_description, "link": `/events/${comp.slug}`, "tag": comp.program_tags[0]?.tags?.name ?? "", "image": comp.program_details.image, "accent": comp.program_details.accent, "data-astro-cid-bjjjhisr": true })}`)} </div> </section> </div> ${renderComponent($$result, "RegisterModal", $$RegisterModal, { "data-astro-cid-bjjjhisr": true })} </body></html>`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/events/tech-fest.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/events/tech-fest.astro";
const $$url = "/events/tech-fest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TechFest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
