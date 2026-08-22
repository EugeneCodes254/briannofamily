
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111b27]">

      {/* TOP BAR */}
      <div className="bg-[#0d1721] px-6 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs">
        Strategic Advisory • Business Development • International Trade
      </div>

      {/* NAVIGATION */}
      <header className="border-b border-black/[0.06] bg-[#f5f3ee]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex h-20 items-center justify-between">

            <Link href="/" className="shrink-0">
              <div className="text-[20px] font-bold tracking-[0.16em] text-[#111b27]">
                BRIANO
              </div>

              <div className="-mt-0.5 pl-[1px] text-[8px] font-semibold tracking-[0.5em] text-[#a77d36]">
                AND FAMILY
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
              <Link
                href="/"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                Services
              </Link>

              <Link
                href="/industries"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                Industries
              </Link>

              <Link
                href="/insights"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                Insights
              </Link>

              <Link
                href="/contact"
                className="text-[13px] font-medium text-[#56616b] hover:text-[#111b27]"
              >
                Contact
              </Link>
            </nav>

            <Link
              href="/contact"
              className="rounded-full bg-[#a77d36] px-6 py-3 text-[13px] font-semibold text-white transition hover:bg-[#896529]"
            >
              Talk to an Advisor
            </Link>

          </div>

        </div>
      </header>

      {/* PAGE HEADER */}
      <section className="bg-[#0d1721] px-6 py-20 text-white lg:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl">

          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#c6a568]">
            Legal
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
            How Briano and Family collects, uses, protects and manages
            personal information provided through this website and our
            services.
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/30">
            Last updated: August 2026
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-4xl">

          <div className="space-y-14">

            {/* INTRODUCTION */}
            <section>
              <h2 className="text-2xl font-semibold">
                1. Introduction
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Briano and Family respects the privacy of individuals who
                interact with our business, website and professional services.
                This Privacy Policy explains how we collect, use, disclose
                and protect personal information.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                By using this website or providing information to us, you
                acknowledge the practices described in this Privacy Policy.
              </p>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Depending on how you interact with us, we may collect
                information such as:
              </p>

              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#626d76]">
                <li>• Name and organisation details</li>
                <li>• Email address and telephone number</li>
                <li>• Business and professional information</li>
                <li>• Information submitted through enquiry forms</li>
                <li>• Information contained in correspondence with us</li>
                <li>• Website usage and technical information</li>
              </ul>
            </section>

            {/* HOW WE COLLECT */}
            <section>
              <h2 className="text-2xl font-semibold">
                3. How Information Is Collected
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Information may be provided directly by you when you contact
                us, request information, engage our services, submit an
                enquiry or otherwise communicate with Briano and Family.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                We may also collect limited technical information when you
                visit our website, including information relating to your
                browser, device and website interaction.
              </p>
            </section>

            {/* USE */}
            <section>
              <h2 className="text-2xl font-semibold">
                4. How We Use Personal Information
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                We may use personal information to:
              </p>

              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#626d76]">
                <li>• Respond to enquiries and requests</li>
                <li>• Provide and manage our professional services</li>
                <li>• Communicate with clients and prospective clients</li>
                <li>• Understand and evaluate business opportunities</li>
                <li>• Improve our website and services</li>
                <li>• Maintain business records</li>
                <li>• Meet applicable legal and regulatory obligations</li>
              </ul>
            </section>

            {/* DISCLOSURE */}
            <section>
              <h2 className="text-2xl font-semibold">
                5. Disclosure of Information
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Briano and Family does not sell personal information.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Where necessary for legitimate business purposes, information
                may be shared with professional advisers, service providers,
                technology providers or other parties involved in delivering
                our services, subject to appropriate confidentiality and
                privacy considerations.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Information may also be disclosed where required by applicable
                law, regulation, court order or lawful governmental request.
              </p>
            </section>

            {/* SECURITY */}
            <section>
              <h2 className="text-2xl font-semibold">
                6. Data Security
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                We take reasonable technical and organisational measures to
                protect personal information against unauthorised access,
                disclosure, alteration, loss or misuse.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                However, no method of electronic transmission or storage can
                be guaranteed to be completely secure.
              </p>
            </section>

            {/* RETENTION */}
            <section>
              <h2 className="text-2xl font-semibold">
                7. Data Retention
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                We retain personal information only for as long as reasonably
                necessary for the purposes for which it was collected,
                including fulfilling contractual, legal, accounting and
                regulatory requirements.
              </p>
            </section>

            {/* RIGHTS */}
            <section>
              <h2 className="text-2xl font-semibold">
                8. Your Privacy Rights
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Subject to applicable law, you may have rights concerning
                personal information we hold about you, including rights to
                request access, correction, updating or deletion of certain
                information and to raise concerns regarding its processing.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Requests may be made using the contact details provided below.
              </p>
            </section>

            {/* COOKIES */}
            <section>
              <h2 className="text-2xl font-semibold">
                9. Cookies and Website Technologies
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Our website may use cookies or similar technologies to support
                website functionality, security, performance and analytics.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Where applicable, you may control certain cookie preferences
                through your browser settings.
              </p>
            </section>

            {/* THIRD PARTY */}
            <section>
              <h2 className="text-2xl font-semibold">
                10. Third-Party Websites
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Our website may contain links to third-party websites or
                services. Briano and Family is not responsible for the privacy
                practices, content or security of third-party websites.
              </p>
            </section>

            {/* CHANGES */}
            <section>
              <h2 className="text-2xl font-semibold">
                11. Changes to This Privacy Policy
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                We may update this Privacy Policy from time to time to reflect
                changes in our services, business practices or applicable
                legal requirements. Updated versions will be published on this
                page with the relevant effective or update date.
              </p>
            </section>

            {/* CONTACT */}
            <section className="rounded-2xl bg-[#f5f3ee] p-8 sm:p-10">

              <h2 className="text-2xl font-semibold">
                12. Contact Us
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                If you have questions about this Privacy Policy or wish to
                exercise a privacy-related right, please contact us.
              </p>

              <div className="mt-7 space-y-2 text-sm text-[#111b27]">
                <p>
                  <strong>Briano and Family</strong>
                </p>

                <p>316 Ndovu Close, Karen, Nairobi, Kenya</p>

                <p>
                  <a
                    href="mailto:info@brianofamily.com"
                    className="font-medium text-[#a77d36] hover:underline"
                  >
                    info@brianofamily.com
                  </a>
                </p>

                <p>+254 742 840 154</p>
              </div>

            </section>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#080f16] px-6 py-12 text-white lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs sm:flex-row sm:items-center">

          <p className="text-white/35">
            © 2026 Briano and Family. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="text-white/60 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/60 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}

