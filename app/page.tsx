import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Business Development",
    description:
      "We help organisations identify opportunities, strengthen commercial positioning and turn growth ambitions into practical strategies.",
  },
  {
    number: "02",
    title: "Tender Advisory",
    description:
      "Structured support across procurement, tender preparation, opportunity assessment and commercial positioning.",
  },
  {
    number: "03",
    title: "International Trade",
    description:
      "Advisory support for organisations entering new markets, building partnerships and navigating cross-border opportunities.",
  },
  {
    number: "04",
    title: "Financial Consulting",
    description:
      "Commercial and financial perspective designed to improve decision-making, capital planning and sustainable growth.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Strategic Perspective",
    text: "We bring a broader commercial view to complex decisions, helping clients see opportunities and risks clearly.",
  },
  {
    number: "02",
    title: "Practical Advisory",
    text: "Our recommendations are designed to move beyond analysis and translate into action.",
  },
  {
    number: "03",
    title: "Commercial Discipline",
    text: "We focus on decisions that strengthen commercial performance, resilience and long-term value.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    text: "We build relationships around sustainable outcomes rather than short-term transactions.",
  },
];

const industries = [
  "Corporate & Commercial",
  "Government & Institutions",
  "Infrastructure & Construction",
  "International Trade",
  "Professional Services",
  "SMEs & Entrepreneurs",
];

