import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Dennis Muuo - Portfolio",
  description: "A portfolio of Dennis Muuo, a Front-end Software Engineer based in Nairobi, Kenya.",
  authors: [
    { name: "Dennis Muuo", url: "www.dennismuuo.me" },
  ],
  openGraph: {
    title: "Dennis Muuo - Portfolio",
    description: "A portfolio of Dennis Muuo, a Front-end Software Engineer based in Nairobi, Kenya.",
    url: "https://www.dennismuuo.me",
    siteName: "Dennis Muuo - Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.dennismuuo.me/Screenshot.png",
        width: 3410,
        height: 2072,
        alt: "Dennis Muuo - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${silka.className}`}>
        <ThemeProvider attribute="class">
          <div style={{
            flex: "none",
            height: "100%",
            left: "calc(50.00000000000002% - 100% / 2)",
            pointerEvents: "none",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "4",
          }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
