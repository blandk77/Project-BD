import React from 'react';

function Header({ onMenuClick }) {
  return (
    <header className="bg-purple-700 py-4 px-6 flex items-center justify-between">
      <div className="text-white font-bold text-xl">Black dot links</div>
      <button onClick={onMenuClick} className="text-white focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </header>
  );
}

export default Header;
