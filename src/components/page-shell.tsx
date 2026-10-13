import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { BrandLogo, FbrMark, ThemeToggle } from "@/components/site-kit";
import { FloatingContact, MailVault, PHONE, PHONE_PRETTY, WHATSAPP_URL } from "@/components/interactive";
import { CLIENT_PORTAL_URL } from "@/lib/site";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground antialiased">
      <div className="paper pointer-events-none fixed inset-0 opacity-70" />
      <FloatingContact />

      <nav className="glass sticky top-0 z-50 border-b-2 border-amber/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link to="/" className="group flex items-center gap-3">
            <BrandLogo className="h-9 w-9 shrink-0 text-foreground transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" />
            <span className="leading-tight">
              <span className="block font-display text-sm uppercase">PAK TAX</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">Digital Invoice</span>
            </span>
            <span className="ml-2 hidden items-center border-l border-border pl-3 sm:flex">
              <FbrMark className="h-8 w-auto" />
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-6 text-sm text-muted lg:flex">
              <Link to="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <Link to="/digital-invoicing" className="transition-colors hover:text-foreground">
                Get started
              </Link>
              <Link to="/demo" className="transition-colors hover:text-foreground">
                Watch demo
              </Link>
              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                Client Portal
              </a>
            </div>
            <ThemeToggle />
            <a
              href={`tel:${PHONE}`}
              className="rounded-md border border-border bg-background/50 px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              Call now
            </a>
          </div>
        </div>
      </nav>

      {children}

      <footer className="relative z-10 border-t-2 border-amber/40 bg-card/60 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-muted">
            Mr Jawad Haider &middot;{" "}
            <a href={`tel:${PHONE}`} className="text-foreground hover:underline">
              {PHONE_PRETTY}
            </a>{" "}
            &middot;{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
            Powered by{" "}
            <a href="https://origami99.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
              origami99.com
            </a>
            <MailVault />
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "teal" | "amber" }) {
  const color = tone === "teal" ? "text-teal" : tone === "amber" ? "text-amber" : "text-brand";
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] ${color}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
