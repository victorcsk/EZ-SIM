import React, { useMemo, useState } from "react";

const services = [
  {
    key: "mobility",
    title: "Global Mobility Solutions",
    desc: "International mobility, cross-border operations, import programs, and executive support designed to connect people, vehicles, and opportunities across markets.",
    icon: "🌍",
  },
  {
    key: "logistics",
    title: "Smart Logistics & Fulfillment",
    desc: "Warehouse operations, fulfillment flow, inventory movement, prep, dispatch, and scalable logistics support designed for growing international operations.",
    icon: "📦",
  },
  {
    key: "finance",
    title: "Mobility Finance & Fintech",
    desc: "Financing models, fintech-backed mobility solutions, and structured payment ecosystems designed to make vehicle access and growth more achievable.",
    icon: "💳",
  },
];

const servicePages = {
  mobility: {
    eyebrow: "Global Mobility Solutions",
    title: "Cross-border mobility built on international market experience.",
    intro:
      "EZ-SIM World Wide positions mobility as more than transportation. It is a growth platform connecting Brazil, the United States, and China through international movement, vehicle programs, business support, and market access — backed by a legacy in cross-border business development.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e82138f0fcf?auto=format&fit=crop&w=1600&q=80",
    points: [
      "International mobility programs",
      "Vehicle import and expansion support",
      "Cross-border commercial structuring",
      "Operational support for drivers, partners, and fleets",
    ],
    blocks: [
      {
        title: "International positioning",
        desc: "Built to communicate a company capable of operating confidently between Brazil, the U.S., and China with premium presentation and business clarity.",
      },
      {
        title: "Mobility ecosystem",
        desc: "Creates space for import programs, mobility services, executive support, and future solutions tied to transportation, access, and scalable expansion.",
      },
      {
        title: "Built from real market access experience",
        desc: "The mobility front is strengthened by EZ-SIM’s legacy in cross-border trade, certifications, and market-entry support, especially in automotive-related opportunities.",
      },
    ],
    metrics: [
      "3-country operating vision",
      "Import-driven mobility model",
      "Built for scalable expansion",
    ],
  },
  logistics: {
    eyebrow: "Smart Logistics & Fulfillment",
    title: "Warehouse, fulfillment, and import flow with real execution.",
    intro:
      "This page highlights EZ-SIM World Wide as a practical logistics operator prepared for inbound receiving, warehousing, order flow, sorting, shipping, and scalable fulfillment activity tied to global trade and vehicle-related operations.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Inbound receiving and shelving workflows",
      "Order processing, packing, and dispatch",
      "Fulfillment support for international operations",
      "Operational visibility for growing warehouse hubs",
    ],
    blocks: [
      {
        title: "Warehouse readiness",
        desc: "Shows capability for inbound, outbound, wave handling, sorting, storage control, and day-to-day warehouse execution with a more credible operational image.",
      },
      {
        title: "Import and distribution",
        desc: "Connects EZ-SIM to real logistics opportunities involving imports, automotive movement, storage, prep, and distribution across multiple markets.",
      },
      {
        title: "Cross-border execution backbone",
        desc: "This logistics front reinforces the company’s historical role as a commercial bridge across continents, translating international trade experience into physical operations and fulfillment structure.",
      },
    ],
    metrics: [
      "Warehouse-ready identity",
      "Cross-border fulfillment focus",
      "Built for operational scale",
    ],
  },
  finance: {
    eyebrow: "Mobility Finance & Fintech",
    title: "Financing mobility through fintech-driven structure.",
    intro:
      "EZ-SIM World Wide also carries a financial vision: using fintech and structured payment models to make vehicles, mobility assets, and growth opportunities more accessible. This page reflects the future-facing side of the company tied to financing, digital payments, and mobility enablement.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
    points: [
      "Vehicle financing programs",
      "Fintech-powered payment ecosystems",
      "Mobility access through structured models",
      "Financial innovation connected to real assets",
    ],
    blocks: [
      {
        title: "Fintech foundation",
        desc: "Positions EZ-SIM as a company that can evolve beyond operations and logistics into a financial platform supporting vehicle access, mobility programs, and structured expansion.",
      },
      {
        title: "Asset-backed mobility",
        desc: "Creates room for financing models tied to imported vehicles, mobility assets, and future business arrangements where access matters as much as ownership.",
      },
      {
        title: "Built on commercial bridge logic",
        desc: "The finance layer extends EZ-SIM’s original role as a cross-border commercial bridge, now transforming trade access and vehicle opportunities into scalable fintech-enabled products.",
      },
    ],
    metrics: [
      "Fintech-enabled vision",
      "Vehicle financing strategy",
      "Built for future scale",
    ],
  },
};

