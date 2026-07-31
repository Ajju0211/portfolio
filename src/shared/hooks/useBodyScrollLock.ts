/**
 * @file useBodyScrollLock.ts
 * @description Custom hook that locks / unlocks `document.body` scroll.
 *
 * Following the Single Responsibility Principle (SRP), this hook
 * owns ONLY the concern of body-scroll management.  Components that
 * need this behaviour import the hook instead of touching the DOM
 * themselves, satisfying the Dependency Inversion Principle (DIP).
 */

import { useEffect } from "react";

/**
 * Locks body scroll while the consumer component is mounted,
 * and restores it automatically on unmount.
 *
 * @example
 * ```tsx
 * const Modal = () => {
 *   useBodyScrollLock();   // body scroll locked for Modal's lifetime
 *   return <div>…</div>;
 * };
 * ```
 */
export function useBodyScrollLock(): void {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}
