import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Brianno & Family | Strategic Advisory",
    template: "%s | Brianno & Family",
  },
  description:
    "Brianno & Family is a professional advisory firm helping organisations identify opportunities, enter markets, strengthen commercial positions and make informed strategic decisions.",
  keywords: [
    "Brianno & Family",
    "strategic advisory",
    "business advisory",
    "business development",
    "tender advisory",
    "international trade",
    "financial consulting",
    "Kenya",
    "Nairobi",
  ],
  authors: [{ name: "Brianno & Family" }],
  creator: "Brianno & Family",
  metadataBase: new URL("https://brianofamily.com"),
  openGraph: {
    title: "Brianno & Family | Strategic Advisory",
    description:
      "Strategic advisory for organisations seeking clarity, opportunity and sustainable commercial growth.",
    type: "website",
    locale: "en_KE",
    siteName: "Brianno & Family",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
