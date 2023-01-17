import React, { useEffect } from "react";
import Image from "next/legacy/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        alt="Banner Images"
        src="/images/sea.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/3 w-full text-center ">
        <p className="text-cyan-500  underline text-2xl  sm:text-5xl">
          Go where the wind blows
        </p>
        <button
          className="text-cyan-600 bg-white  px-10 py-4 shadow-md rounded-full font-bold my-16 
        hover:shadow-xl active:scale-90 transition duration-100"
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
