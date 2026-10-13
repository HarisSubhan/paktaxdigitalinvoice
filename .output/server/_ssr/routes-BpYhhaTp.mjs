import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as FbrMark, i as DigitalInvoicingMark, l as ThemeToggle, n as Counter, o as IrisMark, r as DashboardMock, s as Reveal, t as BrandLogo } from "./site-kit-DHGSWr2v.mjs";
import { a as FloatingContact, c as PHONE, d as ScrollProgress, f as StepsTimeline, g as WHATSAPP_URL, h as UncleTax, i as FeatureTour, l as PHONE_PRETTY, m as Typing, o as MailVault, p as TestimonialSlider, r as FaqList, s as MobileBar, u as Parallax } from "./uncle-tax-C3vlb7uQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as demo_poster_default } from "./demo-poster-BgwEatvK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpYhhaTp.js
var import_jsx_runtime = require_jsx_runtime();
var business_owner_default = "/assets/business-owner-1cJHFQPy.jpg";
var filing_team_default = "/assets/filing-team-DecyX4pc.jpg";
var stock_trader_default = "/assets/stock-trader-B6pRV-1s.jpg";
var restaurant_counter_default = "/assets/restaurant-counter-DyGG1dls.jpg";
var accountant_desk_default = "/assets/accountant-desk-BakiHaBW.jpg";
var CLIENT_PORTAL_URL = "https://password.paktaxdigitalinvoice.com.pk";
var FBR_PORTAL_URL = "https://fbr.paktaxdigitalinvoice.com.pk";
var STOCK_PORTAL_URL = "https://taxflow.flowezee.com";
var PORTALS = [
	{
		name: "Client Portal",
		url: CLIENT_PORTAL_URL,
		tag: "portal.paktaxdigitalinvoice.com.pk",
		body: "Apne clients ka record, documents aur filing status ek jagah. Team ke liye role based access.",
		points: [
			"Client documents",
			"Filing status",
			"Team roles"
		],
		accent: "var(--teal)"
	},
	{
		name: "Digital Invoicing Portal",
		internal: true,
		url: FBR_PORTAL_URL,
		tag: "fbr.paktaxdigitalinvoice.com.pk",
		body: "FBR connected digital invoices banayein aur real time posting status dekhein, ATL check ke saath.",
		points: [
			"Live FBR posting",
			"QR invoices",
			"ATL verification"
		],
		accent: "var(--brand)"
	},
	{
		name: "Stock Invoicing Portal",
		url: STOCK_PORTAL_URL,
		tag: "taxflow.flowezee.com",
		body: "Products, stock aur HS codes manage karein aur stock ke saath invoicing chalayein.",
		points: [
			"Stock aur rates",
			"HS codes",
			"Purchase ledger"
		],
		accent: "var(--amber)"
	}
];
var FEATURES = [
	{
		n: "01",
		title: "Real time FBR posting status",
		body: "Har invoice seedha FBR ke digital invoicing system par jati hai. Posted, pending ya rejected, sab live dashboard par.",
		icon: "receipt",
		image: business_owner_default,
		caption: "Counter se FBR tak, ek click"
	},
	{
		n: "02",
		title: "Buyer ATL verification",
		body: "NTN ya CNIC daalein aur Active Taxpayer List status foran check karein, taake withholding rate sahi lage.",
		icon: "shield",
		image: accountant_desk_default,
		caption: "ATL status seconds mein"
	},
	{
		n: "03",
		title: "Products, stock aur HS codes",
		body: "Stock, purchase rate, sale rate aur HS code ek jagah. Sales tax rate har item par automatic apply hota hai.",
		icon: "box",
		image: stock_trader_default,
		caption: "Godown se counter tak ek record"
	},
	{
		n: "04",
		title: "Sales aur tax reports",
		body: "Monthly sales tax summary, Annex C data, buyer wise ledger aur income tax reports, sab export ready.",
		icon: "chart",
		image: filing_team_default,
		caption: "Return se pehle poori tasveer"
	},
	{
		n: "05",
		title: "Roles, security aur support chat",
		body: "Counter staff, accountant aur owner ke liye alag access. In app chat par hamari Rawalpindi team available hai.",
		icon: "users",
		image: restaurant_counter_default,
		caption: "Har counter par sahi access"
	}
];
var STEPS = [
	{
		step: "Step 01",
		title: "Registration aur NTN mapping",
		body: "Hum aapka NTN, STRN aur business profile FBR ke system se connect kartay hain. Sandbox se production tak poori guidance."
	},
	{
		step: "Step 02",
		title: "Products aur customers upload",
		body: "Excel se import karein ya manually add karein. HS codes, tax rates aur buyer NTN sab validate ho jatay hain."
	},
	{
		step: "Step 03",
		title: "Invoice banayein, FBR par post",
		body: "Counter par invoice banti hai, QR aur FBR invoice number ke saath print hoti hai. Customer ko WhatsApp par bhi ja sakti hai."
	},
	{
		step: "Step 04",
		title: "Monthly return file",
		body: "Sales data se return tayyar hoti hai, aap review kartay hain aur hum IRIS par file kar detay hain. Deadline miss nahi hoti."
	}
];
var INDUSTRIES = [
	{
		name: "Traders aur wholesalers",
		detail: "Bulk invoicing, buyer ledger, credit notes",
		image: stock_trader_default
	},
	{
		name: "Retail aur general stores",
		detail: "Counter billing, barcode, daily closing",
		image: business_owner_default
	},
	{
		name: "Distributors",
		detail: "Route wise sales, stock transfer, returns",
		image: stock_trader_default
	},
	{
		name: "Manufacturers",
		detail: "HS codes, production stock, input tax adjustment",
		image: filing_team_default
	},
	{
		name: "Restaurants aur cafes",
		detail: "Table billing, service charges, POS integration",
		image: restaurant_counter_default
	},
	{
		name: "Services aur consultants",
		detail: "Service invoices, withholding, income tax",
		image: accountant_desk_default
	}
];
var TESTIMONIALS = [
	{
		quote: "Pehle har invoice ke baad alag register maintain karna parta tha. Ab sab kuch FBR par khud chala jata hai aur return time par file ho jati hai.",
		name: "Hafiz Bilal",
		role: "Wholesale trader, Raja Bazaar Rawalpindi"
	},
	{
		quote: "ATL check aur HS code wali feature ne meri sab se bari problem solve kar di. Team Urdu mein baat karti hai, samajhna asaan hota hai.",
		name: "Sadia Khan",
		role: "Distributor, Islamabad"
	},
	{
		quote: "Counter staff ne ek din mein seekh liya. Ab QR wali invoice dekh kar customers ka trust bhi barh gaya hai.",
		name: "Usman Tariq",
		role: "Retail chain owner, Peshawar Road"
	}
];
var FAQS = [
	{
		q: "Kya ye software FBR ke digital invoicing system se connected hai?",
		a: "Ji haan. Har invoice real time FBR par post hoti hai aur aapko FBR invoice number aur QR code milta hai. Posting status dashboard par live nazar aata hai."
	},
	{
		q: "Mera business abhi sales tax registered nahi hai, kya aap madad kar saktay hain?",
		a: "Bilkul. Hum NTN aur STRN registration se lekar sandbox testing aur production activation tak poora process handle kartay hain."
	},
	{
		q: "Kya monthly sales tax return bhi aap file kartay hain?",
		a: "Ji. Sales data se return tayyar hoti hai aur review ke baad hum IRIS par submit kar detay hain. Acknowledgement aap ke record mein save rehta hai."
	},
	{
		q: "Internet band ho jaye to kya hoga?",
		a: "Invoice locally save hoti hai aur internet aatay hi automatically FBR par post ho jati hai, is liye counter kabhi ruknay nahi paata."
	},
	{
		q: "Training aur support kaisay milti hai?",
		a: "Onboarding par live training hoti hai, uske baad in app chat, WhatsApp aur phone par Urdu aur English dono mein support available hai."
	},
	{
		q: "Kitni jaldi shuru ho sakta hai?",
		a: "Documents complete hon to zyadatar businesses 48 ghante ke andar live invoices bana rahay hotay hain."
	}
];
var MARQUEE = [
	"FBR digital invoicing",
	"IRIS return filing",
	"ATL verification",
	"HS code mapping",
	"PRAL ready",
	"QR invoices",
	"Annex C data",
	"Sales tax returns",
	"Withholding rates"
];
function FeatureIcon(name) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "h-5 w-5",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.7,
		strokeLinecap: "round",
		children: [
			name === "receipt" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 3h12v18l-3-2-3 2-3-2-3 2ZM9 8h6M9 12h6M9 16h3" }),
			name === "shield" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l8 3v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6ZM8.5 12l2.5 2.5 4.5-4.5" }),
			name === "box" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l8 4.5v9L12 21l-8-4.5v-9ZM4 7.5l8 4.5 8-4.5M12 12v9" }),
			name === "chart" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 20V6M4 20h16M8 20v-6M12 20v-9M16 20v-4" }),
			name === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 19v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V19M9.5 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 4.3a3 3 0 0 1 0 5.8M21 19v-1.5a4 4 0 0 0-3-3.8" })
		]
	});
}
function Eyebrow({ children, tone = "brand" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${tone === "teal" ? "text-teal" : tone === "amber" ? "text-amber" : "text-brand"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-current opacity-60" }), children]
	});
}
function CallRow({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `tel:${PHONE}`,
			className: `shine inline-flex items-center gap-2 rounded-md bg-brand font-semibold text-[var(--onbrand)] shadow-lg shadow-brand/40 transition-transform hover:-translate-y-0.5 ${compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					className: "h-4 w-4",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" })
				}),
				"Call ",
				PHONE_PRETTY
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			className: `shine inline-flex items-center gap-2 rounded-md bg-[var(--signal)] font-semibold text-[var(--onbrand)] shadow-lg shadow-[var(--signal)]/30 transition-transform hover:-translate-y-0.5 ${compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-4 w-4",
				fill: "currentColor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.1-.3.3-.1.6.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.4Z" })
			}), "WhatsApp par baat karein"]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper pointer-events-none fixed inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileBar, { portalUrl: "/digital-invoicing" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "glass sticky top-0 z-50 border-b-2 border-amber/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-9 w-9 shrink-0 text-foreground transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-sm uppercase",
									children: "PAK TAX"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-[9px] uppercase tracking-[0.22em] text-muted",
									children: "Digital Invoice"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative ml-2 hidden items-center border-l border-border pl-3 sm:flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-8 w-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-1 -top-0.5 h-2 w-2 animate-pulse rounded-full bg-[var(--signal)] ring-2 ring-background" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center gap-7 text-sm text-muted lg:flex",
								children: [[
									{
										label: "Features",
										href: "#features"
									},
									{
										label: "Portals",
										href: "#portals"
									},
									{
										label: "Industries",
										href: "#industries"
									},
									{
										label: "FAQ",
										href: "#faq"
									},
									{
										label: "Contact",
										href: "#contact"
									}
								].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.href,
									className: "relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:text-foreground hover:after:w-full",
									children: l.label
								}, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CLIENT_PORTAL_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all after:duration-300 hover:text-foreground hover:after:w-full",
									children: "Client Portal"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE}`,
								className: "hidden rounded-md border border-border bg-background/50 px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:inline-block",
								children: "Call now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/digital-invoicing",
								className: "shine rounded-md bg-brand px-3.5 py-2 text-sm font-medium text-[var(--onbrand)] shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5",
								children: "Digital Invoicing Portal"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 overflow-hidden border-b border-border px-5 pb-14 pt-10 sm:pt-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-40 [background:linear-gradient(90deg,transparent_49.8%,var(--border)_50%,transparent_50.2%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade inline-flex items-center gap-2 border-l-4 border-amber bg-card px-3 py-2 font-mono text-[10px] uppercase tracking-widest shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-teal" }), "Live FBR e-invoice pipeline"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "animate-rise mt-6 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl md:text-6xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: "Uncle Tax sab"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typing, { words: [
											"invoice",
											"FBR posting",
											"tax filing",
											"hisab kitab"
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block",
										children: "sambhal lein ge."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "animate-rise mt-5 max-w-[54ch] text-pretty text-lg text-muted [animation-delay:120ms]",
								children: "Pakistani business ka digital daftar. Invoice banayein, FBR par post karein, stock sambhalein aur IRIS return file karein. Shuru se aakhir tak Uncle Tax aap ke saath hai."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise mt-7 flex flex-wrap items-center gap-2.5 [animation-delay:180ms]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "glass flex items-center gap-3 rounded-lg px-3 py-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-9 w-auto shrink-0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8 w-px bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-6 w-auto shrink-0 text-foreground" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "glass flex items-center gap-2 rounded-lg px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrisMark, { className: "h-6 w-auto shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] uppercase tracking-widest text-muted",
											children: "Returns filed"
										})]
									}),
									[
										"PRAL ready",
										"IRIS returns",
										"ATL check",
										"PKR aur GST"
									].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:text-teal",
										children: chip
									}, chip))
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-rise mt-8 [animation-delay:240ms]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallRow, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-rise mt-4 flex flex-wrap items-center gap-3 [animation-delay:280ms]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/digital-invoicing",
										className: "glass rounded-md px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5",
										children: "Digital Invoicing Portal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/demo",
										className: "rounded-md border border-border px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5",
										children: "Watch demo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: STOCK_PORTAL_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "glass rounded-md px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5",
										children: "Stock Invoicing Portal"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: CLIENT_PORTAL_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "px-1 py-3 font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline",
										children: "Client Portal"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "animate-fade mt-9 grid max-w-lg grid-cols-3 gap-6 [animation-delay:360ms]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-semibold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 100,
											suffix: "%"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted",
										children: "FBR compliant"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-semibold",
										children: "24/7"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted",
										children: "Connected"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-semibold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 5,
											prefix: "<",
											suffix: "s"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[10px] uppercase tracking-widest text-muted",
										children: "Per invoice"
									})] })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-rise relative lg:col-span-6 [animation-delay:200ms]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative border-b-8 border-amber/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, {
									flip: true,
									variant: "hero",
									note: "Aap business karein. Invoice se return tak ka digital kaam main seedha aur samajhne wala bana deta hoon."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-0 z-20 w-[56%] max-w-[290px] origin-bottom-left scale-[0.82] sm:scale-90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
										strength: 6,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMock, {})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stamp animate-stamp pointer-events-none absolute bottom-8 left-[42%] z-30 bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest",
									children: "FBR Posted"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ledger-card mt-5 flex items-center justify-center gap-3 px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-7 w-auto shrink-0 text-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-widest text-muted",
								children: "Integrated digital invoicing service"
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 overflow-hidden border-y-2 border-amber/40 bg-card py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "animate-marquee flex w-max gap-8 whitespace-nowrap",
					children: [...MARQUEE, ...MARQUEE].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-muted",
						children: [m, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-teal" })]
					}, `${m}-${i}`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "portals",
				className: "relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "teal",
					children: "Choose your kaam"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Kis file par kaam karna hai?"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: PORTALS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "file-tab group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:rotate-[-0.5deg]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
									style: { background: p.accent }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
									style: { background: p.accent }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-5 top-4 font-mono text-4xl font-bold text-amber/15",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[10px] uppercase tracking-widest text-muted",
									children: [
										"File ",
										i + 1,
										" / ",
										p.tag
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-xl uppercase",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-pretty text-sm text-muted",
									children: p.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid max-h-0 gap-1.5 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100",
									children: p.points.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2 text-xs text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1.5 w-1.5 rounded-full",
											style: { background: p.accent }
										}), pt]
									}, pt))
								}),
								p.internal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/digital-invoicing",
									className: "shine mt-5 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5",
									style: { background: p.accent },
									children: ["Get started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										className: "transition-transform duration-300 group-hover:translate-x-1",
										children: "→"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "shine mt-5 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5",
									style: { background: p.accent },
									children: [
										"Open ",
										p.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											className: "transition-transform duration-300 group-hover:translate-x-1",
											children: "→"
										})
									]
								})
							]
						})
					}, p.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Capabilities" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-[22ch] text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "Jo cheezein FBR compliance mushkil banati hain, wo hum ne automate kar di hain."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-[56ch] text-pretty text-muted",
							children: "Kisi bhi feature par click ya hover karein aur dekhein wo asal mein kaisa lagta hai."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, { note: "Feature ka naam nahi, kaam dekhein. Har option aap ke roz ke maslay ka seedha hal hai." })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureTour, {
						items: FEATURES,
						renderIcon: FeatureIcon
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how-it-works",
				className: "relative z-10 border-y border-border bg-card/45 px-5 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:sticky lg:top-24 lg:self-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, { note: "Pehle registration, phir maal ka record, us ke baad invoice posting aur aakhir mein IRIS filing." })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							tone: "amber",
							children: "Kaise chalta hai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "glass flex shrink-0 items-center gap-3 rounded-xl px-3 py-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-6 w-auto text-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-7 w-px bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrisMark, { className: "h-6 w-auto" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl uppercase sm:text-4xl",
								children: "Chaar simple steps, zero paperwork."
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsTimeline, { steps: STEPS }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ledger-card grid gap-6 p-5 sm:grid-cols-[240px_1fr] sm:items-center sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/demo",
									className: "group relative block overflow-hidden rounded-lg border-2 border-card outline outline-1 outline-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: demo_poster_default,
										alt: "Uncle Tax software ki Urdu video guide",
										width: 640,
										height: 360,
										loading: "lazy",
										className: "h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute inset-0 grid place-items-center bg-black/35",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-12 w-12 place-items-center rounded-full bg-[var(--amber)] text-black transition-transform duration-300 group-hover:scale-110",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												viewBox: "0 0 24 24",
												className: "h-5 w-5",
												fill: "currentColor",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
											})
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
										tone: "teal",
										children: "Video guide"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl uppercase",
										children: "Poori software guide Urdu mein."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-[52ch] text-pretty text-sm text-muted",
										children: "Registration se le kar invoice posting aur IRIS filing tak, sab kuch screen par dekhein. Phir apna demo account banayein."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/demo",
											className: "rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5",
											children: "Watch the demo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/digital-invoicing",
											className: "glass rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5",
											children: "Get started"
										})]
									})
								] })]
							})
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-12 lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
							strength: 9,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "depth overflow-hidden rounded-2xl border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: filing_team_default,
									alt: "Accountant and business owner reviewing a sales tax return in Islamabad",
									width: 1280,
									height: 960,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
								})
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 100,
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Pakistan ke liye bana hua" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-[24ch] text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
								children: "Yahan ke rules, yahan ki zaban, yahan ki team."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-[52ch] text-pretty text-muted",
								children: "Sales tax rates, further tax, withholding, Annex C, ATL status aur HS codes, sab kuch Pakistani law ke hisaab se built in hai. Hamari team Rawalpindi mein baithi hai aur Urdu aur English dono mein baat karti hai."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7 grid gap-3 sm:grid-cols-2",
								children: [
									{
										k: "NTN aur STRN",
										v: "Taxpayer validation built in",
										tone: "text-brand"
									},
									{
										k: "ATL status",
										v: "Withholding rate automatic",
										tone: "text-teal"
									},
									{
										k: "HS codes",
										v: "Item wise rate mapping",
										tone: "text-amber"
									},
									{
										k: "IRIS filing",
										v: "Monthly return submission",
										tone: "text-brand"
									}
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lift group rounded-lg border border-border bg-card/60 p-4 transition-colors hover:border-teal/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `font-display text-lg font-semibold ${b.tone}`,
										children: b.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted",
										children: b.v
									})]
								}, b.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallRow, { compact: true })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "industries",
				className: "band relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "teal",
					children: "Industries"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Har tarah ke business ke liye."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative h-full overflow-hidden rounded-2xl border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ind.image,
									alt: ind.name,
									width: 1280,
									height: 960,
									loading: "lazy",
									className: "h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display font-semibold",
										children: ind.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 max-h-0 overflow-hidden text-sm text-muted opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100",
										children: ind.detail
									})]
								})
							]
						})
					}, ind.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "amber",
					children: "Customers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Businesses jo roz use kartay hain."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSlider, { items: TESTIMONIALS })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "band relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "FAQ" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
								children: "Aam sawalat."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-pretty text-muted",
								children: "Aur koi sawal hai? WhatsApp karein, jawab foran mil jata hai."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallRow, { compact: true })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQS })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contact",
				className: "relative z-10 mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ledger-card flex flex-col items-center gap-4 px-6 py-5 text-center sm:flex-row sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex shrink-0 flex-wrap items-center justify-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-11 w-auto" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-8 w-auto text-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrisMark, { className: "h-7 w-auto" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold",
							children: "Integrated with FBR digital invoicing"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Har invoice seedha FBR system par post hoti hai, IRIS returns aur ATL status ke saath. PRAL ready aur audit ke liye tayyar."
						})] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[0.8fr_0.8fr_1.1fr] lg:items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								tone: "teal",
								children: "Raabta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 max-w-[30ch] text-balance font-display text-3xl leading-tight sm:text-4xl",
								children: [
									"Seedha baat karein ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-brand",
										children: "Mr Jawad Haider"
									}),
									" se."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-[44ch] text-pretty text-base text-muted",
								children: "Onboarding, sales tax rates ya FBR integration ka koi bhi sawal ho, call karein, WhatsApp karein ya Rawalpindi office tashreef laayein. Urdu aur English dono mein guidance milti hai."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallRow, {})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, {
								variant: "contact",
								note: "Software dekhna ho ya registration samajhni ho, Mr Jawad ko call ya WhatsApp karein. Baat seedhi, kaam mukammal."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ledger-card p-6 sm:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "divide-y divide-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
												children: "Phone"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right font-display text-lg font-medium text-brand sm:text-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `tel:${PHONE}`,
													className: "transition-colors hover:text-foreground",
													children: PHONE_PRETTY
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
												children: "WhatsApp"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right font-display text-lg font-medium sm:text-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: WHATSAPP_URL,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "text-[var(--signal)] transition-colors hover:text-foreground",
													children: "Chat shuru karein"
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right font-display text-lg font-medium sm:text-xl",
												children: "Mr Jawad Haider"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "break-all text-right font-display text-lg font-medium text-brand sm:text-xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "mailto:jawadhaider2009@gmail.com",
													className: "transition-colors hover:text-foreground",
													children: "jawadhaider2009@gmail.com"
												})
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
												children: "Office"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
												className: "text-right text-pretty text-sm leading-relaxed text-muted sm:text-base",
												children: [
													"Suite No. 4417, Gali No. 14,",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Anandpura Gawalmandi, Rawalpindi"
												]
											})]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid gap-2 sm:grid-cols-3",
									children: [
										"Secure cloud",
										"Role based access",
										"In app support"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-border bg-background/50 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:border-teal/50 hover:text-teal",
										children: t
									}, t))
								})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto max-w-6xl px-5 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "receipt-edge ledger-card relative overflow-hidden px-8 pb-14 pt-10 text-center sm:px-12 sm:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute inset-x-0 top-0 h-px",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-beam h-px w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "Aaj hi apna FBR invoicing setup shuru karein."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-[56ch] text-pretty text-muted",
							children: "Teeno portals aap ke liye tayyar hain. Jahan se chahein shuru karein, ya seedha hum se baat karein."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap justify-center gap-3",
							children: PORTALS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: p.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "shine rounded-md border border-border bg-background/50 px-5 py-3 font-medium transition-transform hover:-translate-y-0.5",
								children: p.name
							}, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallRow, {})
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t border-border bg-background/80 py-10 pb-24 sm:pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "h-8 w-8 shrink-0 text-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold tracking-wide",
									children: "PAK TAX DIGITAL INVOICE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 flex items-center gap-3 border-l border-border pl-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-8 w-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IrisMark, { className: "h-5 w-auto" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-6 font-mono text-xs tracking-[0.15em] text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CLIENT_PORTAL_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-brand",
									children: "CLIENT PORTAL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: FBR_PORTAL_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-brand",
									children: "DIGITAL INVOICING"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: STOCK_PORTAL_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-brand",
									children: "STOCK INVOICING"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "transition-colors hover:text-brand",
									children: "WHATSAPP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${PHONE}`,
									className: "transition-colors hover:text-brand",
									children: "CALL"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] tracking-wide text-muted/70 sm:flex-row sm:justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" PAK TAX DIGITAL INVOICE. All rights reserved."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Mr Jawad Haider · ",
								PHONE_PRETTY,
								" · Rawalpindi, Pakistan"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [
									"Powered by",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://origami99.com/",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-brand transition-colors hover:text-teal",
										children: "origami99.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailVault, {})
								]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
