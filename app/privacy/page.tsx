import Footer from "../components/Footer";

const sections = [
  ["1. Introduction", "Brianno & Family respects the privacy of individuals who interact with our business, website and professional services. This Privacy Policy explains how we collect, use, disclose and protect personal information."],
  ["2. Information We Collect", "Depending on how you interact with us, we may collect your name, organisation details, email address, telephone number, business and professional information, information submitted through enquiry forms, correspondence and limited website usage or technical information."],
  ["3. How We Use Information", "We may use personal information to respond to enquiries, provide and manage professional services, communicate with clients and prospective clients, improve our website and services, maintain business records and meet applicable legal and regulatory obligations."],
  ["4. Disclosure of Information", "Brianno & Family does not sell personal information. Where necessary for legitimate business purposes, information may be shared with professional advisers, service providers or technology providers involved in delivering our services, subject to appropriate confidentiality and privacy considerations."],
  ["5. Data Security", "We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or misuse. However, no electronic transmission or storage method can be guaranteed to be completely secure."],
  ["6. Data Retention", "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including fulfilling contractual, legal, accounting and regulatory requirements."],
  ["7. Your Privacy Rights", "Subject to applicable law, you may have rights concerning personal information we hold about you, including rights to request access, correction, updating or deletion of certain information and to raise concerns regarding its processing."],
  ["8. Cookies", "Our website may use cookies or similar technologies to support website functionality, security, performance and analytics. Where applicable, you may control certain cookie preferences through your browser settings."],
  ["9. Third-Party Websites", "Our website may contain links to third-party websites or services. Brianno & Family is not responsible for the privacy practices, content or security of third-party websites."],
  ["10. Changes", "We may update this Privacy Policy from time to time to reflect changes in our services, business practices or applicable legal requirements."],
];

export default function PrivacyPage() {
  return (
    <main className="bf-legal-page">
      <section className="bf-legal-hero">
        <div className="bf-legal-hero-mark">
          <span />
          <span />
          <span />
        </div>

        <div className="bf-container bf-legal-hero-content">
          <div className="site-eyebrow bf-legal-eyebrow">
            Legal · Brianno & Family
          </div>

          <h1>
            Privacy
            <span> Policy.</span>
          </h1>

          <p>
            How Brianno & Family collects, uses, protects and manages personal
            information provided through this website and our services.
          </p>

          <div className="bf-legal-date">
            Last updated · August 2026
          </div>
        </div>
      </section>

      <section className="bf-legal-body">
        <div className="bf-container">
          <div className="bf-legal-layout">
            <aside className="bf-legal-index">
              <span>Contents</span>

              {sections.map(([title]) => (
                <a
                  key={title}
                  href={`#${title.split(".")[0].replace(/\s+/g, "-")}`}
                >
                  {title}
                </a>
              ))}

              <a href="#contact">Contact Us</a>
            </aside>

            <div className="bf-legal-content">
              {sections.map(([title, text]) => (
                <section
                  key={title}
                  id={title.split(".")[0].replace(/\s+/g, "-")}
                  className="bf-legal-section"
                >
                  <div className="bf-legal-section-number">
                    {title.split(".")[0].padStart(2, "0")}
                  </div>

                  <div>
                    <h2>{title.substring(title.indexOf(".") + 2)}</h2>
                    <p>{text}</p>
                  </div>
                </section>
              ))}

              <section id="contact" className="bf-legal-section bf-legal-contact">
                <div className="bf-legal-section-number">
                  11
                </div>

                <div>
                  <h2>Contact Us</h2>

                  <p>
                    For questions about this Privacy Policy or privacy-related
                    requests, contact Brianno & Family.
                  </p>

                  <div className="bf-legal-contact-details">
                    <span>316 Ndovu Close, Karen, Nairobi, Kenya</span>
                    <span>+254 742 840 154</span>
                    <a href="mailto:info@brianofamily.com">
                      info@brianofamily.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
