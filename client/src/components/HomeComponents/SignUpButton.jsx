import React from "react";
import { Link } from "react-router-dom";
const SignUpButton = () => {
  return (
    <>
      <div className="md:w-[80%] hidden md:block -mt-6  md:mx-auto border-t-8 border-black bg-gray-200">
        <div className=" md:flex  py-7  md:flex justify-between   ">
          <div className=" md:w-[30%]  mx-2 ">
            <Link to="/InvesSignUpComp">
              {" "}
              <button className="py-4 px-4 w-[210px] border border-black rounded-md border-b-8 font-bold">
                Investor Sign Up
              </button>
            </Link>
          </div>

          <div className="  md:w-[30%]   ">
            <Link to="/FounderSignUpComp">
              {" "}
              <button className="py-4 px-4 w-[210px] border border-black rounded-md border-b-8 font-bold">
                Founder Sign Up
              </button>
            </Link>
          </div>

          <div className="  md:w-[30%]  ">
            <button className="py-4 px-4 w-[210px] border border-black rounded-md border-b-8 font-bold">
              VCTO Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpButton;
