import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center relative justify-between p-2 sm:px-16 pr-6 bg-white shadow-md   m-4 mt-0  w-full">
      <img src="/images/logo.png" alt="railkafe logo" className="h-16 md:h-20" />

      <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? "/images/close.png" : "/images/menu.png"} alt="menu" className="h-8 w-8" />
      </button>

      <nav className={`absolute border-t-gray border-2 mt-20 top-0 left-0 w-full py-8 bg-white flex flex-col items-left pl-5 gap-8 md:hidden ${menuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex flex-col items-left gap-4">
          <li className=" text-black font-semibold hover:text-gold">Home</li>
          <li className="text-black font-semibold hover:text-gold">About</li>
          <li className="text-black font-semibold hover:text-gold">Contact Us</li>
          <li className="text-black font-semibold hover:text-gold">Offers</li>
          <li className="text-black font-semibold hover:text-gold">Location</li>
          <li className="text-black font-semibold hover:text-gold">Group Order</li>
          <li className="text-black font-semibold hover:text-gold">Login</li>
        </ul>
      </nav>

      <nav className="hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8">
        <ul className="flex items-center gap-8">
        <li className=" text-black font-semibold hover:text-gold">Home</li>
          <li className="text-black font-semibold hover:text-gold">About</li>
          <li className="text-black font-semibold hover:text-gold">Contact Us</li>
          <li className="text-black font-semibold hover:text-gold">Offers</li>
          <li className="text-black font-semibold hover:text-gold">Location</li>
          <li className="text-black font-semibold hover:text-gold">Group Order</li>
          <li className="text-black font-semibold hover:text-gold">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