const navItems = [
  { key: "home", label: "Home" },
  { key: "mobility", label: "Mobility" },
  { key: "logistics", label: "Logistics" },
  { key: "finance", label: "Finance" },
];

const pillars = [
  "Founded in 2006 with a cross-border vision",
  "Brazil, U.S., and China operational bridge",
  "Automotive, trade, and logistics experience",
  "Business mobility and financial innovation",
  "Long-term international market development",
];

const legacyTimeline = [
  {
    year: "2006",
    title: "Foundation and dual-headquarters model",
    text: "EZ-SIM was established with a dual-headquarters structure in Brazil and New York, building a bridge between Latin America, North America, and China.",
  },
  {
    year: "2008",
    title: "China partnership expansion",
    text: "The company advanced certification and market access support for Chinese motorcycle enterprises, helping structure entry into Brazil and the United States.",
  },
  {
    year: "20+ Years",
    title: "Cross-border experience",
    text: "Over nearly two decades, the business developed networks, compliance knowledge, and execution capabilities across international trade and operations.",
  },
];

const highlights = [
  {
    number: "2006",
    label: "Founded",
    text: "Established with a cross-border business model connecting Brazil and New York.",
  },
  {
    number: "20+",
    label: "Years of experience",
    text: "Nearly two decades building cross-border relationships, market access strategies, and international business execution.",
  },
  {
    number: "03",
    label: "Core markets",
    text: "Brazil, North America, and China remain the center of the EZ-SIM vision.",
  },
];

const steps = [
  {
    title: "Understand the operation",
    desc: "We analyze your mobility, logistics, and finance needs with a practical business lens.",
  },
  {
    title: "Design the workflow",
    desc: "We structure the right flow for fulfillment, communication, financing vision, and operational visibility.",
  },
  {
    title: "Execute and scale",
    desc: "We support the rollout with a focus on stability, speed, and long-term growth.",
  },
];

