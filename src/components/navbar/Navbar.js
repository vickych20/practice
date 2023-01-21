import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import img1 from "../images/logo_light.png";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  
  
  return (
    <div className="w-full bg-[#352F2F]">

    <div className="flex justify-center items-center  h-[75px]  overflow-x-hidden max-2xl:justify-center max-w-[1200px] m-auto">
      <h3 className="text-[30px] text-[#fff]">
        <img src={img1} alt="" className="w-[100px]" />
      </h3>
      <ul className="menu flex justify-end list-none w-[75%] text-[16px] font-500	uppercase">
        <Link
          to="/"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>Home</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/profiles"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer "
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>profiles</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/stories"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>stories</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/pages"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>pages</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/blog"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>blog</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/shortcode"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>shortcode</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
        <Link
          to="/contact"
          className="text-[#fff] text-[15px] p-[1rem] cursor-pointer"
        >
          <li>
            <div className="relative flex items-center gap-1">
              <p>contact</p>
              <AiOutlineDown className="text-[13px]" />
              <div className="absolute top-0 left-0 mt-[15px]"></div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
