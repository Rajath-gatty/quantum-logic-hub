import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Clock, Loader2, CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rajath Consultancy Services" },
      {
        name: "description",
        content:
          "Tell Rajath Consultancy Services about your cloud migration, LLM or MLOps project. We reply to every enquiry within 24 hours.",
      },
      { property: "og:title", content: "Contact — Rajath Consultancy Services" },
      {
        property: "og:description",
        content: "Share your project details or book time directly with a principal architect.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const FREE_EMAIL = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(255)
    .refine((v) => !FREE_EMAIL.includes(v.split("@")[1]?.toLowerCase() ?? ""), {
      message: "Please use your work email address",
    }),
  company: z.string().trim().max(120).optional(),
  role: z.string().trim().max(120).optional(),
  interest: z.string().min(1, "Select a service interest"),
  details: z.string().trim().min(20, "Tell us a little more (20+ characters)").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof Errors;
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    form.reset();
    toast.success("Thanks — we'll reply within 24 hours.");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Let's scope your project</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Share a few details and a principal architect will get back to you — or book a slot
          directly in the calendar below.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" error={errors.name} required />
            <Field
              label="Business email"
              name="email"
              type="email"
              error={errors.email}
              required
            />
            <Field label="Company name" name="company" error={errors.company} />
            <Field label="Your role" name="role" error={errors.role} />
            <SelectField
              label="Service interest"
              name="interest"
              error={errors.interest}
              options={[
                "Cloud Migration",
                "Custom AI / LLM",
                "Infrastructure Audit",
                "Full Consultancy",
              ]}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="details" className="text-sm font-medium">
              Project details <span className="text-primary">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              rows={5}
              maxLength={2000}
              className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
              placeholder="Current stack, goals, timelines…"
            />
            {errors.details && <p className="mt-1.5 text-xs text-destructive">{errors.details}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Sending…" : "Send enquiry"}
          </button>
        </form>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-border p-6">
            <h2 className="text-base font-bold">Direct contact</h2>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:support@rajathgatty.in" className="hover:text-foreground">
                  support@rajathgatty.in
                </a>
              </li>
              {/* <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Remote-first · Amsterdam & Austin
              </li> */}
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                We respond within 24 hours
              </li>
            </ul>
          </div>

          {/* <div className="rounded-3xl border border-border p-6">
            <h2 className="text-base font-bold">Book instantly</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer a live conversation? Grab a 30-minute discovery slot.
            </p>
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-secondary/50 p-6 text-center">
              <CalendarDays className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-3 text-sm text-muted-foreground">
                Calendar booking widget — connect your Cal.com or Calendly link to embed live
                availability here.
              </p>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-accent"
              >
                Open scheduler
              </a>
            </div>

          </div>  */}
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label} <span className="text-primary">*</span>
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/25"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
