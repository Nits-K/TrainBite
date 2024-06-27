import { FaHome, FaUsers, FaClipboardList, FaComments, FaUtensils, FaTrain } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import "@/app/styles/navbar.css";

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that the component is now mounted on the client side
    setIsClient(true);

    const handleClick = (e:any) => {
      let el;
      
      if (e.target.nodeName === "path") {
        el = e.target.parentElement.parentElement;
      } else if (e.target.nodeName === "svg" || e.target.nodeName === "SPAN") {
        el = e.target.parentElement;
      } else if (e.target.nodeName === "P") {
        el = e.target;
      }

      if (el && el.classList.length) {
        if (el.classList.contains("nav-link") && !el.classList.contains("active")) {
          const activeElement = document.querySelector(".active");
          if (activeElement) {
            activeElement.classList.remove("active");
          }
          el.classList.add("active");
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className={`${isClient && window.innerWidth <= 640 ? "rect " : ""}fixed sm:border-r-black sm:border-r sm:space-y-8 sm:flex-col sm:w-16 sm:h-full sm:py-4 sm:top-0 bg-red-500 sm:shadow-lg z-10`}>
      <p className="nav-link active text-white flex flex-col items-center transform transition-transform duration-100 hover:scale-125">
        <FaHome size={24} />
        <span className="text-xs mt-1">Home</span>
      </p>
      <p className="nav-link text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-125">
        <FaUsers size={24} />
        <span className="text-xs mt-1">Group</span>
      </p>
      <p className="nav-link text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-125">
        <FaClipboardList size={24} />
        <span className="text-xs mt-1">Orders</span>
      </p>
      <p className="nav-link text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-125">
        <FaTrain size={24} />
        <span className="text-xs text-center mt-1">Tools</span>
      </p>
      <p className="nav-link text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-125">
        <FaComments size={24} />
        <span className="text-xs mt-1">Chat</span>
      </p>
      <p className="nav-link text-white flex flex-col items-center transform transition-transform duration-300 hover:scale-125">
        <FaUtensils size={24} />
        <span className="text-xs mt-1">Menu</span>
      </p>
    </nav>
  );
}
