import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-kit-DHGSWr2v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('ptdi-theme');var l=s?s==='light':!window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('light',l);e.classList.toggle('dark',!l);}catch(e){}})();`;
function ThemeToggle({ className = "" }) {
	const [light, setLight] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLight(document.documentElement.classList.contains("light"));
	}, []);
	function toggle() {
		const next = !light;
		setLight(next);
		const el = document.documentElement;
		el.classList.toggle("light", next);
		el.classList.toggle("dark", !next);
		try {
			localStorage.setItem("ptdi-theme", next ? "light" : "dark");
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": light ? "Switch to dark mode" : "Switch to light mode",
		className: `glass grid h-9 w-9 place-items-center rounded-md text-foreground transition-transform hover:scale-105 ${className}`,
		children: light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "h-4 w-4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-4 w-4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" })]
		})
	});
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add("is-visible");
					io.unobserve(node);
				}
			});
		}, { threshold: .15 });
		io.observe(node);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Counter({ to, suffix = "", prefix = "", duration = 1400 }) {
	const [value, setValue] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const io = new IntersectionObserver((entries) => {
			if (!entries[0]?.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const step = (now) => {
				const p = Math.min(1, (now - start) / duration);
				setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
				if (p < 1) requestAnimationFrame(step);
			};
			requestAnimationFrame(step);
		});
		io.observe(node);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			value.toLocaleString("en-PK"),
			suffix
		]
	});
}
var BRAND_BLUE = "#1B5CB8";
var BRAND_GREEN = "#3A9E5F";
/** PAK TAX DIGITAL INVOICE: a POS receipt slip folded into the letter P. */
function BrandLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 56 60",
		className,
		role: "img",
		"aria-label": "Pak Tax Digital Invoice",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 6 h10 v40 l-2.5 4 -2.5 -4 -2.5 4 -2.5 -4 z",
				fill: BRAND_BLUE
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 10 h10 a11 11 0 0 1 0 22 h-10",
				fill: "none",
				stroke: BRAND_BLUE,
				strokeWidth: "8",
				strokeLinecap: "square"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24.5 21.5 l3 3 6-6.5",
				fill: "none",
				stroke: BRAND_GREEN,
				strokeWidth: "3.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 41h20M24 48h13",
				stroke: "currentColor",
				strokeOpacity: "0.45",
				strokeWidth: "3",
				strokeLinecap: "round"
			})
		]
	});
}
/** Federal Board of Revenue mark. */
function FbrMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 150 64",
		className,
		role: "img",
		"aria-label": "Federal Board of Revenue, Pakistan",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 26C34 6 96 4 142 16c-44-3-100 2-128 18Z",
				fill: "#4CA85E"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 2l2.2 5 5.4.8-3.9 3.7.9 5.3-4.6-2.5-4.7 2.5.9-5.3-3.9-3.7 5.4-.8Z",
				fill: "#F6C324"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "8",
				y: "52",
				fill: "#12539E",
				fontSize: "38",
				fontWeight: "800",
				letterSpacing: "0.5",
				fontFamily: "var(--font-display)",
				children: "FBR"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "10",
				y: "62",
				fill: "#12539E",
				fontSize: "10",
				fontWeight: "700",
				letterSpacing: "3.4",
				fontFamily: "var(--font-display)",
				children: "PAKISTAN"
			})
		]
	});
}
/** FBR Digital Invoicing scheme mark. */
function DigitalInvoicingMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 300 100",
		className,
		role: "img",
		"aria-label": "FBR Digital Invoicing",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 8h34a42 42 0 0 1 0 84H8V70h30a20 20 0 0 0 0-40H8Z",
				fill: "#3557A8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 46h20v18H8Zm26 0h12v18H34Z",
				fill: "#63A97A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 70h20v22H8Z",
				fill: "#63A97A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "46",
				fill: "currentColor",
				fillOpacity: "0.75",
				fontSize: "34",
				fontWeight: "500",
				letterSpacing: "1.5",
				fontFamily: "var(--font-display)",
				children: "DIGITAL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "86",
				fill: "currentColor",
				fillOpacity: "0.75",
				fontSize: "34",
				fontWeight: "500",
				letterSpacing: "1.5",
				fontFamily: "var(--font-display)",
				children: "INVOICING"
			})
		]
	});
}
/** IRIS filing portal mark. */
function IrisMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 150 56",
		className,
		role: "img",
		"aria-label": "FBR IRIS",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "irisGrad",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#2FB6C9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "45%",
						stopColor: "#3A5BC7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#C0397F"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "14",
				cy: "28",
				r: "11",
				fill: "none",
				stroke: "url(#irisGrad)",
				strokeWidth: "5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "14",
				cy: "28",
				r: "3.2",
				fill: "url(#irisGrad)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "33",
				y: "40",
				fill: "url(#irisGrad)",
				fontSize: "34",
				fontWeight: "700",
				letterSpacing: "2",
				fontFamily: "var(--font-display)",
				children: "IRIS"
			})
		]
	});
}
var BARS = [
	38,
	52,
	44,
	68,
	58,
	76,
	62,
	88,
	72,
	95
];
function DashboardMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scene",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "tilt glass depth rounded-2xl p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-7 w-7 place-items-center rounded-md bg-brand/20 font-mono text-[10px] font-bold text-brand",
							children: "PT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold",
							children: "Pak Tax Dashboard"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 rounded-full bg-teal/15 px-2 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-widest text-teal",
							children: "FBR Live"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-2 sm:gap-3",
					children: [
						{
							label: "Invoices is month",
							value: 1248,
							k: "Invoices"
						},
						{
							label: "FBR posted",
							value: 1186,
							k: "FBR Posted"
						},
						{
							label: "Clients",
							value: 632,
							k: "Clients"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background/50 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-lg font-semibold sm:text-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.value })
						})]
					}, s.k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background/50 p-3 sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted",
							children: "Sales overview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex h-24 items-end gap-1.5",
							children: BARS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-grow flex-1 rounded-sm bg-gradient-to-t from-brand to-teal",
								style: {
									height: `${h}%`,
									animationDelay: `${i * 70}ms`
								}
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-background/50 p-3 sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[9px] uppercase tracking-widest text-muted",
							children: "Recent activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2.5",
							children: [
								"INV-8412 posted",
								"ATL check passed",
								"STRN verified",
								"Return draft ready"
							].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-[11px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-teal",
									style: { animationDelay: `${i * 300}ms` }
								}), t]
							}, t))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mt-3 h-1 overflow-hidden rounded-full bg-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" })
				})
			]
		})
	});
}
//#endregion
export { FbrMark as a, THEME_SCRIPT as c, DigitalInvoicingMark as i, ThemeToggle as l, Counter as n, IrisMark as o, DashboardMock as r, Reveal as s, BrandLogo as t };
