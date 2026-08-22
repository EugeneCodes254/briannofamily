import Link from "next/link";

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
            Terms governing your use of the Briano and Family website and
            general information relating to our professional services.
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

            {/* ACCEPTANCE */}
            <section>

              <h2 className="text-2xl font-semibold">
                1. Acceptance of These Terms
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                These Terms &amp; Conditions govern your access to and use of
                the Briano and Family website. By accessing or using the
                website, you agree to be bound by these terms.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                If you do not agree with these terms, please discontinue use
                of the website.
              </p>

            </section>

            {/* ABOUT */}
            <section>

              <h2 className="text-2xl font-semibold">
                2. About Briano and Family
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Briano and Family is a professional business advisory and
                consulting firm providing services including business
                development consulting, tender advisory, international trade
                consulting and financial consulting.
              </p>

            </section>

            {/* WEBSITE INFORMATION */}
            <section>

              <h2 className="text-2xl font-semibold">
                3. Website Information
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                The information provided on this website is intended for
                general informational purposes only. While we seek to provide
                accurate and useful information, we do not guarantee that all
                information is complete, current or error-free.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Website content should not be treated as a substitute for
                professional advice tailored to your specific circumstances.
              </p>

            </section>

            {/* PROFESSIONAL ADVICE */}
            <section>

              <h2 className="text-2xl font-semibold">
                4. Professional Services
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Information presented on this website does not by itself
                establish a client, advisory, consulting or other professional
                relationship between you and Briano and Family.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Any professional engagement will be governed by the specific
                terms, scope, deliverables, fees and conditions agreed between
                Briano and Family and the relevant client.
              </p>

            </section>

            {/* NO GUARANTEE */}
            <section>

              <h2 className="text-2xl font-semibold">
                5. No Guarantee of Outcomes
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Business, commercial, tender, investment and international
                trade activities involve risks and uncertainties. Briano and
                Family does not guarantee that any particular commercial,
                financial, tender or business outcome will be achieved.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Recommendations and advisory services are provided based on
                the information, circumstances and objectives available at
                the time of the engagement.
              </p>

            </section>

            {/* INTELLECTUAL PROPERTY */}
            <section>

              <h2 className="text-2xl font-semibold">
                6. Intellectual Property
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Unless otherwise stated, the content of this website,
                including text, branding, graphics, design, layout and other
                materials, is owned by or licensed to Briano and Family and
                is protected by applicable intellectual property laws.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                You may view and use the website for legitimate personal or
                business information purposes. You may not reproduce,
                distribute, modify or commercially exploit website content
                without appropriate permission.
              </p>

            </section>

            {/* PROHIBITED USE */}
            <section>

              <h2 className="text-2xl font-semibold">
                7. Prohibited Use
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                You must not use this website:
              </p>

              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#626d76]">
                <li>• For unlawful or fraudulent purposes</li>
                <li>• To interfere with the operation or security of the website</li>
                <li>• To attempt unauthorised access to systems or information</li>
                <li>• To reproduce website content without permission</li>
                <li>• In a manner that could damage Briano and Family or third parties</li>
              </ul>

            </section>

            {/* THIRD PARTY */}
            <section>

              <h2 className="text-2xl font-semibold">
                8. Third-Party Links
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                The website may contain links to third-party websites,
                resources or services. Such links are provided for
                convenience and do not necessarily constitute an endorsement
                or recommendation.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Briano and Family is not responsible for the availability,
                content, security or practices of third-party websites.
              </p>

            </section>

            {/* LIABILITY */}
            <section>

              <h2 className="text-2xl font-semibold">
                9. Limitation of Liability
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                To the extent permitted by applicable law, Briano and Family
                shall not be liable for losses or damages arising from reliance
                solely on general information contained on this website or
                from the use or inability to use the website.
              </p>

              <p className="mt-4 text-[15px] leading-8 text-[#626d76]">
                Nothing in these terms excludes or limits liability that cannot
                lawfully be excluded or limited under applicable law.
              </p>

            </section>

            {/* AVAILABILITY */}
            <section>

              <h2 className="text-2xl font-semibold">
                10. Website Availability
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                We aim to maintain reliable website availability but do not
                guarantee that the website will always be available,
                uninterrupted or free from technical errors.
              </p>

            </section>

            {/* CHANGES */}
            <section>

              <h2 className="text-2xl font-semibold">
                11. Changes to These Terms
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                Briano and Family may update these Terms &amp; Conditions from
                time to time. Changes will become effective when published on
                this page unless otherwise stated.
              </p>

            </section>

            {/* GOVERNING LAW */}
            <section>

              <h2 className="text-2xl font-semibold">
                12. Governing Law
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                These Terms &amp; Conditions shall be interpreted in accordance
                with the laws applicable in Kenya, subject to any mandatory
                legal requirements that may apply.
              </p>

            </section>

            {/* CONTACT */}
            <section className="rounded-2xl bg-[#f5f3ee] p-8 sm:p-10">

              <h2 className="text-2xl font-semibold">
                13. Contact Us
              </h2>

              <p className="mt-5 text-[15px] leading-8 text-[#626d76]">
                If you have questions regarding these Terms &amp; Conditions,
                please contact Briano and Family.
              </p>

              <div className="mt-7 space-y-2 text-sm text-[#111b27]">

                <p>
                  <strong>Briano and Family</strong>
                </p>

                <p>
                  316 Ndovu Close, Karen, Nairobi, Kenya
                </p>

                <p>
                  <a
                    href="mailto:info@brianofamily.com"
                    className="font-medium text-[#a77d36] hover:underline"
                  >
                    info@brianofamily.com
                  </a>
                </p>

                <p>
                  +254 742 840 154
                </p>

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
