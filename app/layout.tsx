import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "VelvetCall – Poker & Casino as Entertainment",
  description:
    "Entertainment-first poker & casino guide. A small curated list with plain-language expectations, region fit, and what to verify before you deposit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bokeh" aria-hidden="true" />
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
