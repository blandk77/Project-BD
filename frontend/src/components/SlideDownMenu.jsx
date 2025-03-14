import React from 'react';

function SlideDownMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-purple-800 text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={onClose} className="absolute top-4 left-4 focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <nav className="mt-16 px-4">
        <ul>
          <li className="py-2"><a href="#cpm">CPM</a></li>
          <li className="py-2"><a href="#support">Support</a></li>
          <li className="py-2"><a href="https://t.me/The_TGguy" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li className="py-2"><a href="/login">Login</a></li>  {/* Adjust paths as needed */}
          <li className="py-2"><a href="/register">Create Account</a></li> {/* Adjust paths as needed */}
          <li className="py-2">
            <h3>Why Join Us</h3>
            <p className="text-sm">Some example text about why users should join your URL shortener service.</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SlideDownMenu;
