import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, n as renderHead } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                    */
import { s as supabase } from '../../chunks/supabase_raZd2PF0.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  const { data, error } = await supabase.from("programs").select("slug");
  if (error) throw error;
  return data.map((row) => ({
    params: { slug: row.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: program, error } = await supabase.from("programs").select(`
    type,
    program_details (
      title,
      full_description
    ),
    program_tags (
      tags (
        name
      )
    )
  `).eq("slug", slug).single();
  if (error || !program) {
    throw new Error("Program not found");
  }
  const item = {
    title: program.program_details.title,
    type: program.type,
    fullDescription: program.program_details.full_description,
    tag: program.program_tags[0]?.tags?.name ?? null
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-jugqba64> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', ' | TechFest 2026</title><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-jugqba64> <div class="bg-grid" data-astro-cid-jugqba64></div> <div class="scanlines" data-astro-cid-jugqba64></div> <div class="vignette" data-astro-cid-jugqba64></div> <main class="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-12" data-astro-cid-jugqba64> <div class="mb-8 md:mb-12 opacity-0 transform translate-y-4" id="header-reveal" data-astro-cid-jugqba64> <div class="inline-block mb-4 px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-cyan-400" data-astro-cid-jugqba64>\nSystem Ready // Protocol 2026\n</div> <h1 class="glitch text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-white" data-astro-cid-jugqba64> ', ' </h1> </div> <div class="tech-card opacity-0 scale-95" id="card-reveal" data-astro-cid-jugqba64> <span class="card-label uppercase" data-astro-cid-jugqba64>', '</span> <div class="relative" data-astro-cid-jugqba64> <p id="typewriter-text"', ' class="text-base md:text-xl text-cyan-100/90 font-light leading-relaxed mb-6 min-h-[4em]" data-astro-cid-jugqba64></p> </div> ', ' <div class="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50" data-astro-cid-jugqba64></div> <div class="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/50" data-astro-cid-jugqba64></div> </div> </main> <script type="module" src="/src/scripts/slug.js"><\/script></body></html>'])), item.title, renderHead(), item.title, item.type, addAttribute(item.fullDescription, "data-fulltext"), item.tag && renderTemplate`<div class="inline-flex items-center gap-2 opacity-0" id="tag-reveal" data-astro-cid-jugqba64> <span class="w-4 md:w-8 h-[1px] bg-cyan-500/50" data-astro-cid-jugqba64></span> <span class="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-cyan-400 font-bold" data-astro-cid-jugqba64> ${item.tag} </span> <span class="w-4 md:w-8 h-[1px] bg-cyan-500/50" data-astro-cid-jugqba64></span> </div>`);
}, "/Users/ajasdaison/projects/tech/tech/src/pages/events/[slug].astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/events/[slug].astro";
const $$url = "/events/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
