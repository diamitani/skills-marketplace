import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Skills Marketplace — Patrick Diamitani",
  description: "Production-grade AI agent skills for automation, development, GTM operations, and business intelligence. Built with ROSTR framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
