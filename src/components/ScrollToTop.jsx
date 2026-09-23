import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on every route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname]);

  return null;
}
