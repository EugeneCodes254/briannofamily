import Link from "next/link";
import Footer from "../components/Footer";

const contactDetails = [
  {
    label: "Email",
    value: "info@brianofamily.com",
    href: "mailto:info@brianofamily.com",
  },
  {
    label: "Phone",
    value: "+254 742 840 154",
    href: "tel:+254742840154",
  },
];

const engagementAreas = [
  "Business development",
  "Tender advisory",
  "International trade",
  "Financial consulting",
];

export default function ContactPage() {
  return (
    <main className="bf-contact-page">
      <section className="bf-contact-hero">
        <div className="bf-contact-hero-pattern" />

        <div className="bf-container bf-contact-hero-content">
          <div>
            <div className="site-eyebrow bf-contact-light-eyebrow">
              Start a Conversation
            </div>

            <h1>
              Let&apos;s discuss
              <span> what comes next.</span>
            </h1>

            <p>
              Whether you are exploring a new opportunity, entering a market
              or looking for strategic direction, we would be pleased to hear
              from you.
            </p>
          </div>

          <div className="bf-contact-hero-side">
            <span>Based in Nairobi</span>
            <span>Working across Kenya & Beyond</span>
          </div>
        </div>
      </section>

      <section className="bf-contact-details">
        <div className="bf-container">
          <div className="bf-contact-details-grid">
            <div className="bf-contact-intro">
              <div className="site-eyebrow">
                Get In Touch
              </div>

              <h2>
                A conversation can
                <span> start here.</span>
              </h2>

              <p>
                Tell us what you are working on. It may be a business
                challenge, an opportunity you are evaluating, a market you
                are considering or simply a question about how we may be able
                to help.
              </p>
            </div>

            <div className="bf-contact-information">
              {contactDetails.map((item) => (
                <a
                  href={item.href}
                  className="bf-contact-detail"
                  key={item.label}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <b>→</b>
                </a>
              ))}

              <div className="bf-contact-detail bf-contact-address">
                <span>Office</span>
                <strong>
                  316 Ndovu Close,
                  <br />
                  Karen, Nairobi,
                  <br />
                  Kenya
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bf-contact-engagement">
        <div className="bf-container">
          <div className="bf-contact-engagement-header">
            <div className="site-eyebrow">
              How We Can Help
            </div>

            <h2>
              Bring us the question.
              <span> We&apos;ll explore the opportunity.</span>
            </h2>
          </div>

          <div className="bf-contact-engagement-grid">
            {engagementAreas.map((area, index) => (
              <div className="bf-contact-engagement-item" key={area}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bf-contact-next">
        <div className="bf-container">
          <div className="bf-contact-next-grid">
            <div>
              <div className="site-eyebrow bf-contact-light-eyebrow">
                The Next Step
              </div>

              <h2>
                Good conversations
                <span> create direction.</span>
              </h2>
            </div>

            <div className="bf-contact-next-action">
              <p>
                Start with an email or give us a call. We&apos;ll take it from
                there.
              </p>

              <div className="bf-contact-actions">
                <a
                  href="mailto:info@brianofamily.com"
                  className="bf-btn bf-btn-primary"
                >
                  Email Brianno & Family →
                </a>

                <a
                  href="tel:+254742840154"
                  className="bf-btn bf-btn-outline-light"
                >
                  Call +254 742 840 154
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
