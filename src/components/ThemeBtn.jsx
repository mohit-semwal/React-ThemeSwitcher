import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeBtn() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark"; // false

  const handleToggle = () => {
  setTheme(isDark ? "light" : "dark");
};

  return (
    <label className="relative inline-flex items-center w-20 h-10 cursor-pointer">
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        className="sr-only"
        checked={isDark}
        onChange={handleToggle}
      />

      {/* Track */}
      <div
        className={`w-20 h-10 rounded-full transition-colors duration-300
                    ${isDark ? "bg-gray-800" : "bg-yellow-400"}`}
      ></div>

      {/* Knob */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md
                    transform transition-transform duration-300
                    flex items-center justify-center
                    ${isDark ? "translate-x-10" : "translate-x-0"}`}
      >
        {isDark ? (
          <FaMoon className="text-gray-800 text-sm" />
        ) : (
          <FaSun className="text-yellow-500 text-sm" />
        )}
      </div>
    </label>
  );
}
