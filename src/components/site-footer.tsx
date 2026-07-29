import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

export function SiteFooter({ onManageCookies }: { onManageCookies?: () => void }) {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-extrabold tracking-tight">Cloud & AI Consulting</p>
          <p className="max-w-xs text-sm text-ink-foreground/65">
            Cloud architecture and applied AI consultancy for enterprise teams shipping production
            intelligence.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Quick Links</p>
          <ul className="space-y-2 text-sm text-ink-foreground/65">
            <li>
              <a className="hover:text-ink-foreground" href="/#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-ink-foreground" href="/#solutions">
                Solutions
              </a>
            </li>
            <li>
              <a className="hover:text-ink-foreground" href="/#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-ink-foreground" href="/#process">
                How We Work
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Legal</p>
          <ul className="space-y-2 text-sm text-ink-foreground/65">
            <li>
              <Link className="hover:text-ink-foreground" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={onManageCookies}
                className="hover:text-ink-foreground"
              >
                Cookies Settings
              </button>
            </li>
            <li>
              <Link className="hover:text-ink-foreground" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Social</p>
          <div className="flex gap-3">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink-foreground/15 hover:border-ink-foreground/40"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink-foreground/15 hover:border-ink-foreground/40"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              aria-label="X"
              className="grid h-10 w-10 place-items-center rounded-xl border border-ink-foreground/15 text-sm font-bold hover:border-ink-foreground/40"
            >
              X
            </a>
          </div>
          <p className="text-sm text-ink-foreground/65">hello@example.com</p>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-5 py-5 text-center text-xs text-ink-foreground/50 lg:px-8">
        © 2026. All rights reserved.
      </div>
    </footer>
  );
}
