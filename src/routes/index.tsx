import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import {
  BrandLogo,
  Counter,
  DashboardMock,
  DigitalInvoicingMark,
  FbrMark,
  IrisMark,
  Reveal,
  ThemeToggle,
} from "@/components/site-kit";
import {
  FaqList,
  FeatureTour,
  FloatingContact,
  MailVault,
  MobileBar,
  Parallax,
  PHONE,
  PHONE_PRETTY,
  ScrollProgress,
  StepsTimeline,
  TestimonialSlider,
  Typing,
  WHATSAPP_URL,
  type TourItem,
} from "@/components/interactive";
import { UncleTax } from "@/components/uncle-tax";
import businessOwner from "@/assets/business-owner.jpg";
import filingTeam from "@/assets/filing-team.jpg";
import stockTrader from "@/assets/stock-trader.jpg";
import restaurantCounter from "@/assets/restaurant-counter.jpg";
import accountantDesk from "@/assets/accountant-desk.jpg";
import demoPoster from "@/assets/demo-poster.jpg";

const CLIENT_PORTAL_URL = "https://password.paktaxdigitalinvoice.com.pk";
const FBR_PORTAL_URL = "https://fbr.paktaxdigitalinvoice.com.pk";
const STOCK_PORTAL_URL = "https://taxflow.flowezee.com";

