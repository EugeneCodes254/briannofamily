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
    <main>
      <section className="bg-[#111111] px-6 pb-20 pt-[170px] text-white lg:px-10 lg:pb-28">
        <div className="bf-container">
          <div className="site-eyebrow text-white">
            Legal
          </div>

          <h1 className="mt-7 text-5xl font-bold tracking-[-.055em] sm:text-6xl lg:text-8xl">
            Privacy
            <span className="text-[#d71920]"> Policy.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">
            How Brianno & Family collects, uses, protects and manages personal
            information provided through this website and our services.
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

            <section className="border-t border-black/10 pt-8">
              <h2 className="text-2xl font-bold">
                Contact Us
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#6b6b6b]">
                For questions about this Privacy Policy or privacy-related
                requests, contact Brianno & Family.
              </p>

              <div className="mt-6 space-y-2 text-sm font-semibold">
                <p>316 Ndovu Close, Karen, Nairobi, Kenya</p>
                <p>+254 742 840 154</p>
                <a
                  href="mailto:info@brianofamily.com"
                  className="text-[#d71920]"
                >
                  info@brianofamily.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
