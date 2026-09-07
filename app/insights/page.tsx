import Link from "next/link";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const insights = [
  {
    number: "01",
    tag: "Business",
    title: "Building stronger businesses through better strategic decisions.",
    text: "Growth requires more than ambition. It requires understanding where opportunity exists and how to position the organisation to capture it.",
  },
  {
    number: "02",
    tag: "Markets",
    title: "Understanding opportunity before entering a new market.",
    text: "Market expansion should begin with informed assessment of opportunity, commercial realities, relationships and risk.",
  },
  {
    number: "03",
    tag: "Advisory",
    title: "Turning complex commercial questions into clear direction.",
    text: "The value of advisory lies in helping decision-makers understand what matters and what should happen next.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Perspectives for"
        highlight="better decisions."
        description="Ideas and perspectives around business development, markets, strategy and commercial decision-making."
      />

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                Perspectives
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Thinking beyond the immediate question.
              </h2>
            </div>
          </div>

          <p className="body-large" style={{ maxWidth: "780px" }}>
            Our insights explore themes that influence businesses,
            organisations and decision-makers operating in changing
            commercial environments.
          </p>
        </div>
      </section>

      <section className="bf-section bg-[#f1efeb]">
        <div className="bf-container">
          <div className="bf-insight-grid">
            {insights.map((insight) => (
              <article
                className="bf-insight"
                key={insight.number}
              >
                <div className="flex items-center justify-between">
                  <span className="bf-insight-tag">
                    {insight.tag}
                  </span>

                  <span className="text-xs font-bold text-[#d71920]">
                    {insight.number}
                  </span>
                </div>

                <h3 className="bf-insight-title">
                  {insight.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#6b6b6b]">
                  {insight.text}
                </p>

                <Link
                  href="/contact"
                  className="bf-insight-link"
                >
                  Discuss This Topic →
                </Link>
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
                Continue the Conversation
              </div>

              <h2 className="section-heading">
                Have a commercial question?
              </h2>
            </div>

            <div>
              <Link href="/contact" className="bf-btn bf-btn-dark">
                Speak With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
