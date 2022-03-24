import React from "react";
import { Link } from "react-router-dom";
import dots from "../assets/dots.png";
import group from "../assets/Group1.svg";
import groupm from "../assets/Group1m.svg";
import groupt from "../assets/Group2.svg";
import grouptm from "../assets/Group2m.svg";
import groupth from "../assets/Group3.svg";
import groupthm from "../assets/Group3m.svg";

const WhatWe = () => {
  return (
    <>
      <div className="my-5 mt-8 md:mt-[6rem] w-[90%] md:w-[80%] mx-auto ">
        <div>
          <div className=" flex justify-center w-full  my-8 ">
            <h1 className="text-black ml-6 md:ml-1 text-center text-[27px]  md:text-[34px] font-bold font-Outfit">
              What we assist with
            </h1>
            <img
              src={dots}
              alt="dots"
              className="h-[30px] w-[32px] mx-2 md:mt-3 mt-2 "
            />
          </div>
          <div className="md:flex justify-between my-6">
            <div className="card-main my-3 md:w-[30%]">
              <div className="icon flex grid grid-cols-1 gap-1 place-items-center md:place-items-start">
                <img
                  src={groupt}
                  alt="group"
                  className="hidden md:block h-28 w-28"
                />
                <img
                  src={groupm}
                  alt="group"
                  className="md:hidden block h-[72] w-[58]"
                />
              </div>
              <div>
                <h1 className="text-[17px] font-bold py-1 text-gray-900 font-Outfit text-center md:text-justify font-Outfit">
                  Removing Funding Bias
                </h1>
                <p className="text-[14px] text-gray-400 py-1 leading-[17px] md:text-justifyt lg:text-justify text-center">
                  We've all been there, getting an We've all been there, getting
                  an opportunity to pitch to a VC can be tough. Being an
                  underrepresented founder can be even tougher. By separating
                  your identity from your startup we can give you an equal
                  opportunity to raise funding.
                </p>
              </div>
              <div className=" w-[80%] mx-auto  md:hidden  my-3  ">
                <Link to="/InvesSignUpComp">
                  {" "}
                  <button className="py-2 px-4  w-full  border border-black rounded-md border-b-8 font-bold">
                    Investor Sign Up
                  </button>
                </Link>
              </div>
            </div>

            <div className="card-main  md:my-3 my-8 md:w-[30%]">
              <div className="icon flex grid grid-cols-1 gap-1 place-items-center md:place-items-start ">
                <img
                  src={group}
                  alt="group"
                  className="hidden md:block h-28 w-28"
                />
                <img
                  src={grouptm}
                  alt="group"
                  className="block md:hidden h-[72] w-[58]"
                />
              </div>
              <div>
                <h1 className="text-[17px] font-bold py-1 text-gray-900 font-Outfit text-center md:text-justify font-Outfit">
                  Invest In Diverse Founders
                </h1>
                <p className="text-[14px] text-gray-400 leading-[17px] py-1 md:text-justify lg:text-justify text-center">
                  Study after study has shown that companies with diverse
                  founding teams perform better and deliver higher returns to
                  their investors. Investing in diverse founders is a
                  no-brainer.
                </p>
              </div>
              <div className=" w-[80%] mx-auto md:hidden my-3">
                <Link to="/FounderSignUpComp">
                  {" "}
                  <button className="py-2 px-4  w-full  border border-black rounded-md border-b-8 font-bold">
                    Founder Sign Up
                  </button>
                </Link>
              </div>
            </div>

            <div className="card-main my-3 md:w-[30%]">
              <div className="icon flex grid grid-cols-1 gap-1 place-items-center md:place-items-start">
                <img
                  src={groupth}
                  alt="group"
                  className="hidden md:block h-28 w-28"
                />
                <img
                  src={groupthm}
                  alt="group"
                  className="md:hidden block h-[72] w-[58]"
                />
              </div>
              <div>
                <h1 className="text-[17px] font-bold py-1 text-gray-900 font-Outfit text-center md:text-justify font-Outfit">
                  Your Virtual CTO
                </h1>
                <p className="text-[14px] text-gray-400 leading-[17px] py-1 md:text-justify lg:text-justify text-center">
                  Making mistakes while developing software is inevitable,
                  particularly at startups without an in-house technical
                  expertise . Since it is difficult, not to mention expensive,
                  to have an in-house CTO, working with Amathous as your VCTO
                  will help ensure that you receive the proper technical
                  guidance to help your idea succeed.
                </p>
              </div>
              <div className=" w-[80%] mx-auto md:hidden my-3">
                <button className="py-2 px-4  w-full  border border-black rounded-md border-b-8 font-bold">
                  VCTO Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWe;
