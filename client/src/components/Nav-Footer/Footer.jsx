import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footr-main  mt-6 ">
        <div className="footr-wraper mx-5  rounded bg-black  ">
          <div class="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 gap-6">
            <div className="h-auto w-full flex justify-around  mt-6">
              <div className=" ml-10  ">
                <h1 className="text-white text-[15px] font-semibold">HELP</h1>
                <ul className="text-white pt-3">
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    Custmor Service
                  </li>
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    FAQs
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-auto w-full flex justify-around  mt-6">
              <div className=" ml-10   ">
                <h1 className="text-white text-[15px] font-semibold">
                  Products
                </h1>
                <ul className="text-white pt-3">
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    For Founders 
                  </li>
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    For Investors
                  </li>
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    Contact us
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-auto w-full flex justify-around md:mt-6">
              <div className="ml-10  ">
                <h1 className="text-white text-[15px] font-semibold">
                  Our content{" "}
                </h1>
                <ul className="text-white pt-3 ">
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    Twitter
                  </li>
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    Facebook{" "}
                  </li>
                  <li className="py-1 cursor-pointer text-[12px] text-[#F7F7F7]">
                    Youtube
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="icons py-2">
            <center className="">
              <div className="mb-5 ">
                <center>
                  <span className=" pt-6  cursor-pointer">
                    <i class="fa-brands fa-twitter text-yellow-400 text-2xl "></i>
                  </span>
                  <span className=" pt-6   ml-6 cursor-pointer  ">
                    <i class="fab fa-linkedin-in text-yellow-400 text-2xl"></i>
                  </span>
                </center>
              </div>
            </center>
          </div>
        </div>

        <div className="copyright py-3">
          <center>
            <h1 className="text-gray-400 text-[12px] cursor-pointer">
              copyright © 2022 <strong className="px-2">AMATHOUS</strong> ︳All
              Rights Reserved
            </h1>
          </center>
        </div>
      </div>
    </>
  );
};

export default Footer;
