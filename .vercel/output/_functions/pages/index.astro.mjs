import { e as createComponent, n as renderHead, r as renderTemplate } from '../chunks/astro/server_DfGMZ1H6.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_raZd2PF0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("programs").select("*");
  console.log(data, error);
  const pageTitle = "IGNITE | TOMS College of Engineering Techfest";
  const eventName = "IGNITE";
  const collegeName = "TOMS College of Engineering";
  const eventDate = "24th JANUARY 2026";
  const taglineText = "Fuelling the Future of Innovation";
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@300;400&family=Press+Start+2P&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <div class="particles" data-astro-cid-j7pv25f6></div> <div class="hero-content" data-astro-cid-j7pv25f6> <p class="presented-by" data-astro-cid-j7pv25f6>${collegeName} Presents</p> <h1 data-astro-cid-j7pv25f6>${eventName}</h1> <div class="tagline-container" data-astro-cid-j7pv25f6> <span class="tagline" data-astro-cid-j7pv25f6>${taglineText}</span> </div> <div class="date-box" data-astro-cid-j7pv25f6>${eventDate}</div> </div> </section> <section class="welcome-section" data-astro-cid-j7pv25f6> <div class="container welcome-content" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Welcome to the Spark</h2> <p data-astro-cid-j7pv25f6>
Get ready to witness a fusion of creativity and technology.
<strong data-astro-cid-j7pv25f6>${eventName}</strong> is the annual flagship techfest of ${collegeName}. We invite the brightest minds to compete, collaborate, and innovate
          through a series of workshops, hackathons, and technical challenges
          designed to push the boundaries of what's possible. Join us for a
          journey into the future of tech!
</p> <a href="/details" class="btn" data-astro-cid-j7pv25f6>EXPLORE</a> </div> </section> </body></html>`;
}, "/Users/ajasdaison/projects/tech/tech/src/pages/index.astro", void 0);

const $$file = "/Users/ajasdaison/projects/tech/tech/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
