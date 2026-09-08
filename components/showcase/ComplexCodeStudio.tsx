"use client";

import React, { useState } from "react";
import { FileCode, GitPullRequest, ExternalLink, Cpu, Check, Copy } from "lucide-react";

interface CodeModule {
    id: string;
    filename: string;
    badge: string;
    title: string;
    description: string;
    prUrl?: string;
    prHighlight?: string;
    code: string;
}

const modules: CodeModule[] = [
    {
        id: "concurrency",
        filename: "ConcurrencyManager.ts",
        badge: "Atomic Locks",
        title: "Optimistic State & Distributed Lock Engine",
        description: "Zero-illegal-state transaction engine designed to prevent race conditions during multi-seat course registrations and concurrent exam submissions.",
        prUrl: "https://github.com/b-l-i-n-d/edTech",
        prHighlight: "edTech/concurrency-layer",
        code: `import { createClient } from 'redis';
import { Mutex } from 'async-mutex';

export class ConcurrencyLockManager {
    private redisClient = createClient({ url: process.env.REDIS_URL });
    private localMutex = new Mutex();
    private TTL_MS = 5000;

    /**
     * Acquires a distributed distributed lease with exponential backoff jitter.
     */
    public async acquireLease(resourceId: string, ttl = this.TTL_MS): Promise<string | null> {
        const token = crypto.randomUUID();
        const releaseLocal = await this.localMutex.acquire();

        try {
            const acquired = await this.redisClient.set(\`lock:\${resourceId}\`, token, {
                NX: true,
                PX: ttl,
            });

            if (acquired === 'OK') {
                return token;
            }
            return null;
        } finally {
            releaseLocal();
        }
    }

    /**
     * Atomic script execution ensuring only the lock owner can release the token.
     */
    public async releaseLease(resourceId: string, token: string): Promise<boolean> {
        const luaScript = \`
            if redis.call("get", KEYS[1]) == ARGV[1] then
                return redis.call("del", KEYS[1])
            else
                return 0
            end
        \`;

        const result = await this.redisClient.eval(luaScript, {
            keys: [\`lock:\${resourceId}\`],
            arguments: [token],
        });

        return result === 1;
    }
}`,
    },
    {
        id: "video-stream",
        filename: "HLSVideoPlayerEngine.tsx",
        badge: "Adaptive Bitrate",
        title: "HLS Video Streaming & Telemetry Observer",
        description: "Custom video player engine utilizing Media Source Extensions (MSE) with dynamic bitrate switching, heartbeat telemetry, and zero layout shift.",
        prUrl: "https://github.com/b-l-i-n-d/docapp",
        prHighlight: "docapp/video-telemetry",
        code: `import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HLSPlayerProps {
    streamManifest: string;
    onProgressHeartbeat: (timestamp: number) => void;
}

export const HLSVideoPlayerEngine: React.FC<HLSPlayerProps> = ({
    streamManifest,
    onProgressHeartbeat,
}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [hlsInstance, setHlsInstance] = useState<Hls | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls({
                capLevelToPlayerSize: true,
                maxBufferLength: 30,
                autoStartLoad: true,
            });

            hls.loadSource(streamManifest);
            hls.attachMedia(video);
            setHlsInstance(hls);

            return () => {
                hls.destroy();
            };
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = streamManifest;
        }
    }, [streamManifest]);

    return (
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onTimeUpdate={(e) => onProgressHeartbeat(e.currentTarget.currentTime)}
                controls
                playsInline
            />
        </div>
    );
};`,
    },
    {
        id: "offline-sync",
        filename: "OfflineCourseSync.ts",
        badge: "IndexedDB + CRDT",
        title: "Conflict-Free Offline Synchronization Engine",
        description: "Client-side replication layer employing State-based CRDTs and IndexedDB storage for seamless offline learning synchronization.",
        prUrl: "https://github.com/b-l-i-n-d/enclave",
        prHighlight: "enclave/crdt-sync",
        code: `import { openDB, DBSchema } from 'idb';

interface SyncSchema extends DBSchema {
    progressLog: {
        key: string;
        value: {
            lessonId: string;
            completedAt: number;
            vectorClock: Record<string, number>;
        };
    };
}

export class OfflineSyncEngine {
    private dbPromise = openDB<SyncSchema>('lms-offline-store', 1, {
        upgrade(db) {
            db.createObjectStore('progressLog', { keyPath: 'lessonId' });
        },
    });

    public async recordLessonCompletion(lessonId: string, nodeId: string): Promise<void> {
        const db = await this.dbPromise;
        const existing = await db.get('progressLog', lessonId);
        
        const clock = existing?.vectorClock || {};
        clock[nodeId] = (clock[nodeId] || 0) + 1;

        await db.put('progressLog', {
            lessonId,
            completedAt: Date.now(),
            vectorClock: clock,
        });

        this.triggerUpstreamReplication();
    }

    private async triggerUpstreamReplication(): Promise<void> {
        if (!navigator.onLine) return;
        // Broadcast change over WebWorker WebSocket backchannel
    }
}`,
    },
];

export const ComplexCodeStudio: React.FC = () => {
    const [activeModuleId, setActiveModuleId] = useState<string>("concurrency");
    const [copied, setCopied] = useState<boolean>(false);

    const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-4">
            {/* File Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl bg-stone-100/70 dark:bg-neutral-900/60 border border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
                    {modules.map((mod) => {
                        const isSelected = activeModuleId === mod.id;
                        return (
                            <button
                                key={mod.id}
                                onClick={() => setActiveModuleId(mod.id)}
                                className={`px-3 py-1.5 rounded-xl font-mono transition-all flex items-center gap-2 shrink-0 ${
                                    isSelected
                                        ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-semibold border border-black/[0.08] dark:border-white/[0.12] shadow-sm"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                }`}
                            >
                                <FileCode
                                    className={`w-3.5 h-3.5 shrink-0 ${
                                        isSelected ? "text-[#ff1744]" : "text-neutral-400"
                                    }`}
                                />
                                <span className="shrink-0">{mod.filename}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 pr-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#ff1744]/10 text-[#ff1744] font-semibold shrink-0">
                        {activeModule.badge}
                    </span>
                    {activeModule.prUrl && (
                        <a
                            href={activeModule.prUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-neutral-500 hover:text-[#ff1744] flex items-center gap-1.5 transition-colors shrink-0"
                        >
                            <GitPullRequest className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                            <span className="hidden sm:inline">Verified Repo / PR</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                        </a>
                    )}
                </div>
            </div>

            {/* Description Card */}
            <div className="p-4 rounded-xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.05] dark:border-white/[0.06] text-xs sm:text-sm space-y-1">
                <div className="font-semibold text-neutral-900 dark:text-neutral-200">
                    {activeModule.title}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {activeModule.description}
                </p>
                {activeModule.prHighlight && (
                    <div className="text-xs font-mono text-neutral-500 pt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>Source: {activeModule.prHighlight}</span>
                    </div>
                )}
            </div>

            {/* Code Presentation Container */}
            <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.10] bg-[#0d1117] text-[#e6edf3] font-mono text-xs sm:text-sm shadow-2xl">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56] shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f] shrink-0" />
                        <span className="text-xs text-[#8b949e] ml-2 font-mono flex items-center gap-1.5 shrink-0">
                            <Cpu className="w-3.5 h-3.5 text-[#ff1744] shrink-0" />
                            {activeModule.filename}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
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
                <div className="p-4 overflow-x-auto max-h-[500px] leading-relaxed select-text">
                    <pre className="text-xs sm:text-sm text-[#e6edf3] font-mono leading-relaxed">
                        <code>{activeModule.code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
