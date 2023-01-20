import React from 'react'
import './down.css';
import { BsHeartFill } from 'react-icons/bs';
import ImageSlider, { Slide } from "react-auto-image-slider";
import ravi from "../images/w.jpg";
import img3 from "../images/wa.jpg";
import img2 from "../images/wb.jpg";


const Testimonials = () => {
  return (
    <div className="test">
      <div className="text-center">
        <h1 className="text-[50px] font-serif download-btn">Testimonials</h1>
      </div>
      <div className="flex items-center justify-center gap-2 py-2">
        <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
        <div>
          <BsHeartFill className="text-[#f5ca00]" />
        </div>
        <div className="w-[100px] h-[3px] bg-[#ff8517]"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[130px] h-[3px] bg-[#ff8517]"></div>
      </div>
      
    </div>
  );
}

export default Testimonials