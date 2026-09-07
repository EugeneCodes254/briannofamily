import Link from "next/link";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#111111] pt-[88px] text-white">
        <div className="absolute right-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full border border-white/[0.07]" />
        <div className="absolute right-[-130px] top-[-130px] h-[450px] w-[450px] rounded-full border border-[#d71920]/25" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_.65fr] lg:px-0">
          <div>
            <div className="site-eyebrow mb-8 text-white">
              Start a Conversation
            </div>

            <h1 className="text-[50px] font-bold leading-[.9] tracking-[-.06em] sm:text-6xl lg:text-[88px]">
              Let&apos;s discuss
              <br />
              <span className="text-[#d71920]">
                what comes next.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Whether you are exploring a new opportunity, entering a market
              or looking for strategic direction, we would be pleased to hear
              from you.
            </p>
          </div>

          <div className="border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm">
            <p className="text-[9px] font-bold uppercase tracking-[.25em] text-[#d71920]">
              Contact Details
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <span className="block text-[9px] uppercase tracking-[.2em] text-white/35">
                  Email
                </span>

                <a
                  href="mailto:info@brianofamily.com"
                  className="mt-2 block text-lg font-semibold hover:text-[#d71920]"
                >
                  info@brianofamily.com
                </a>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[.2em] text-white/35">
                  Phone
                </span>

                <a
                  href="tel:+254742840154"
                  className="mt-2 block text-lg font-semibold hover:text-[#d71920]"
                >
                  +254 742 840 154
                </a>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[.2em] text-white/35">
                  Office
                </span>

                <p className="mt-2 text-lg font-semibold">
                  316 Ndovu Close,
                  <br />
                  Karen, Nairobi,
                  <br />
                  Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bf-section bg-white">
        <div className="bf-container">
          <div className="max-w-3xl">
            <div className="site-eyebrow">
              Begin Here
            </div>

            <h2 className="section-heading mt-7">
              Tell us what you are working on.
            </h2>

            <p className="body-large mt-8">
              A conversation can begin with a business challenge, an
              opportunity you are evaluating, a market you are considering or
              simply a question about how we may be able to help.
            </p>

            <a
              href="mailto:info@brianofamily.com"
              className="bf-btn bf-btn-primary mt-9"
            >
              Email Brianno & Family →
            </a>
          </div>
        </div>
      </section>

      <section className="bf-section bg-[#f1efeb]">
        <div className="bf-container">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d71920]">
                Location
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Nairobi, Kenya
              </h3>
            </div>

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d71920]">
                Geography
              </span>

              <h3 className="mt-4 text-xl font-bold">
                Kenya & Beyond
              </h3>
            </div>

            <div>
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d71920]">
                Established
              </span>

              <h3 className="mt-4 text-xl font-bold">
                2019
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
