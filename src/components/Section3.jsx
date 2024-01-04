import React from "react";
import Section4 from "./Section4";

const Section3 = () => {
  return (
    <div className="w-full h-[100vh] bg-[#F0F2F2] ">
      <div className="w-[90%] m-auto">
        <h1 className="text-5xl font-bold pt-20">
          why choose <span className="text-[#955EDA]">Whistle?</span>
        </h1>
        <div className="cards">
          <Section4 />
        </div>
        
      </div>
    </div>
  );
};

export default Section3;
