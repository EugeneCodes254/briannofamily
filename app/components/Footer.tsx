import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bf-footer">
      <div className="bf-container bf-footer-top">
        <div className="bf-footer-brand">
          <div className="bf-footer-logo">
            <Image
              src="/b.png"
              alt="Brianno & Family"
              width={180}
              height={90}
            />
          </div>

          <p>
            Strategic advisory for organisations seeking clarity,
            opportunity and sustainable commercial growth.
          </p>
        </div>

        <div>
          <h3 className="bf-footer-heading">Explore</h3>

          <Link href="/about" className="bf-footer-link">
            About Us
          </Link>

          <Link href="/services" className="bf-footer-link">
            Services
          </Link>

          <Link href="/industries" className="bf-footer-link">
            Industries
          </Link>

          <Link href="/insights" className="bf-footer-link">
            Insights
          </Link>
        </div>

        <div>
          <h3 className="bf-footer-heading">Connect</h3>

          <Link href="/contact" className="bf-footer-link">
            Contact
          </Link>

          <Link href="/privacy" className="bf-footer-link">
            Privacy
          </Link>

          <Link href="/terms" className="bf-footer-link">
            Terms
          </Link>

          <a
            href="mailto:info@brianofamily.com"
            className="bf-footer-link"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="bf-container bf-footer-bottom">
        <span>
          © {new Date().getFullYear()} Brianno & Family. All rights reserved.
        </span>

        <span>
          Strategic Advisory · Kenya & Beyond
        </span>
      </div>
    </footer>
  );
}
