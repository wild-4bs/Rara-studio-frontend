import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/queryProvider";

export const metadata: Metadata = {
  title: "RARA Studio — رارا ستوديو",
  description:
    "RARA Studio (رارا ستوديو) is a creative production space dedicated to filmmaking, visual storytelling, and artistic expression — مساحة إبداعية متخصصة بصناعة الأفلام وصياغة الصور البصرية.",
  viewport: { width: "device-width", initialScale: 1 },
  robots: "index, follow",
  themeColor: "#000000",
  authors: [
    { name: "RARA Studio — رارا ستوديو", url: "https://rarastudio.com" },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://rarastudio.com/",
    title: "RARA Studio — رارا ستوديو",
    description:
      "RARA Studio (رارا ستوديو) is a creative hub for filmmakers and visual creators — مساحة إبداعية لصنّاع الأفلام والمحتوى البصري.",
    siteName: "RARA Studio — رارا ستوديو",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RARA Studio OG Image",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ar_IQ"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RARA Studio — رارا ستوديو",
    description:
      "A creative space for filmmaking and visual storytelling — رارا ستوديو، مساحة لصناعة الأفلام والصور البصرية.",
    images: ["/logo.png"],
    site: "@rara_studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RARA Studio — رارا ستوديو",
              url: "https://rarastudio.com/",
              logo: "/logo.png",
              email: "contact@rarastudio.com",
              slogan: "Create. Express. Inspire. — اصنع، عبّر، وألهم.",
              description:
                "RARA Studio (رارا ستوديو) is a creative production space dedicated to filmmaking, visual storytelling, and artistic expression — مساحة إنتاج إبداعي لصناعة الأفلام والصور البصرية.",
              sameAs: [
                "https://www.instagram.com/rara.studio/",
                "https://www.facebook.com/rara.studio/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Baghdad",
                addressCountry: "IQ",
              },
            }),
          }}
        />
      </head>
      <body className={`antialiased`} suppressHydrationWarning>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
