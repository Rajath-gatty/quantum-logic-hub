import { createFileRoute } from "@tanstack/react-router";
import { openCookiePreferences } from "@/components/cookie-consent";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Rajath Consultancy Services" },
      {
        name: "description",
        content:
          "How Rajath Consultancy Services collects, stores and protects data, including our guarantee that client data is never used to train public AI models.",
      },
      { property: "og:title", content: "Privacy Policy — Rajath Consultancy Services" },
      {
        property: "og:description",
        content: "Data collection, AI data handling, retention, security and GDPR/CCPA rights.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const sections = [
  { id: "collection", title: "Data collection" },
  { id: "ai-handling", title: "AI data handling guarantee" },
  { id: "third-parties", title: "Third-party services" },
  { id: "retention", title: "Data retention & security" },
  { id: "rights", title: "Your rights (GDPR / CCPA)" },
  { id: "cookies", title: "Cookies" },
  { id: "requests", title: "Privacy requests" },
];

function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: 1 January 2026</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
        <nav aria-label="Policy sections" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            On this page
          </p>
          <ul className="mt-4 space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-3xl space-y-12 text-sm leading-relaxed text-muted-foreground">
          <Block id="collection" title="Data collection">
            <p>
              We collect only what we need to respond to you and operate this site. Through the
              contact form that means your name, business email, company, role, stated service
              interest, budget range and the project details you write. Through privacy-respecting
              analytics we collect aggregated page views, referrers and coarse device information.
            </p>
            <p>
              We do not buy contact lists, and we do not use automated decision-making or profiling
              on visitors.
            </p>
          </Block>

          <Block id="ai-handling" title="AI data handling guarantee">
            <p>
              Client data handled during AI and cloud consulting engagements is{" "}
              <strong className="text-foreground">never used to train public models</strong>. Any
              model training, fine-tuning or evaluation happens inside infrastructure you control or
              inside a dedicated, isolated environment agreed in your contract.
            </p>
            <p>
              Where a third-party model provider is used, we configure zero-retention or
              enterprise-grade no-training endpoints and document the configuration for your
              records.
            </p>
          </Block>

          <Block id="third-parties" title="Third-party services">
            <p>
              This site is served through a managed hosting provider. Depending on your engagement,
              we may work with cloud providers (AWS, Google Cloud, Microsoft Azure) strictly as
              processors under your instructions. Analytics is limited to an aggregate measurement
              tool that runs only after you consent.
            </p>
            <p>A current subprocessor list is available on request.</p>
          </Block>

          <Block id="retention" title="Data retention & security">
            <p>
              Contact enquiries are retained for up to 24 months, after which they are deleted.
              Engagement data is retained per the terms of the relevant contract or Data Processing
              Agreement.
            </p>
            <p>
              Data is encrypted in transit with TLS 1.2+ and at rest with AES-256. Access is
              role-based, least-privilege and audited, with multi-factor authentication required for
              all staff.
            </p>
          </Block>

          <Block id="rights" title="Your rights (GDPR / CCPA)">
            <p>
              If you are in the EEA or UK you have the right to access, rectify, erase, restrict,
              port and object to processing of your personal data. If you are a California resident
              you have the right to know, delete, correct and opt out of the sale or sharing of your
              personal information — we do not sell or share personal information.
            </p>
            <p>We respond to verified requests within 30 days.</p>
          </Block>

          <Block id="cookies" title="Cookies">
            <p>
              We use essential cookies for security and core functionality, and optional analytics
              and marketing cookies that load only with your consent. You can change your choice at
              any time.
            </p>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
            >
              Manage cookie preferences
            </button>
          </Block>

          <Block id="requests" title="Privacy requests">
            <p>
              For deletion, access or any compliance enquiry, email{" "}
              <a href="mailto:support@rajathgatty.in" className="font-medium text-primary hover:underline">
                support@rajathgatty.in
              </a>
              . Please include enough detail for us to verify your identity and locate your data.
            </p>
          </Block>
        </article>
      </div>
    </div>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
