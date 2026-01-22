import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, o as renderScript } from './astro/server_DfGMZ1H6.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$TechCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechCard;
  const {
    slug,
    title,
    description,
    link,
    tag,
    accent = "#00f2ff",
    bgCard = "#1a1a1a",
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-[340px] h-[450px] group transition-all duration-500"${addAttribute(`--accent: ${accent}; --bg-card: ${bgCard};`, "style")}> <div class="absolute inset-0 bg-[var(--accent)] opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div> <div class="absolute -left-3 top-1/4 w-5 h-1/2 bg-gray-800/80 transition-transform group-hover:-translate-x-1" style="clip-path: polygon(100% 0, 0 15%, 0 85%, 100% 100%);"></div> <div class="absolute -right-3 top-1/4 w-5 h-1/2 bg-gray-800/80 transition-transform group-hover:translate-x-1" style="clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);"></div> <div class="absolute inset-0 shadow-2xl bg-black" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"> <div class="absolute inset-0 border border-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"></div> </div> <div class="absolute inset-[4px] overflow-hidden bg-gray-950" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"> <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div> <div class="absolute inset-0 p-8 flex flex-col justify-between items-center text-center"> <div class="w-full"> <div class="w-10 h-[1px] bg-[var(--accent)] mx-auto mb-3 shadow-[0_0_8px_var(--accent)]"></div> <h2 class="text-white font-black text-2xl uppercase tracking-[0.15em] drop-shadow-lg"> ${title} </h2> </div> <div class="w-full h-32 border border-[var(--accent)]/20 bg-black/40 backdrop-blur-sm p-4
               opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-500 flex items-center justify-center"> <p class="text-white/90 text-[10px] font-mono uppercase tracking-wider"> ${description} </p> </div> <div class="w-full space-y-3 z-10"> <a${addAttribute(link, "href")} class="block w-full py-2 bg-[var(--accent)] text-black text-[10px] font-black uppercase tracking-widest
                 hover:brightness-125 transition-all shadow-[0_0_15px_var(--accent)]">
Initialize Access
</a> <!-- NEW: Register button --> <button data-register${addAttribute(slug, "data-slug")}${addAttribute(title, "data-title")} type="button" class="relative z-30 block w-full py-2 border border-[var(--accent)] text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-black transition">
Register
</button> <div class="text-[var(--accent)] text-[8px] font-mono uppercase tracking-[0.4em] opacity-60"> ${tag} </div> </div> </div> </div> <div class="absolute top-2 left-[23%] w-3 h-3 border-t-2 border-l-2 border-[var(--accent)] opacity-60"></div> <div class="absolute bottom-2 right-[23%] w-3 h-3 border-b-2 border-r-2 border-[var(--accent)] opacity-60"></div> </div>`;
}, "/Users/ajasdaison/projects/tech/tech/src/components/TechCard.astro", void 0);

const $$RegisterModal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="register-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 backdrop-blur-md"> <div class="w-full max-w-lg bg-[#020008] border border-cyan-400/30 rounded-xl p-8 relative shadow-[0_0_50px_rgba(6,182,212,0.3)]"> <button id="close-register" type="button" class="absolute top-4 right-4 text-cyan-400 hover:text-white transition-colors text-2xl p-2">
✕
</button> <h2 id="modal-title" class="text-2xl uppercase tracking-[0.2em] text-cyan-300 mb-8 font-bold border-b border-cyan-900 pb-4">
Register
</h2> <form id="register-form" class="space-y-6"> <input type="hidden" name="programSlug" id="programSlug"> <input name="name" required placeholder="Full Name" class="w-full bg-black/60 border border-cyan-400/30 px-4 py-3 rounded-md text-cyan-100 focus:outline-none focus:border-cyan-400"> <input name="email" type="email" required placeholder="Email" class="w-full bg-black/60 border border-cyan-400/30 px-4 py-3 rounded-md text-cyan-100 focus:outline-none focus:border-cyan-400"> <input name="phone" required placeholder="Phone" class="w-full bg-black/60 border border-cyan-400/30 px-4 py-3 rounded-md text-cyan-100 focus:outline-none focus:border-cyan-400"> <button id="submit-btn" type="submit" class="w-full bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/40 py-4 rounded-md uppercase tracking-[0.3em] text-cyan-300 font-bold transition-all disabled:opacity-50">
Confirm Registration
</button> </form> </div> </div> ${renderScript($$result, "/Users/ajasdaison/projects/tech/tech/src/components/RegisterModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ajasdaison/projects/tech/tech/src/components/RegisterModal.astro", void 0);

export { $$TechCard as $, $$RegisterModal as a };
