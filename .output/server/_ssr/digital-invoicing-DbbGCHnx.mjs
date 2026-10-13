import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as FbrMark, i as DigitalInvoicingMark, s as Reveal } from "./site-kit-DHGSWr2v.mjs";
import { _ as buildSignupMessage, c as PHONE, h as UncleTax, l as PHONE_PRETTY, n as FBR_PORTAL_URL, v as waLink } from "./uncle-tax-C3vlb7uQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageShell, t as Eyebrow } from "./page-shell-m92UeDjV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/digital-invoicing-DbbGCHnx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"Retail shop",
	"Wholesale / distribution",
	"Restaurant / cafe",
	"Manufacturer",
	"Services",
	"Importer / exporter",
	"Other"
];
var EMPTY = {
	business: "",
	person: "",
	phone: "",
	email: "",
	address: "",
	city: "",
	category: CATEGORIES[0],
	sells: "",
	ntn: "",
	volume: "",
	notes: ""
};
var STEPS = [
	"Aap yeh form bharte hain aur WhatsApp par bhej dete hain.",
	"Uncle Tax team aap ka seller profile aur FBR integration check karti hai.",
	"Demo account ya live account set ho jata hai aur training di jati hai."
];
function Field({ label, children, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-widest text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1.5 block",
				children
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
var inputCls = "w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand";
function SignupPage() {
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [error, setError] = (0, import_react.useState)(null);
	const set = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	function onSubmit(e) {
		e.preventDefault();
		if (!form.business.trim() || !form.person.trim() || !form.phone.trim() || !form.city.trim() || !form.sells.trim()) {
			setError("Business name, aap ka naam, phone, city aur kya bechte hain, yeh zaroori hain.");
			return;
		}
		setError(null);
		window.open(waLink(buildSignupMessage(form)), "_blank", "noopener,noreferrer");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "relative z-10 border-b border-border px-5 pb-10 pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_270px] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					tone: "teal",
					children: "Digital Invoicing Portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl",
					children: "Apna FBR digital invoicing setup shuru karein."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[58ch] text-pretty text-lg text-muted",
					children: "Neeche apni business details bharein. Submit karte hi sab kuch pre filled WhatsApp message mein Mr Jawad Haider ko chala jayega. Koi data yahan store nahi hota."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "glass flex items-center gap-3 rounded-lg px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FbrMark, { className: "h-8 w-auto" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-7 w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DigitalInvoicingMark, { className: "h-6 w-auto text-foreground" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demo",
						className: "glass rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5",
						children: "Pehle demo video dekhein"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UncleTax, { note: "Sahi details do, baqi ka jhanjhat mera. Phone number wohi likhein jo WhatsApp par chalta hai." })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 mx-auto max-w-6xl px-5 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "ledger-card grid gap-5 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Business ka naam *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.business,
										onChange: set("business"),
										placeholder: "Al Madina Traders"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Aap ka naam *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.person,
										onChange: set("person"),
										placeholder: "Ahmed Raza"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone / WhatsApp *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.phone,
										onChange: set("phone"),
										placeholder: "03xx xxxxxxx",
										inputMode: "tel"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.email,
										onChange: set("email"),
										placeholder: "aap@example.com",
										type: "email"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.city,
										onChange: set("city"),
										placeholder: "Rawalpindi"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "NTN / STRN",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.ntn,
										onChange: set("ntn"),
										placeholder: "Agar registered hain"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Business address",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: form.address,
								onChange: set("address"),
								placeholder: "Shop, gali, area"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Business type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: inputCls,
									value: form.category,
									onChange: set("category"),
									children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: c,
										children: c
									}, c))
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Monthly invoices",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: inputCls,
									value: form.volume,
									onChange: set("volume"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select karein"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Under 100",
											children: "Under 100"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "100 to 500",
											children: "100 to 500"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "500 to 2000",
											children: "500 to 2000"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "2000 plus",
											children: "2000 plus"
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Aap kya bechte hain? *",
							hint: "Jaise electronics, kirana, garments, auto parts, food.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								value: form.sells,
								onChange: set("sells"),
								placeholder: "Mobile accessories aur electronics"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: `${inputCls} min-h-24`,
								value: form.notes,
								onChange: set("notes"),
								placeholder: "Koi khaas requirement"
							})
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md border border-amber/60 bg-amber/10 px-3 py-2 text-sm text-foreground",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "shine rounded-md bg-[var(--signal)] px-5 py-3 font-medium text-[var(--onbrand)] shadow-lg transition-transform hover:-translate-y-0.5",
								children: "Send on WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE}`,
								className: "rounded-md border border-border px-5 py-3 font-medium transition-transform hover:-translate-y-0.5",
								children: ["Call instead ", PHONE_PRETTY]
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ledger-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						tone: "amber",
						children: "Aage kya hota hai"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-4",
						children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 font-mono text-[10px] text-brand",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-pretty",
								children: s
							})]
						}, s))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ledger-card mt-5 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg uppercase",
							children: "Khud try karna hai?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-pretty text-sm text-muted",
							children: "Software page par \"demo account\" ki option maujood hai. Wahan apply karein aur test invoices bana kar dekhein."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: FBR_PORTAL_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 inline-block rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5",
							children: "Create your demo account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/demo",
							className: "mt-3 block text-sm text-teal underline-offset-4 hover:underline",
							children: "Demo video dekhein"
						})
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { SignupPage as component };
