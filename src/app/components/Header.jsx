import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center relative sm:justify-evenly justify-between p-2 sm:px-28 pr-6 bg-gradient-to-r from-black to-gold shadow-md border-b-2 m-4 mt-0  w-full">
      <img src="/images/logo.png" alt="railkafe logo" className="h-16 md:h-20" />

      <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? "/images/close.png" : "/images/menu.png"} alt="menu" className="h-8 w-8" />
      </button>

      <nav className={`absolute border-t mt-20 top-0 left-0 w-full py-8 bg-gradient-to-r from-black to-gold flex flex-col items-left pl-5 gap-8 md:hidden ${menuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col items-left gap-4">
          <li className="text-yellow-200 font-medium hover:text-white">Home</li>
          <li className="text-yellow-200 font-medium hover:text-white">About</li>
          <li className="text-yellow-200 font-medium hover:text-white">Contact Us</li>
          <li className="text-yellow-200 font-medium hover:text-white">Offers</li>
          <li className="text-yellow-200 font-medium hover:text-white">Location</li>
          <li className="text-yellow-200 font-medium hover:text-white">Group Order</li>
          <li className="text-yellow-200 font-medium hover:text-white">Login</li>
        </ul>
      </nav>

      <nav className="hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8">
        <ul className="flex items-center gap-8">
        <li className="text-yellow-500 font-medium hover:text-white">Home</li>
          <li className="text-yellow-500 font-medium hover:text-white">About</li>
          <li className="text-yellow-500 font-medium hover:text-white">Contact Us</li>
          <li className="text-yellow-500 font-medium hover:text-white">Offers</li>
          <li className="text-yellow-500 font-medium hover:text-white">Location</li>
          <li className="text-yellow-500 font-medium hover:text-white">Group Order</li>
          <li className="text-yellow-500 font-medium hover:text-white">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
