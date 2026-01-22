import { e as createComponent, o as renderScript, n as renderHead, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$TechCard, a as $$RegisterModal } from '../../chunks/RegisterModal_BRvJ_8sj.mjs';
import { $ as $$AutoCard } from '../../chunks/AutoCard_B2rlQ0A-.mjs';
import { s as supabase } from '../../chunks/supabase_raZd2PF0.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$AirShow = createComponent(async ($$result, $$props, $$slots) => {
  const { data: programs, error1 } = await supabase.from("programs").select(`
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
  const { data: AutoShow, error } = await supabase.from("AutoShow").select(`
    type,
  image,
  accent
  `);
  if (error) throw error;
  if (error1) throw error;
  const events = programs.filter((p) => p.type === "airshow");
  const competitions = programs.filter((p) => p.type === "workshop");
  const AirShow = AutoShow.filter((p) => p.type === "Air Show");
  const loopEvents = [...AirShow, ...AirShow];
  return renderTemplate`<html lang="en" data-astro-cid-whnqf7wx> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Tech Events & Competitions</title>${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/pages/events/air-show.astro?astro&type=script&index=0&lang.ts")}<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-whnqf7wx> <div class="min-h-screen px-6 py-12 md:p-16 lg:p-24 max-w-7xl mx-auto" data-astro-cid-whnqf7wx> <!-- EVENTS --> <section class="mb-20 md:mb-24" data-astro-cid-whnqf7wx> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4" data-astro-cid-whnqf7wx>
Events
</h1> <div class="w-16 md:w-24 h-[3px] bg-cyan-400 mb-8 md:mb-12" data-astro-cid-whnqf7wx></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" data-astro-cid-whnqf7wx> ${events.map((event) => renderTemplate`${renderComponent($$result, "TechCard", $$TechCard, { "slug": event.slug, "title": event.program_details.title, "description": event.program_details.short_description, "link": `/events/${event.slug}`, "tag": event.program_tags[0]?.tags?.name ?? "", "image": event.program_details.image, "accent": event.program_details.accent, "data-astro-cid-whnqf7wx": true })}`)} </div> </section> <!-- COMPETITIONS --> <section data-astro-cid-whnqf7wx> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4" data-astro-cid-whnqf7wx>
Tech Events
</h1> <div class="w-16 md:w-24 h-[3px] bg-pink-500 mb-8 md:mb-12" data-astro-cid-whnqf7wx></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10" data-astro-cid-whnqf7wx> ${competitions.map((comp) => renderTemplate`${renderComponent($$result, "TechCard", $$TechCard, { "slug": comp.slug, "title": comp.program_details.title, "description": comp.program_details.short_description, "link": `/events/${comp.slug}`, "tag": comp.program_tags[0]?.tags?.name ?? "", "image": comp.program_details.image, "accent": comp.program_details.accent, "data-astro-cid-whnqf7wx": true })}`)} </div> </section> <section class="mt-32" data-astro-cid-whnqf7wx> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-widest mb-4" data-astro-cid-whnqf7wx>ISRO : SPACE ON WHEELS </h1> <div class="w-20 h-[3px] bg-pink-500 mb-12" data-astro-cid-whnqf7wx></div> <div class="slider-container" id="sliderContainer" data-astro-cid-whnqf7wx> <div id="track" class="flex gap-6 md:gap-10 w-max" data-astro-cid-whnqf7wx> ${loopEvents.map((card) => renderTemplate`<div class="card-wrapper" data-astro-cid-whnqf7wx> ${renderComponent($$result, "AutoCard", $$AutoCard, { "title": card.title, "image": card.image, "accent": card.accent, "data-astro-cid-whnqf7wx": true })} </div>`)} </div> </div> <div class="flex flex-col items-center gap-8 mt-12" data-astro-cid-whnqf7wx> <div class="flex items-center gap-4" data-astro-cid-whnqf7wx> <span class="text-[10px] font-mono text-gray-500" data-astro-cid-whnqf7wx>START</span> <div class="scroll-progress-bg" data-astro-cid-whnqf7wx> <div id="scroll-progress-fill" data-astro-cid-whnqf7wx></div> </div> <span class="text-[10px] font-mono text-gray-500" data-astro-cid-whnqf7wx>END</span> </div> <div class="hidden md:flex gap-12" data-astro-cid-whnqf7wx> <button id="prevBtn" class="group flex items-center gap-3 text-xs font-bold text-gray-500 hover:text-cyan-400 transition-all" data-astro-cid-whnqf7wx> <span class="h-[1px] w-8 bg-gray-700 group-hover:bg-cyan-400" data-astro-cid-whnqf7wx></span> PREV
</button> <button id="nextBtn" class="group flex items-center gap-3 text-xs font-bold text-gray-500 hover:text-cyan-400 transition-all" data-astro-cid-whnqf7wx>
NEXT <span class="h-[1px] w-8 bg-gray-700 group-hover:bg-cyan-400" data-astro-cid-whnqf7wx></span> </button> </div> </div> </section> </div> ${renderComponent($$result, "RegisterModal", $$RegisterModal, { "data-astro-cid-whnqf7wx": true })} ${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/pages/events/air-show.astro?astro&type=script&index=1&lang.ts")} </body> </html>`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/events/air-show.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/events/air-show.astro";
const $$url = "/events/air-show";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AirShow,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
