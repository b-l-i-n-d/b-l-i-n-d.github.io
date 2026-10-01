"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";

export type TransitionDirection = "default" | "next" | "prev";

type RouteResolver = () => void;
let pendingResolver: RouteResolver | null = null;
let pendingTargetHref: string | null = null;
let activeDirection: TransitionDirection = "default";

/**
 * Registers the pending view transition resolver callback along with optional target URL and direction.
 */
export function registerRouteTransition(
  resolve: RouteResolver,
  targetHref?: string,
  direction: TransitionDirection = "default"
) {
  pendingResolver = resolve;
  if (targetHref) {
    pendingTargetHref = targetHref;
  }
  activeDirection = direction;
}

/**
 * Initiates a browser-native View Transition for any internal route change.
 * Handles directional slides for sequential case studies (next/prev) and subtle elevation
 * crossfades for general navigation, with zero layout shift across scroll position changes.
 */
export function startRouteTransition(
  navigate: () => void,
  targetHref?: string,
  direction: TransitionDirection = "default"
): Promise<void> {
  if (
    typeof document === "undefined" ||
    !("startViewTransition" in document) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    navigate();
    return Promise.resolve();
  }

  activeDirection = direction;
  document.documentElement.classList.add("route-transitioning");
  if (direction === "next") {
    document.documentElement.classList.add("transition-slide-next");
  } else if (direction === "prev") {
    document.documentElement.classList.add("transition-slide-prev");
  }

  const transition = (document as any).startViewTransition(() => {
    return new Promise<void>((resolve) => {
      let isResolved = false;

      const safeResolve = () => {
        if (!isResolved) {
          isResolved = true;
          resolve();
        }
      };

      registerRouteTransition(safeResolve, targetHref, direction);

      // Failsafe timeout in case route update doesn't trigger pathname change
      setTimeout(() => {
        safeResolve();
      }, 650);

      navigate();
    });
  });

  transition.finished.finally(() => {
    document.documentElement.classList.remove("route-transitioning");
    document.documentElement.classList.remove("transition-slide-next");
    document.documentElement.classList.remove("transition-slide-prev");
    pendingResolver = null;
    pendingTargetHref = null;
    activeDirection = "default";
  });

  return transition.finished;
}

/**
 * Hook providing transition-aware push and replace methods on top of Next.js useRouter.
 */
export function useTransitionRouter() {
  const router = useRouter();

  const push = useCallback(
    (href: string, options?: any, direction: TransitionDirection = "default") => {
      startRouteTransition(
        () => {
          router.push(href, { scroll: false, ...options });
        },
        href,
        direction
      );
    },
    [router]
  );

  const replace = useCallback(
    (href: string, options?: any, direction: TransitionDirection = "default") => {
      startRouteTransition(
        () => {
          router.replace(href, { scroll: false, ...options });
        },
        href,
        direction
      );
    },
    [router]
  );

  return {
    ...router,
    push,
    replace,
  };
}

/**
 * Global component that synchronizes Next.js App Router DOM commit cycles
 * with the browser's View Transitions API.
 * Also handles browser back/forward (popstate) transitions and intercepts
 * internal cross-route anchor link clicks automatically.
 */
export function ViewTransitionWatcher() {
  const pathname = usePathname();
  const currentPath = useRef(pathname);
  const router = useRouter();

  // 1. Synchronize router DOM updates with the View Transition snapshot
  useEffect(() => {
    if (currentPath.current !== pathname) {
      currentPath.current = pathname;

      // Handle intelligent scroll positioning for the incoming page snapshot
      const hash = pendingTargetHref
        ? pendingTargetHref.split("#")[1]
        : typeof window !== "undefined"
          ? window.location.hash.slice(1)
          : null;

      if (hash) {
        const targetEl =
          document.getElementById(hash) ||
          document.querySelector(`[data-chapter-id="${hash}"]`) ||
          document.querySelector(`[data-project-id="${hash}"]`);

        if (targetEl) {
          const navbarHeight = 116;
          const elementTop = targetEl.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementTop - navbarHeight),
            left: 0,
            behavior: "instant" as ScrollBehavior,
          });
        }
      } else {
        // Reset scroll position to top instantly without smooth scroll interference
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = prevScrollBehavior;
      }

      if (pendingResolver) {
        pendingResolver();
        pendingResolver = null;
      }
    }
  }, [pathname]);

  // 2. Browser Back / Forward (popstate) View Transitions
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const handlePopState = () => {
      document.documentElement.classList.add("route-transitioning");
      const transition = (document as any).startViewTransition(() => {
        return new Promise<void>((resolve) => {
          registerRouteTransition(resolve, window.location.href, "default");
          setTimeout(resolve, 650);
        });
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove("route-transitioning");
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Global delegated click interception for internal navigation links
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("startViewTransition" in document) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const handleDocumentClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;

      const target = anchor.getAttribute("target");
      if (target && target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (anchor.hasAttribute("data-no-view-transition")) return;

      const rawHref = anchor.getAttribute("href");
      if (
        !rawHref ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.href);

        // Only intercept same-origin navigation
        if (url.origin !== window.location.origin) return;

        // If clicking a hash-only anchor on the same page, allow native smooth scroll
        if (url.pathname === window.location.pathname && url.search === window.location.search) {
          return;
        }

        // Cross-route navigation detected!
        e.preventDefault();
        const targetHref = `${url.pathname}${url.search}${url.hash}`;
        const dir =
          (anchor.getAttribute("data-transition-direction") as TransitionDirection) || "default";

        startRouteTransition(
          () => {
            router.push(targetHref, { scroll: false });
          },
          targetHref,
          dir
        );
      } catch {
        // Fall back to standard link behavior
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: false });
    return () => document.removeEventListener("click", handleDocumentClick, { capture: false });
  }, [router]);

  return null;
}
