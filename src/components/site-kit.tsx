import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------------- Theme ---------------- */

export const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('ptdi-theme');var l=s?s==='light':!window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('light',l);e.classList.toggle('dark',!l);}catch(e){}})();`;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
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
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className={`glass grid h-9 w-9 place-items-center rounded-md text-foreground transition-transform hover:scale-105 ${className}`}
    >
      {light ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
        </svg>
      )}
    </button>
  );
}

/* ---------------- Scroll reveal ---------------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Component>
  );
}

/* ---------------- Animated counter ---------------- */

export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-PK")}
      {suffix}
    </span>
  );
}

/* ---------------- Brand + official scheme marks ---------------- */

const BRAND_BLUE = "#1B5CB8";
const BRAND_GREEN = "#3A9E5F";

/** PAK TAX DIGITAL INVOICE: a POS receipt slip folded into the letter P. */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 60" className={className} role="img" aria-label="Pak Tax Digital Invoice">
      {/* receipt stem with torn bottom edge */}
      <path
        d="M10 6 h10 v40 l-2.5 4 -2.5 -4 -2.5 4 -2.5 -4 z"
        fill={BRAND_BLUE}
      />
      {/* bowl of the P */}
      <path
        d="M20 10 h10 a11 11 0 0 1 0 22 h-10"
        fill="none"
        stroke={BRAND_BLUE}
        strokeWidth="8"
        strokeLinecap="square"
      />
      {/* verified tick inside the bowl */}
      <path
        d="M24.5 21.5 l3 3 6-6.5"
        fill="none"
        stroke={BRAND_GREEN}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* invoice rows */}
      <path
        d="M24 41h20M24 48h13"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Federal Board of Revenue mark. */
export function FbrMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 64" className={className} role="img" aria-label="Federal Board of Revenue, Pakistan">
      <path
        d="M8 26C34 6 96 4 142 16c-44-3-100 2-128 18Z"
        fill="#4CA85E"
      />
      <path d="M104 2l2.2 5 5.4.8-3.9 3.7.9 5.3-4.6-2.5-4.7 2.5.9-5.3-3.9-3.7 5.4-.8Z" fill="#F6C324" />
      <text
        x="8"
        y="52"
        fill="#12539E"
        fontSize="38"
        fontWeight="800"
        letterSpacing="0.5"
        fontFamily="var(--font-display)"
      >
        FBR
      </text>
      <text
        x="10"
        y="62"
        fill="#12539E"
        fontSize="10"
        fontWeight="700"
        letterSpacing="3.4"
        fontFamily="var(--font-display)"
      >
        PAKISTAN
      </text>
    </svg>
  );
}

/** FBR Digital Invoicing scheme mark. */
export function DigitalInvoicingMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 100" className={className} role="img" aria-label="FBR Digital Invoicing">
      <path
        d="M8 8h34a42 42 0 0 1 0 84H8V70h30a20 20 0 0 0 0-40H8Z"
        fill="#3557A8"
      />
      <path d="M8 46h20v18H8Zm26 0h12v18H34Z" fill="#63A97A" />
      <path d="M8 70h20v22H8Z" fill="#63A97A" />
      <text x="112" y="46" fill="currentColor" fillOpacity="0.75" fontSize="34" fontWeight="500" letterSpacing="1.5" fontFamily="var(--font-display)">
        DIGITAL
      </text>
      <text x="112" y="86" fill="currentColor" fillOpacity="0.75" fontSize="34" fontWeight="500" letterSpacing="1.5" fontFamily="var(--font-display)">
        INVOICING
      </text>
    </svg>
  );
}

/** IRIS filing portal mark. */
export function IrisMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 56" className={className} role="img" aria-label="FBR IRIS">
      <defs>
        <linearGradient id="irisGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2FB6C9" />
          <stop offset="45%" stopColor="#3A5BC7" />
          <stop offset="100%" stopColor="#C0397F" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="28" r="11" fill="none" stroke="url(#irisGrad)" strokeWidth="5" />
      <circle cx="14" cy="28" r="3.2" fill="url(#irisGrad)" />
      <text
        x="33"
        y="40"
        fill="url(#irisGrad)"
        fontSize="34"
        fontWeight="700"
        letterSpacing="2"
        fontFamily="var(--font-display)"
      >
        IRIS
      </text>
    </svg>
  );
}



/* ---------------- Live dashboard mock ---------------- */

const BARS = [38, 52, 44, 68, 58, 76, 62, 88, 72, 95];

export function DashboardMock() {
  return (
    <div className="scene">
      <div className="tilt glass depth rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-brand/20 font-mono text-[10px] font-bold text-brand">
              PT
            </span>
            <span className="font-display text-sm font-semibold">Pak Tax Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-teal/15 px-2 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-teal">FBR Live</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Invoices is month", value: 1248, k: "Invoices" },
            { label: "FBR posted", value: 1186, k: "FBR Posted" },
            { label: "Clients", value: 632, k: "Clients" },
          ].map((s) => (
            <div key={s.k} className="rounded-lg border border-border bg-background/50 p-3">
              <div className="font-mono text-[9px] uppercase tracking-widest text-muted">{s.k}</div>
              <div className="mt-1 font-display text-lg font-semibold sm:text-2xl">
                <Counter to={s.value} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-5">
          <div className="rounded-lg border border-border bg-background/50 p-3 sm:col-span-3">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">Sales overview</div>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="animate-grow flex-1 rounded-sm bg-gradient-to-t from-brand to-teal"
                  style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-background/50 p-3 sm:col-span-2">
            <div className="font-mono text-[9px] uppercase tracking-widest text-muted">Recent activity</div>
            <ul className="mt-3 space-y-2.5">
              {["INV-8412 posted", "ATL check passed", "STRN verified", "Return draft ready"].map((t, i) => (
                <li key={t} className="flex items-center gap-2 text-[11px] text-muted">
                  <span
                    className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-teal"
                    style={{ animationDelay: `${i * 300}ms` }}
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-3 h-1 overflow-hidden rounded-full bg-border">
          <div className="animate-beam absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" />
        </div>
      </div>
    </div>
  );
}
