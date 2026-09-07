import { Fira_Code as FontMono, Inter as FontSans, Caveat as FontScript } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const fontScript = FontScript({
    subsets: ["latin"],
    variable: "--font-script",
});
