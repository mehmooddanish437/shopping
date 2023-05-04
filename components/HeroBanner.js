import React from "react";
import Wraper from "./Wraper";


const HeroBanner = () => {
    return (
        <div className=" bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600 md:h-[600px] ">
             

        <Wraper className=" md:flex-row flex gap-3 items-center flex-col justify-center md:max-w-[1380px]">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">Shop the latest trends</h1>
            <p className="text-xl text-white md:text-2xl mt-4 ">Discover the best deals on fashion, beauty, and home essentials.</p>
            <a href="#" className="mt-8 inline-block bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600">Shop now</a>
          </div>
        <div className="md:w-1/2 flex items-center justify-center ">
          <img className="object-cover md:object-contain " src="/heroimg.jpg" alt="Shopping site hero banner image"/>
        </div>
        </Wraper>
         
      </div>
    );
};

export default HeroBanner;