const insights = [
  {
    tag: "Business",
    title: "Building stronger businesses through better strategic decisions.",
  },
  {
    tag: "Markets",
    title: "Understanding opportunity before entering a new market.",
  },
  {
    tag: "Advisory",
    title: "Turning complex commercial questions into clear direction.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bf-hero">
        <div className="bf-hero-image">
          <Image
            src="/landing page2.jpg"
            alt="Modern business architecture"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="bf-hero-overlay" />

        <div className="bf-hero-grid">
          <div className="bf-hero-content bf-reveal">
            <div className="site-eyebrow bf-hero-eyebrow">
              Established 2019 · Nairobi
            </div>

            <h1 className="display-heading bf-hero-title">
              Strategy that
              <span>moves business</span>
              forward.
            </h1>

            <p className="bf-hero-description">
              Brianno & Family is a professional advisory firm helping
              organisations identify opportunities, enter markets,
              strengthen commercial positions and make informed strategic
              decisions.
            </p>

            <div className="bf-hero-actions">
              <Link href="/contact" className="bf-btn bf-btn-primary">
                Talk to an Advisor →
              </Link>

              <Link
                href="/services"
                className="bf-btn bf-btn-outline-light"
              >
                Explore Our Expertise →
              </Link>
            </div>

            <div className="bf-hero-meta">
              <div className="bf-stat">
                <span className="bf-stat-number">2019</span>
                <span className="bf-stat-label">Established</span>
              </div>

              <div className="bf-stat">
                <span className="bf-stat-number">04</span>
                <span className="bf-stat-label">Advisory Areas</span>
              </div>

              <div className="bf-stat">
                <span className="bf-stat-number">01</span>
                <span className="bf-stat-label">Strategic Focus</span>
              </div>
            </div>
          </div>

          <div className="bf-hero-card">
            <div className="site-eyebrow bf-hero-card-label">
              Strategic Perspective
            </div>

            <h2 className="bf-hero-card-title">
              Commercial <span>clarity.</span>
            </h2>

            <p className="bf-hero-card-text">
              Turning complex commercial questions into clear strategic
              direction.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bf-trust">
        <div className="bf-container-wide bf-trust-grid">
          <div className="bf-trust-item">
            <span className="bf-trust-label">Focus</span>
            <span className="bf-trust-value">Commercial Growth</span>
          </div>

          <div className="bf-trust-item">
            <span className="bf-trust-label">Expertise</span>
            <span className="bf-trust-value">Strategic Advisory</span>
          </div>

          <div className="bf-trust-item">
            <span className="bf-trust-label">Geography</span>
            <span className="bf-trust-value">Kenya & Beyond</span>
          </div>

          <div className="bf-trust-item">
            <span className="bf-trust-label">Established</span>
            <span className="bf-trust-value">2019</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bf-section">
        <div className="bf-container">
          <div className="bf-intro-grid">
            <div>
              <div className="site-eyebrow">Our Perspective</div>
            </div>

            <div>
              <h2 className="section-heading bf-intro-title">
                Better decisions begin with better perspective.
              </h2>

              <div className="bf-intro-copy">
                <p>
                  Businesses operate in an environment where opportunities,
                  markets and risks are constantly changing. The right
                  decision requires more than information. It requires
                  perspective.
                </p>

                <p>
                  Brianno & Family works with organisations to understand
                  complex commercial situations, develop practical strategies
                  and create a clear path from opportunity to execution.
                </p>

                <div className="bf-intro-highlight">
                  We combine strategic thinking with practical commercial
                  understanding to help organisations move forward with
                  confidence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bf-section bf-services">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">What We Do</div>
            </div>

            <div className="bf-section-header-copy">
              <h2 className="section-heading">
                Advisory built around the decisions that matter.
              </h2>
            </div>
          </div>

          <div className="bf-services-list">
            {services.map((service) => (
              <Link
                href="/services"
                className="bf-service"
                key={service.number}
              >
                <div className="bf-service-number">{service.number}</div>

                <h3 className="bf-service-title">{service.title}</h3>

                <p className="bf-service-description">
                  {service.description}
                </p>

                <div className="bf-service-arrow">↗</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bf-section bf-statement">
        <div className="bf-container">
          <div className="bf-statement-grid">
            <div>
              <div className="site-eyebrow" style={{ color: "#fff" }}>
                Our Philosophy
              </div>
            </div>

            <div className="bf-statement-copy">
              <h2 className="section-heading bf-statement-title">
                We do not simply identify opportunities.
                <span> We help make them actionable.</span>
              </h2>

              <p style={{ marginTop: "42px" }}>
                The value of advisory is measured by what happens after the
                recommendation. Our work is designed to create clarity,
                direction and momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bf-section">
        <div className="bf-container">
          <div className="bf-why-grid">
            <div>
              <div className="site-eyebrow">Why Brianno & Family</div>

              <h2 className="section-heading" style={{ marginTop: "28px" }}>
                Clear thinking.
                <br />
                Practical direction.
              </h2>
            </div>

            <div className="bf-reasons">
              {reasons.map((reason) => (
                <div className="bf-reason" key={reason.number}>
                  <div className="bf-reason-number">{reason.number}</div>

                  <h3 className="bf-reason-title">{reason.title}</h3>

                  <p className="bf-reason-text">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bf-section bf-industries">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">Industries</div>
            </div>

            <div>
              <h2 className="section-heading">
                Experience across the commercial landscape.
              </h2>
            </div>
          </div>

          <div className="bf-industry-grid">
            {industries.map((industry, index) => (
              <Link
                href="/industries"
                className="bf-industry"
                key={industry}
              >
                <span className="bf-industry-number">
                  0{index + 1}
                </span>

                <h3 className="bf-industry-title">{industry}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bf-section bf-approach">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">Our Approach</div>
            </div>

            <div>
              <h2 className="section-heading">
                From understanding to execution.
              </h2>
            </div>
          </div>

          <div className="bf-approach-grid">
            <div className="bf-approach-step">
              <div className="bf-approach-number">01 / UNDERSTAND</div>

              <h3 className="bf-approach-title">Understand</h3>

              <p className="bf-approach-text">
                We begin by understanding the organisation, the market,
                the challenge and the opportunity before defining a
                direction.
              </p>
            </div>

            <div className="bf-approach-step">
              <div className="bf-approach-number">02 / STRATEGISE</div>

              <h3 className="bf-approach-title">Strategise</h3>

              <p className="bf-approach-text">
                We translate insight into practical strategic options,
                helping decision-makers understand the choices available.
              </p>
            </div>

            <div className="bf-approach-step">
              <div className="bf-approach-number">03 / EXECUTE</div>

              <h3 className="bf-approach-title">Execute</h3>

              <p className="bf-approach-text">
                We help turn strategy into action through clear priorities,
                commercial discipline and measurable next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bf-section bf-insights">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">Insights</div>
            </div>

            <div>
              <h2 className="section-heading">
                Perspectives for better business decisions.
              </h2>
            </div>
          </div>

          <div className="bf-insight-grid">
            {insights.map((insight) => (
              <Link
                href="/insights"
                className="bf-insight"
                key={insight.title}
              >
                <span className="bf-insight-tag">{insight.tag}</span>

                <h3 className="bf-insight-title">
                  {insight.title}
                </h3>

                <span className="bf-insight-link">
                  Read Insight →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bf-section bf-contact">
        <div className="bf-container">
          <div className="bf-contact-grid">
            <div>
              <div
                className="site-eyebrow"
                style={{ color: "#fff" }}
              >
                Start a Conversation
              </div>

              <h2 className="section-heading bf-contact-title">
                Let&apos;s discuss what comes next.
              </h2>

              <p className="bf-contact-copy">
                Whether you are exploring a new opportunity, entering a
                market or looking for strategic direction, we would be
                pleased to hear from you.
              </p>

              <Link
                href="/contact"
                className="bf-btn bf-btn-dark"
                style={{ marginTop: "34px" }}
              >
                Contact Brianno & Family →
              </Link>
            </div>

            <div className="bf-contact-details">
              <div className="bf-contact-detail">
                <span className="bf-contact-label">Email</span>
                <span className="bf-contact-value">
                  info@brianofamily.com
                </span>
              </div>

              <div className="bf-contact-detail">
                <span className="bf-contact-label">Phone</span>
                <span className="bf-contact-value">
                  +254 742 840 154
                </span>
              </div>

              <div className="bf-contact-detail">
                <span className="bf-contact-label">Office</span>
                <span className="bf-contact-value">
                  316 Ndovu Close, Karen, Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bf-footer">
        <div className="bf-container bf-footer-top">
          <div className="bf-footer-brand">
            <div className="bf-footer-logo">
              <Image
                src="/b.png"
                alt="Brianno & Family"
                width={38}
                height={38}
              />

              <span className="bf-footer-brand-name">
                BRIANNO & FAMILY
              </span>
            </div>

            <p>
              Strategic advisory for organisations seeking clarity,
              opportunity and sustainable commercial growth.
            </p>
          </div>

          <div>
            <h3 className="bf-footer-heading">Explore</h3>

            <Link href="/about" className="bf-footer-link">
              About Us
            </Link>

            <Link href="/services" className="bf-footer-link">
              Services
            </Link>

            <Link href="/industries" className="bf-footer-link">
              Industries
            </Link>

            <Link href="/insights" className="bf-footer-link">
              Insights
            </Link>
          </div>

          <div>
            <h3 className="bf-footer-heading">Connect</h3>

            <Link href="/contact" className="bf-footer-link">
              Contact
            </Link>

            <Link href="/privacy" className="bf-footer-link">
              Privacy
            </Link>

            <Link href="/terms" className="bf-footer-link">
              Terms
            </Link>
          </div>
        </div>

        <div className="bf-container bf-footer-bottom">
          <span>
            © {new Date().getFullYear()} Brianno & Family. All rights
            reserved.
          </span>

          <span>Strategic Advisory · Kenya & Beyond</span>
        </div>
      </footer>
    </main>
  );
}