const PORTALS: {
  name: string;
  url: string;
  tag: string;
  body: string;
  points: string[];
  accent: string;
  internal?: boolean;
}[] = [
  {
    name: "Client Portal",
    url: CLIENT_PORTAL_URL,
    tag: "portal.paktaxdigitalinvoice.com.pk",
    body: "Apne clients ka record, documents aur filing status ek jagah. Team ke liye role based access.",
    points: ["Client documents", "Filing status", "Team roles"],
    accent: "var(--teal)",
  },
  {
    name: "Digital Invoicing Portal",
    internal: true,
    url: FBR_PORTAL_URL,
    tag: "fbr.paktaxdigitalinvoice.com.pk",
    body: "FBR connected digital invoices banayein aur real time posting status dekhein, ATL check ke saath.",
    points: ["Live FBR posting", "QR invoices", "ATL verification"],
    accent: "var(--brand)",
  },
  {
    name: "Stock Invoicing Portal",
    url: STOCK_PORTAL_URL,
    tag: "taxflow.flowezee.com",
    body: "Products, stock aur HS codes manage karein aur stock ke saath invoicing chalayein.",
    points: ["Stock aur rates", "HS codes", "Purchase ledger"],
    accent: "var(--amber)",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Uncle Tax | FBR Digital Invoicing Pakistan" },
      {
        name: "description",
        content:
          "Uncle Tax guides Pakistani businesses through FBR digital invoicing, stock records, ATL checks and IRIS tax filing with Rawalpindi based support.",
      },
      {
        property: "og:title",
        content: "Uncle Tax | FBR Digital Invoicing Pakistan",
      },
      {
        property: "og:description",
        content:
          "Uncle Tax ke saath invoices, FBR posting aur IRIS tax returns, sab ek guided system mein.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        name: "twitter:title",
        content: "Uncle Tax | FBR Digital Invoicing Pakistan",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content:
          "Uncle Tax ke saath invoices, FBR posting aur IRIS tax returns. Rawalpindi support in Urdu and English.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const FEATURES: TourItem[] = [
  {
    n: "01",
    title: "Real time FBR posting status",
    body: "Har invoice seedha FBR ke digital invoicing system par jati hai. Posted, pending ya rejected, sab live dashboard par.",
    icon: "receipt",
    image: businessOwner,
    caption: "Counter se FBR tak, ek click",
  },
  {
    n: "02",
    title: "Buyer ATL verification",
    body: "NTN ya CNIC daalein aur Active Taxpayer List status foran check karein, taake withholding rate sahi lage.",
    icon: "shield",
    image: accountantDesk,
    caption: "ATL status seconds mein",
  },
  {
    n: "03",
    title: "Products, stock aur HS codes",
    body: "Stock, purchase rate, sale rate aur HS code ek jagah. Sales tax rate har item par automatic apply hota hai.",
    icon: "box",
    image: stockTrader,
    caption: "Godown se counter tak ek record",
  },
  {
    n: "04",
    title: "Sales aur tax reports",
    body: "Monthly sales tax summary, Annex C data, buyer wise ledger aur income tax reports, sab export ready.",
    icon: "chart",
    image: filingTeam,
    caption: "Return se pehle poori tasveer",
  },
  {
    n: "05",
    title: "Roles, security aur support chat",
    body: "Counter staff, accountant aur owner ke liye alag access. In app chat par hamari Rawalpindi team available hai.",
    icon: "users",
    image: restaurantCounter,
    caption: "Har counter par sahi access",
  },
];

const STEPS = [
  {
    step: "Step 01",
    title: "Registration aur NTN mapping",
    body: "Hum aapka NTN, STRN aur business profile FBR ke system se connect kartay hain. Sandbox se production tak poori guidance.",
  },
  {
    step: "Step 02",
    title: "Products aur customers upload",
    body: "Excel se import karein ya manually add karein. HS codes, tax rates aur buyer NTN sab validate ho jatay hain.",
  },
  {
    step: "Step 03",
    title: "Invoice banayein, FBR par post",
    body: "Counter par invoice banti hai, QR aur FBR invoice number ke saath print hoti hai. Customer ko WhatsApp par bhi ja sakti hai.",
  },
  {
    step: "Step 04",
    title: "Monthly return file",
    body: "Sales data se return tayyar hoti hai, aap review kartay hain aur hum IRIS par file kar detay hain. Deadline miss nahi hoti.",
  },
];

const INDUSTRIES = [
  { name: "Traders aur wholesalers", detail: "Bulk invoicing, buyer ledger, credit notes", image: stockTrader },
  { name: "Retail aur general stores", detail: "Counter billing, barcode, daily closing", image: businessOwner },
  { name: "Distributors", detail: "Route wise sales, stock transfer, returns", image: stockTrader },
  { name: "Manufacturers", detail: "HS codes, production stock, input tax adjustment", image: filingTeam },
  { name: "Restaurants aur cafes", detail: "Table billing, service charges, POS integration", image: restaurantCounter },
  { name: "Services aur consultants", detail: "Service invoices, withholding, income tax", image: accountantDesk },
];

const TESTIMONIALS = [
  {
    quote:
      "Pehle har invoice ke baad alag register maintain karna parta tha. Ab sab kuch FBR par khud chala jata hai aur return time par file ho jati hai.",
    name: "Hafiz Bilal",
    role: "Wholesale trader, Raja Bazaar Rawalpindi",
  },
  {
    quote:
      "ATL check aur HS code wali feature ne meri sab se bari problem solve kar di. Team Urdu mein baat karti hai, samajhna asaan hota hai.",
    name: "Sadia Khan",
    role: "Distributor, Islamabad",
  },
  {
    quote:
      "Counter staff ne ek din mein seekh liya. Ab QR wali invoice dekh kar customers ka trust bhi barh gaya hai.",
    name: "Usman Tariq",
    role: "Retail chain owner, Peshawar Road",
  },
];

const FAQS = [
  {
    q: "Kya ye software FBR ke digital invoicing system se connected hai?",
    a: "Ji haan. Har invoice real time FBR par post hoti hai aur aapko FBR invoice number aur QR code milta hai. Posting status dashboard par live nazar aata hai.",
  },
  {
    q: "Mera business abhi sales tax registered nahi hai, kya aap madad kar saktay hain?",
    a: "Bilkul. Hum NTN aur STRN registration se lekar sandbox testing aur production activation tak poora process handle kartay hain.",
  },
  {
    q: "Kya monthly sales tax return bhi aap file kartay hain?",
    a: "Ji. Sales data se return tayyar hoti hai aur review ke baad hum IRIS par submit kar detay hain. Acknowledgement aap ke record mein save rehta hai.",
  },
  {
    q: "Internet band ho jaye to kya hoga?",
    a: "Invoice locally save hoti hai aur internet aatay hi automatically FBR par post ho jati hai, is liye counter kabhi ruknay nahi paata.",
  },
  {
    q: "Training aur support kaisay milti hai?",
    a: "Onboarding par live training hoti hai, uske baad in app chat, WhatsApp aur phone par Urdu aur English dono mein support available hai.",
  },
  {
    q: "Kitni jaldi shuru ho sakta hai?",
    a: "Documents complete hon to zyadatar businesses 48 ghante ke andar live invoices bana rahay hotay hain.",
  },
];

const MARQUEE = [
  "FBR digital invoicing",
  "IRIS return filing",
  "ATL verification",
  "HS code mapping",
  "PRAL ready",
  "QR invoices",
  "Annex C data",
  "Sales tax returns",
  "Withholding rates",
];

function FeatureIcon(name: string): ReactNode {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
      {name === "receipt" && <path d="M6 3h12v18l-3-2-3 2-3-2-3 2ZM9 8h6M9 12h6M9 16h3" />}
      {name === "shield" && <path d="M12 3l8 3v6c0 5-3.4 8.3-8 9-4.6-.7-8-4-8-9V6ZM8.5 12l2.5 2.5 4.5-4.5" />}
      {name === "box" && <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9ZM4 7.5l8 4.5 8-4.5M12 12v9" />}
      {name === "chart" && <path d="M4 20V6M4 20h16M8 20v-6M12 20v-9M16 20v-4" />}
      {name === "users" && (
        <path d="M16 19v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V19M9.5 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 4.3a3 3 0 0 1 0 5.8M21 19v-1.5a4 4 0 0 0-3-3.8" />
      )}
    </svg>
  );
}

function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "teal" | "amber" }) {
  const color = tone === "teal" ? "text-teal" : tone === "amber" ? "text-amber" : "text-brand";
  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${color}`}>
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </div>
  );
}

function CallRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`tel:${PHONE}`}
        className={`shine inline-flex items-center gap-2 rounded-md bg-brand font-semibold text-[var(--onbrand)] shadow-lg shadow-brand/40 transition-transform hover:-translate-y-0.5 ${
          compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
        </svg>
        Call {PHONE_PRETTY}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`shine inline-flex items-center gap-2 rounded-md bg-[var(--signal)] font-semibold text-[var(--onbrand)] shadow-lg shadow-[var(--signal)]/30 transition-transform hover:-translate-y-0.5 ${
          compact ? "px-4 py-2.5 text-sm" : "px-6 py-3.5"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.6-.3.3c-.1.1-.3.3-.1.6.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.3.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2.2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.4Z" />
        </svg>
        WhatsApp par baat karein
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      <div className="paper pointer-events-none fixed inset-0 opacity-70" />

      <ScrollProgress />
      <FloatingContact />
      <MobileBar portalUrl="/digital-invoicing" />

      {/* Nav */}
      <nav className="glass sticky top-0 z-50 border-b-2 border-amber/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="group flex items-center gap-3">
            <BrandLogo className="h-9 w-9 shrink-0 text-foreground transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" />
            <span className="leading-tight">
              <span className="block font-display text-sm uppercase">PAK TAX</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">Digital Invoice</span>
            </span>
            <span className="relative ml-2 hidden items-center border-l border-border pl-3 sm:flex">
              <FbrMark className="h-8 w-auto" />
              <span className="absolute -right-1 -top-0.5 h-2 w-2 animate-pulse rounded-full bg-[var(--signal)] ring-2 ring-background" />
            </span>
          </Link>


          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-7 text-sm text-muted lg:flex">
              {[
                { label: "Features", href: "#features" },
                { label: "Portals", href: "#portals" },
                { label: "Industries", href: "#industries" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                Client Portal
              </a>
            </div>
            <ThemeToggle />
            <a
              href={`tel:${PHONE}`}
              className="hidden rounded-md border border-border bg-background/50 px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              Call now
            </a>
            <Link
              to="/digital-invoicing"
              className="shine rounded-md bg-brand px-3.5 py-2 text-sm font-medium text-[var(--onbrand)] shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
            >
              Digital Invoicing Portal
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 overflow-hidden border-b border-border px-5 pb-14 pt-10 sm:pt-14">
        <div className="absolute inset-0 opacity-40 [background:linear-gradient(90deg,transparent_49.8%,var(--border)_50%,transparent_50.2%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12">

          <div className="lg:col-span-6">
            <div className="animate-fade inline-flex items-center gap-2 border-l-4 border-amber bg-card px-3 py-2 font-mono text-[10px] uppercase tracking-widest shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
              Live FBR e-invoice pipeline
            </div>
            <h1 className="animate-rise mt-6 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl md:text-6xl">
              <span className="block">Uncle Tax sab</span>
              <span className="block text-brand">
                <Typing words={["invoice", "FBR posting", "tax filing", "hisab kitab"]} />
              </span>
              <span className="block">sambhal lein ge.</span>
            </h1>
            <p className="animate-rise mt-5 max-w-[54ch] text-pretty text-lg text-muted [animation-delay:120ms]">
              Pakistani business ka digital daftar. Invoice banayein, FBR par post karein, stock sambhalein aur IRIS return
              file karein. Shuru se aakhir tak Uncle Tax aap ke saath hai.
            </p>

            {/* FBR badge row */}
            <div className="animate-rise mt-7 flex flex-wrap items-center gap-2.5 [animation-delay:180ms]">
              <span className="glass flex items-center gap-3 rounded-lg px-3 py-2">
                <FbrMark className="h-9 w-auto shrink-0" />
                <span className="h-8 w-px bg-border" />
                <DigitalInvoicingMark className="h-6 w-auto shrink-0 text-foreground" />
              </span>
              <span className="glass flex items-center gap-2 rounded-lg px-3 py-2">
                <IrisMark className="h-6 w-auto shrink-0" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Returns filed</span>
              </span>

              {["PRAL ready", "IRIS returns", "ATL check", "PKR aur GST"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg border border-border bg-background/50 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/50 hover:text-teal"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="animate-rise mt-8 [animation-delay:240ms]">
              <CallRow />
            </div>

            <div className="animate-rise mt-4 flex flex-wrap items-center gap-3 [animation-delay:280ms]">
              <Link
                to="/digital-invoicing"
                className="glass rounded-md px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Digital Invoicing Portal
              </Link>
              <Link
                to="/demo"
                className="rounded-md border border-border px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Watch demo
              </Link>
              <a
                href={STOCK_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-md px-5 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                Stock Invoicing Portal
              </a>
              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-3 font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Client Portal
              </a>
            </div>

            <div className="animate-fade mt-9 grid max-w-lg grid-cols-3 gap-6 [animation-delay:360ms]">
              <div>
                <div className="font-display text-2xl font-semibold">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">FBR compliant</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">24/7</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">Connected</div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">
                  <Counter to={5} prefix="&lt;" suffix="s" />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">Per invoice</div>
              </div>
            </div>
          </div>

          <div className="animate-rise relative lg:col-span-6 [animation-delay:200ms]">
            <div className="relative border-b-8 border-amber/50">
              <UncleTax flip variant="hero" note="Aap business karein. Invoice se return tak ka digital kaam main seedha aur samajhne wala bana deta hoon." />
              <div className="absolute bottom-4 left-0 z-20 w-[56%] max-w-[290px] origin-bottom-left scale-[0.82] sm:scale-90">
                <Parallax strength={6}><DashboardMock /></Parallax>
              </div>
              <div className="stamp animate-stamp pointer-events-none absolute bottom-8 left-[42%] z-30 bg-card px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest">FBR Posted</div>
            </div>
            <div className="ledger-card mt-5 flex items-center justify-center gap-3 px-3 py-2.5">
              <DigitalInvoicingMark className="h-7 w-auto shrink-0 text-foreground" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Integrated digital invoicing service</span>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee strip */}
      <div className="relative z-10 overflow-hidden border-y-2 border-amber/40 bg-card py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={`${m}-${i}`} className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-muted">
              {m}
              <span className="h-1 w-1 rounded-full bg-teal" />
            </span>
          ))}
        </div>
      </div>

      {/* Portals */}
      <section id="portals" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <Eyebrow tone="teal">Choose your kaam</Eyebrow>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Kis file par kaam karna hai?
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PORTALS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className="file-tab group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:rotate-[-0.5deg]"
              >
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: p.accent }}
                />
                <span
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: p.accent }}
                />
                <div className="absolute right-5 top-4 font-mono text-4xl font-bold text-amber/15">0{i + 1}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted">File {i + 1} / {p.tag}</div>
                <h3 className="mt-2 font-display text-xl uppercase">{p.name}</h3>
                <p className="mt-2 text-pretty text-sm text-muted">{p.body}</p>
                <ul className="mt-3 grid max-h-0 gap-1.5 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-muted">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                {p.internal ? (
                  <Link
                    to="/digital-invoicing"
                    className="shine mt-5 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5"
                    style={{ background: p.accent }}
                  >
                    Get started
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shine mt-5 inline-flex w-fit items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5"
                    style={{ background: p.accent }}
                  >
                    Open {p.name}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features tour */}
      <section id="features" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-3 max-w-[22ch] text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Jo cheezein FBR compliance mushkil banati hain, wo hum ne automate kar di hain.
          </h2>
          <p className="mt-3 max-w-[56ch] text-pretty text-muted">
            Kisi bhi feature par click ya hover karein aur dekhein wo asal mein kaisa lagta hai.
          </p>
        </Reveal>
        <Reveal delay={100}><UncleTax note="Feature ka naam nahi, kaam dekhein. Har option aap ke roz ke maslay ka seedha hal hai." /></Reveal>
        </div>
        <Reveal delay={100} className="mt-10">
          <FeatureTour items={FEATURES} renderIcon={FeatureIcon} />
        </Reveal>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative z-10 border-y border-border bg-card/45 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[280px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start"><UncleTax note="Pehle registration, phir maal ka record, us ke baad invoice posting aur aakhir mein IRIS filing." /></div>
        <div>
        <Reveal>
          <Eyebrow tone="amber">Kaise chalta hai</Eyebrow>
          <div className="mt-3 flex items-center gap-4">
            <span className="glass flex shrink-0 items-center gap-3 rounded-xl px-3 py-2">
              <DigitalInvoicingMark className="h-6 w-auto text-foreground" />
              <span className="h-7 w-px bg-border" />
              <IrisMark className="h-6 w-auto" />
            </span>
            <h2 className="font-display text-3xl uppercase sm:text-4xl">Chaar simple steps, zero paperwork.</h2>
          </div>
        </Reveal>

        <StepsTimeline steps={STEPS} />

        <Reveal className="mt-10">
          <div className="ledger-card grid gap-6 p-5 sm:grid-cols-[240px_1fr] sm:items-center sm:p-6">
            <Link to="/demo" className="group relative block overflow-hidden rounded-lg border-2 border-card outline outline-1 outline-border">
              <img
                src={demoPoster}
                alt="Uncle Tax software ki Urdu video guide"
                width={640}
                height={360}
                loading="lazy"
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-black/35">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--amber)] text-black transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </Link>
            <div>
              <Eyebrow tone="teal">Video guide</Eyebrow>
              <h3 className="mt-2 font-display text-2xl uppercase">Poori software guide Urdu mein.</h3>
              <p className="mt-2 max-w-[52ch] text-pretty text-sm text-muted">
                Registration se le kar invoice posting aur IRIS filing tak, sab kuch screen par dekhein. Phir apna demo
                account banayein.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5"
                >
                  Watch the demo
                </Link>
                <Link
                  to="/digital-invoicing"
                  className="glass rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
        </div>
        </div>
      </section>

      {/* Localization */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <Parallax strength={9}>
              <div className="depth overflow-hidden rounded-2xl border border-border">
                <img
                  src={filingTeam}
                  alt="Accountant and business owner reviewing a sales tax return in Islamabad"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Parallax>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <Eyebrow>Pakistan ke liye bana hua</Eyebrow>
            <h2 className="mt-3 max-w-[24ch] text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Yahan ke rules, yahan ki zaban, yahan ki team.
            </h2>
            <p className="mt-4 max-w-[52ch] text-pretty text-muted">
              Sales tax rates, further tax, withholding, Annex C, ATL status aur HS codes, sab kuch Pakistani law ke hisaab se
              built in hai. Hamari team Rawalpindi mein baithi hai aur Urdu aur English dono mein baat karti hai.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { k: "NTN aur STRN", v: "Taxpayer validation built in", tone: "text-brand" },
                { k: "ATL status", v: "Withholding rate automatic", tone: "text-teal" },
                { k: "HS codes", v: "Item wise rate mapping", tone: "text-amber" },
                { k: "IRIS filing", v: "Monthly return submission", tone: "text-brand" },
              ].map((b) => (
                <div
                  key={b.k}
                  className="lift group rounded-lg border border-border bg-card/60 p-4 transition-colors hover:border-teal/40"
                >
                  <div className={`font-display text-lg font-semibold ${b.tone}`}>{b.k}</div>
                  <div className="mt-1 text-sm text-muted">{b.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <CallRow compact />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="band relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <Eyebrow tone="teal">Industries</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Har tarah ke business ke liye.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border">
                <img
                  src={ind.image}
                  alt={ind.name}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display font-semibold">{ind.name}</div>
                  <div className="mt-1 max-h-0 overflow-hidden text-sm text-muted opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {ind.detail}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <Eyebrow tone="amber">Customers</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Businesses jo roz use kartay hain.
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <TestimonialSlider items={TESTIMONIALS} />
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="band relative z-10 mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Aam sawalat.</h2>
            <p className="mt-3 text-pretty text-muted">
              Aur koi sawal hai? WhatsApp karein, jawab foran mil jata hai.
            </p>
            <div className="mt-6">
              <CallRow compact />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <FaqList items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 py-20">
        <Reveal className="mb-10">
          <div className="ledger-card flex flex-col items-center gap-4 px-6 py-5 text-center sm:flex-row sm:text-left">
            <span className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <FbrMark className="h-11 w-auto" />
              <DigitalInvoicingMark className="h-8 w-auto text-foreground" />
              <IrisMark className="h-7 w-auto" />
            </span>
            <div>
              <div className="font-display text-lg font-semibold">Integrated with FBR digital invoicing</div>
              <p className="mt-1 text-sm text-muted">
                Har invoice seedha FBR system par post hoti hai, IRIS returns aur ATL status ke saath. PRAL ready aur audit
                ke liye tayyar.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_0.8fr_1.1fr] lg:items-start">

          <Reveal>
            <Eyebrow tone="teal">Raabta</Eyebrow>
            <h2 className="mt-4 max-w-[30ch] text-balance font-display text-3xl leading-tight sm:text-4xl">
              Seedha baat karein <span className="text-brand">Mr Jawad Haider</span> se.
            </h2>
            <p className="mt-4 max-w-[44ch] text-pretty text-base text-muted">
              Onboarding, sales tax rates ya FBR integration ka koi bhi sawal ho, call karein, WhatsApp karein ya Rawalpindi
              office tashreef laayein. Urdu aur English dono mein guidance milti hai.
            </p>
            <div className="mt-8">
              <CallRow />
            </div>
          </Reveal>
          <Reveal delay={80}><UncleTax variant="contact" note="Software dekhna ho ya registration samajhni ho, Mr Jawad ko call ya WhatsApp karein. Baat seedhi, kaam mukammal." /></Reveal>
          <Reveal delay={120}>
            <div className="ledger-card p-6 sm:p-8">
              <dl className="divide-y divide-border">
                <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Phone</dt>
                  <dd className="text-right font-display text-lg font-medium text-brand sm:text-xl">
                    <a href={`tel:${PHONE}`} className="transition-colors hover:text-foreground">
                      {PHONE_PRETTY}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">WhatsApp</dt>
                  <dd className="text-right font-display text-lg font-medium sm:text-xl">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--signal)] transition-colors hover:text-foreground"
                    >
                      Chat shuru karein
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Name</dt>
                  <dd className="text-right font-display text-lg font-medium sm:text-xl">Mr Jawad Haider</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Email</dt>
                  <dd className="break-all text-right font-display text-lg font-medium text-brand sm:text-xl">
                    <a href="mailto:jawadhaider2009@gmail.com" className="transition-colors hover:text-foreground">
                      jawadhaider2009@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-start sm:gap-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Office</dt>
                  <dd className="text-right text-pretty text-sm leading-relaxed text-muted sm:text-base">
                    Suite No. 4417, Gali No. 14,
                    <br />
                    Anandpura Gawalmandi, Rawalpindi
                  </dd>
                </div>
              </dl>
              <div className="mt-6 grid gap-2 sm:grid-cols-3">
                {["Secure cloud", "Role based access", "In app support"].map((t) => (
                  <div
                    key={t}
                    className="rounded-lg border border-border bg-background/50 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:border-teal/50 hover:text-teal"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <div className="receipt-edge ledger-card relative overflow-hidden px-8 pb-14 pt-10 text-center sm:px-12 sm:pb-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px">
              <div className="animate-beam h-px w-1/3 bg-gradient-to-r from-transparent via-teal to-transparent" />
            </div>
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Aaj hi apna FBR invoicing setup shuru karein.
            </h2>
            <p className="mx-auto mt-3 max-w-[56ch] text-pretty text-muted">
              Teeno portals aap ke liye tayyar hain. Jahan se chahein shuru karein, ya seedha hum se baat karein.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {PORTALS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine rounded-md border border-border bg-background/50 px-5 py-3 font-medium transition-transform hover:-translate-y-0.5"
                >
                  {p.name}
                </a>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <CallRow />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-background/80 py-10 pb-24 sm:pb-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-8 w-8 shrink-0 text-foreground" />
              <span className="font-display text-lg font-semibold tracking-wide">PAK TAX DIGITAL INVOICE</span>
              <span className="ml-2 flex items-center gap-3 border-l border-border pl-3">
                <FbrMark className="h-8 w-auto" />
                <IrisMark className="h-5 w-auto" />
              </span>


            </div>
            <div className="flex flex-wrap gap-6 font-mono text-xs tracking-[0.15em] text-muted">
              <a href={CLIENT_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                CLIENT PORTAL
              </a>
              <a href={FBR_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                DIGITAL INVOICING
              </a>
              <a href={STOCK_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                STOCK INVOICING
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                WHATSAPP
              </a>
              <a href={`tel:${PHONE}`} className="transition-colors hover:text-brand">
                CALL
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[11px] tracking-wide text-muted/70 sm:flex-row sm:justify-between">
            <span>&copy; {new Date().getFullYear()} PAK TAX DIGITAL INVOICE. All rights reserved.</span>
            <span>Mr Jawad Haider &middot; {PHONE_PRETTY} &middot; Rawalpindi, Pakistan</span>
            <span className="flex items-center gap-2">
              Powered by{" "}
              <a
                href="https://origami99.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand transition-colors hover:text-teal"
              >
                origami99.com
              </a>
              <MailVault />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
