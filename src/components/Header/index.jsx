import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [color, setColor] = useState("");
  const [initialBg, setInitialBg] = useState("");

  useEffect(() => {
    const currentBg = window.getComputedStyle(document.body).backgroundColor;
    setInitialBg(currentBg);
  }, []);

  useEffect(() => {
    if (color.trim() === "") {
      document.body.style.backgroundColor = initialBg;
    } else {
      document.body.style.backgroundColor = color;
    }
  }, [color, initialBg]);

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <nav className="w-full bg-white border-b dark:bg-gray-900 p-4 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Flowbite
          </span>
        </Link>

        <ul className="flex space-x-6 font-medium">
          <li>
            <Link
              to={"/"}
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/services"}
              className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
            >
              Services
            </Link>
          </li>
        </ul>

        <div className="relative w-72">
          <input
            type="text"
            placeholder="Түс жаз: red, blue, green, yellow же HEX (#ff0000)"
            value={color}
            onChange={handleInputChange}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;