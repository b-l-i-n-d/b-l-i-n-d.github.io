"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { registerRouteTransition } from "./ViewTransitionWatcher";

export interface ViewTransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children?: React.ReactNode;
}

/**
 * Enhanced Link component that invokes the native View Transitions API
 * (document.startViewTransition) on internal route changes for seamless,
 * layout-shift-free transitions synchronized with Next.js App Router.
 */
export const ViewTransitionLink = React.forwardRef<HTMLAnchorElement, ViewTransitionLinkProps>(
  ({ href, onClick, children, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(e);
      if (e.defaultPrevented) return;

      const targetHref = typeof href === "string" ? href : href.pathname || "";

      // Don't intercept external links, new tab links, mailto/tel, or hash-only on same page
      const isExternal =
        targetHref.startsWith("http") ||
        targetHref.startsWith("mailto:") ||
        targetHref.startsWith("tel:") ||
        props.target === "_blank";

      if (isExternal || targetHref === pathname) {
        return;
      }

      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        e.preventDefault();
        document.documentElement.classList.add("route-transitioning");

        const transition = document.startViewTransition(() => {
          return new Promise<void>((resolve) => {
            registerRouteTransition(() => {
              resolve();
            });

            // Fallback timeout in case navigation finishes instantly or via bfcache
            setTimeout(() => {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
              resolve();
            }, 650);

            router.push(targetHref, { scroll: false });
          });
        });

        transition.finished.finally(() => {
          document.documentElement.classList.remove("route-transitioning");
        });
      }
    };

    return (
      <Link ref={ref} href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }
);
ViewTransitionLink.displayName = "ViewTransitionLink";
