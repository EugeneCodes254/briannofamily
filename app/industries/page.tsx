import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const industries = [
  {
    number: "01",
    label: "Corporate & Commercial",
    title: "Building stronger commercial positions.",
    description:
      "We help organisations understand their markets, sharpen commercial strategy, identify opportunities and build partnerships that support sustainable growth.",
    points: [
      "Commercial strategy",
      "Market positioning",
      "Business development",
      "Strategic partnerships",
    ],
    image: "/images/service-business.jpg",
    alt: "Business professionals collaborating in a modern office",
  },
  {
    number: "02",
    label: "Government & Institutions",
    title: "Supporting decisions that create lasting value.",
    description:
      "We provide practical advisory support for institutions navigating procurement, strategic initiatives, partnerships and complex commercial environments.",
    points: [
      "Institutional advisory",
      "Tender strategy",
      "Procurement support",
      "Strategic initiatives",
    ],
    image: "/images/service-tender.jpg",
    alt: "Professional reviewing business documents",
  },
  {
    number: "03",
    label: "Infrastructure & Construction",
    title: "Commercial thinking behind major projects.",
    description:
      "Infrastructure creates opportunities well beyond construction. We help organisations understand commercial potential, partnerships and strategic positioning around major projects.",
    points: [
      "Project opportunity assessment",
      "Commercial strategy",
      "Partner identification",
      "Market intelligence",
    ],
    image: "/images/infrastructure.jpg",
    alt: "Infrastructure and construction development",
  },
  {
    number: "04",
    label: "International Trade",
    title: "Connecting opportunity across markets.",
    description:
      "We help businesses assess new markets, understand commercial environments and develop practical strategies for cross-border trade and international expansion.",
    points: [
      "Market entry",
      "Trade opportunities",
      "Cross-border strategy",
      "International partnerships",
    ],
    image: "/images/international-trade.jpg",
    alt: "International trade and logistics environment",
  },
  {
    number: "05",
    label: "Professional Services",
    title: "Creating clarity in competitive markets.",
    description:
      "Professional firms need more than technical capability. We help them strengthen positioning, identify growth opportunities and make better commercial decisions.",
    points: [
      "Growth strategy",
      "Commercial positioning",
      "Client opportunity analysis",
      "Strategic planning",
    ],
    image: "/images/service-financial.jpg",
    alt: "Professional financial advisory meeting",
  },
  {
    number: "06",
    label: "SMEs & Entrepreneurs",
    title: "Practical strategy for ambitious businesses.",
    description:
      "We work with growing businesses to turn ideas into commercially viable opportunities, strengthen their foundations and prepare for their next stage of growth.",
    points: [
      "Business development",
      "Growth planning",
      "Opportunity assessment",
      "Financial perspective",
    ],
    image: "/images/strategy-meeting.jpg",
    alt: "African business professionals discussing strategy",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <main className="bf-industries-page">
        <section className="bf-industries-hero">
          <div className="bf-industries-hero-image">
            <Image
              src="/images/industries-nairobi.jpg"
              alt="Nairobi city skyline"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className="bf-industries-hero-overlay" />

          <div className="bf-container bf-industries-hero-content">
            <p className="bf-kicker bf-kicker-light">
              Industries · Kenya & Beyond
            </p>

            <h1>
              Industries we understand.
              <span> Decisions we help move forward.</span>
            </h1>

            <p className="bf-industries-hero-description">
              Brianno & Family works across commercial, institutional,
              infrastructure, trade and entrepreneurial environments where
              better decisions create better opportunities.
            </p>

            <div className="bf-industries-hero-meta">
              <span>01</span>
              <span>Commercial perspective</span>
              <span>·</span>
              <span>Practical advisory</span>
              <span>·</span>
              <span>Long-term thinking</span>
            </div>
          </div>
        </section>

        <section className="bf-industries-intro">
          <div className="bf-container bf-industries-intro-grid">
            <div>
              <p className="bf-kicker">Where we create perspective</p>
            </div>

            <div>
              <h2>
                Different industries.
                <br />
                <span>One disciplined approach.</span>
              </h2>

              <p>
                Every sector has its own commercial realities, stakeholders
                and risks. Our role is to understand those realities quickly,
                identify what matters and provide practical direction that
                helps organisations move with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="bf-industries-list">
          <div className="bf-container">
            {industries.map((industry, index) => (
              <article
                className={`bf-industry-row ${
                  index % 2 === 1 ? "bf-industry-row-reverse" : ""
                }`}
                key={industry.number}
              >
                <div className="bf-industry-image">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div className="bf-industry-image-index">
                    {industry.number}
                  </div>
                </div>

                <div className="bf-industry-content">
                  <p className="bf-industry-number">{industry.number}</p>

                  <p className="bf-kicker">{industry.label}</p>

                  <h2>{industry.title}</h2>

                  <p className="bf-industry-description">
                    {industry.description}
                  </p>

                  <ul>
                    {industry.points.map((point) => (
                      <li key={point}>
                        <span>—</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="bf-industry-link">
                    Discuss your opportunity
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bf-industries-perspective">
          <div className="bf-container bf-industries-perspective-grid">
            <div>
              <p className="bf-kicker bf-kicker-light">Our perspective</p>

              <h2>
                We look beyond
                <br />
                <span>the sector.</span>
              </h2>
            </div>

            <div>
              <p>
                Markets change. Industries overlap. Opportunities often sit
                between sectors rather than inside them.
              </p>

              <p>
                That is why our advisory approach combines commercial
                understanding, strategic thinking and practical execution
                rather than relying on a single industry lens.
              </p>

              <Link href="/services" className="bf-btn bf-btn-outline-light">
                Explore our expertise
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bf-industries-cta">
          <div className="bf-container bf-industries-cta-inner">
            <p className="bf-kicker">The next opportunity</p>

            <h2>
              Let&apos;s understand
              <br />
              <span>what&apos;s possible.</span>
            </h2>

            <p>
              Tell us where your organisation is going. We&apos;ll help you
              understand the opportunity and determine what comes next.
            </p>

            <Link href="/contact" className="bf-btn bf-btn-primary">
              Talk to an Advisor
              <span>→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
