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
    <main>
      <section className="bg-[#111111] px-6 pb-20 pt-[170px] text-white lg:px-10 lg:pb-28">
        <div className="bf-container">
          <div className="site-eyebrow text-white">
            Legal
          </div>

          <h1 className="mt-7 text-5xl font-bold tracking-[-.055em] sm:text-6xl lg:text-8xl">
            Terms &
            <span className="text-[#d71920]"> Conditions.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">
            The terms governing access to and use of the Brianno & Family
            website.
          </p>

          <p className="mt-6 text-[9px] uppercase tracking-[.2em] text-white/30">
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="bf-section bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-0">
          <div className="space-y-12">
            {sections.map(([title, text]) => (
              <section key={title} className="border-t border-black/10 pt-8">
                <h2 className="text-2xl font-bold tracking-[-.03em]">
                  {title}
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#6b6b6b]">
                  {text}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
