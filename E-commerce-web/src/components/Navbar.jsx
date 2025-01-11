import React from "react";
import design from "../assets/design.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode  from "./DarkMode";

const Navbar = () => {
  return (
    <div
      className="shadow-lg bg-white
    dark:bg-gray-500 dark:text-white 
    duration-200 relative 2-40 "
    >
      {/* upper Navbar */}
      <div className="bg bg-primary/40">
        <div
          className="container flex 
        justify-between items-center"
        >
          <div>
            <a
              a
              href="#"
              className="font-bold
            text-2xl sm:text-3xl flex gap-2"
            >
              <img src={design} alt="design" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* Search bar ad order button */}
          <div
            className="flex justify-between 
          items-center gap-4"
          >
            <div
              className="hidden relative group  
            sm:block"
            >
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px]
                 group-hover:w-[300px] transition-all
                 duration-300 rounded-full border
                 border-gray-300 px-2 py-1 
                 focus:outline-none focus:border-1
                 focus:border-primary "
              />
              <IoMdSearch
                className="text-gray-500 
               group-hover:text-primary 
               absolute top-1/2 -traslate-y1/2 right-3 "
              />
            </div>
          </div>
          {/*  Order Button */}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary
           to-secondary transition-all duration-200
           text-white py-1 px-4 rounded-full flex 
           items-center gap-3 group"
          >
            <span
              className="hidden group-hover:block 
           transitional-all duration-200"
            >
              Order
            </span>
            <FaCartShopping
              className="text-xl 
             text-white drop-shadow-sm 
             cursor-pointer"
            />
          </button>
          {/* DarkMode Switch  */}
           <div>
            <DarkMode />
           </div>
        </div>
      </div>
      {/*  Lower Navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
