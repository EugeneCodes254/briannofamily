import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const values = [
  {
    number: "01",
    title: "Integrity",
    text: "We approach every engagement with honesty, accountability and a clear understanding of our clients' interests.",
  },
  {
    number: "02",
    title: "Strategic Thinking",
    text: "We look beyond immediate challenges to understand the wider commercial environment and identify meaningful opportunities.",
  },
  {
    number: "03",
    title: "Practicality",
    text: "Our recommendations are designed to be useful, understandable and capable of being translated into action.",
  },
  {
    number: "04",
    title: "Professionalism",
    text: "Every engagement is approached with discipline, discretion and respect for the objectives of our clients.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your objectives, circumstances, market environment and the opportunity or challenge you are addressing.",
  },
  {
    number: "02",
    title: "Strategise",
    text: "We assess available options and develop a structured approach aligned with your objectives and commercial priorities.",
  },
  {
    number: "03",
    title: "Execute",
    text: "We help turn strategy into practical next steps, giving clients a clearer direction for moving forward.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bf-about-hero">
        <div className="bf-about-hero-image">
          <Image
            src="/images/hero-african-executives.jpg"
            alt="African business professionals discussing strategy in a professional meeting"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="bf-about-hero-overlay" />

        <div className="bf-container bf-about-hero-content">
          <div className="site-eyebrow bf-about-eyebrow">
            About Brianno & Family · Nairobi
          </div>

          <h1 className="display-heading bf-about-title">
            Perspective that
            <span> creates opportunity.</span>
          </h1>

          <p className="bf-about-hero-description">
            Brianno & Family is a professional business advisory and
            consulting firm helping organisations understand opportunities,
            navigate complexity and make commercially informed decisions.
          </p>
        </div>

        <div className="bf-about-hero-meta">
          <span>Established</span>
          <strong>2019</strong>
        </div>
      </section>

      {/* STORY */}
      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-about-story-grid">
            <div className="bf-about-story-image">
              <Image
                src="/images/strategy-meeting.jpg"
                alt="Business professionals discussing strategy"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />

              <div className="bf-about-image-caption">
                <span>Nairobi · Kenya</span>
                <span>Strategy in practice</span>
              </div>
            </div>

            <div className="bf-about-story-content">
              <div className="site-eyebrow">Our Story</div>

              <div className="bf-about-red-line" />

              <h2 className="section-heading">
                Better decisions begin with better perspective.
              </h2>

              <div className="bf-about-copy">
                <p>
                  Brianno & Family was established in 2019 with a vision of
                  providing practical and commercially focused advisory
                  support to businesses and organisations.
                </p>

                <p>
                  Our work spans business development, tender advisory,
                  international trade and financial consulting, giving clients
                  focused expertise across important areas of commercial
                  decision-making.
                </p>
              </div>

              <div className="bf-about-highlight">
                <span>2019</span>
                <p>
                  Established with a focus on practical, commercially
                  informed advisory support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="bf-about-positioning">
        <div className="bf-container">
          <div className="bf-about-positioning-grid">
            <div>
              <div className="site-eyebrow">Our Perspective</div>
            </div>

            <div>
              <h2>
                We combine strategic thinking with practical commercial
                understanding to help organisations move forward with
                confidence.
              </h2>

              <div className="bf-about-positioning-rule" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bf-section bf-about-values">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">Our Values</div>
            </div>

            <div>
              <h2 className="section-heading">
                Principles that shape our work.
              </h2>
            </div>
          </div>

          <div className="bf-about-values-grid">
            {values.map((value) => (
              <article className="bf-about-value" key={value.number}>
                <div className="bf-about-value-top">
                  <span>{value.number}</span>
                  <span>Brianno & Family</span>
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

                <div className="bf-about-value-arrow bf-css-diagonal-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bf-about-philosophy">
        <div className="bf-container">
          <div className="bf-about-philosophy-grid">
            <div>
              <div className="site-eyebrow bf-white-eyebrow">
                Our Philosophy
              </div>
            </div>

            <div>
              <h2>
                Advisory should create
                <span> clarity and momentum.</span>
              </h2>

              <p>
                We believe professional advisory should not stop at analysis.
                It should help decision-makers understand what matters,
                determine what comes next and move with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">How We Work</div>
            </div>

            <div>
              <h2 className="section-heading">
                From understanding to execution.
              </h2>
            </div>
          </div>

          <div className="bf-about-approach">
            {approach.map((step, index) => (
              <article className="bf-about-approach-step" key={step.number}>
                <div className="bf-about-approach-number">
                  {step.number}
                </div>

                <div className="bf-about-approach-body">
                  <div className="bf-about-approach-label">
                    0{index + 1} / {step.title.toUpperCase()}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>

                {index < approach.length - 1 && (
                  <div className="bf-about-approach-arrow bf-arrow-right" aria-hidden="true" />
                )}
              </article>
            ))}
          </div>

          <div className="bf-about-approach-cta">
            <Link href="/services" className="bf-btn bf-btn-outline">
              Explore Our Expertise <span className="bf-arrow-right" aria-hidden="true" />
            </Link>

            <Link href="/contact" className="bf-btn bf-btn-dark">
              Start a Conversation <span className="bf-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bf-about-cta">
        <div className="bf-container">
          <div className="bf-about-cta-grid">
            <div>
              <div className="site-eyebrow bf-white-eyebrow">
                Brianno & Family
              </div>

              <h2>
                Let&apos;s build a clearer path
                <span> forward.</span>
              </h2>
            </div>

            <div className="bf-about-cta-action">
              <p>
                Tell us what you are working on and let&apos;s explore the
                opportunity together.
              </p>

              <Link href="/contact" className="bf-btn bf-btn-dark">
                Contact Our Team <span className="bf-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
