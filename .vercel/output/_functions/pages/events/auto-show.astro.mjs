import { e as createComponent, n as renderHead, o as renderScript, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$AutoCard } from '../../chunks/AutoCard_B2rlQ0A-.mjs';
import { s as supabase } from '../../chunks/supabase_raZd2PF0.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$AutoShow = createComponent(async ($$result, $$props, $$slots) => {
  const { data: autoshow, error } = await supabase.from("AutoShow").select("type, image, accent").order("created_at", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  const event = autoshow.filter((item) => item.type === "autoshow");
  const loopEvents = [...event, ...event];
  return renderTemplate`<html lang="en" data-astro-cid-45iyeukg> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
r <title>Tech Events | 2026</title><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;900&family=Inter:wght@300;400&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen flex flex-col justify-center" data-astro-cid-45iyeukg> <div class="container mx-auto px-6 md:px-10 mb-6 z-20" data-astro-cid-45iyeukg> <div class="flex flex-col md:flex-row md:items-end justify-between gap-4" data-astro-cid-45iyeukg> <div data-astro-cid-45iyeukg> <h2 class="text-[10px] tracking-[0.4em] text-cyan-400 font-bold uppercase mb-1" data-astro-cid-45iyeukg>2026 AUTOSHOW</h2> <h1 class="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-orbitron tracking-tighter italic" data-astro-cid-45iyeukg>
CAMARO <span class="opacity-30" data-astro-cid-45iyeukg>EVENTS</span> </h1> </div> <p class="text-gray-400 max-w-xs text-xs md:text-sm leading-relaxed border-l-2 border-cyan-500/50 pl-4 py-1" data-astro-cid-45iyeukg>
Automobile and Mechanical presents the automobile expo
</p> </div> </div> <div class="slider-container" data-astro-cid-45iyeukg> <div id="track" class="flex gap-6 md:gap-10" data-astro-cid-45iyeukg> ${loopEvents.map((event2) => renderTemplate`<div class="card-wrapper" data-astro-cid-45iyeukg> ${renderComponent($$result, "AutoCard", $$AutoCard, { "title": event2.title, "image": event2.image, "accent": event2.accent, "data-astro-cid-45iyeukg": true })} </div>`)} </div> </div> <div class="flex flex-col items-center gap-6 mt-4" data-astro-cid-45iyeukg> <div class="flex items-center gap-4" data-astro-cid-45iyeukg> <span class="text-[10px] font-mono text-gray-500" data-astro-cid-45iyeukg>01</span> <div class="scroll-progress-bg" data-astro-cid-45iyeukg> <div id="scroll-progress-fill" data-astro-cid-45iyeukg></div> </div> <span class="text-[10px] font-mono text-gray-500" data-astro-cid-45iyeukg>05</span> </div> <div class="hidden md:flex justify-center items-center gap-12" data-astro-cid-45iyeukg> <button id="prevBtn" class="group flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-gray-500 hover:text-cyan-400 transition-all" data-astro-cid-45iyeukg> <span class="h-[1px] w-8 bg-gray-700 group-hover:bg-cyan-400 transition-all" data-astro-cid-45iyeukg></span> PREV
</button> <button id="nextBtn" class="group flex items-center gap-3 text-xs tracking-widest uppercase font-bold text-gray-500 hover:text-cyan-400 transition-all" data-astro-cid-45iyeukg>
NEXT <span class="h-[1px] w-8 bg-gray-700 group-hover:bg-cyan-400 transition-all" data-astro-cid-45iyeukg></span> </button> </div> </div> ${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/pages/events/auto-show.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/events/auto-show.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/events/auto-show.astro";
const $$url = "/events/auto-show";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AutoShow,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
