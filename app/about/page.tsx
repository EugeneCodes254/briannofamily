import Link from "next/link";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const values = [
  ["01", "Integrity", "We approach every engagement with honesty, accountability and a clear understanding of our clients' interests."],
  ["02", "Strategic Thinking", "We look beyond immediate challenges to understand the wider commercial environment and identify meaningful opportunities."],
  ["03", "Practicality", "Our recommendations are designed to be useful, understandable and capable of being translated into action."],
  ["04", "Professionalism", "Every engagement is approached with discipline, discretion and respect for the objectives of our clients."],
];

const approach = [
  ["01", "Understand", "We understand your objectives, circumstances, market environment and the opportunity or challenge you are addressing."],
  ["02", "Strategise", "We assess available options and develop a structured approach aligned with your objectives and commercial priorities."],
  ["03", "Execute", "We help turn strategy into practical next steps, giving clients a clearer direction for moving forward."],
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Brianno & Family"
        title="We bring perspective"
        highlight="to opportunity."
        description="Brianno & Family is a professional business advisory and consulting firm helping organisations understand opportunities, navigate complexity and make commercially informed decisions."
        image="/about page.png"
      />

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-intro-grid">
            <div>
              <div className="site-eyebrow">
                Our Story
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Better decisions begin with better perspective.
              </h2>

              <div className="bf-intro-copy">
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

      <section className="bf-section bg-[#f1efeb]">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                Our Values
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Principles that shape our work.
              </h2>
            </div>
          </div>

          <div className="bf-reasons">
            {values.map(([number, title, text]) => (
              <div className="bf-reason" key={number}>
                <div className="bf-reason-number">{number}</div>

                <h3 className="bf-reason-title">
                  {title}
                </h3>

                <p className="bf-reason-text">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                Advisory should create
                <span> clarity and momentum.</span>
              </h2>

              <p style={{ marginTop: "38px" }}>
                We believe professional advisory should not stop at analysis.
                It should help decision-makers understand what matters,
                determine what comes next and move with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="bf-section-header">
            <div>
              <div className="site-eyebrow">
                How We Work
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                From understanding to execution.
              </h2>
            </div>
          </div>

          <div className="bf-approach-grid">
            {approach.map(([number, title, text]) => (
              <div className="bf-approach-step" key={number}>
                <div className="bf-approach-number">
                  {number} / {title.toUpperCase()}
                </div>

                <h3 className="bf-approach-title">
                  {title}
                </h3>

                <p className="bf-approach-text">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "50px" }}>
            <Link href="/contact" className="bf-btn bf-btn-dark">
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
