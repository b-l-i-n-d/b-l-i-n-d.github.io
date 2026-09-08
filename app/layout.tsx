import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { fontMono, fontSans, fontScript } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
    icons: {
        icon: "/zap.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-stone-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased selection:bg-rose-600 selection:text-white overflow-x-hidden transition-colors duration-200",
                    fontSans.variable,
                    fontMono.variable,
                    fontScript.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark", enableSystem: true }}
                >
                    <div className="relative flex flex-col min-h-screen bg-stone-50 dark:bg-neutral-950 transition-colors duration-200">
                        <Navbar />
                        <main className="w-full flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                    <ToastContainer />
                </Providers>
            </body>
        </html>
    );
}
