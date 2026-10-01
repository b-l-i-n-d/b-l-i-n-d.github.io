import type { Language, PrismTheme } from "prism-react-renderer";

/**
 * cssPrismTheme
 *
 * Deterministic Prism theme powered by CSS variables defined in globals.css.
 * Because all token colors reference `var(--prism-*)`, the generated HTML
 * is 100% identical on both Server-Side Rendering (SSR) and Client Hydration,
 * completely eliminating React hydration mismatch errors.
 *
 * It also enables instantaneous 0ms CSS cascade switching between light
 * and dark modes without requiring React to re-render token trees.
 */
export const cssPrismTheme: PrismTheme = {
  plain: {
    color: "var(--prism-text, #c9d1d9)",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "var(--prism-comment, #8b949e)",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "var(--prism-punctuation, #8b949e)",
      },
    },
    {
      types: ["property", "tag", "boolean", "number", "constant", "symbol", "deleted"],
      style: {
        color: "var(--prism-number, #79c0ff)",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "var(--prism-string, #a5d6ff)",
      },
    },
    {
      types: ["operator", "entity", "url"],
      style: {
        color: "var(--prism-operator, #ff7b72)",
      },
    },
    {
      types: ["atrule", "attr-value", "keyword"],
      style: {
        color: "var(--prism-keyword, #ff7b72)",
      },
    },
    {
      types: ["function"],
      style: {
        color: "var(--prism-function, #d2a8ff)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "var(--prism-class, #7ee787)",
      },
    },
    {
      types: ["regex", "important", "variable"],
      style: {
        color: "var(--prism-variable, #ffa657)",
      },
    },
  ],
};

const EXT_TO_LANG: Record<string, Language> = {
  ts: "typescript",
  typescript: "typescript",
  tsx: "tsx",
  js: "javascript",
  javascript: "javascript",
  jsx: "jsx",
  sql: "sql",
  json: "json",
  css: "css",
  py: "python",
  python: "python",
  sh: "bash",
  bash: "bash",
  yaml: "yaml",
  yml: "yaml",
  html: "markup",
  xml: "markup",
  svg: "markup",
};

/**
 * Normalizes a file extension, filename, or language identifier to a supported Prism language.
 */
export const getPrismLanguage = (input?: string): Language => {
  if (!input) return "typescript";
  const ext = input.includes(".") ? (input.split(".").pop() ?? "") : input;
  return EXT_TO_LANG[ext.toLowerCase()] ?? "typescript";
};
