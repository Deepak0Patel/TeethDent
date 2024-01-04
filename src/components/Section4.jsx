import Image from "next/image";
import React from "react";
import image3 from "../../public/image3.png";
import image4 from "../../public/image4.png";

const Section4 = () => {
  return (
    <div className="flex flex-wrap">
    <div className="w-2/5 bg-white p-5 rounded-lg mt-10 gap-4 mr-20">
      <button className="px-4 py-2 bg-[#955EDA] rounded-lg mb-8 text-white">
        FDA Approved{" "}
      </button>
      <div className="flex items-center justify-center gap-4">
        <Image
          className="rounded-lg"
          src={image3}
          height={130}
          width={130}
          alt="image"
          />
        <p>
          Our aligners are crafted from USA FDA Approved PU Material, ensuaring
          a safe and effective route to your perfect smile.
        </p>
      </div>
    </div>
    <div className="w-2/5 bg-white p-5 rounded-lg mt-10">
      <button className="px-4 py-2 bg-[#955EDA] rounded-lg mb-8 text-white">
        FDA Approved{" "}
      </button>
      <div className="flex items-center justify-center gap-4">
        <Image
          className="rounded-lg"
          src={image4}
          height={130}
          width={130}
          alt="image"
          />
        <p>
          Our aligners are crafted from USA FDA Approved PU Material, ensuaring
          a safe and effective route to your perfect smile.
        </p>
      </div>
    </div>
    <div className="w-2/5 bg-white p-5 rounded-lg mt-10 mr-20">
      <button className="px-4 py-2 bg-[#955EDA] rounded-lg mb-8 text-white">
        FDA Approved{" "}
      </button>
      <div className="flex items-center justify-center gap-4">
        <Image
          className="rounded-lg"
          src={image3}
          height={130}
          width={130}
          alt="image"
          />
        <p>
          Our aligners are crafted from USA FDA Approved PU Material, ensuaring
          a safe and effective route to your perfect smile.
        </p>
      </div>
    </div>
    <div className="w-2/5 bg-white p-5 rounded-lg mt-10">
      <button className="px-4 py-2 bg-[#955EDA] rounded-lg mb-8 text-white">
        FDA Approved{" "}
      </button>
      <div className="flex items-center justify-center gap-4">
        <Image
          className="rounded-lg"
          src={image4}
          height={130}
          width={130}
          alt="image"
          />
        <p>
          Our aligners are crafted from USA FDA Approved PU Material, ensuaring
          a safe and effective route to your perfect smile.
        </p>
      </div>
    </div>
          </div>
  );
};

export default Section4;
