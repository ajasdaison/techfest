import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderHead, k as renderComponent } from '../../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
/* empty css                                    */
import 'clsx';
import { s as supabase } from '../../chunks/supabase_raZd2PF0.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$FoodCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FoodCard;
  const {
    title,
    tag,
    accent = "#00f2ff",
    bgCard = "#1a1a1a",
    image
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-[340px] h-[450px] group transition-all duration-500"${addAttribute(`--accent: ${accent}; --bg-card: ${bgCard};`, "style")}> <div class="absolute inset-0 bg-[var(--accent)] opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div> <div class="absolute -left-3 top-1/4 w-5 h-1/2 bg-gray-800/80 transition-transform group-hover:-translate-x-1" style="clip-path: polygon(100% 0, 0 15%, 0 85%, 100% 100%);"></div> <div class="absolute -right-3 top-1/4 w-5 h-1/2 bg-gray-800/80 transition-transform group-hover:translate-x-1" style="clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);"></div> <div class="absolute inset-0 shadow-2xl bg-black" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"> <div class="absolute inset-0 border border-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"></div> </div> <div class="absolute inset-[4px] overflow-hidden bg-gray-950" style="clip-path: polygon(20% 0%, 80% 0%, 100% 15%, 100% 85%, 80% 100%, 20% 100%, 0% 85%, 0% 15%);"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"> <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div> <div class="absolute inset-0 p-8 flex flex-col justify-between items-center text-center"> <div class="w-full"> <div class="w-10 h-[1px] bg-[var(--accent)] mx-auto mb-3 shadow-[0_0_8px_var(--accent)]"></div> <h2 class="text-white font-black text-2xl uppercase tracking-[0.15em] drop-shadow-lg"> ${title} </h2> </div> <div class="text-[var(--accent)] text-[8px] font-mono uppercase tracking-[0.4em] opacity-60"> ${tag} </div> </div> </div> <div class="absolute top-2 left-[23%] w-3 h-3 border-t-2 border-l-2 border-[var(--accent)] opacity-60"></div> <div class="absolute bottom-2 right-[23%] w-3 h-3 border-b-2 border-r-2 border-[var(--accent)] opacity-60"></div> </div>`;
}, "/Users/ajasdaison/projects/tech/tech/src/components/FoodCard.astro", void 0);

const $$FoodShow = createComponent(async ($$result, $$props, $$slots) => {
  const { data: foodfest, error } = await supabase.from("foodfest").select("title, tag, image, type").order("created_at", { ascending: true });
  if (error) {
    throw new Error(error.message);
  }
  const Snack_Savories = foodfest.filter((item) => item.type === "Snack & Savories");
  const Cold_Beverages = foodfest.filter((item) => item.type === "Cold Beverages");
  const Hot_Beverages = foodfest.filter((item) => item.type === "Hot Beverages");
  const Desserts = foodfest.filter((item) => item.type === "Desserts");
  const Main_Course = foodfest.filter((item) => item.type === "Main Course");
  return renderTemplate`<html lang="en" data-astro-cid-tnulbtbq> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Food Fest</title><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-tnulbtbq> <div class="min-h-screen px-6 py-12 md:p-16 lg:p-24 max-w-7xl mx-auto" data-astro-cid-tnulbtbq> <!-- HOT BEVERAGES --> <section class="mb-20" data-astro-cid-tnulbtbq> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.2em] mb-4" data-astro-cid-tnulbtbq>
Hot & Beverages
</h1> <div class="w-24 h-[3px] bg-pink-500 mb-12" data-astro-cid-tnulbtbq></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-tnulbtbq> ${Hot_Beverages.map((event) => renderTemplate`${renderComponent($$result, "FoodCard", $$FoodCard, { "title": event.title, "tag": event.tag, "image": event.image, "data-astro-cid-tnulbtbq": true })}`)} </div> </section> <!-- COLD BEVERAGES--> <section class="mb-20" data-astro-cid-tnulbtbq> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.2em] mb-4" data-astro-cid-tnulbtbq>
Cold Beverages
</h1> <div class="w-24 h-[3px] bg-cyan-400 mb-12" data-astro-cid-tnulbtbq></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-tnulbtbq> ${Cold_Beverages.map((comp) => renderTemplate`${renderComponent($$result, "FoodCard", $$FoodCard, { "title": comp.title, "tag": comp.tag, "image": comp.image, "data-astro-cid-tnulbtbq": true })}`)} </div> </section> <!-- DESSERTS--> <section class="mb-20" data-astro-cid-tnulbtbq> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.2em] mb-4" data-astro-cid-tnulbtbq>
Desserts
</h1> <div class="w-24 h-[3px] bg-pink-500 mb-12" data-astro-cid-tnulbtbq></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-tnulbtbq> ${Desserts.map((comp) => renderTemplate`${renderComponent($$result, "FoodCard", $$FoodCard, { "title": comp.title, "tag": comp.tag, "image": comp.image, "data-astro-cid-tnulbtbq": true })}`)} </div> </section> <!-- SNACK & SAVORIES --> <section class="mb-20" data-astro-cid-tnulbtbq> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.2em] mb-4" data-astro-cid-tnulbtbq>
Snack & Savories
</h1> <div class="w-24 h-[3px] bg-cyan-400 mb-12" data-astro-cid-tnulbtbq></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-tnulbtbq> ${Snack_Savories.map((event) => renderTemplate`${renderComponent($$result, "FoodCard", $$FoodCard, { "title": event.title, "tag": event.tag, "image": event.image, "data-astro-cid-tnulbtbq": true })}`)} </div> </section> <!-- Main Course--> <section class="mb-20" data-astro-cid-tnulbtbq> <h1 class="section-heading text-white text-3xl md:text-5xl font-black uppercase tracking-[0.2em] mb-4" data-astro-cid-tnulbtbq>
Main Course
</h1> <div class="w-24 h-[3px] bg-pink-500 mb-12" data-astro-cid-tnulbtbq></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-tnulbtbq> ${Main_Course.map((comp) => renderTemplate`${renderComponent($$result, "FoodCard", $$FoodCard, { "title": comp.title, "tag": comp.tag, "image": comp.image, "data-astro-cid-tnulbtbq": true })}`)} </div> </section> </div> </body></html>`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/events/food-show.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/events/food-show.astro";
const $$url = "/events/food-show";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FoodShow,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
