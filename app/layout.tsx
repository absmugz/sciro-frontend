import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sciro.ai — Learning intelligence, embedded.",
  description:
    "Know when learners struggle — before they do. Sciro embeds inside learning apps to detect confusion, fatigue, and drop-off risk in real time, then triggers the right intervention instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H38QLWE2YN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H38QLWE2YN');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
