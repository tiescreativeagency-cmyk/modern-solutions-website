import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import { site } from "@/data/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
