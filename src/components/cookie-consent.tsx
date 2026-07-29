import { useEffect, useState } from "react";

export type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "nimbari.cookie-consent";
export const OPEN_PREFERENCES_EVENT = "nimbari:open-cookie-preferences";

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

/** Enables or disables non-essential scripts based on stored consent. */
function applyConsent(consent: ConsentState) {
  const w = window as unknown as Record<string, unknown>;
  w.__analyticsEnabled = consent.analytics;
  w.__marketingEnabled = consent.marketing;
  if (typeof w.gtag === "function") {
    (w.gtag as (...args: unknown[]) => void)("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
    });
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = readConsent();
    if (saved) {
      setAnalytics(saved.analytics);
      setMarketing(saved.marketing);
      applyConsent(saved);
    } else {
      setVisible(true);
    }
    const onOpen = () => {
      const current = readConsent();
      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpen);
  }, []);

  const save = (consent: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    applyConsent(consent);
    setShowPrefs(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-background/85 p-5 shadow-2xl backdrop-blur-xl sm:right-auto"
    >
      <p className="text-sm font-semibold">We value your privacy</p>
      <p className="mt-1.5 text-sm text-muted-foreground">
        We use essential cookies to run this site and optional analytics cookies to understand how
        it's used. No client project data is ever used for tracking.
      </p>

      {showPrefs && (
        <div className="mt-4 space-y-2.5 rounded-xl border border-border p-3.5">
          <Toggle label="Essential" description="Required for security and core functionality." checked disabled />
          <Toggle
            label="Analytics"
            description="Anonymous usage statistics to improve the site."
            checked={analytics}
            onChange={setAnalytics}
          />
          <Toggle
            label="Marketing"
            description="Attribution for campaigns and remarketing."
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => save({ essential: true, analytics: true, marketing: true })}
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Accept All
        </button>
        <button
          type="button"
          onClick={() => save({ essential: true, analytics: false, marketing: false })}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-accent"
        >
          Reject Non-Essential
        </button>
        {showPrefs ? (
          <button
            type="button"
            onClick={() => save({ essential: true, analytics, marketing })}
            className="ml-auto text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Save preferences
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowPrefs(true)}
            className="ml-auto text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Manage Preferences
          </button>
        )}
      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4">
      <span className="min-w-0">
        <span className="block text-sm font-medium">{label}</span>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </span>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 shrink-0 accent-[var(--indigo)]"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
    </label>
  );
}