const visualShowcase = [
  {
    title: "Import Vehicle Network",
    subtitle: "Dongfeng import vision",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Warehouse Operations",
    subtitle: "Fulfillment and logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Global Distribution",
    subtitle: "Cross-border movement",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
];

const experienceBlocks = [
  {
    title: "Cinematic brand presence",
    desc: "Large visual sections, layered gradients, and immersive imagery to make the company feel alive and ambitious.",
  },
  {
    title: "Operational credibility",
    desc: "Warehouse, logistics, and vehicle visuals reinforce that EZ-SIM is structured for real execution.",
  },
  {
    title: "Expansion mindset",
    desc: "The site now feels more like a growing international company than a static institutional page.",
  },
];

const initialContactForm = {
  name: "",
  email: "",
  company: "",
  country: "",
  service: "Global Mobility Solutions",
  message: "",
};

function Nav({ activePage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button onClick={() => onNavigate("home")} className="text-left">
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-200">EZ-SIM WORLD WIDE</div>
        </button>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activePage === item.key
                  ? "bg-white text-slate-950"
                  : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function ContactModal({ isOpen, onClose, contactForm, onChange, contactMailto }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/50 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Talk with Us</div>
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Tell us a little about your project.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This form opens the visitor&apos;s email app with the information filled in. To receive submissions automatically in the support inbox without opening email, you can later connect this form to a backend service such as Formspree, Resend, EmailJS, or your own API.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <input
            value={contactForm.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Full name"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <input
            value={contactForm.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="Business email"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <input
            value={contactForm.company}
            onChange={(e) => onChange("company", e.target.value)}
            placeholder="Company"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <input
            value={contactForm.country}
            onChange={(e) => onChange("country", e.target.value)}
            placeholder="Country"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <select
            value={contactForm.service}
            onChange={(e) => onChange("service", e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300 sm:col-span-2"
          >
            {services.map((service) => (
              <option key={service.key} value={service.title} className="bg-slate-900 text-white">
                {service.title}
              </option>
            ))}
          </select>
          <textarea
            value={contactForm.message}
            onChange={(e) => onChange("message", e.target.value)}
            placeholder="Tell us what you are looking for..."
            rows={6}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300 sm:col-span-2"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={contactMailto}
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.01]"
          >
            Submit by Email
          </a>
          <button
            onClick={onClose}
            className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function ServicePage({ page, onBackHome, onOpenContact }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <img src={page.image} alt={page.title} className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-200">{page.eyebrow}</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{page.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onBackHome}
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900"
              >
                Back to Home
              </button>
              <button
                onClick={onOpenContact}
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white"
              >
                Talk with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 xl:grid-cols-[0.8fr,1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Core Focus</div>
              <div className="mt-6 space-y-4">
                {page.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <div className="text-sm leading-7 text-slate-200">{point}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-white/5 p-8">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Key Highlights</div>
              <div className="mt-6 space-y-3">
                {page.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {page.blocks.map((block) => (
              <div key={block.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="text-xl font-semibold">{block.title}</div>
                <p className="mt-3 text-base leading-8 text-slate-300">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Service Gallery</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A premium visual narrative for this business front.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Each service page now feels more complete, strategic, and investor-ready — not just as a description, but as a real business vertical inside the EZ-SIM ecosystem.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {visualShowcase.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.subtitle}</div>
                  <div className="mt-2 text-lg font-semibold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/5 to-emerald-500/10 p-8 sm:p-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Let’s Build</div>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Bring this service to life with a real EZ-SIM operation.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This service page is ready to receive real photos, real videos, client cases, contact forms, and branded details as EZ-SIM World Wide grows.
            </p>
            <button
              onClick={onOpenContact}
              className="mt-8 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.01]"
            >
              Talk with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function EzSimWorldwideWebsite() {
  const [activePage, setActivePage] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState(initialContactForm);

  const updateContactField = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const contactMailto = useMemo(() => {
    const subject = `Talk with Us - ${contactForm.service || "EZ-SIM Inquiry"}`;
    const body = [
      "Hello EZ-SIM team,",
      "",
      "I would like to learn more about your services.",
      "",
      `Name: ${contactForm.name}`,
      `Email: ${contactForm.email}`,
      `Company: ${contactForm.company}`,
      `Country: ${contactForm.country}`,
      `Service of interest: ${contactForm.service}`,
      "",
      "Message:",
      contactForm.message,
    ].join("\n");

    return `mailto:EZ-SIMSuport@ez-simworldwide.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [contactForm]);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  const currentServicePage = activePage !== "home" ? servicePages[activePage] : null;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav activePage={activePage} onNavigate={setActivePage} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContact}
        contactForm={contactForm}
        onChange={updateContactField}
        contactMailto={contactMailto}
      />

      {currentServicePage ? (
        <ServicePage
          page={currentServicePage}
          onBackHome={() => setActivePage("home")}
          onOpenContact={openContact}
        />
      ) : (
        <>
          <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1800&q=80"
                alt="Global automotive and logistics background"
                className="h-full w-full object-cover opacity-20"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.14),transparent_30%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="mb-8 flex flex-wrap gap-3">
                {[
                  "Global Mobility",
                  "Import & Export",
                  "Warehouse Ops",
                  "Smart Logistics",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-100 backdrop-blur"
                  >
                    {badge}
                  </div>
                ))}
              </div>
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm tracking-wide text-cyan-200">
                    EZ-SIM WORLD WIDE
                  </div>
                  <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Global mobility, logistics, and fintech-backed growth under one vision.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    EZ-SIM World Wide is a modern international business platform focused on connecting operations, technology, and scalable execution across markets. We bring together mobility, logistics, fulfillment, and financing vision to help ideas scale with structure.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={openContact}
                      className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-lg transition hover:scale-[1.01]"
                    >
                      Talk with Us
                    </button>
                    <a
                      href="#services"
                      className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                    >
                      Explore Services
                    </a>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20">
                    <img src={visualShowcase[0].image} alt="Imported vehicle showcase" className="h-[260px] w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">{visualShowcase[0].subtitle}</div>
                      <div className="mt-2 text-2xl font-semibold">{visualShowcase[0].title}</div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                      <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Vision</div>
                      <div className="mt-4 text-2xl font-semibold">Move people, assets, and business forward.</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                      <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Focus</div>
                      <div className="mt-4 text-2xl font-semibold">International operations with practical execution.</div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:col-span-2">
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-300">Positioning</div>
                      <div className="mt-4 text-xl leading-8 text-slate-100">
                        A brand built to support cross-border structure between Brazil, the United States, and China — combining legacy trade experience, logistics capability, and a future-ready growth vision.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
            <div className="grid gap-6 md:grid-cols-3">
              {visualShowcase.map((item) => (
                <div key={item.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">{item.subtitle}</div>
                    <div className="mt-2 text-lg font-semibold">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury import vehicle"
                  className="h-[360px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-200">Visual Experience</div>
                  <div className="mt-3 max-w-xl text-3xl font-semibold">A more premium and living identity for the brand.</div>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">
                    This section can later receive a real promotional video, a warehouse reel, or branded footage from your own operation.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {experienceBlocks.map((block) => (
                  <div key={block.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                    <div className="text-lg font-semibold">{block.title}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{block.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
                  <div className="text-4xl font-semibold text-cyan-300">{item.number}</div>
                  <div className="mt-3 text-lg font-medium">{item.label}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="border-y border-white/10 bg-slate-900/70">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr,0.8fr] lg:px-10">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">About Us</div>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A cross-border story with roots in trade, expansion, and market access.</h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                  EZ-SIM World Wide was founded in 2006 with a dual-headquarters structure in Brazil and New York, created to support cross-border business opportunities and international trade across key markets. From the beginning, the company was designed as a bridge connecting Latin America, North America, and China.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  Over nearly two decades, EZ-SIM developed experience in trade relations, certification support, market expansion, and operational coordination. This legacy now evolves into a broader platform that brings together mobility, logistics, and fintech-backed growth under one modern international brand.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-lg font-semibold">Core Pillars</div>
                <div className="mt-5 space-y-3">
                  {pillars.map((pillar) => (
                    <div key={pillar} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <div className="text-sm leading-7 text-slate-200">{pillar}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="mb-10 max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Our History</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From commercial bridge to modern international platform.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                The EZ-SIM story began in cross-border business and trade facilitation. Today, that foundation supports a broader vision that includes vehicle import, warehouse operations, fulfillment, and fintech-driven mobility solutions.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {legacyTimeline.map((item) => (
                <div key={item.year} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                  <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">{item.year}</div>
                  <div className="mt-3 text-2xl font-semibold">{item.title}</div>
                  <p className="mt-4 text-sm leading-8 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Services</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Solutions built for movement, scale, and execution.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Our structure is designed to evolve. Today, EZ-SIM World Wide can present itself as a modern brand prepared to support mobility services, logistics workflows, warehouse and fulfillment operations, and fintech-backed models that power international execution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.desc}</p>
                  <button
                    onClick={() => setActivePage(service.key)}
                    className="mt-6 rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    View Service Page
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="border-y border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">How We Work</div>
                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Clear structure. International mindset. Practical delivery.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    We believe operations should feel clear, modern, and connected. Our workflow is centered on visibility, fast communication, and scalable design so that each new initiative can grow without losing control.
                  </p>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-6">
                      <div className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</div>
                      <div className="text-lg font-semibold">{step.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="mb-8 max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Visual Gallery</div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A site that feels active, global, and in motion.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                We added more visual rhythm to the website so it feels closer to an international operation that works with automotive import, fulfillment, and global movement.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {gallery.map((image, index) => (
                <div key={image} className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${index === 0 ? "md:col-span-2" : ""}`}>
                  <img
                    src={image}
                    alt={`EZ-SIM gallery visual ${index + 1}`}
                    className={`w-full object-cover ${index === 0 ? "h-[340px]" : "h-[250px]"}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Future Ready</div>
                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Designed to grow with new products and markets.</h2>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    EZ-SIM World Wide is more than a static business identity. It is a foundation for future expansion — including mobility platforms, financial innovation, digital ecosystems, and new cross-border opportunities that require structure from day one.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="text-sm text-slate-400">Expansion</div>
                    <div className="mt-2 text-lg font-semibold">International partnerships</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="text-sm text-slate-400">Operations</div>
                    <div className="mt-2 text-lg font-semibold">Warehouse and fulfillment readiness</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="text-sm text-slate-400">Finance</div>
                    <div className="mt-2 text-lg font-semibold">Mobility and fintech innovation</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                    <div className="text-sm text-slate-400">Vision</div>
                    <div className="mt-2 text-lg font-semibold">Cross-border long-term growth</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="border-t border-white/10 bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Contact</div>
                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Let&apos;s build something that moves.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    Whether you are exploring logistics operations, international support, mobility services, or financing opportunities, EZ-SIM World Wide is prepared to connect vision with execution.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="space-y-4 text-sm text-slate-200">
                    <div>
                      <div className="text-slate-400">Company</div>
                      <div className="mt-1 text-base font-medium">EZ-SIM World Wide</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Email</div>
                      <a
                        href="mailto:EZ-SIMSuport@ez-simworldwide.com?subject=Inquiry%20about%20EZ-SIM%20services"
                        className="mt-1 block text-base font-medium hover:underline"
                      >
                        EZ-SIMSuport@ez-simworldwide.com
                      </a>
                    </div>
                    <div>
                      <div className="text-slate-400">Scope</div>
                      <div className="mt-1 text-base font-medium">Global mobility, logistics, finance, and international operations</div>
                    </div>
                  </div>
                  <button
                    onClick={openContact}
                    className="mt-8 block w-full rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:scale-[1.01]"
                  >
                    Talk with Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
