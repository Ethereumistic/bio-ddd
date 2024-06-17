"use client";

import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="inline-flex items-center focus:outline-none text-dgreen dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaMoon className="w-6 h-6 mr-2 mt-2 " />
      ) : (
        <FaSun className="w-6 h-6 mr-2 mt-2" />
      )}
      
    </button>
  );
};

export default ThemeSwitch;