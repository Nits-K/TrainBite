"use client";
import { useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [searchType, setSearchType] = useState("PNR");

  const handleButtonClick = (type: string) => {
    setSearchType(type);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-gray-100 m-0 p-0 w-full">
        <img
          className="w-full max-w-screen-lg h-auto object-cover mt-6"
          src="images/banner.webp"
          alt="banner"
        />
        <h1 className="text-black text-2xl mt-8">Order Food on Train Online</h1>
        <div className="bg-gray-200 rounded-lg p-8 mt-8 flex flex-col items-center w-full max-w-lg">
          <div className="bg-white rounded-lg p-4 flex justify-around w-full mb-8 space-x-4">
            <button
              className={`px-6 py-3 rounded-full transition-colors ${
                searchType === "PNR" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
              } hover:bg-red-500 hover:text-white`}
              onClick={() => handleButtonClick("PNR")}
            >
              Search By PNR
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-colors ${
                searchType === "Train" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
              } hover:bg-red-500 hover:text-white`}
              onClick={() => handleButtonClick("Train")}
            >
              Search By Train
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-colors ${
                searchType === "WhatsApp" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
              } hover:bg-red-500 hover:text-white`}
              onClick={() => handleButtonClick("WhatsApp")}
            >
              WhatsApp
            </button>
          </div>
          {searchType !== "WhatsApp" ? (
            <>
              <input
                type="text"
                placeholder={
                  searchType === "PNR" ? "Enter PNR number" : "Enter Train number"
                }
                className="px-4 py-2 border rounded mb-4 w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700"
              >
                Submit
              </button>
            </>
          ) : (
            <button className="px-4 py-2 bg-white text-black border rounded-full flex items-center">
              <img src="images/whatsapp.png" alt="WhatsApp" className="h-6 w-6 mr-2" />
              980713867
            </button>
          )}
        </div>

        <h1 className="text-black text-2xl mt-8">Follow these steps to order food on Train</h1>
        <img
          src="images/home_page.webp"
          alt="homepage"
          className="w-full max-w-screen-lg h-auto object-cover mt-4 rounded-lg md:rounded-xl"
        />

        <div className="bg-white p-4 md:p-8 shadow-lg rounded-lg mt-8 w-full max-w-screen-sm relative flex items-center">
          <img src="images/groupIcon.png" alt="group icon" className="h-12 w-12 md:h-16 md:w-16" />
          <div className="ml-4 flex-1">
            <p className="text-base md:text-lg text-gray-800">
              <strong className="text-lg md:text-xl">Group food ordering in train</strong>
              <br />
              <span className="text-base md:text-lg">Travelling in a group of 10 or more</span>
            </p>
          </div>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800 text-lg md:text-xl"
            onClick={() => window.location.href = "/newpage"}
          >
            &gt;
          </button>
        </div>
        
      </div>
    </>
  );
}