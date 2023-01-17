import React from "react";
import Image from "next/legacy/image";

interface Props {
  img: string;
  location: string;
  distance: string;
}

function SmallCard({ img, location, distance }: Props) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-5 cursor-pointer rounded-lg
     hover:bg-red-300 hover:scale-105 transition-transform duration-200 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
