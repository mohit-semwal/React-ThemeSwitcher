import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AvatarContext } from "../context/AvatarContext";

export default function Card() {
  const { avatar, username } = useContext(AvatarContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`w-100 m-auto border rounded-lg shadow transition-colors duration-300
        ${isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-gray-900"}`}
    >
      <a href="/">
        <img className="p-8 rounded-t-lg" src={avatar} alt={username} />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          ⭐⭐⭐⭐☆
          <span
            className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3
              ${isDark ? "bg-blue-200 text-blue-800" : "bg-blue-100 text-blue-800"}`}
          >
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">
            $599
          </span>
          <a
            href="/"
            className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center
              ${isDark
                ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300"}`}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
