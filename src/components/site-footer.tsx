import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function SiteFooter({ onManageCookies }: { onManageCookies?: () => void }) {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-extrabold tracking-tight">Rajath Consultancy Services</p>
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
          <p className="text-sm font-semibold">Contact</p>
          <p className="flex items-center gap-2 text-sm text-ink-foreground/65">
            <Mail className="h-4 w-4" /> support@rajathgatty.in
          </p>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 px-5 py-5 text-center text-xs text-ink-foreground/50 lg:px-8">
        © 2026. All rights reserved.
      </div>
    </footer>
  );
}
