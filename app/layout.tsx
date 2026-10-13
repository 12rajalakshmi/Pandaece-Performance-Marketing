
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANDAeCe | Performance Marketing Experts",
  description:
    "End-to-end digital marketing services for business owners, including Google Ads, Meta Ads, website development, CRM and automation.",
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
