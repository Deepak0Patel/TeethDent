import React from "react";
import Image from "next/image";
import logo from "../../public/logo 1.png";
import hero from "../../public/hero.png";
import image2 from "../../public/image 2.png";
import { Button } from "@mui/material";
import Right from "@/components/Right";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Footer from "@/components/Footer";
import SwipeableTemporaryDrawer from "@/components/MenuButton";

const Homepage = () => {
  return (
    <>
      {/* <div> <Right/></div> */}
      <div className="border-2 relative">
        <div className="w-full  absolute top-0 flex justify-between items-center h-auto bg-[#cee4ee]">
          <Image
            className="pl-20"
            src={logo}
            width="auto"
            height="auto"
            alt="Picture of the author"
          />
          <p className=" text-[#955EDA] mr-40 flex items-center justify-center">
            <SwipeableTemporaryDrawer>
            
          
            </SwipeableTemporaryDrawer>
          </p>
        </div>
        <Image
          src={hero}
          width="100vw"
          height="100vh"
          alt="Picture of the author"
        />
        <div className="w-[20%] absolute top-40 left-96 text-white h-auto">
          <h1 className="font-bold text-[45px]">Hide secrets not smile</h1>
          <p className="font-extralight text-sx">
            Effortless, Affordable, and Invisible Aligners Customized just for
            you
          </p>
        </div>
        <div className="secondSection flex justify-around  ">
          <div className="textDiv w-2/5 ">
            <h1 className="text-[45px] font-bold mt-32">
              Range of <span className="text-[#955EDA]">Whistle</span> Aligners
            </h1>
            <p className="pt-10 ">
              Get ready to boost your confidence and reveal a radiant smile
              effortlessly and discreetly!
            </p>
          </div>
          <Image
            src={image2}
            width="auto"
            height="auto"
            alt="Picture of the author"
          />
        </div>
        <div className="flex justify-center gap-10">
          <div className="cardDiv w-76  mb-10 pl-5 pr-5 pb-16 border-2  bg-[#F0F2F2] rounded-lg pt-4 ">
            <h1 className="text-3xl font-semibold ">Whistle GO</h1>
            <p className="pt-5">
              {" "}
              <CheckCircleIcon sx={{ color: "green" }} />
              USA FDA Approved high quality PU material
            </p>
            <p className="pt-5">
              <CheckCircleIcon sx={{ color: "green" }} /> 6-8 months
              treatmentJ(avg.)
            </p>

            <div className="flex justify-evenly items-end pt-6">
              <p>Was ₹83,000</p>
              <p className="font-bold">Now ₹71,000</p>
            </div>
            <div className="buttondiv pt-10 flex justify-around ">
              <Button variant="outlined">Get a free call</Button>
              <Button>View Details</Button>
            </div>
          </div>
          <div className="cardDiv w-76  mb-10 pl-5 pr-5 pb-16 border-2  bg-[#F0F2F2] rounded-lg pt-4 ">
            <h1 className="text-3xl font-semibold ">Whistle GO</h1>
            <p className="pt-5">
              {" "}
              <CheckCircleIcon sx={{ color: "green" }} />
              USA FDA Approved high quality PU material
            </p>
            <p className="pt-5">
              <CheckCircleIcon sx={{ color: "green" }} /> 6-8 months
              treatmentJ(avg.)
            </p>

            <div className="flex justify-evenly items-end pt-6">
              <p>Was ₹83,000</p>
              <p className="font-bold">Now ₹71,000</p>
            </div>
            <div className="buttondiv pt-10 flex justify-around ">
              <Button variant="outlined">Get a free call</Button>
              <Button>View Details</Button>
            </div>
          </div>
        </div>

        <Section3 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
