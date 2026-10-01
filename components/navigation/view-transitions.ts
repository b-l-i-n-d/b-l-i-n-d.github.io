"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export type TransitionDirection = "default" | "next" | "prev";

export type RouteResolver = () => void;

interface TransitionState {
  pendingResolver: RouteResolver | null;
  pendingTargetHref: string | null;
  activeDirection: TransitionDirection;
}

export const transitionState: TransitionState = {
  pendingResolver: null,
  pendingTargetHref: null,
  activeDirection: "default",
};

/**
 * Registers the pending view transition resolver callback along with optional target URL and direction.
 */
export function registerRouteTransition(
  resolve: RouteResolver,
  targetHref?: string,
  direction: TransitionDirection = "default"
) {
  transitionState.pendingResolver = resolve;
  if (targetHref) {
    transitionState.pendingTargetHref = targetHref;
  }
  transitionState.activeDirection = direction;
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

  transitionState.activeDirection = direction;
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
    transitionState.pendingResolver = null;
    transitionState.pendingTargetHref = null;
    transitionState.activeDirection = "default";
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
