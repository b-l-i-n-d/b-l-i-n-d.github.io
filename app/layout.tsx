import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
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
        { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
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
        <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex flex-col min-h-screen bg-neutral-950">
                        <Navbar />
                        <main className="w-full flex-grow">
                            {children}
                        </main>
                    </div>
                    <ToastContainer />
                </Providers>
            </body>
        </html>
    );
}
