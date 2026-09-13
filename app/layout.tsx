import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { fontMono, fontSans, fontScript } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/zap.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/zap.svg",
    apple: "/zap.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero-poster.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        suppressHydrationWarning
        className={clsx(
          "min-h-screen bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased selection:bg-rose-600 selection:text-white overflow-x-hidden transition-colors duration-200",
          fontSans.variable,
          fontMono.variable,
          fontScript.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: true }}>
          <div className="relative flex flex-col min-h-screen bg-stone-50 dark:bg-neutral-950 transition-colors duration-200">
            <Navbar />
            <main className="w-full flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
