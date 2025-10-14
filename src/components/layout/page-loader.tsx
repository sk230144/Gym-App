"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    // Customize NProgress styles
    const style = document.createElement("style");
    style.innerHTML = `
      #nprogress .bar {
        background: hsl(var(--accent)) !important;
        height: 3px !important;
      }
      #nprogress .peg {
        box-shadow: 0 0 10px hsl(var(--accent)), 0 0 5px hsl(var(--accent)) !important;
      }
      #nprogress .spinner-icon {
        border-top-color: hsl(var(--accent)) !important;
        border-left-color: hsl(var(--accent)) !important;
      }
    `;
    document.head.appendChild(style);
    
    // Initial done() call on first load
    NProgress.done();

    return () => {
        document.head.removeChild(style);
    }
  }, []);

  return null;
}
