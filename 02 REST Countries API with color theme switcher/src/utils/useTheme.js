// src/utils/useTheme.js
import { useState, useEffect } from "react";

export function useTheme() {
  // 1. Read initial theme from OS preference on mount:
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // 2. Whenever `theme` changes, write it back to <html data-theme=...>:
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);

  // 3. Expose a toggler function:
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
