import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_PjnUxcFl.mjs';
import { manifest } from './manifest_L_LB8gVX.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/api/exchange.astro.mjs');
const _page3 = () => import('./pages/dashboard/admin.astro.mjs');
const _page4 = () => import('./pages/dashboard/coordinator.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/details.astro.mjs');
const _page7 = () => import('./pages/events/air-show.astro.mjs');
const _page8 = () => import('./pages/events/auto-show.astro.mjs');
const _page9 = () => import('./pages/events/food-show.astro.mjs');
const _page10 = () => import('./pages/events/tech-fest.astro.mjs');
const _page11 = () => import('./pages/events/_slug_.astro.mjs');
const _page12 = () => import('./pages/login.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/api/exchange.ts", _page2],
    ["src/pages/dashboard/admin.astro", _page3],
    ["src/pages/dashboard/coordinator.astro", _page4],
    ["src/pages/dashboard/index.astro", _page5],
    ["src/pages/details.astro", _page6],
    ["src/pages/events/air-show.astro", _page7],
    ["src/pages/events/auto-show.astro", _page8],
    ["src/pages/events/food-show.astro", _page9],
    ["src/pages/events/tech-fest.astro", _page10],
    ["src/pages/events/[slug].astro", _page11],
    ["src/pages/login.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "42957f71-42ca-4740-94b5-139d03a48e0c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
