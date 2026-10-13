import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell, Eyebrow } from "@/components/page-shell";
import { UncleTax } from "@/components/uncle-tax";
import { Reveal, DigitalInvoicingMark, FbrMark } from "@/components/site-kit";
import { PHONE, PHONE_PRETTY } from "@/components/interactive";
import { FBR_PORTAL_URL, buildSignupMessage, waLink, type SignupForm } from "@/lib/site";

const CATEGORIES = [
  "Retail shop",
  "Wholesale / distribution",
  "Restaurant / cafe",
  "Manufacturer",
  "Services",
  "Importer / exporter",
  "Other",
];

const EMPTY: SignupForm = {
  business: "",
  person: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  category: CATEGORIES[0]!,
  sells: "",
  ntn: "",
  volume: "",
  notes: "",
};

const STEPS = [
  "Aap yeh form bharte hain aur WhatsApp par bhej dete hain.",
  "Uncle Tax team aap ka seller profile aur FBR integration check karti hai.",
  "Demo account ya live account set ho jata hai aur training di jati hai.",
];

export const Route = createFileRoute("/digital-invoicing")({
  head: () => ({
    meta: [
      { title: "Digital Invoicing Portal Signup | PAK TAX Digital Invoice" },
      {
        name: "description",
        content:
          "Uncle Tax digital invoicing ke liye apni business details bhejein. Form bharein aur seedha WhatsApp par Mr Jawad Haider ko pre filled request bhej dein.",
      },
      { property: "og:title", content: "Digital Invoicing Portal Signup" },
      {
        property: "og:description",
        content: "Business details bharein aur FBR connected digital invoicing shuru karein.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{label}</span>
      <span className="mt-1.5 block">{children}</span>
      {hint ? <span className="mt-1 block text-xs text-muted">{hint}</span> : null}
    </label>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background/70 px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand";

function SignupPage() {
  const [form, setForm] = useState<SignupForm>(EMPTY);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof SignupForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.business.trim() || !form.person.trim() || !form.phone.trim() || !form.city.trim() || !form.sells.trim()) {
      setError("Business name, aap ka naam, phone, city aur kya bechte hain, yeh zaroori hain.");
      return;
    }
    setError(null);
    window.open(waLink(buildSignupMessage(form)), "_blank", "noopener,noreferrer");
  }

  return (
    <PageShell>
      <header className="relative z-10 border-b border-border px-5 pb-10 pt-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_270px] lg:items-end">
          <div>
            <Eyebrow tone="teal">Digital Invoicing Portal</Eyebrow>
            <h1 className="mt-3 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl">
              Apna FBR digital invoicing setup shuru karein.
            </h1>
            <p className="mt-4 max-w-[58ch] text-pretty text-lg text-muted">
              Neeche apni business details bharein. Submit karte hi sab kuch pre filled WhatsApp message mein Mr Jawad
              Haider ko chala jayega. Koi data yahan store nahi hota.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="glass flex items-center gap-3 rounded-lg px-3 py-2">
                <FbrMark className="h-8 w-auto" />
                <span className="h-7 w-px bg-border" />
                <DigitalInvoicingMark className="h-6 w-auto text-foreground" />
              </span>
              <Link to="/demo" className="glass rounded-md px-4 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5">
                Pehle demo video dekhein
              </Link>
            </div>
          </div>
          <UncleTax note="Sahi details do, baqi ka jhanjhat mera. Phone number wohi likhein jo WhatsApp par chalta hai." />
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <form onSubmit={onSubmit} className="ledger-card grid gap-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business ka naam *">
                  <input className={inputCls} value={form.business} onChange={set("business")} placeholder="Al Madina Traders" />
                </Field>
                <Field label="Aap ka naam *">
                  <input className={inputCls} value={form.person} onChange={set("person")} placeholder="Ahmed Raza" />
                </Field>
                <Field label="Phone / WhatsApp *">
                  <input className={inputCls} value={form.phone} onChange={set("phone")} placeholder="03xx xxxxxxx" inputMode="tel" />
                </Field>
                <Field label="Email">
                  <input className={inputCls} value={form.email} onChange={set("email")} placeholder="aap@example.com" type="email" />
                </Field>
                <Field label="City *">
                  <input className={inputCls} value={form.city} onChange={set("city")} placeholder="Rawalpindi" />
                </Field>
                <Field label="NTN / STRN">
                  <input className={inputCls} value={form.ntn} onChange={set("ntn")} placeholder="Agar registered hain" />
                </Field>
              </div>

              <Field label="Business address">
                <input className={inputCls} value={form.address} onChange={set("address")} placeholder="Shop, gali, area" />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Business type">
                  <select className={inputCls} value={form.category} onChange={set("category")}>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Monthly invoices">
                  <select className={inputCls} value={form.volume} onChange={set("volume")}>
                    <option value="">Select karein</option>
                    <option value="Under 100">Under 100</option>
                    <option value="100 to 500">100 to 500</option>
                    <option value="500 to 2000">500 to 2000</option>
                    <option value="2000 plus">2000 plus</option>
                  </select>
                </Field>
              </div>

              <Field label="Aap kya bechte hain? *" hint="Jaise electronics, kirana, garments, auto parts, food.">
                <input className={inputCls} value={form.sells} onChange={set("sells")} placeholder="Mobile accessories aur electronics" />
              </Field>

              <Field label="Notes">
                <textarea className={`${inputCls} min-h-24`} value={form.notes} onChange={set("notes")} placeholder="Koi khaas requirement" />
              </Field>

              {error ? (
                <p className="rounded-md border border-amber/60 bg-amber/10 px-3 py-2 text-sm text-foreground">{error}</p>
              ) : null}

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="shine rounded-md bg-[var(--signal)] px-5 py-3 font-medium text-[var(--onbrand)] shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Send on WhatsApp
                </button>
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-md border border-border px-5 py-3 font-medium transition-transform hover:-translate-y-0.5"
                >
                  Call instead {PHONE_PRETTY}
                </a>
              </div>
            </form>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-4">
            <div className="ledger-card p-6">
              <Eyebrow tone="amber">Aage kya hota hai</Eyebrow>
              <ol className="mt-4 space-y-4">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-muted">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 font-mono text-[10px] text-brand">
                      {i + 1}
                    </span>
                    <span className="text-pretty">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="ledger-card mt-5 p-6">
              <h2 className="font-display text-lg uppercase">Khud try karna hai?</h2>
              <p className="mt-2 text-pretty text-sm text-muted">
                Software page par "demo account" ki option maujood hai. Wahan apply karein aur test invoices bana kar dekhein.
              </p>
              <a
                href={FBR_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-brand px-4 py-2.5 text-sm font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5"
              >
                Create your demo account
              </a>
              <Link to="/demo" className="mt-3 block text-sm text-teal underline-offset-4 hover:underline">
                Demo video dekhein
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
