"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { startRouteTransition, TransitionDirection } from "./ViewTransitionWatcher";

export interface ViewTransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children?: React.ReactNode;
  transitionDirection?: TransitionDirection;
}

/**
 * Enhanced Link component that invokes the native View Transitions API
 * (document.startViewTransition) on internal route changes for seamless,
 * layout-shift-free transitions synchronized with Next.js App Router.
 */
export const ViewTransitionLink = React.forwardRef<HTMLAnchorElement, ViewTransitionLinkProps>(
  ({ href, onClick, children, transitionDirection = "default", ...props }, ref) => {
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

      e.preventDefault();
      startRouteTransition(
        () => {
          router.push(targetHref, { scroll: false });
        },
        targetHref,
        transitionDirection
      );
    };

    return (
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        data-transition-direction={transitionDirection}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
ViewTransitionLink.displayName = "ViewTransitionLink";
