import { useEffect, useRef, useState, type ReactNode } from "react";
import { MAIL_SERVER_URL } from "@/lib/site";

export const PHONE = "+923235090140";
export const PHONE_PRETTY = "+92 323 5090140";
export const WHATSAPP_URL =
  "https://wa.me/923235090140?text=" +
  encodeURIComponent("Mujhe PAK TAX DIGITAL INVOICE ke bare mein maloomat chahiye.");

/* ---------------- Floating WhatsApp + Call ---------------- */

export function FloatingContact() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-4 z-50 flex flex-col items-end gap-3 transition-all duration-500 sm:bottom-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[var(--signal)] px-4 py-3 text-[var(--onbrand)] shadow-xl shadow-[var(--signal)]/40 transition-transform hover:-translate-y-1 hover:scale-105"
      >
        <span className="absolute inline-flex h-11 w-11 animate-ping rounded-full bg-[var(--signal)] opacity-20" />
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.1-.3.3-.1.6.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.4Z" />
        </svg>
        <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        className="flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-[var(--onbrand)] shadow-xl shadow-brand/40 transition-transform hover:-translate-y-1 hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
        <span className="hidden text-sm font-semibold sm:inline">Call</span>
      </a>
    </div>
  );
}

/* ---------------- Mobile sticky action bar ---------------- */

export function MobileBar({ portalUrl }: { portalUrl: string }) {
  const external = /^https?:/.test(portalUrl);
  return (
    <div className="glass fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-2 p-2 sm:hidden">
      <a
        href={`tel:${PHONE}`}
        className="rounded-lg border border-border bg-background/60 py-2.5 text-center text-xs font-semibold"
      >
        Call
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-[var(--signal)] py-2.5 text-center text-xs font-semibold text-[var(--onbrand)]"
      >
        WhatsApp
      </a>
      <a
        href={portalUrl}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="rounded-lg bg-brand py-2.5 text-center text-xs font-semibold text-[var(--onbrand)]"
      >
        Invoicing
      </a>
    </div>
  );
}

/* ---------------- Scroll progress bar ---------------- */

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand via-teal to-[var(--amber)] transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

/* ---------------- Mouse parallax wrapper ---------------- */

