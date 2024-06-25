import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <header className="flex items-center relative justify-between p-2 pr-6  bg-white shadow-md text-red-500 w-full">
      <img src="/images/logo.png" alt="railkafe logo" className="h-16 md:h-20" />

      
      <button className="block md:hidden hover:border-2" onClick={()=>{setMenuOpen(!menuOpen)}}>
        <img src="/images/menu.png" alt="menu" className="h-6 w-6 " />
      </button>

      <nav className={`absolute border-t mt-20 top-0 left-0 w-full py-8  bg-white flex flex-col items-center justify-flex gap-8 md:hidden ${menuOpen ? 'flex' : 'hidden'}`}>
        
        <ul className="flex flex-col items-center gap-4">
          <li className="text-gray-700 font-medium hover:text-red-500">Home</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">About</li>
          <li className="text-gray-700 font-medium  hover:text-red-500 ">Contact Us</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Offers</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Location</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Group Order</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Login</li>
        </ul>
      </nav>

   
      <nav className="hidden md:flex md:flex-row md:items-center md:justify-end md:space-x-8">
        <ul className="flex items-center gap-8">
          <li className="text-gray-700 font-medium  hover:text-red-500">Home</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">About</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Contact Us</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Offers</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Location</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Group Order</li>
          <li className="text-gray-700 font-medium  hover:text-red-500">Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
