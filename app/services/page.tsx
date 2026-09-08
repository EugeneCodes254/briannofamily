import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Business Development",
    short: "Growth",
    image: "/images/service-business.jpg",
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
    short: "Procurement",
    image: "/images/service-tender.jpg",
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
    short: "Markets",
    image: "/images/service-trade.jpg",
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
    short: "Finance",
    image: "/images/service-financial.jpg",
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
      {/* PAGE HERO */}
      <section className="bf-inner-hero">
        <div className="bf-inner-hero-image">
          <Image
            src="/images/hero-nairobi-architecture.jpg"
            alt="Modern executive office overlooking a city skyline"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="bf-inner-hero-overlay" />

        <div className="bf-container bf-inner-hero-content">
          <div className="site-eyebrow bf-inner-eyebrow">
            Our Services · Nairobi
          </div>

          <h1 className="display-heading bf-inner-title">
            Expertise for
            <span> ambitious organisations.</span>
          </h1>

          <p className="bf-inner-description">
            From business growth and tender opportunities to international
            markets and financial decisions, Brianno & Family provides focused
            advisory support built around your commercial objectives.
          </p>
        </div>

        <div className="bf-inner-hero-index">
          <span>01</span>
          <span>04</span>
          <span>CORE CAPABILITIES</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-services-intro-grid">
            <div>
              <div className="site-eyebrow">What We Do</div>
              <div className="bf-services-intro-line" />
            </div>

            <div>
              <h2 className="section-heading">
                Turning commercial questions into clearer strategic decisions.
              </h2>

              <p className="body-large bf-services-intro-copy">
                Every business opportunity comes with questions. Our role is to
                help clients examine those questions systematically and develop
                practical approaches for moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bf-section bf-services-page">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">Core Capabilities</div>
            </div>

            <div>
              <h2 className="section-heading">
                Four areas of focused expertise.
              </h2>
            </div>
          </div>

          <div className="bf-service-detail-list">
            {services.map((service) => (
              <article className="bf-service-detail" key={service.number}>
                <div className="bf-service-detail-top">
                  <div className="bf-service-detail-number">
                    {service.number}
                  </div>

                  <div className="bf-service-detail-category">
                    {service.short}
                  </div>
                </div>

                <div className="bf-service-detail-grid">
                  <div className="bf-service-detail-visual">
                    <img
                      src={service.image}
                      alt={`${service.title} advisory`}
                      className="bf-service-detail-native-image"
                    />

                    <div className="bf-service-detail-image-overlay" />

                    <span className="bf-service-detail-image-label">
                      Brianno & Family
                    </span>
                  </div>

                  <div className="bf-service-detail-content">
                    <h3>{service.title}</h3>

                    <p className="bf-service-detail-description">
                      {service.description}
                    </p>

                    <div className="bf-service-capabilities">
                      {service.capabilities.map((capability, index) => (
                        <div
                          className="bf-service-capability"
                          key={capability}
                        >
                          <span>0{index + 1}</span>
                          <strong>{capability}</strong>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="bf-service-detail-link"
                    >
                      Discuss this capability <span>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bf-section bf-service-philosophy">
        <div className="bf-container">
          <div className="bf-service-philosophy-grid">
            <div>
              <div className="site-eyebrow" style={{ color: "#fff" }}>
                Our Philosophy
              </div>
            </div>

            <div>
              <h2 className="section-heading bf-service-philosophy-title">
                Advisory should create
                <span> direction, not complexity.</span>
              </h2>

              <p className="bf-service-philosophy-copy">
                We combine strategic thinking with practical commercial
                understanding to help organisations make informed decisions
                and move from opportunity to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
