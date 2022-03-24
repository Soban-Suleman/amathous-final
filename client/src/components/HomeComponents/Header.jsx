import React, { useState } from "react";
import Swal from "sweetalert2";
import { contact_us } from "../../api/apifun";
import logo from "../assets/w-logo.png";
const Header = () => {
  const [type, setType] = useState("founder");
  const [formData, setFormData] = useState({
    subject: "founder",
    fullName: "",
    businessName: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, subject: type });
    await contact_us(formData);
    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      titleText:
        "Thank you for showing your interest! we will let you know once we go live",
    });
    setFormData({ fullName: "", email: "", businessName: "" });
  };

  return (
    <>
      <div className="  md:mx-8  ">
        <div className="md:flex">
          {/* header left */}
          <div className="md:mx-8  md:w-[70%] md:mt-1">
            <div className="md:flex   ">
              <div className="pt-4  ">
                <h1 className="md:text-[3rem] text-[27px] text-center font-Outfit font-bold md:pb-4 py-3 md:ml-7">
                  Leveling The Playing Field
                </h1>
              </div>
            </div>
            <div className="header-left-bg md:w-full w-[95%] mx-auto   h-32  md:h-[15rem] rounded-lg">
              <div className="  md:py-16    ">
                <h1 className="text-gray-50 md:text-left text-center font-bold text-2xl pt-16 pt-3 md:text-5xl px-4 font-Outfit ">
                  For Founders.
                </h1>
              </div>
              <div className="wraper md:hidden md:-mt-40 md:ml-6 mt-12 w-full   flex justify-center     md: justify-end   w-[100%] ">
                <div
                  id="loading"
                  className=" absolute  bg-yellow-400       overflow-visible    md:-mt-16     rounded-full md:h-[6rem] h-[4rem] w-[4rem] md:w-[6rem]"
                >
                  <div className="bg-yellow-400 border-8 border-gray-50 rounded-full md:h-[4rem] h-[3rem] w-[3rem] md:w-[4rem] m-2 md:my-4  md:mx-4">
                    <img
                      src={logo}
                      alt="img"
                      className="md:mt-2  m-1 md:h-8 md:w-8 h-5 w-5  md:ml-2"
                    />
                  </div>
                </div>
              </div>
              <div className="wraper hidden  md:-mt-40 md:ml-6 mt-16 w-full grid grid-cols-1 gap-4 place-items-center  md:flex justify-end   w-[100%] ">
                <div
                  id="loading"
                  className=" absolute  bg-yellow-400       overflow-visible    md:-mt-16     rounded-full md:h-[6rem] h-[4rem] w-[4rem] md:w-[6rem]"
                >
                  <div className="bg-yellow-400 border-8 border-gray-50 rounded-full md:h-[4rem] h-[3rem] w-[3rem] md:w-[4rem] m-2 md:my-4  md:mx-4">
                    <img
                      src={logo}
                      alt="img"
                      className="md:mt-2  m-1 md:h-8 md:w-8 h-5 w-5  md:ml-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" under-header my-4 md:mt-3 mt-8   md:flex">
              <div className="flex py-3 mx-2  md:w-[50%]">
                <div className="h-4  mx-1  w-[160px]">
                  <h1 className="text-[15px] font-bold text-gray-900 font-Outfit">
                    {" "}
                    Warm investor intro's
                  </h1>
                  <div className="h-[25px] my-1 w-[150px] bg-gray-300 rounded"></div>
                </div>
                <div className="w-[210px]">
                  <p className="text-gray-500   leading-[16px]  text-left text-[14px] ">
                    Once you complete your founder profile, meet investors that
                    are most interested in you & your startup.
                  </p>
                </div>
              </div>

              <div className="flex py-3  mx-2  md:w-[50%]">
                <div className="h-4    w-[160px]  mx-1 ">
                  <h1 className="text-[15px] font-bold text-gray-900 font-Outfit">
                    Curated Deal Flow
                  </h1>
                  <div className="h-[25px] my-1 w-[150px] bg-gray-300 rounded"></div>
                </div>
                <div className="w-[210px]  ">
                  <p className="text-gray-500    leading-[16px]  text-left text-[14px]">
                    Once you complete your investor profile, receive a curated
                    deal flow & meet the diverse founders behind them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* header right */}
          <div className=" md:mx-6  bg-gray-200 mt-8 rounded-lg  h-[420px] w-full md:w-[25%]">
            <div className="px-5 py-6 ">
              <h1 className="  text-[24px] text-center md:text-left text-gray-900 font-bold">
                Coming Soon...
              </h1>
              <div>
                <form
                  onChange={({ target: { name, value } }) => {
                    setFormData({ ...formData, [name]: value });
                  }}
                  onSubmit={handleSubmit}
                >
                  <h1 className="text-gray-400 font-bold text-center md:text-left py-2">
                    I Am A
                  </h1>
                  <div className="flex  justify-center md:justify-start ">
                    <h1
                      onClick={(e) => {
                        setType("founder");
                        setFormData({ ...formData, subject: "founder" });
                      }}
                      className={`text-gray-${
                        type === "founder" ? 800 : 500
                      } font-bold cursor-pointer`}
                    >
                      Founder
                    </h1>
                    {type === "founder" && (
                      <i class="fa-solid fa-check pt-1 px-2"></i>
                    )}
                    <h1
                      onClick={(e) => {
                        setFormData({ ...formData, subject: "investor" });
                        setType("investor");
                      }}
                      className={`text-gray-${
                        type === "investor" ? 800 : 500
                      } mx-6 font-bold cursor-pointer`}
                    >
                      Investor
                    </h1>
                    {type === "investor" && (
                      <i class="fa-solid fa-check pt-1"></i>
                    )}
                  </div>
                  <div class="  my-5">
                    <div class="relative">
                      <input
                        type="text"
                        id="name"
                        class="bg-gray-200 border focus:bg-gray-100 border-gray-300 text-gray-900 text-sm rounded    h-[44px]  block w-full pl-4 p-2.5   "
                        name="fullName"
                        placeholder="Full name"
                      />
                      <div class="flex absolute inset-y-0 mr-2 right-0 items-center pl-1 pointer-events-none">
                        <i class="fa-regular fa-user w-5 h-5 text-gray-500 text-xl"></i>
                      </div>
                    </div>{" "}
                  </div>

                  <div class="my-5">
                    <div class="relative">
                      <input
                        type="email"
                        id="email"
                        class="bg-gray-200 focus:bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded  h-[44px]   block w-full pl-4 p-2.5 "
                        name="email"
                        placeholder="Email address"
                      />
                      <div class="flex absolute inset-y-0 mr-2 right-0 items-center pl-1 pointer-events-none">
                        <i class="fa-regular fa-envelope w-5 h-5 text-gray-500 text-xl"></i>
                      </div>
                    </div>{" "}
                  </div>

                  <div class="my-5">
                    <div class="relative">
                      <input
                        type="text"
                        id="businessname"
                        class="bg-gray-200 focus:bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded  h-[44px]  block w-full pl-4 p-2.5"
                        name="businessName"
                        placeholder="Business name"
                      />
                      <div class="flex absolute inset-y-0 mr-2 right-0 items-center pl-1 pointer-events-none">
                        <i class="fa-solid fa-file-invoice w-5 h-5 text-gray-500 text-xl"></i>
                      </div>
                    </div>{" "}
                  </div>

                  <button
                    type="submit"
                    class="text-white bg-black w-full  font-medium rounded  text-sm px-5 h-[44px] text-center  "
                  >
                    Join waitlist
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
