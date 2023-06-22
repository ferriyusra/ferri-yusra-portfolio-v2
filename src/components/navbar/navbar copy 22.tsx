"use client";

import { useState, useEffect } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-5 md:py-20">
      <div className="flex md:flex-row justify-between items-center">
        <div className="flex flex-col">
          <a href="/">
            <h1 className={`font-semibold text-xl ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Ferri Yusra</h1>
            <p className={`text-base font-light ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>Backend Developer</p>
          </a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/about">
            <div className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : 'dark:text-gray-900'}`}>About</div>
          </a>
          <a href="/projects">
            <div className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : 'dark:text-gray-900'}`}>Projects</div>
          </a>
          <a href="/contact">
            <div className={`text-gray-700 ${darkMode ? 'dark:text-gray-300' : 'dark:text-gray-900'}`}>Contact</div>
          </a>
        </div>
        <div className="hidden md:flex">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 px-3 rounded focus:outline-none"
            onClick={handleDarkModeToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className={`w-6 h-6 ${darkMode ? 'text-yellow-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-400'}`}
            >
              {darkMode ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              )}
            </svg>
          </button>
        </div>

        <div className="md:hidden mt-4">
          <nav>

            {/* <div className="background z-30" style={{ clipPath: 'circle(122% at 88% 16%)' }}></div>
            <button className="z-40" onClick={handleMenuToggle}>
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 2.5 L 20 2.5"></path>
                <path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 9.423 L 20 9.423"></path>
                <path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" d="M 2 16.346 L 20 16.346"></path>
              </svg>
            </button> */}

            {showMenu && (
              <ul className={`z-40 p-5 absolute top-0 right-0 ${darkMode ? 'bg-black' : 'bg-white'} shadow-md rounded-md h-screen w-[80%] max-h-screen overflow-y-auto`}>
                <li
                  className="flex items-center mb-5 space-x-6 cursor-pointer transition-opacity duration-500"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px) translateZ(0px)',
                  }}
                >
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 px-3 rounded focus:outline-none"
                    onClick={handleDarkModeToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      className={`w-6 h-6 ${darkMode ? 'text-yellow-500 dark:text-yellow-500' : 'text-gray-600 dark:text-gray-400'}`}
                    >
                      {darkMode ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        ></path>
                      )}
                    </svg>
                  </button>
                </li>

                <li
                  className="flex items-center mb-5 space-x-6 cursor-pointer transition-opacity duration-500"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px) translateZ(0px)',
                  }}
                >
                  <a href="/about">
                    <p className={`text-xl ${darkMode ? 'dark:text-gray-300' : 'text-gray-500'}`}>
                      About
                    </p>
                  </a>
                </li>
                <li
                  className="flex items-center mb-5 space-x-6 cursor-pointer transition-opacity duration-500"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px) translateZ(0px)',
                  }}
                >
                  <a href="/projects">
                    <p className={`text-xl ${darkMode ? 'dark:text-gray-300' : 'text-gray-500'}`}>
                      Project
                    </p>
                  </a>
                </li>
                <li
                  className="flex items-center mb-5 space-x-6 cursor-pointer transition-opacity duration-500"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px) translateZ(0px)',
                  }}
                >
                  <a href="/contact">
                    <p className={`text-xl ${darkMode ? 'dark:text-gray-300' : 'text-gray-500'}`}>
                      Contact
                    </p>
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
