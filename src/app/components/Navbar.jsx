import { FaHome, FaUsers, FaClipboardList, FaComments, FaUtensils, FaTrain } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import "@/app/styles/navbar.css";

export default function Navbar() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 480);
    };

    updateView();

    window.addEventListener('resize', updateView);

    const handleClick = (e) => {
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
      window.removeEventListener('resize', updateView);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isMobileView) {
    return null;
  }

  return (
    <nav className="rect fixed bg-black z-10">
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
