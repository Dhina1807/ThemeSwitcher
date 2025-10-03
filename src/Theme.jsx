import { useState } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 
      ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Theme Switcher</h1>
        <p className="mb-5">
          Current Theme: {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-2 rounded-lg border shadow-md 
          hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
