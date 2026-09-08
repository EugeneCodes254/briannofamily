import Footer from "../components/Footer";

const sections = [
  ["1. Acceptance", "By accessing or using the Brianno & Family website, you agree to use the website responsibly and in accordance with these Terms and Conditions."],
  ["2. Website Information", "The information presented on this website is provided for general informational purposes. While we aim to maintain accurate and useful information, we do not guarantee that every item is complete, current or free from error."],
  ["3. Professional Services", "Information on this website does not by itself constitute a professional engagement, financial advice, legal advice or a contractual commitment to provide services. Specific services are subject to separate discussions and agreements."],
  ["4. Intellectual Property", "Unless otherwise stated, website content, branding, text, graphics, layouts and other materials are owned by or used with permission by Brianno & Family and may not be reproduced or commercially exploited without appropriate permission."],
  ["5. Third-Party Links", "The website may contain links to third-party websites. These links are provided for convenience and Brianno & Family does not control or accept responsibility for third-party content, availability or policies."],
  ["6. Website Availability", "We may modify, suspend or discontinue parts of the website from time to time. We do not guarantee uninterrupted availability of the website or that it will always be free from technical issues."],
  ["7. Limitation of Liability", "To the extent permitted by applicable law, Brianno & Family will not be liable for losses arising solely from reliance on general information published on this website."],
  ["8. Privacy", "Use of personal information submitted through this website is governed by our Privacy Policy."],
  ["9. Changes", "We may update these Terms and Conditions from time to time. Continued use of the website following publication of changes constitutes acceptance of the updated terms."],
  ["10. Contact", "Questions regarding these Terms and Conditions may be directed to Brianno & Family using the contact information provided on this website."],
];

export default function TermsPage() {
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
            Terms &
            <span> Conditions.</span>
          </h1>

          <p>
            The terms governing access to and use of the Brianno & Family
            website.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
