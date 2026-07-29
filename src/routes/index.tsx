import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cloud,
  Brain,
  GitBranch,
  ShieldCheck,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimbari — Cloud & AI Consulting for Enterprise Growth" },
      {
        name: "description",
        content:
          "Nimbari architects intelligent cloud solutions: migration, LLM deployment, MLOps pipelines and cloud security for enterprise teams.",
      },
      { property: "og:title", content: "Nimbari — Cloud & AI Consulting for Enterprise Growth" },
      {
        property: "og:description",
        content:
          "Cloud optimization, AI integration and custom ML pipelines delivered by senior architects.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    body: "Infrastructure modernization, serverless architecture and multi-cloud strategy built for scale.",
    points: ["Landing zones", "Serverless refactors", "Multi-cloud strategy"],
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    body: "Enterprise LLM deployment, custom AI agents and predictive analytics wired into your systems.",
    points: ["Private LLM stacks", "Agentic workflows", "Predictive analytics"],
  },
  {
    icon: GitBranch,
    title: "DevOps & MLOps Pipeline",
    body: "CI/CD for AI models, automated scaling and full-stack infrastructure monitoring.",
    points: ["Model CI/CD", "Autoscaling", "Observability"],
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security & Compliance",
    body: "Data privacy, threat detection and automated governance across every environment.",
    points: ["Zero-trust", "Threat detection", "Policy as code"],
  },
];

const steps = [
  {
    n: "01",
    title: "Audit & Strategy",
    body: "We map your infrastructure, spend and data readiness, then agree on measurable outcomes.",
  },
  {
    n: "02",
    title: "Architecture Design",
    body: "Reference architecture, cost model and security posture designed before a line of code ships.",
  },
  {
    n: "03",
    title: "AI Implementation",
    body: "Pipelines, models and agents delivered in production increments with your engineers alongside.",
  },
  {
    n: "04",
    title: "Continuous Optimization",
    body: "Ongoing FinOps, evaluation and reliability engineering to keep gains compounding.",
  },
];

const cases = [
  {
    tag: "Financial services",
    title: "Multi-region migration for a 12M-user platform",
    body: "Replatformed a monolith onto event-driven serverless, cutting p95 latency by 61% and infra spend by 38%.",
  },
  {
    tag: "Healthcare",
    title: "Private LLM assistant on regulated data",
    body: "Deployed a retrieval assistant inside a compliant VPC, reducing clinical documentation time by 4.2 hours a week per user.",
  },
  {
    tag: "Logistics",
    title: "Forecasting pipeline with automated retraining",
    body: "Built an MLOps pipeline with drift detection that raised route forecast accuracy by 22%.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="grid-mesh absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: "var(--gradient-accent)", opacity: 0.22 }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-3.5 py-1.5 text-xs font-medium text-ink-foreground/75">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Cloud & AI consultancy
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Architecting <span className="text-gradient">intelligent cloud</span> solutions for
              enterprise growth
            </h1>
            <p className="mt-6 max-w-xl text-base text-ink-foreground/70 sm:text-lg">
              We design, migrate and operate the infrastructure behind production AI — cloud
              optimization, LLM integration and custom ML pipelines, delivered by senior architects.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink-foreground/10"
              >
                Explore Services
              </a>
            </div>
          </div>
          <NodeGraph />
        </div>

        {/* Trust bar */}
        <div className="relative border-t border-ink-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold tracking-wide text-ink-foreground/55">
              <span>AWS</span>
              <span>Google Cloud</span>
              <span>Microsoft Azure</span>
              <span>Kubernetes</span>
              <span>Snowflake</span>
              <span>Terraform</span>
            </div>
            <p className="text-sm text-ink-foreground/70">
              99.9% Uptime <span className="mx-2 text-ink-foreground/25">|</span> 40% Infrastructure
              Cost Reduction
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <SectionHead
          eyebrow="Services"
          title="Four disciplines, one delivery team"
          body="Every engagement combines architecture, applied AI and operational rigor so results survive contact with production."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="surface-card rounded-2xl p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2.5 text-sm text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="surface-card flex flex-col justify-between rounded-2xl bg-ink p-7 text-ink-foreground">
            <div>
              <h3 className="text-lg font-bold">Not sure where to start?</h3>
              <p className="mt-2.5 text-sm text-ink-foreground/70">
                A two-week infrastructure and AI-readiness audit gives you a costed roadmap.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
            >
              Request an audit <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-24 border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHead
            eyebrow="Solutions"
            title="Selected case studies"
            body="Outcomes from recent enterprise engagements across regulated and high-scale environments."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {cases.map((c) => (
              <article key={c.title} className="surface-card rounded-2xl bg-background p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {c.tag}
                </p>
                <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead
            eyebrow="About"
            title="A small team of principal architects"
            body="Nimbari was founded by cloud and machine-learning engineers who spent a decade inside platform teams at scale. We stay deliberately small, work directly with your engineers, and hand over everything we build."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Senior-only", "No layered account teams — the people who scope the work deliver it."],
              ["Vendor neutral", "We recommend the architecture that fits, not the one we resell."],
              ["Knowledge transfer", "Documentation, runbooks and pairing are part of every sprint."],
              ["Outcome contracts", "Engagements are scoped against measurable cost and latency targets."],
            ].map(([t, b]) => (
              <div key={t} className="surface-card rounded-2xl p-6">
                <h3 className="text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <SectionHead
            eyebrow="How we work"
            title="From audit to continuous optimization"
            body="A four-stage engagement model that de-risks delivery and keeps momentum after go-live."
          />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="surface-card relative rounded-2xl bg-background p-7">
                <span className="font-mono text-sm font-medium text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            ["50%+", "Faster AI deployment"],
            ["35%", "Avg. cloud spend saved"],
            ["24/7", "Managed infrastructure"],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-2xl border border-border p-8 text-center">
              <p className="text-gradient text-4xl font-extrabold sm:text-5xl">{stat}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="surface-card mt-16 grid gap-6 rounded-3xl bg-ink p-10 text-ink-foreground sm:grid-cols-[1.4fr_auto] sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to cut cloud spend and ship AI faster?
            </h2>
            <p className="mt-2 text-sm text-ink-foreground/70">
              Book a 30-minute discovery call. We respond within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Book a Discovery Call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-muted-foreground">{body}</p>
    </div>
  );
}

function NodeGraph() {
  const nodes = [
    [140, 40],
    [40, 130],
    [240, 120],
    [140, 160],
    [70, 250],
    [220, 250],
    [140, 300],
  ] as const;
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [1, 4],
    [3, 4],
    [3, 5],
    [2, 5],
    [4, 6],
    [5, 6],
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg viewBox="0 0 280 340" className="w-full" role="img" aria-label="Cloud architecture node graph">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--indigo)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="url(#edge)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.7"
            style={{ animation: `dash-flow ${6 + (i % 4)}s linear infinite` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="5"
            fill={i % 2 ? "var(--cyan)" : "var(--indigo)"}
            style={{ animation: `pulse-node ${3 + (i % 3)}s ease-in-out ${i * 0.25}s infinite` }}
          />
        ))}
      </svg>
    </div>
  );
}
