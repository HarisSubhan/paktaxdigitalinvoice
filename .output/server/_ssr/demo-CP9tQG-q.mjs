import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as DigitalInvoicingMark, o as IrisMark, s as Reveal } from "./site-kit-DHGSWr2v.mjs";
import { c as PHONE, g as WHATSAPP_URL, h as UncleTax, l as PHONE_PRETTY, n as FBR_PORTAL_URL } from "./uncle-tax-C3vlb7uQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as Eyebrow } from "./page-shell-m92UeDjV.mjs";
import { t as demo_poster_default } from "./demo-poster-BgwEatvK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-CP9tQG-q.js
var import_jsx_runtime = require_jsx_runtime();
var uncle_tax_guide_default = "/assets/uncle-tax-guide-CfEZ45kK.mp4";
var CHAPTERS = [
	{
		n: "01",
		title: "Login aur registration",
		body: "Uncle Tax software mein apna business register karein, seller profile aur sales tax details ek dafa set karein."
	},
	{
		n: "02",
		title: "Products aur stock setup",
		body: "Apni item list, rate, unit aur tax rate daalein. Aik dafa ka kaam, phir har invoice seconds mein banti hai."
	},
	{
		n: "03",
		title: "Invoice banana",
		body: "Buyer chunein, item add karein, discount aur tax khud calculate hota hai, invoice print ya share ho jati hai."
	},
	{
		n: "04",
		title: "FBR par posting",
		body: "Invoice seedhi FBR digital invoicing system par jati hai, IRN aur QR wapas invoice par lag jata hai."
	},
	{
		n: "05",
		title: "Reports aur IRIS filing",
		body: "Sales register aur summary reports nikalein, phir IRIS return filing ke liye ready data hasil karein."
	}
];
function DemoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "relative z-10 border-b border-border px-5 pb-10 pt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_260px] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "amber",
						children: "Video guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl",
						children: "Uncle Tax software, shuru se aakhir tak."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-[58ch] text-pretty text-lg text-muted",
						children: "Poori guide Urdu mein. Dekhein ke registration, product setup, invoice banana, FBR posting aur IRIS filing asal mein kaise hoti hai."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, { note: "Video chalayein aur saath saath apne screen par wohi steps karein. Kahin atkein to seedha call ya WhatsApp." })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 mx-auto max-w-6xl px-5 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "depth overflow-hidden rounded-xl border-4 border-card outline outline-1 outline-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							controls: true,
							controlsList: "nodownload noremoteplayback",
							playsInline: true,
							poster: demo_poster_default,
							src: uncle_tax_guide_default,
							className: "aspect-video w-full bg-black",
							children: "Aap ka browser video support nahi karta."
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ledger-card mt-4 flex flex-wrap items-center gap-3 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-6 w-auto text-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-6 w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrisMark, { className: "h-6 w-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-widest text-muted",
								children: "Integrated digital invoicing aur return filing workflow"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "teal",
						children: "Video mein kya kya hai"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: CHAPTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "ledger-card flex gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-bold text-amber",
								children: c.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-base font-semibold",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-pretty text-sm text-muted",
								children: c.body
							})] })]
						}, c.n))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 border-t border-border bg-card/45 px-5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Agla step" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl uppercase sm:text-4xl",
						children: "Apna demo account banayein."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-[60ch] text-pretty text-muted",
						children: "Software page par demo account ki option maujood hai. Wahan apni details de kar demo apply karein, ya apni details hamein bhejein aur hum setup kar dete hain."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: FBR_PORTAL_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "shine rounded-md bg-brand px-5 py-3 font-medium text-[var(--onbrand)] shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5",
								children: "Create your demo account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/digital-invoicing",
								className: "glass rounded-md px-5 py-3 font-medium transition-transform hover:-translate-y-0.5",
								children: "Details bhejein"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "rounded-md bg-[var(--signal)] px-5 py-3 font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5",
								children: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE}`,
								className: "rounded-md border border-border px-5 py-3 font-medium transition-transform hover:-translate-y-0.5",
								children: PHONE_PRETTY
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { DemoPage as component };
