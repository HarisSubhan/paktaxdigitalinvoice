import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell, Eyebrow } from "@/components/page-shell";
import { UncleTax } from "@/components/uncle-tax";
import { Reveal, DigitalInvoicingMark, IrisMark } from "@/components/site-kit";
import { WHATSAPP_URL, PHONE, PHONE_PRETTY } from "@/components/interactive";
import { FBR_PORTAL_URL } from "@/lib/site";
import guideVideo from "@/assets/uncle-tax-guide.mp4";
import poster from "@/assets/demo-poster.jpg";

const CHAPTERS = [
  {
    n: "01",
    title: "Login aur registration",
    body: "Uncle Tax software mein apna business register karein, seller profile aur sales tax details ek dafa set karein.",
  },
  {
    n: "02",
    title: "Products aur stock setup",
    body: "Apni item list, rate, unit aur tax rate daalein. Aik dafa ka kaam, phir har invoice seconds mein banti hai.",
  },
  {
    n: "03",
    title: "Invoice banana",
    body: "Buyer chunein, item add karein, discount aur tax khud calculate hota hai, invoice print ya share ho jati hai.",
  },
  {
    n: "04",
    title: "FBR par posting",
    body: "Invoice seedhi FBR digital invoicing system par jati hai, IRN aur QR wapas invoice par lag jata hai.",
  },
  {
    n: "05",
    title: "Reports aur IRIS filing",
    body: "Sales register aur summary reports nikalein, phir IRIS return filing ke liye ready data hasil karein.",
  },
];

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Uncle Tax Software Demo Video | PAK TAX Digital Invoice" },
      {
        name: "description",
        content:
          "Urdu video guide: Uncle Tax digital invoicing software mein registration, product setup, invoice banana, FBR posting aur IRIS filing step by step dekhein.",
      },
      { property: "og:title", content: "Uncle Tax Software Demo Video" },
      {
        property: "og:description",
        content: "Poori Urdu guide: invoice banane se le kar FBR posting aur IRIS filing tak.",
      },
      { property: "og:type", content: "video.other" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  return (
    <PageShell>
      <header className="relative z-10 border-b border-border px-5 pb-10 pt-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_260px] lg:items-end">
          <div>
            <Eyebrow tone="amber">Video guide</Eyebrow>
            <h1 className="mt-3 text-balance font-display text-4xl uppercase leading-[1.08] sm:text-5xl">
              Uncle Tax software, shuru se aakhir tak.
            </h1>
            <p className="mt-4 max-w-[58ch] text-pretty text-lg text-muted">
              Poori guide Urdu mein. Dekhein ke registration, product setup, invoice banana, FBR posting aur IRIS filing
              asal mein kaise hoti hai.
            </p>
          </div>
          <UncleTax note="Video chalayein aur saath saath apne screen par wohi steps karein. Kahin atkein to seedha call ya WhatsApp." />
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="depth overflow-hidden rounded-xl border-4 border-card outline outline-1 outline-border">
              <video
                controls
                controlsList="nodownload noremoteplayback"
                playsInline
                poster={poster}
                src={guideVideo}
                className="aspect-video w-full bg-black"
              >
                Aap ka browser video support nahi karta.
              </video>
            </div>
            <div className="ledger-card mt-4 flex flex-wrap items-center gap-3 px-4 py-3">
              <DigitalInvoicingMark className="h-6 w-auto text-foreground" />
              <span className="h-6 w-px bg-border" />
              <IrisMark className="h-6 w-auto" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
                Integrated digital invoicing aur return filing workflow
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <Eyebrow tone="teal">Video mein kya kya hai</Eyebrow>
            <ol className="mt-4 space-y-3">
              {CHAPTERS.map((c) => (
                <li key={c.n} className="ledger-card flex gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="font-mono text-xs font-bold text-amber">{c.n}</span>
                  <span>
                    <span className="block font-display text-base font-semibold">{c.title}</span>
                    <span className="mt-1 block text-pretty text-sm text-muted">{c.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 border-t border-border bg-card/45 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Agla step</Eyebrow>
          <h2 className="mt-3 font-display text-3xl uppercase sm:text-4xl">Apna demo account banayein.</h2>
          <p className="mt-3 max-w-[60ch] text-pretty text-muted">
            Software page par demo account ki option maujood hai. Wahan apni details de kar demo apply karein, ya apni
            details hamein bhejein aur hum setup kar dete hain.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={FBR_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shine rounded-md bg-brand px-5 py-3 font-medium text-[var(--onbrand)] shadow-lg shadow-brand/30 transition-transform hover:-translate-y-0.5"
            >
              Create your demo account
            </a>
            <Link
              to="/digital-invoicing"
              className="glass rounded-md px-5 py-3 font-medium transition-transform hover:-translate-y-0.5"
            >
              Details bhejein
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[var(--signal)] px-5 py-3 font-medium text-[var(--onbrand)] transition-transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="rounded-md border border-border px-5 py-3 font-medium transition-transform hover:-translate-y-0.5">
              {PHONE_PRETTY}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
