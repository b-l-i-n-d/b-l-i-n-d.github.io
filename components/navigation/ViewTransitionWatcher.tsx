"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

let routeTransitionResolver: (() => void) | null = null;

export function registerRouteTransition(resolve: () => void) {
  routeTransitionResolver = resolve;
}

/**
 * Monitors route changes to cleanly synchronize native View Transitions API
 * promises with Next.js App Router DOM commit cycles, ensuring zero layout shift.
 */
export function ViewTransitionWatcher() {
  const pathname = usePathname();
  const currentPath = useRef(pathname);

  useEffect(() => {
    if (currentPath.current !== pathname) {
      currentPath.current = pathname;
      if (routeTransitionResolver) {
        // Reset scroll position to top before capturing the incoming snapshot
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        routeTransitionResolver();
        routeTransitionResolver = null;
      }
    }
  }, [pathname]);

  return null;
}