export function Parallax({
  children,
  strength = 14,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(0)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Typing headline ---------------- */

export function Typing({ words, className = "" }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = words[i % words.length] ?? "";
    const done = !del && text === full;
    const empty = del && text === "";
    const timeout = window.setTimeout(
      () => {
        if (done) return setDel(true);
        if (empty) {
          setDel(false);
          setI((v) => v + 1);
          return;
        }
        setText(del ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1600 : del ? 40 : 75,
    );
    return () => window.clearTimeout(timeout);
  }, [text, del, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-teal align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

/* ---------------- Feature tour (tabs) ---------------- */

export type TourItem = {
  n: string;
  title: string;
  body: string;
  icon: string;
  image: string;
  caption: string;
};

export function FeatureTour({
  items,
  renderIcon,
}: {
  items: TourItem[];
  renderIcon: (name: string) => ReactNode;
}) {
  const [active, setActive] = useState(0);
  const current = items[active]!;

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <ul className="space-y-3 lg:col-span-7">
        {items.map((f, i) => {
          const on = i === active;
          return (
            <li key={f.n}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={on}
                className={`group flex w-full items-start gap-4 border-l-4 p-4 text-left transition-all duration-300 ${
                  on
                    ? "depth translate-x-1 border-amber bg-card"
                    : "border-border bg-card/70 hover:translate-x-1 hover:border-brand"
                }`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-all duration-300 ${
                    on
                      ? "scale-110 bg-gradient-to-br from-brand to-teal text-[var(--onbrand)]"
                      : "bg-brand/12 text-brand"
                  }`}
                >
                  {renderIcon(f.icon)}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-display font-semibold">
                    <span className="font-mono text-[10px] text-teal">{f.n}</span>
                    {f.title}
                  </span>
                  <span
                    className={`block overflow-hidden text-pretty text-sm text-muted transition-all duration-400 ${
                      on ? "mt-1 max-h-32 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                    }`}
                  >
                    {f.body}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="lg:sticky lg:top-24 lg:col-span-5">
        <Parallax strength={8}>
          <div className="depth overflow-hidden border-4 border-card outline outline-1 outline-border">
            <img
              key={current.image}
              src={current.image}
              alt={current.caption}
              width={1280}
              height={960}
              loading="lazy"
              className="animate-fade h-64 w-full object-cover sm:h-80"
            />
          </div>
        </Parallax>
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted">{current.caption}</p>
      </div>
    </div>
  );
}

/* ---------------- Testimonial slider ---------------- */

export function TestimonialSlider({
  items,
}: {
  items: { quote: string; name: string; role: string }[];
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % items.length), 5200);
    return () => window.clearInterval(t);
  }, [paused, items.length]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="ledger-card relative overflow-hidden p-7 sm:p-10"
    >
      <div className="pointer-events-none absolute -right-8 -top-10 font-display text-[10rem] leading-none text-brand/10">
        &ldquo;
      </div>
      <div className="relative min-h-[9rem]">
        {items.map((t, idx) => (
          <figure
            key={t.name}
            className={`transition-all duration-600 [transition-timing-function:var(--ease-out-expo)] ${
              idx === i ? "relative opacity-100 blur-0" : "pointer-events-none absolute inset-0 translate-y-4 opacity-0 blur-sm"
            }`}
          >
            <blockquote className="text-pretty text-lg leading-relaxed sm:text-xl">{t.quote}</blockquote>
            <figcaption className="mt-5">
              <div className="font-display font-semibold">{t.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        {items.map((t, idx) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === i ? "w-8 bg-brand" : "w-3 bg-border hover:bg-teal"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Animated FAQ ---------------- */

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div
            key={f.q}
            className={`overflow-hidden border-l-4 transition-all duration-300 ${
              on ? "depth border-amber bg-card" : "border-border bg-card/60"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(on ? null : i)}
              aria-expanded={on}
              className="flex w-full items-start justify-between gap-4 p-5 text-left font-display font-semibold"
            >
              {f.q}
              <span
                className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-brand transition-transform duration-300 ${
                  on ? "rotate-[135deg]" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-400 [transition-timing-function:var(--ease-out-expo)] ${
                on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden px-5 pb-5 text-pretty text-sm text-muted">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Steps with fill line ---------------- */

export function StepsTimeline({ steps }: { steps: { step: string; title: string; body: string }[] }) {
  const [seen, setSeen] = useState<number[]>([]);
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const nodes = ref.current?.querySelectorAll("[data-step]");
    if (!nodes) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset["step"]);
            setSeen((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.4 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={ref} className="relative mt-10 space-y-5 pl-8 sm:pl-10">
      <span className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-4" />
      <span
        className="absolute left-3 top-2 w-px bg-gradient-to-b from-brand to-teal transition-all duration-700 sm:left-4"
        style={{ height: `${(seen.length / steps.length) * 100}%` }}
      />
      {steps.map((s, i) => {
        const on = seen.includes(i);
        return (
          <li key={s.step} data-step={i} className="relative">
            <span
              className={`absolute -left-8 top-4 grid h-6 w-6 place-items-center rounded-full font-mono text-[10px] transition-all duration-500 sm:-left-10 ${
                on ? "scale-110 bg-gradient-to-br from-brand to-teal text-[var(--onbrand)]" : "bg-secondary text-muted"
              }`}
            >
              {i + 1}
            </span>
            <div
              className={`lift ledger-card relative p-5 transition-all duration-600 ${
                on ? `${i % 2 ? "sm:translate-x-5" : "sm:-translate-x-2"} opacity-100` : "-translate-x-2 opacity-40"
              }`}
            >
              {on && i > 1 && (
                <span className="stamp absolute right-4 top-4 rotate-[-7deg] px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-widest">
                  {i === 2 ? "FBR Posted" : "IRIS Filed"}
                </span>
              )}
              <div className="font-mono text-[10px] uppercase tracking-widest text-teal">{s.step}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-pretty text-sm text-muted">{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* ---------------- Hero backdrop: ledger flow ---------------- */

const LEDGER = Array.from({ length: 14 }, (_, i) => ({
  left: 4 + ((i * 7.3 + (i % 3) * 5) % 88),
  delay: (i * 1.7) % 16,
  dur: 16 + (i % 5) * 4,
  scale: 0.7 + ((i % 4) * 0.18),
  rupee: i % 3 === 0,
}));

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--mx", `${x * 26}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft mouse reactive glow */}
      <div
        className="absolute -inset-32 opacity-70 transition-transform duration-500 ease-out"
        style={{
          transform: "translate3d(var(--mx, 0px), var(--my, 0px), 0)",
          background:
            "radial-gradient(38% 42% at 22% 28%, color-mix(in oklab, var(--teal) 26%, transparent), transparent 70%), radial-gradient(42% 46% at 78% 22%, color-mix(in oklab, var(--brand) 30%, transparent), transparent 70%), radial-gradient(34% 38% at 62% 84%, color-mix(in oklab, var(--amber) 16%, transparent), transparent 70%)",
        }}
      />

      {/* paper texture and top light */}
      <div className="paper absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color-mix(in_oklab,var(--brand)_14%,transparent)] to-transparent" />

      {/* drifting receipts */}
      {LEDGER.map((l, i) => (
        <span
          key={i}
          className="animate-ledger absolute bottom-[-12%]"
          style={{
            left: `${l.left}%`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.dur}s`,
            transform: `scale(${l.scale})`,
          }}
        >
          {l.rupee ? (
            <span className="font-display text-xl font-bold text-teal/40">Rs</span>
          ) : (
            <svg width="34" height="44" viewBox="0 0 34 44" className="text-brand/35">
              <path
                d="M3 2h28v36l-4-3-4 3-4-3-4 3-4-3-4 3-4-3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M8 11h18M8 17h13M8 23h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          )}
        </span>
      ))}

      {/* data beams to FBR */}
      <div className="absolute inset-x-0 top-1/3 hidden h-px overflow-hidden lg:block">
        <span className="animate-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" />
      </div>
      <div className="absolute inset-x-0 top-2/3 hidden h-px overflow-hidden lg:block">
        <span
          className="animate-beam absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent"
          style={{ animationDelay: "1.6s" }}
        />
      </div>
    </div>
  );
}

/* ---------------- Hidden mail server entry ---------------- */

export function MailVault() {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function submit(e: React.FormEvent) {
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

  return (
    <>
      <button
        type="button"
        aria-label="Staff access"
        onClick={() => {
          setOpen(true);
          setError(false);
        }}
        className="shine inline-flex items-center gap-2 rounded-md bg-brand font-semibold text-[var(--onbrand)] shadow-lg shadow-brand/40 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 px-4 py-2.5 text-sm"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <path d="M12 14v2.5" />
        </svg>
        <span>Staff Login</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-foreground/40 p-5 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={submit}
            className="w-full max-w-xs rounded-lg border border-border bg-card p-5 shadow-xl"
          >
            <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Enter PIN</label>
            <input
              autoFocus
              type="password"
              inputMode="numeric"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-sm tracking-[0.3em] outline-none focus:border-brand"
            />
            {error ? <p className="mt-2 text-xs font-medium text-red-500">Incorrect PIN</p> : null}
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-border px-3 py-1.5 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-background">
                Unlock
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
