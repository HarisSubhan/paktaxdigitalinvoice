import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/uncle-tax-C3vlb7uQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLIENT_PORTAL_URL = "https://password.paktaxdigitalinvoice.com.pk";
var MAIL_SERVER_URL = "https://business500.mypowerfulserver.com/cpanel";
var FBR_PORTAL_URL = "https://fbr.paktaxdigitalinvoice.com.pk";
var WA_NUMBER = "923235090140";
function waLink(message) {
	return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
function buildSignupMessage(f) {
	return [
		"Uncle Tax Digital Invoicing signup request",
		"",
		`Business: ${f.business}`,
		`Contact person: ${f.person}`,
		`Phone: ${f.phone}`,
		f.email ? `Email: ${f.email}` : "",
		`City: ${f.city}`,
		`Address: ${f.address}`,
		`Business type: ${f.category}`,
		`Kya bechte hain: ${f.sells}`,
		f.ntn ? `NTN / STRN: ${f.ntn}` : "",
		f.volume ? `Monthly invoices: ${f.volume}` : "",
		f.notes ? `Notes: ${f.notes}` : ""
	].filter(Boolean).join("\n");
}
var PHONE = "+923235090140";
var PHONE_PRETTY = "+92 323 5090140";
var WHATSAPP_URL = "https://wa.me/923235090140?text=" + encodeURIComponent("Mujhe PAK TAX DIGITAL INVOICE ke bare mein maloomat chahiye.");
function FloatingContact() {
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShown(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-6 ${shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Chat on WhatsApp",
			className: "group flex items-center gap-2 rounded-full bg-[var(--signal)] px-4 py-3 text-[var(--onbrand)] shadow-xl shadow-[var(--signal)]/40 transition-transform hover:-translate-y-1 hover:scale-105",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-11 w-11 animate-ping rounded-full bg-[var(--signal)] opacity-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 24 24",
					className: "h-5 w-5",
					fill: "currentColor",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.1-.3.3-.1.6.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.4Z" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-sm font-semibold sm:inline",
					children: "WhatsApp"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `tel:${PHONE}`,
			"aria-label": "Call us",
			className: "flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-[var(--onbrand)] shadow-xl shadow-brand/40 transition-transform hover:-translate-y-1 hover:scale-105",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-5 w-5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.9",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-sm font-semibold sm:inline",
				children: "Call"
			})]
		})]
	});
}
function MobileBar({ portalUrl }) {
	const external = /^https?:/.test(portalUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 p-2 sm:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `tel:${PHONE}`,
				className: "rounded-lg border border-border bg-background/60 py-2.5 text-center text-xs font-semibold",
				children: "Call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: WHATSAPP_URL,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "rounded-lg bg-[var(--signal)] py-2.5 text-center text-xs font-semibold text-[var(--onbrand)]",
				children: "WhatsApp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: portalUrl,
				...external ? {
					target: "_blank",
					rel: "noopener noreferrer"
				} : {},
				className: "rounded-lg bg-brand py-2.5 text-center text-xs font-semibold text-[var(--onbrand)]",
				children: "Invoicing"
			})
		]
	});
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement.scrollHeight - window.innerHeight;
			setP(h > 0 ? window.scrollY / h * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-gradient-to-r from-brand via-teal to-[var(--amber)] transition-[width] duration-150",
			style: { width: `${p}%` }
		})
	});
}
function Parallax({ children, strength = 14, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		const y = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(1200px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(0)`;
	}
	function onLeave() {
		const el = ref.current;
		if (el) el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: `transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] ${className}`,
		children
	});
}
function Typing({ words, className = "" }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [del, setDel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const full = words[i % words.length] ?? "";
		const done = !del && text === full;
		const empty = del && text === "";
		const timeout = window.setTimeout(() => {
			if (done) return setDel(true);
			if (empty) {
				setDel(false);
				setI((v) => v + 1);
				return;
			}
			setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
		}, done ? 1600 : del ? 40 : 75);
		return () => window.clearTimeout(timeout);
	}, [
		text,
		del,
		i,
		words
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-teal align-middle",
			style: { height: "0.9em" }
		})]
	});
}
function FeatureTour({ items, renderIcon }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const current = items[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-12 lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3 lg:col-span-7",
			children: items.map((f, i) => {
				const on = i === active;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					onMouseEnter: () => setActive(i),
					"aria-pressed": on,
					className: `group flex w-full items-start gap-4 border-l-4 p-4 text-left transition-all duration-300 ${on ? "depth translate-x-1 border-amber bg-card" : "border-border bg-card/70 hover:translate-x-1 hover:border-brand"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-all duration-300 ${on ? "scale-110 bg-gradient-to-br from-brand to-teal text-[var(--onbrand)]" : "bg-brand/12 text-brand"}`,
						children: renderIcon(f.icon)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 font-display font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] text-teal",
								children: f.n
							}), f.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block overflow-hidden text-pretty text-sm text-muted transition-all duration-400 ${on ? "mt-1 max-h-32 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"}`,
							children: f.body
						})]
					})]
				}) }, f.n);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:sticky lg:top-24 lg:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				strength: 8,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "depth overflow-hidden border-4 border-card outline outline-1 outline-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.image,
						alt: current.caption,
						width: 1280,
						height: 960,
						loading: "lazy",
						className: "animate-fade h-64 w-full object-cover sm:h-80"
					}, current.image)
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted",
				children: current.caption
			})]
		})]
	});
}
function TestimonialSlider({ items }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		const t = window.setInterval(() => setI((v) => (v + 1) % items.length), 5200);
		return () => window.clearInterval(t);
	}, [paused, items.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		className: "ledger-card relative overflow-hidden p-7 sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-8 -top-10 font-display text-[10rem] leading-none text-brand/10",
				children: "“"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-[9rem]",
				children: items.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: `transition-all duration-600 [transition-timing-function:var(--ease-out-expo)] ${idx === i ? "relative opacity-100 blur-0" : "pointer-events-none absolute inset-0 translate-y-4 opacity-0 blur-sm"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "text-pretty text-lg leading-relaxed sm:text-xl",
						children: t.quote
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-semibold",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted",
							children: t.role
						})]
					})]
				}, t.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-2",
				children: items.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setI(idx),
					"aria-label": `Show testimonial ${idx + 1}`,
					className: `h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-8 bg-brand" : "w-3 bg-border hover:bg-teal"}`
				}, t.name))
			})
		]
	});
}
function FaqList({ items }) {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: items.map((f, i) => {
			const on = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `overflow-hidden border-l-4 transition-all duration-300 ${on ? "depth border-amber bg-card" : "border-border bg-card/60"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(on ? null : i),
					"aria-expanded": on,
					className: "flex w-full items-start justify-between gap-4 p-5 text-left font-display font-semibold",
					children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand transition-transform duration-300 ${on ? "rotate-[135deg]" : ""}`,
						children: "+"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid transition-all duration-400 [transition-timing-function:var(--ease-out-expo)] ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "overflow-hidden px-5 pb-5 text-pretty text-sm text-muted",
						children: f.a
					})
				})]
			}, f.q);
		})
	});
}
function StepsTimeline({ steps }) {
	const [seen, setSeen] = (0, import_react.useState)([]);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const nodes = ref.current?.querySelectorAll("[data-step]");
		if (!nodes) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					const idx = Number(e.target.dataset["step"]);
					setSeen((prev) => prev.includes(idx) ? prev : [...prev, idx]);
				}
			});
		}, { threshold: .4 });
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		ref,
		className: "relative mt-10 space-y-5 pl-8 sm:pl-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-3 top-2 bottom-2 w-px bg-border sm:left-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-2 w-px bg-gradient-to-b from-brand to-teal transition-all duration-700 sm:left-4",
				style: { height: `${seen.length / steps.length * 100}%` }
			}),
			steps.map((s, i) => {
				const on = seen.includes(i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					"data-step": i,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute -left-8 top-4 grid h-6 w-6 place-items-center rounded-full font-mono text-[10px] transition-all duration-500 sm:-left-10 ${on ? "scale-110 bg-gradient-to-br from-brand to-teal text-[var(--onbrand)]" : "bg-secondary text-muted"}`,
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `lift ledger-card relative p-5 transition-all duration-600 ${on ? `${i % 2 ? "sm:translate-x-5" : "sm:-translate-x-2"} opacity-100` : "-translate-x-2 opacity-40"}`,
						children: [
							on && i > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "stamp absolute right-4 top-4 rotate-[-7deg] px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-widest",
								children: i === 2 ? "FBR Posted" : "IRIS Filed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-teal",
								children: s.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-display text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-pretty text-sm text-muted",
								children: s.body
							})
						]
					})]
				}, s.step);
			})
		]
	});
}
Array.from({ length: 14 }, (_, i) => ({
	left: 4 + (i * 7.3 + i % 3 * 5) % 88,
	delay: i * 1.7 % 16,
	dur: 16 + i % 5 * 4,
	scale: .7 + i % 4 * .18,
	rupee: i % 3 === 0
}));
function MailVault() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	function submit(e) {
		e.preventDefault();
		if (pin.trim() === "12345@6789@") {
			window.open(MAIL_SERVER_URL, "_blank", "noopener,noreferrer");
			setOpen(false);
			setPin("");
			setError(false);
		} else {
			setError(true);
			setPin("");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": "Staff access",
		onClick: () => {
			setOpen(true);
			setError(false);
		},
		className: "shine inline-flex items-center gap-2 rounded-md bg-brand font-semibold text-[var(--onbrand)] shadow-lg shadow-brand/40 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 px-4 py-2.5 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			className: "h-4 w-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "5",
					y: "10",
					width: "14",
					height: "10",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 10V7a4 4 0 0 1 8 0v3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14v2.5" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Staff Login" })]
	}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-foreground/40 p-5 backdrop-blur-sm",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onClick: (e) => e.stopPropagation(),
			onSubmit: submit,
			className: "w-full max-w-xs rounded-lg border border-border bg-card p-5 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "block font-mono text-[10px] uppercase tracking-[0.2em] text-muted",
					children: "Enter PIN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					type: "password",
					inputMode: "numeric",
					value: pin,
					onChange: (e) => {
						setPin(e.target.value);
						setError(false);
					},
					className: "mt-2 w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm tracking-[0.3em] outline-none focus:border-brand"
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs font-medium text-red-500",
					children: "Incorrect PIN"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						className: "rounded-md border border-border px-3 py-1.5 text-xs",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-background",
						children: "Unlock"
					})]
				})
			]
		})
	}) : null] });
}
var uncle_tax_default = "/assets/uncle-tax-DZZY0dlw.png";
function UncleTax({ note, label = "Uncle Tax kehta hai", variant = "aside", flip = false }) {
	const hero = variant === "hero";
	const contact = variant === "contact";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `uncle-scene relative ${hero ? "min-h-[500px]" : contact ? "min-h-[410px]" : "min-h-[350px]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `uncle-note absolute z-20 ${hero ? "left-0 top-2 max-w-[17rem]" : "left-0 top-4 max-w-[15rem]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-amber",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-body text-sm font-semibold leading-snug text-foreground",
					children: note
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: uncle_tax_default,
				alt: "Uncle Tax, your Pakistani digital invoicing and tax guide",
				width: 720,
				height: 960,
				className: `uncle-float absolute bottom-0 z-10 object-contain drop-shadow-2xl ${hero ? "right-0 h-[470px] max-w-[88%]" : contact ? "right-2 h-[320px]" : "right-0 h-[265px]"} ${flip ? "-scale-x-100" : ""}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-[12%] bottom-0 h-8 rounded-[50%] bg-foreground/10 blur-xl" })
		]
	});
}
//#endregion
export { buildSignupMessage as _, FloatingContact as a, PHONE as c, ScrollProgress as d, StepsTimeline as f, WHATSAPP_URL as g, UncleTax as h, FeatureTour as i, PHONE_PRETTY as l, Typing as m, FBR_PORTAL_URL as n, MailVault as o, TestimonialSlider as p, FaqList as r, MobileBar as s, CLIENT_PORTAL_URL as t, Parallax as u, waLink as v };
