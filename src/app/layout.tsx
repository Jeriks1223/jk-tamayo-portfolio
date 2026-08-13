import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jk-tamayo-portfolio.vercel.app"),
  title: "Jericho Kyle M. Tamayo — NetSuite & Full Stack Developer",
  description:
    "Passionate software engineer specializing in ERP customization, workflow automation, cloud infrastructure, and enterprise application development. NetSuite Developer, Full Stack Developer, AI Ready.",
  keywords: [
    "NetSuite Developer",
    "Full Stack Developer",
    "SuiteScript",
    "Next.js",
      "Flutter",
    "Philippines",
    "Cebu",
    "Enterprise Developer",
    "SharePoint",
    "Power Platform",
    "AWS",
      "Azure",
      "MySQL",
      "PostgreSQL",
      "SQLite",
  ],
  authors: [{ name: "Jericho Kyle M. Tamayo" }],
  creator: "Jericho Kyle M. Tamayo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jk-tamayo-portfolio.vercel.app/",
    title: "Jericho Kyle M. Tamayo — NetSuite & Full Stack Developer",
    description:
      "Building enterprise systems, automations, and scalable business solutions. NetSuite Developer · Full Stack Developer · AI Ready.",
    siteName: "Jericho Kyle M. Tamayo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jericho Kyle M. Tamayo — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jericho Kyle M. Tamayo — NetSuite & Full Stack Developer",
    description: "Building enterprise systems, automations, and scalable business solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${jetbrains.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
