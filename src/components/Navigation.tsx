import { useState } from "react";

type Theme = "light" | "dark";

const Navigation = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const btnText = theme === "light" ? "Dark" : "Light";

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full  shadow-2xl">
      <nav className="flex justify-between items-center px-6 py-4 bg-white  dark:bg-gray-800">
        <h1 className="font-bold text-xl text-gray-800 dark:text-white">
          My App
        </h1>

        <div className="flex flex-row items-center gap-6">
          <ul className="flex flex-row gap-6 text-gray-700">
            <li>
              <a href="" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
          >
            {btnText}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
