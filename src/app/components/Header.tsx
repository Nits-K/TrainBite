"use client"
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="flex items-center justify-between p-4 md:p-12 bg-slate-100 shadow-md relative z-10 flex-row-reverse md:flex-row">
      <img src="images/logo.png" alt="railkafe logo" className="h-10" />
      <nav className={`fixed md:relative top-0 left-0 w-full h-3/4 md:h-auto bg-green-500 md:bg-transparent flex-col items-center justify-center gap-8 ${menuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:justify-end md:translate-x-0 md:transition-none transition-transform duration-200 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="self-end mr-4 md:hidden" onClick={handleMenu}>
          <img src="images/close.png" alt="close" className="h-7 w-7" />
        </button>
        <ul className="flex flex-col md:flex-row items-center md:gap-8 space-y-4 md:space-y-0 mt-16 md:mt-0">
          <li className="py-2 md:py-0 text-white md:text-black">Home</li>
          <li className="py-2 md:py-0 text-white md:text-black">About</li>
          <li className="py-2 md:py-0 text-white md:text-black">Contact Us</li>
          <li className="py-2 md:py-0 text-white md:text-black">Offers</li>
          <li className="py-2 md:py-0 text-white md:text-black">Location</li>
          <li className="py-2 md:py-0 text-white md:text-black">Group Order</li>
          <li className="py-2 md:py-0 text-white md:text-black">Login</li>
        </ul>
      </nav>
      <button className="block md:hidden" onClick={handleMenu}>
        <img src="images/menu.png" alt="menu" className="h-6 w-6" />
      </button>
    </header>
  );
};

export default Header;
