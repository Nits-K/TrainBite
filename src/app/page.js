"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrderMenu from "./components/OrderMenu";
import Navbar from "./components/Navbar";
import orders from "@/app/assets/data/orders.json";
import { FaTrain, FaSearch, FaHome, FaInfoCircle,  FaUser, FaMapMarkerAlt,   FaUtensils } from "react-icons/fa";

export default function Home() {
  const [searchType, setSearchType] = useState("PNR");
  const [showMoreText, setShowMoreText] = useState(false);

  const handleButtonClick = (type) => {
    setSearchType(type);
  };

  const handleExploreClick = () => {
    setShowMoreText(!showMoreText);
  };

  const cards = [
    { icon: <FaHome />, text: "1. Enter your PNR or train number" },
    { icon: <FaMapMarkerAlt />, text: "2. Select delivery station or restaurent" },
    { icon: <FaUtensils />, text: "3. Choose your food" },
    { icon: <FaInfoCircle />, text: "4. Enter journey details and place your order" },
    { icon: <FaUser />, text: "5. Sit and relax your food will be delivered to your seat" },
  ];

  return (
    <div className="flex font-poppins">
      <Navbar />
      <div className="flex flex-col items-center bg-gradient-to-l from-black to-gold m-0 p-0 w-full min-h-screen">
        <Header />
        <div className="w-full flex flex-col items-center">
          <h1 className="text-white text-5xl mt-16 font-bold text-center">
            Order Food on Train Online
          </h1>
          <div className="p-1 flex flex-col items-center w-full py-16 rounded-lg max-w-screen-xl mx-auto shadow-lg mt-8 transition-colors bg-gradient-to-r from-black to-gold">
            <div className="flex flex-wrap justify-around w-full mb-8 p-1 py-1.5">
              <button
                className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                  searchType === "PNR"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:text-black`}
                onClick={() => handleButtonClick("PNR")}
              >
                <FaSearch className="h-5 w-5 mr-2" />
                Search By PNR
              </button>
              <button
                className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                  searchType === "Train"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:text-black`}
                onClick={() => handleButtonClick("Train")}
              >
                <FaTrain className="h-5 w-5 mr-2" />
                Search By Train
              </button>
              <button
                className={`flex items-center px-2 sm:px-4 py-2 text-xs sm:text-base rounded-full transition-colors ${
                  searchType === "WhatsApp"
                    ? "bg-white text-black"
                    : "bg-black text-gold"
                } hover:bg-white hover:text-black`}
                onClick={() => handleButtonClick("WhatsApp")}
              >
                <img
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-1"
                />
                WhatsApp
              </button>
            </div>
            {searchType !== "WhatsApp" ? (
              <div className="flex items-center mt-4 w-full max-w-lg px-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder={
                      searchType === "PNR"
                        ? "Enter PNR number to Order"
                        : "Enter Train number to Order"
                    }
                    className="p-4 border border-gray-300 rounded-full w-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 px-5 p-3 mr-1 bg-black text-gold rounded-full hover:bg-gold hover:text-black"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-full flex items-center hover:bg-gray-100 mt-4">
                <img
                  src="images/whatsapp.png"
                  alt="WhatsApp"
                  className="h-6 w-6 mr-2"
                />
                980713867
              </button>
            )}
          </div>
        </div>

        <h3 className="text-white mt-16 text-3xl font-bold text-center">
          Follow these steps to order food on Train
        </h3>

        <div className="w-full max-w-screen-xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-gradient-to-r from-black to-gold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl text-white mb-4">{card.icon}</div>
              <p className="text-lg text-white">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-black to-gold p-4 md:p-8 shadow-lg rounded-lg mt-16 w-full max-w-screen-xl flex flex-col items-center">
          <div className="flex items-center mb-4 w-full">
            <img
              src="images/groupIcon.png"
              alt="group icon"
              className="w-20 h-20"
            />
            <div className="ml-4 p-8 flex-1">
              <p className="text-base md:text-lg text-white">
                <strong className="text-lg md:text-xl">
                  Group food ordering in train
                </strong>
                <br />
                <span className="text-base md:text-lg">
                  Travelling in a group of 10 or more
                </span>
              </p>
            </div>
            <button
              className="text-white text-lg md:text-xl ml-auto"
              onClick={() => (window.location.href = "/")}
            >
              <img className="h-8 w-8"src="/images/next.png" alt="" />
            </button>
          </div>
        </div>

        <h1 className="text-3xl mt-16 text-black text- font-bold">LATEST ORDER</h1>
        <div className="scroll-container text-balance h-8 mt-8 py-8 w-full max-w-screen-xl overflow-hidden">
          <div className="text-wrap break-words whitespace-normal scroll-content text-white my-8">
            {orders.map((item, index) => (
              <div
                key={index}
                className="scroll-item mb-2 break-words whitespace-normal"
              >
                <strong>{item.name}</strong> ordered food in{" "}
                <strong>{item.train}</strong> at <strong>{item.station}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <button
            className="p-5 my-6 text-white bg-black rounded-full font-semibold hover:bg-gold hover:text-black"
            onClick={handleExploreClick}
          >
            Explore More &gt;
          </button>
          {showMoreText && (
            <div className="bg-gray-100 p-4 mt-4 rounded-lg text-center w-full max-w-screen-xl">
              <OrderMenu />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
