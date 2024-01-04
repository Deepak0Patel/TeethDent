import Image from "next/image";
import React from "react";
import image12 from "../../public/image 12.png";
import image13 from "../../public/image 12 (1).png";
import { PlayCircle } from "@mui/icons-material";

const Section6 = () => {
  return (
    <div className="h-[100vh] bg-[#F0F2F2] flex items-center justify-evenly ">
      <div className="bg-white rounded-lg">
      <div className="relative">
        {" "}
        <Image
          className="rounded-lg"
          src={image12}
          width={400}
          height={400}
          alt="image5"
        />

      </div>
      <div className="flex items-center justify-around gap-4 w-full py-6">
        <h1 className="w-1/2 text-3xl text-[#955EDA]">Rahul Kadam</h1>
        <p className="w-1/2 text-xs">News reporter happy smiler</p>
      </div>
      </div>
      <div className="bg-white rounded-lg">
      <div>
        {" "}
        <Image
          className="rounded-lg"
          src={image13}
          width={400}
          height={400}
          alt="image5"
        />
      </div>
      <div className="flex items-center justify-around gap-4 w-full py-6">
        <h1 className="w-1/2 text-3xl text-[#955EDA]">Rahul Kadam</h1>
        <p className="w-1/2 text-xs">News reporter happy smiler</p>
      </div>
      </div>

    </div>
  );
};

export default Section6;
