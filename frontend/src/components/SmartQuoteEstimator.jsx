import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

import ScrollReveal from "./ScrollReveal.jsx";

const WHATSAPP_NUMBER = "919825046557";

const projectTypes = [
  {
    value: "highway",
    title: "Highway & Expressways",
    description: "Road corridors, expressways, and pavement networks",
    icon: "01",
  },
  {
    value: "pipeline",
    title: "Pipeline Corridors",
    description: "Linear route surveys and right-of-way mapping",
    icon: "02",
  },
  {
    value: "canal",
    title: "Water Canals",
    description: "Canal alignments and water infrastructure",
    icon: "03",
  },
  {
    value: "urban_road",
    title: "Urban Planning",
    description: "Urban roads, sites, and development areas",
    icon: "04",
  },
];

const technologyOptions = [
  "Drone LiDAR",
  "DGPS Topography",
  "Pavement Axle Analysis",
];

const initialForm = {
  project_type: "",
  scale_value: "",
  scale_unit: "km",
  services: [],
  company: "",
  contact_name: "",
  email: "",
  phone: "",
  location: "",
};

const stepTitles = [
  "Infrastructure scope",
  "Project scale & technology",
  "Client coordinates",
];

function ProgressSteps({ step }) {
  return (
    <ol
      aria-label="Quote request steps"
      className="mb-10 grid grid-cols-3 gap-3"
    >
      {stepTitles.map((title, index) => {
        const stepNumber = index + 1;
        const isComplete = stepNumber < step;
        const isCurrent = stepNumber === step;

        return (
          <li aria-current={isCurrent ? "step" : undefined} key={title}>
            <div
              className={`mb-3 h-1 rounded-full ${
                stepNumber <= step ? "bg-brand-gold" : "bg-text-dark/10"
              }`}
            />
            <span
              className={`font-sans text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-xs ${
                isCurrent || isComplete
                  ? "text-text-dark"
                  : "text-text-dark/40"
              }`}
            >
              <span className="mr-1.5 text-brand-gold">
                {String(stepNumber).padStart(2, "0")}
              </span>
              <span className="hidden sm:inline">{title}</span>
              <span className="sm:hidden">Step {stepNumber}</span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function Field({ label, name, ...inputProps }) {
  return (
    <div>
      <label
        className="mb-2 block font-sans text-sm font-semibold text-text-dark"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="min-h-12 w-full rounded-xl border border-text-dark/15 bg-bg-light px-4 font-sans text-sm text-text-dark placeholder:text-text-dark/40 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/25"
        id={name}
        name={name}
        {...inputProps}
      />
    </div>
  );
}

function SuccessCard({ prefersReducedMotion, whatsAppUrl }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-xl rounded-3xl border border-brand-gold/50 bg-bg-light p-8 text-center shadow-card sm:p-12"
      initial={{ opacity: 0, y: 14 }}
      role="status"
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-primary text-2xl text-brand-gold">
        &#10003;
      </span>
      <p className="eyebrow mt-6">WhatsApp message prepared</p>
      <h3 className="mt-3 font-heading text-2xl font-bold text-text-dark sm:text-3xl">
        Your estimate request is ready.
      </h3>
      <p className="mt-4 font-sans leading-7 text-text-dark/70">
        WhatsApp should open with your project details addressed to Terraline.
        Review the message and tap Send to deliver it. If it didn&apos;t open,
        use the button below.
      </p>
      <a
        className="button-primary mt-7"
        href={whatsAppUrl}
        rel="noreferrer"
        target="_blank"
      >
        Open WhatsApp <span aria-hidden="true">&rarr;</span>
      </a>
    </motion.div>
  );
}

export default function SmartQuoteEstimator() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const formRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  };

  const selectProjectType = (value) => {
    setForm((current) => ({ ...current, project_type: value }));
    setError("");
  };

  const toggleService = (service) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
    setError("");
  };

  const validateCurrentStep = () => {
    if (!formRef.current?.reportValidity()) return false;

    if (step === 1 && !form.project_type) {
      setError("Select the infrastructure scope to continue.");
      return false;
    }

    if (step === 2 && form.services.length === 0) {
      setError("Select at least one technology to continue.");
      return false;
    }

    setError("");
    return true;
  };

  const goForward = (event) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;
    setStep((current) => Math.min(current + 1, 3));
  };

  const goBack = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step !== 3 || !validateCurrentStep()) return;

    const projectTitle =
      projectTypes.find((project) => project.value === form.project_type)
        ?.title || form.project_type;
    const scale = `${Number(form.scale_value).toString()} ${form.scale_unit}`;
    const message = [
      "*NEW TERRALINE INFRA ESTIMATE REQUEST*",
      "",
      "*CLIENT DETAILS*",
      `Company: ${form.company.trim()}`,
      `Representative: ${form.contact_name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      "",
      "*PROJECT DETAILS*",
      `Project type: ${projectTitle}`,
      `Project location: ${form.location.trim()}`,
      `Project scale: ${scale}`,
      "",
      "*REQUIRED TECHNOLOGY*",
      ...form.services.map((service) => `- ${service}`),
    ].join("\n");
    const destination = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setWhatsAppUrl(destination);
    setIsSubmitted(true);
    window.open(destination, "_blank", "noopener,noreferrer");
  };

  const stepContent = {
    1: (
      <div>
        <div className="mb-6">
          <p className="eyebrow">Step 01 / Define the scope</p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-text-dark sm:text-3xl">
            What are we surveying?
          </h3>
          <p className="mt-2 font-sans text-sm leading-6 text-text-dark/65">
            Choose the infrastructure scope that best fits your project.
          </p>
        </div>
        <div
          aria-label="Infrastructure scope"
          className="grid gap-3 sm:grid-cols-2"
          role="group"
        >
          {projectTypes.map((project) => {
            const isSelected = form.project_type === project.value;
            return (
              <button
                aria-pressed={isSelected}
                className={`group min-h-36 rounded-2xl border p-5 text-left transition-colors focus-visible:outline-brand-gold ${
                  isSelected
                    ? "border-brand-gold bg-brand-gold/10 shadow-[inset_0_0_0_1px_var(--color-brand-gold)]"
                    : "border-text-dark/12 bg-bg-light/70 hover:border-brand-gold/70 hover:bg-bg-light"
                }`}
                key={project.value}
                onClick={() => selectProjectType(project.value)}
                type="button"
              >
                <span className="flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold tracking-[0.16em] text-brand-primary">
                    {project.icon}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`grid h-5 w-5 place-items-center rounded-full border text-[10px] ${
                      isSelected
                        ? "border-brand-gold bg-brand-gold text-bg-dark"
                        : "border-text-dark/20"
                    }`}
                  >
                    {isSelected ? "✓" : ""}
                  </span>
                </span>
                <span className="mt-4 block font-heading text-base font-bold text-text-dark">
                  {project.title}
                </span>
                <span className="mt-1 block font-sans text-xs leading-5 text-text-dark/60">
                  {project.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    ),
    2: (
      <div>
        <div className="mb-6">
          <p className="eyebrow">Step 02 / Set the parameters</p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-text-dark sm:text-3xl">
            Set your project scale.
          </h3>
          <p className="mt-2 font-sans text-sm leading-6 text-text-dark/65">
            Add an estimated length or area and select the survey technologies
            you need.
          </p>
        </div>
        <div className="max-w-sm">
          <label
            className="mb-2 block font-sans text-sm font-semibold text-text-dark"
            htmlFor="scale_value"
          >
            Survey length or area
          </label>
          <div className="flex">
            <input
              className="min-h-12 min-w-0 flex-1 rounded-l-xl border border-r-0 border-text-dark/15 bg-bg-light px-4 font-sans text-sm text-text-dark focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/25"
              id="scale_value"
              max="1000000"
              min="0.01"
              name="scale_value"
              onChange={updateField}
              placeholder="e.g. 12"
              required
              step="any"
              type="number"
              value={form.scale_value}
            />
            <select
              aria-label="Scale unit"
              className="min-h-12 rounded-r-xl border border-text-dark/15 bg-bg-light px-4 font-sans text-sm font-semibold text-text-dark focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/25"
              name="scale_unit"
              onChange={updateField}
              value={form.scale_unit}
            >
              <option value="km">km</option>
              <option value="acres">acres</option>
            </select>
          </div>
        </div>

        <fieldset className="mt-8">
          <legend className="font-sans text-sm font-semibold text-text-dark">
            Required technologies
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {technologyOptions.map((technology) => {
              const isSelected = form.services.includes(technology);
              return (
                <button
                  aria-pressed={isSelected}
                  className={`min-h-11 rounded-full border px-4 font-sans text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-gold bg-brand-gold/15 text-text-dark"
                      : "border-text-dark/15 bg-bg-light/70 text-text-dark/70 hover:border-brand-gold/70"
                  }`}
                  key={technology}
                  onClick={() => toggleService(technology)}
                  type="button"
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 text-brand-primary"
                  >
                    {isSelected ? "✓" : "+"}
                  </span>
                  {technology}
                </button>
              );
            })}
          </div>
        </fieldset>
      </div>
    ),
    3: (
      <div>
        <div className="mb-6">
          <p className="eyebrow">Step 03 / Your coordinates</p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-text-dark sm:text-3xl">
            Where can we reach you?
          </h3>
          <p className="mt-2 font-sans text-sm leading-6 text-text-dark/65">
            Share your details and our survey team will follow up about your
            project.
          </p>
        </div>
        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
          <Field
            autoComplete="organization"
            label="Company name"
            maxLength={200}
            name="company"
            onChange={updateField}
            placeholder="Your company"
            required
            value={form.company}
          />
          <Field
            autoComplete="name"
            label="Representative name"
            maxLength={150}
            name="contact_name"
            onChange={updateField}
            placeholder="Your name"
            required
            value={form.contact_name}
          />
          <Field
            autoComplete="email"
            label="Work email"
            maxLength={254}
            name="email"
            onChange={updateField}
            placeholder="you@company.com"
            required
            type="email"
            value={form.email}
          />
          <Field
            autoComplete="tel"
            label="Phone"
            maxLength={30}
            name="phone"
            onChange={updateField}
            placeholder="+91 00000 00000"
            required
            type="tel"
            value={form.phone}
          />
          <div className="sm:col-span-2">
            <Field
              autoComplete="address-level2"
              label="Project location"
              maxLength={200}
              name="location"
              onChange={updateField}
              placeholder="City, district, or corridor"
              required
              value={form.location}
            />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <section
      aria-labelledby="quote-heading"
      className="editorial-section scroll-mt-20 bg-bg-light py-20 sm:py-28"
      id="quote"
    >
      <ScrollReveal className="section-shell">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">A clear starting point</p>
          <h2
            className="mt-3 font-heading text-3xl font-bold leading-tight text-text-dark sm:text-5xl"
            id="quote-heading"
          >
            Let&apos;s scope your next project.
          </h2>
          <p className="mt-4 font-sans leading-7 text-text-dark/65">
            Tell us what you&apos;re building. We&apos;ll bring the right survey
            expertise to the ground.
          </p>
        </div>

        {isSubmitted ? (
          <SuccessCard
            prefersReducedMotion={prefersReducedMotion}
            whatsAppUrl={whatsAppUrl}
          />
        ) : (
          <div className="section-panel mx-auto max-w-3xl border-brand-gold/20 bg-bg-light p-5 shadow-[0_24px_80px_rgb(20_47_30_/_0.12)] sm:p-9 md:p-11">
            <ProgressSteps step={step} />
            <form
              noValidate
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : -12,
                  }}
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : 12,
                  }}
                  key={step}
                  transition={transition}
                >
                  {stepContent[step]}
                </motion.div>
              </AnimatePresence>

              {error && (
                <p
                  className="mt-5 rounded-xl border border-brand-primary/25 bg-brand-gold/10 px-4 py-3 font-sans text-sm leading-6 text-text-dark"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <div className="mt-9 flex items-center justify-between gap-4 border-t border-text-dark/10 pt-6">
                {step > 1 ? (
                  <button
                    className="min-h-12 rounded-full border border-text-dark/20 px-5 font-sans text-sm font-semibold text-text-dark transition-colors hover:border-brand-gold hover:text-brand-primary"
                    onClick={goBack}
                    type="button"
                  >
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 3 ? (
                  <button
                    className="button-primary min-h-12 min-w-36"
                    onClick={goForward}
                    type="button"
                  >
                    Continue <span aria-hidden="true">&rarr;</span>
                  </button>
                ) : (
                  <button
                    className="button-primary min-h-12 min-w-44"
                    type="submit"
                  >
                    Request estimate <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
