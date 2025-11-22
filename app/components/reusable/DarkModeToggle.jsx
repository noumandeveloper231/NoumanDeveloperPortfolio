'use client'
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark"); // fallback

  // Load theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("light-mode", !prefersDark);
    }
  }, []);

  // Apply theme and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") root.classList.add("light-mode");
    else root.classList.remove("light-mode");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme !== "light"}
        onChange={handleToggle}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[var(--primary-color)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-500 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
    </label>
  );
};

export default ThemeToggle;
