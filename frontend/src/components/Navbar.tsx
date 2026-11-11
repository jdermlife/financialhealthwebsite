import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const links = ['Home', 'Articles', 'Resources', 'About'];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-blue-600 text-xl font-bold text-white">
            F
          </span>
          <span className="text-xl font-bold text-gray-900">
            Finance <span className="text-green-600">Health</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              to="#"
              className="font-medium text-gray-600 transition-colors hover:text-green-600"
            >
              {link}
            </Link>
          ))}
          {/* Updated Join Now link pointing to your external domain */}
          <a
            href="https://filscore-ai.quantech.international"
            className="rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:shadow-lg text-center"
          >
            Join Now
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl">{menuOpen ? 'x' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="space-y-1 border-t bg-white px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link}
              to="#"
              className="block rounded-lg px-3 py-2 font-medium text-gray-600 hover:bg-green-50 hover:text-green-700"
            >
              {link}
            </Link>
          ))}
          {/* Also added to the mobile dropdown menu for consistency */}
          <a
            href="https://filscore-ai.quantech.international"
            className="block rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-3 py-2.5 font-semibold text-white text-center shadow-md"
          >
            Join Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;