import { Fira_Code as FontMono, Inter as FontSans, Caveat as FontScript } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});

export const fontScript = FontScript({
    subsets: ["latin"],
    variable: "--font-script",
    display: "swap",
});
