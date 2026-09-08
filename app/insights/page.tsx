import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const insights = [
  {
    number: "01",
    category: "Business & Growth",
    title: "Building stronger businesses through better strategic decisions.",
    text: "Growth requires more than ambition. It requires understanding where opportunity exists, how the market is changing and how an organisation should position itself to respond.",
  },
  {
    number: "02",
    category: "Markets & Trade",
    title: "Understanding opportunity before entering a new market.",
    text: "Market expansion should begin with informed assessment of opportunity, commercial realities, relationships and risk.",
  },
  {
    number: "03",
    category: "Strategy & Advisory",
    title: "Turning complex commercial questions into clear direction.",
    text: "The value of advisory lies in helping decision-makers understand what matters, what is changing and what should happen next.",
  },
];

export default function InsightsPage() {
  return (
    <main className="bf-insights-page">
      <section className="bf-insights-hero">
        <div className="bf-insights-hero-image">
          <Image
            src="/images/strategy-meeting.jpg"
            alt="African business professionals discussing strategy"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="bf-insights-hero-overlay" />

        <div className="bf-container bf-insights-hero-content">
          <div className="site-eyebrow bf-insights-eyebrow">
            Insights · Brianno & Family
          </div>

          <h1>
            Perspectives that help
            <span> businesses move forward.</span>
          </h1>

          <p>
            Ideas and perspectives around business development, markets,
            strategy and commercial decision-making.
          </p>
        </div>
      </section>

      <section className="bf-section bf-insights-intro">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                Our Perspective
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Thinking beyond the
                <span> immediate question.</span>
              </h2>
            </div>
          </div>

          <p className="body-large bf-insights-intro-copy">
            The strongest decisions are rarely made by looking at one issue
            in isolation. We consider markets, commercial realities,
            relationships and long-term objectives to help organisations
            see the bigger picture.
          </p>
        </div>
      </section>

      <section className="bf-insights-feature">
        <div className="bf-container">
          <div className="bf-insights-feature-grid">
            <div className="bf-insights-feature-image">
              <Image
                src="/images/strategy-meeting.jpg"
                alt="African business professionals collaborating in a strategy meeting"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>

            <div className="bf-insights-feature-content">
              <div className="bf-insight-meta">
                <span>Featured Perspective</span>
                <span>01</span>
              </div>

              <h2>
                Better decisions begin with
                <span> better perspective.</span>
              </h2>

              <p>
                In a changing commercial environment, organisations need
                more than information. They need perspective — the ability
                to distinguish what matters, understand the implications
                and identify a practical way forward.
              </p>

              <p>
                Our advisory approach is built around that principle:
                bringing clarity to complex commercial questions and
                helping decision-makers move from uncertainty to action.
              </p>

              <Link href="/contact" className="bf-btn bf-btn-dark">
                Discuss Your Challenge <span className="bf-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bf-section bf-insights-library">
        <div className="bf-container">
          <div className="bf-section-header bf-insights-library-header">
            <div>
              <div className="site-eyebrow">
                Insights
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Ideas for organisations
                <span> building what comes next.</span>
              </h2>
            </div>
          </div>

          <div className="bf-insight-grid">
            {insights.map((insight) => (
              <article className="bf-insight" key={insight.number}>
                <div className="bf-insight-top">
                  <span className="bf-insight-tag">
                    {insight.category}
                  </span>

                  <span className="bf-insight-number">
                    {insight.number}
                  </span>
                </div>

                <h3 className="bf-insight-title">
                  {insight.title}
                </h3>

                <p className="bf-insight-text">
                  {insight.text}
                </p>

                <Link
                  href="/contact"
                  className="bf-insight-link"
                >
                  Discuss This Topic <span className="bf-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bf-insights-principle">
        <div className="bf-container">
          <div className="bf-insights-principle-grid">
            <div>
              <div className="site-eyebrow bf-insights-light-eyebrow">
                How We Think
              </div>
            </div>

            <div>
              <h2>
                Advisory should create
                <span> clarity and momentum.</span>
              </h2>

              <p>
                Good advice should make the next decision easier. We focus
                on practical perspectives that help leaders understand
                their options, assess opportunity and move with confidence.
              </p>

              <div className="bf-insights-principles">
                <div>
                  <strong>01</strong>
                  <span>Understand the context.</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Identify the opportunity.</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Define the way forward.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bf-section bf-insights-cta">
        <div className="bf-container">
          <div className="bf-insights-cta-grid">
            <div>
              <div className="site-eyebrow">
                Continue the Conversation
              </div>

              <h2 className="section-heading">
                Have a commercial question?
              </h2>
            </div>

            <div className="bf-insights-cta-action">
              <p>
                Let's explore the opportunity, challenge or decision
                in front of you.
              </p>

              <Link href="/contact" className="bf-btn bf-btn-primary">
                Speak With Us <span className="bf-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
