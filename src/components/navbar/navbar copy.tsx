"use client";
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-center header-height ${darkMode ? 'dark-body' : ''
        }`}
    >
      <div className={`flex items-center justify-between w-full max-w-6xl px-6 mx-auto ${darkMode ? 'dark-body' : ''}`}>
        <div>
          <h1 className={`font-semibold text-xl ${darkMode ? 'dark:text-gray-100' : 'text-black'}`}>Ferri Yusra</h1>
          <p className={`text-base font-light  ${darkMode ? 'text-gray-400 dark:text-gray-300' : 'text-black'}`}>Software Engineer</p>
        </div>
        <div className="hidden sm:flex items-center justify-center space-x-4">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <button className="ml-4" onClick={toggleDarkMode}>
            {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </button>
          <button className="ml-4 sm:hidden" onClick={toggleMenu}>
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          className={`sm:hidden absolute top-24 left-0 right-0 ${darkMode ? 'dark-body' : ''
            } transition-all duration-300 ease-in-out`}
        >
          <ul className={`flex flex-col items-center py-4 bg-white dark:bg-black ${darkMode ? 'text-white' : 'text-black'}`}>
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className="transform transition-transform duration-300 ease-in-out"
                style={{ transitionDelay: `${index * 50}ms`, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)' }}
              >
                <a
                  href={item.href}
                  className="block py-2 px-4 hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
