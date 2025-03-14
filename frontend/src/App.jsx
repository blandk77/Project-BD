import React, { useState } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import ShortenForm from './components/ShortenForm';
import AccountButtons from './components/AccountButtons';
import SlideDownMenu from './components/SlideDownMenu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-400 min-h-screen">
      <Header onMenuClick={toggleMenu} />
      <Headline />
      <ShortenForm />
      <AccountButtons />
      <SlideDownMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default App;
