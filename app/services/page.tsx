import Link from "next/link";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Business Development",
    description:
      "Helping organisations identify opportunities, strengthen market position and develop practical strategies for sustainable commercial growth.",
    capabilities: [
      "Business growth strategy",
      "Market development",
      "Opportunity identification",
      "Strategic partnerships",
      "Commercial strategy",
      "Market research",
    ],
  },
  {
    number: "02",
    title: "Tender Advisory",
    description:
      "Providing structured advisory support to businesses pursuing tenders, procurement opportunities and competitive bids.",
    capabilities: [
      "Tender opportunity identification",
      "Bid strategy",
      "Tender assessment",
      "Documentation support",
      "Compliance review",
      "Submission preparation",
    ],
  },
  {
    number: "03",
    title: "International Trade",
    description:
      "Supporting organisations exploring new markets, cross-border opportunities, international partnerships and commercial expansion.",
    capabilities: [
      "Market entry strategy",
      "International opportunity assessment",
      "Trade research",
      "Commercial partnerships",
      "Sourcing opportunities",
      "Market intelligence",
    ],
  },
  {
    number: "04",
    title: "Financial Consulting",
    description:
      "Providing financial and commercial insight to support planning, evaluation and informed business decision-making.",
    capabilities: [
      "Financial analysis",
      "Business planning",
      "Financial modelling",
      "Investment analysis",
      "Commercial evaluation",
      "Decision support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Expertise for"
        highlight="ambitious organisations."
        description="From business growth and tender opportunities to international markets and financial decisions, Brianno & Family provides focused advisory support built around your commercial objectives."
      />

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                What We Do
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Turning commercial questions into clearer strategic decisions.
              </h2>
            </div>
          </div>

          <p className="body-large" style={{ maxWidth: "780px" }}>
            Every business opportunity comes with questions. Our role is to
            help clients examine those questions systematically and develop
            practical approaches for moving forward.
          </p>
        </div>
      </section>

      <section className="bf-section bg-[#f1efeb]">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                Core Capabilities
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Four areas of focused expertise.
              </h2>
            </div>
          </div>

          <div className="space-y-5">
            {services.map((service) => (
              <article
                key={service.number}
                className="overflow-hidden border border-black/10 bg-white"
              >
                <div className="grid lg:grid-cols-[220px_1fr]">
                  <div className="relative bg-[#111111] p-8 text-white lg:p-10">
                    <span className="text-5xl font-bold tracking-[-.05em] text-[#d71920]">
                      {service.number}
                    </span>

                    <p className="absolute bottom-8 left-8 text-[9px] font-bold uppercase tracking-[.2em] text-white/40 lg:left-10">
                      Brianno & Family
                    </p>
                  </div>

                  <div className="p-8 lg:p-10">
                    <h3 className="text-3xl font-bold tracking-[-.04em]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#6b6b6b]">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {service.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="border-t border-black/10 pt-3 text-xs font-semibold"
                        >
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bf-section bf-contact">
        <div className="bf-container">
          <div className="bf-contact-grid">
            <div>
              <div className="site-eyebrow" style={{ color: "#fff" }}>
                Need Strategic Support?
              </div>

              <h2 className="section-heading">
                Let&apos;s discuss the opportunity.
              </h2>

              <p className="bf-contact-copy">
                Tell us what you are working on and we can explore how our
                advisory capabilities may help.
              </p>
            </div>

            <div>
              <Link href="/contact" className="bf-btn bf-btn-dark">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
