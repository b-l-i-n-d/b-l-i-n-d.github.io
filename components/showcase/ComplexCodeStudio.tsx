"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import type { Language } from "prism-react-renderer";
import { FileCode, GitPullRequest, ExternalLink, Cpu, Check, Copy } from "lucide-react";
import type { ShowcaseCodeModule } from "@/types/portfolio";

interface ComplexCodeStudioProps {
    modules: ShowcaseCodeModule[];
}

const SUPPORTED_LANGUAGES = new Set<Language>([
    "markup",
    "bash",
    "css",
    "javascript",
    "jsx",
    "json",
    "markdown",
    "python",
    "sql",
    "tsx",
    "typescript",
    "yaml",
]);

const langFromFilename = (filename: string): Language | null => {
    const ext = filename.split(".").pop()?.toLowerCase() ?? "";
    switch (ext) {
        case "ts":
            return "typescript";
        case "tsx":
            return "tsx";
        case "js":
            return "javascript";
        case "jsx":
            return "jsx";
        case "sql":
            return "sql";
        case "css":
            return "css";
        case "json":
            return "json";
        case "md":
        case "mdx":
            return "markdown";
        case "py":
            return "python";
        case "sh":
        case "bash":
            return "bash";
        case "html":
        case "xml":
            return "markup";
        default:
            return null;
    }
};

const basenameOf = (filename: string): string => filename.split("/").pop() ?? filename;

export const ComplexCodeStudio: React.FC<ComplexCodeStudioProps> = ({ modules }) => {
    const [activeModuleId, setActiveModuleId] = useState<string>(() => modules[0]?.id ?? "");
    const [copied, setCopied] = useState<boolean>(false);

    const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];
    const language = langFromFilename(activeModule.filename);

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            {/* File Switcher Tabs */}
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm whitespace-nowrap">
                        {modules.map((mod) => {
                            const isSelected = activeModuleId === mod.id;
                            return (
                                <button
                                    key={mod.id}
                                    title={mod.filename}
                                    onClick={() => setActiveModuleId(mod.id)}
                                    className={`px-3 py-1.5 rounded-xl font-mono font-medium transition-colors flex items-center gap-2 shrink-0 border ${
                                        isSelected
                                            ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-black/[0.10] dark:border-white/[0.15] shadow-sm"
                                            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border-transparent hover:border-black/[0.06] dark:hover:border-white/[0.08] hover:bg-white/50 dark:hover:bg-neutral-800/40"
                                    }`}
                                >
                                    <FileCode
                                        className={`w-3.5 h-3.5 shrink-0 ${
                                            isSelected ? "text-[#ff1744]" : "text-neutral-400"
                                        }`}
                                    />
                                    <span className="shrink-0">{basenameOf(mod.filename)}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center gap-2 pr-2 shrink-0">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#ff1744]/10 text-rose-700 dark:text-rose-400 font-semibold shrink-0 min-w-28 text-center">
                        {activeModule.badge}
                    </span>
                    {activeModule.prUrl && (
                        <a
                            href={activeModule.prUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-[#ff1744] flex items-center gap-1.5 transition-colors shrink-0"
                        >
                            <GitPullRequest className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                            <span className="hidden sm:inline">Verified Repo / PR</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description Card */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.06] text-xs sm:text-sm space-y-1 min-h-[118px]">
                <div className="font-semibold text-neutral-900 dark:text-neutral-200">
                    {activeModule.title}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {activeModule.description}
                </p>
                {activeModule.originRepo && (
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-400 pt-1 flex items-center gap-1.5">
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        <span>{activeModule.originRepo}</span>
                    </div>
                )}
                {activeModule.prHighlight && (
                    <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>Source: {activeModule.prHighlight}</span>
                    </div>
                )}
            </div>

            {/* Code Presentation Container */}
            <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-[#0d1117] text-[#e6edf3] font-mono text-xs sm:text-sm shadow-2xl">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
                    <div className="flex items-center gap-2 min-w-0">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56] shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f] shrink-0" />
                        <span className="text-xs text-[#8b949e] ml-2 font-mono flex items-center gap-1.5 shrink-0">
                            <Cpu className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                            <span className="truncate" title={activeModule.filename}>
                                {activeModule.filename}
                            </span>
                        </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => copyCode(activeModule.code)}
                            className="px-2.5 py-1 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] flex items-center gap-1.5 transition-colors active:scale-95 shrink-0"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    <span className="text-xs">Copied</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 text-[#8b949e] shrink-0" />
                                    <span className="text-xs">Copy Code</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Code Body */}
                <div className="p-4 overflow-auto max-h-[540px] leading-relaxed select-text">
                    {language && SUPPORTED_LANGUAGES.has(language) ? (
                        <Highlight code={activeModule.code} language={language} theme={themes.oneDark}>
                            {({ style, tokens, getLineProps, getTokenProps }) => (
                                <pre
                                    className="text-xs sm:text-sm text-[#e6edf3] font-mono leading-relaxed min-w-max"
                                    style={{ ...style, background: "transparent", margin: 0 }}
                                >
                                    {tokens.map((line, i) => (
                                        <div
                                            key={i}
                                            {...getLineProps({ line })}
                                            className="min-h-[1.4em] py-0.5"
                                        >
                                            <span className="select-none inline-block w-8 mr-4 text-right text-[#484f58]">
                                                {i + 1}
                                            </span>
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token })} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>
                    ) : (
                        <pre className="text-xs sm:text-sm text-[#e6edf3] font-mono leading-relaxed min-w-max">
                            <code>{activeModule.code}</code>
                        </pre>
                    )}
                </div>
            </div>
        </div>
    );
};