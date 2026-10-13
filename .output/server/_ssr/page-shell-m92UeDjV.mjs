import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as FbrMark, l as ThemeToggle, t as BrandLogo } from "./site-kit-DHGSWr2v.mjs";
import { a as FloatingContact, c as PHONE, g as WHATSAPP_URL, l as PHONE_PRETTY, o as MailVault, t as CLIENT_PORTAL_URL } from "./uncle-tax-C3vlb7uQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-shell-m92UeDjV.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper pointer-events-none fixed inset-0 opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContact, {}),
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 hidden items-center border-l border-border pl-3 sm:flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-8 w-auto" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden items-center gap-6 text-sm text-muted lg:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "transition-colors hover:text-foreground",
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/digital-invoicing",
										className: "transition-colors hover:text-foreground",
										children: "Get started"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/demo",
										className: "transition-colors hover:text-foreground",
										children: "Watch demo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: CLIENT_PORTAL_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "transition-colors hover:text-foreground",
										children: "Client Portal"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE}`,
								className: "rounded-md border border-border bg-background/50 px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5",
								children: "Call now"
							})
						]
					})]
				})
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative z-10 border-t-2 border-amber/40 bg-card/60 px-5 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-muted",
						children: [
							"Mr Jawad Haider ·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE}`,
								className: "text-foreground hover:underline",
								children: PHONE_PRETTY
							}),
							" ",
							"·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-foreground hover:underline",
								children: "WhatsApp"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted",
						children: [
							"Powered by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://origami99.com/",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-teal hover:underline",
								children: "origami99.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailVault, {})
						]
					})]
				})
			})
		]
	});
}
function Eyebrow({ children, tone = "brand" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${tone === "teal" ? "text-teal" : tone === "amber" ? "text-amber" : "text-brand"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }), children]
	});
}
//#endregion
export { PageShell as n, Eyebrow as t };
