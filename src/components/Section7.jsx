"use client";
import { Add } from "@mui/icons-material";
import React, { useState } from "react";

const Section7 = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  return (
    <div className="h-[100vh] bg-white w-[100vw]">
      <div className="textdiv font-bold text-4xl  w-[80vw] p-10 ml-16">
        Got Questions ? <br />
        <span className="text-[#955EDA]">We’ve Got Answers</span>
      </div>
      <div className="fivediv w-[80vw] mx-auto">
        <div className="py-8 border-y-2 border-y-black">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-black">What are Aligners?</h1>
            <button onClick={() => setIsOpen1(!isOpen1)}>
              <Add />
            </button>
          </div>
          {isOpen1 && (
            <div className="drawer py-4">
              <p className="font-light text-xs">
                Aligners are orthodontic devices that are a transparent, Plastic
                form of dental braces used to adjust teeth to make your smile
                more beautiful.
              </p>
            </div>
          )}
        </div>
        <div className="py-8  border-y-black">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-black">How do Aligners work?</h1>
            <button onClick={() => setIsOpen2(!isOpen2)}>
              <Add />
            </button>
          </div>
          {isOpen2 && (
            <div className="drawer py-4">
              <p className="font-light text-xs">
                Aligners are orthodontic devices that are a transparent, Plastic
                form of dental braces used to adjust teeth to make your smile
                more beautiful.
              </p>
            </div>
          )}
        </div>
        <div className="py-8 border-y-2 border-y-black">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-black">
              Can any dentist do irregular teeth treatment?{" "}
            </h1>
            <button onClick={() => setIsOpen3(!isOpen3)}>
              <Add />
            </button>
          </div>
          {isOpen3 && (
            <div className="drawer py-4">
              <p className="font-light text-xs">
                Aligners are orthodontic devices that are a transparent, Plastic
                form of dental braces used to adjust teeth to make your smile
                more beautiful.
              </p>
            </div>
          )}
        </div>
        <div className="py-8  border-y-black">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-black">
              Are there any restrictions on eating or drinking?
            </h1>
            <button onClick={() => setIsOpen4(!isOpen4)}>
              <Add />
            </button>
          </div>
          {isOpen4 && (
            <div className="drawer py-4">
              <p className="font-light text-xs">
                Aligners are orthodontic devices that are a transparent, Plastic
                form of dental braces used to adjust teeth to make your smile
                more beautiful.
              </p>
            </div>
          )}
        </div>
        <div className="py-8 border-y-2 border-y-black">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-black">
              How long does the treatment take?
            </h1>
            <button onClick={() => setIsOpen5(!isOpen5)}>
              <Add />
            </button>
          </div>
          {isOpen5 && (
            <div className="drawer py-4">
              <p className="font-light text-xs">
                Typically, it may take 6-12 month for correcting the ‘social six
                (front teeth). For more complex cases such as crowded teeth, the
                treatment time could be 12-24 months or slightly longer the best
                person to give advise on this Orthodontist.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section7;
