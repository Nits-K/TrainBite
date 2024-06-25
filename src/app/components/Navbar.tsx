import { FaHome, FaUsers, FaClipboardList, FaComments, FaUtensils, FaTrain } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed sm:border-r-black sm:border-r sm:space-y-8 sm:flex-col sm:w-16 sm:h-full sm:py-4 sm:top-0 bottom-0 left-0  w-full bg-red-600 flex items-center p-2 justify-evenly sm:shadow-lg z-10">
      <a href="/" className="text-white flex flex-col items-center">
        <FaHome size={24} />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a href="/" className="text-white flex flex-col items-center">
        <FaUsers size={24} />
        <span className="text-xs mt-1">Group</span>
      </a>
      <a href="/" className="text-white flex flex-col items-center">
        <FaClipboardList size={24} />
        <span className="text-xs mt-1">Orders</span>
      </a>
      <a href="/" className="text-white flex flex-col items-center">
        <FaTrain size={24} />
        <span className="text-xs mt-1">Train Tools</span>
      </a>
      <a href="/" className="text-white flex flex-col items-center">
        <FaComments size={24} />
        <span className="text-xs mt-1">Chat</span>
      </a>
      <a href="/" className="text-white flex flex-col items-center">
        <FaUtensils size={24} />
        <span className="text-xs mt-1">Menu</span>
      </a>
    </nav>
  );
}
