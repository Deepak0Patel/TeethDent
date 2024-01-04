import Image from "next/image";
import React from "react";
import image5 from "../../public/Mask group.png";
import image6 from "../../public/Subtract.png";

const Section5 = () => {
  return (
    <div className="h-[50vh] flex items-center justify-around ">
      <div className="w-[30%]">
        <h1 className="font-bold text-4xl w-[80%]">
          Simplicity from <span className="text-[#955EDA]">start</span> to
          <span className="text-[#955EDA]">
            finish
          </span>
        </h1>
        <Image className="mt-10" src={image6} width={500} height={500} alt="image6" />
      </div>
      <div className="flex items-center justify-center w-[30%] mr-96 gap-10">
        <Image
          className="rounded-lg"
          src={image5}
          width={160}
          height={160}
          alt="image5"
        />
        <div className="text">
          <h3 className="font-bold"> Review and Monitoring</h3>
          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            amet eligendi quis atque similique laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
