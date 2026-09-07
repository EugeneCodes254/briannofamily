import Link from "next/link";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const industries = [
  {
    number: "01",
    title: "Corporate & Commercial",
    text: "Supporting businesses with strategic thinking, commercial positioning and growth decisions.",
  },
  {
    number: "02",
    title: "Government & Institutions",
    text: "Advisory perspective for institutions navigating procurement, opportunities and complex stakeholder environments.",
  },
  {
    number: "03",
    title: "Infrastructure & Construction",
    text: "Commercial insight supporting organisations operating across infrastructure and construction opportunities.",
  },
  {
    number: "04",
    title: "International Trade",
    text: "Helping organisations explore markets, partnerships and cross-border commercial opportunities.",
  },
  {
    number: "05",
    title: "Professional Services",
    text: "Strategic and commercial support for firms seeking stronger positioning and sustainable growth.",
  },
  {
    number: "06",
    title: "SMEs & Entrepreneurs",
    text: "Practical advisory designed to help growing businesses make stronger commercial decisions.",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Experience across"
        highlight="the commercial landscape."
        description="We work across sectors where strategic perspective, commercial discipline and practical decision-making can create meaningful value."
      />

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                Sector Perspective
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Different sectors. One strategic approach.
              </h2>
            </div>
          </div>

          <p className="body-large" style={{ maxWidth: "800px" }}>
            Every industry has its own commercial realities. We combine a
            structured advisory approach with an understanding of the
            environment in which each organisation operates.
          </p>
        </div>
      </section>

      <section className="bf-section bg-[#f1efeb]">
        <div className="bf-container">
          <div className="bf-industry-grid">
            {industries.map((industry) => (
              <Link
                href="/contact"
                key={industry.number}
                className="bf-industry"
              >
                <span className="bf-industry-number">
                  {industry.number}
                </span>

                <div>
                  <h3 className="bf-industry-title">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-[#6b6b6b] transition-colors group-hover:text-white/60">
                    {industry.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bf-section bf-statement">
        <div className="bf-container">
          <div className="bf-statement-grid">
            <div>
              <div className="site-eyebrow" style={{ color: "#fff" }}>
                Commercial Perspective
              </div>
            </div>

            <div className="bf-statement-copy">
              <h2 className="section-heading bf-statement-title">
                Understanding the environment is the beginning of
                <span> better decisions.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
