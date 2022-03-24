import React from "react";
import { Link } from "react-router-dom";
import FouModalOne from "../Modal/FouModalOne";

const FounderSignUpComp = () => {
  return (
    <>
      <div className="md:w-[55%] w-[90%] mx-auto my-9 md:my-16">
        <div>
          <div>
            <h1 className="text-center md:text-[4rem] text-4xl font-bold py-6">
              Founder Sign Up{" "}
            </h1>
            <p className="text-center text-gray-400 md:text-sm  py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              nunc, duis non ut dignissim rhoncus tristique fringilla donec.
              Orci, integer ipsum neque mus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Volutpat nunc, duis non ut dignissim
              rhoncus tristique fringilla donec. Orci, integer ipsum neque mus.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex">
              <button className="rounded-l-lg  text-gray-50 border border-black bg-black py-2 px-9">
                Founder
              </button>
              <Link to="/InvesSignUpComp">
                {" "}
                <button className="rounded-r-lg border border-gray-400  text-gray-900 py-2 px-9 ">
                  Investor
                </button>
              </Link>
            </div>
          </div>

          <div className=" px-5 md:mx-auto my-8 border-t-8 border-black bg-gray-200">
            <div className=" py-6">
              <div className=" flex justify-between ">
                <h3 className="font-semibold text-gray-500">Action</h3>
                <div>
                  <div className="flex">
                    <button className=" text-gray-900 font-bold px-2 md:px-9">
                      Sign Up <i class="fa-solid fa-check px-2"></i>
                    </button>
                    <Link to="/FounderLoginComp">
                      {" "}
                      <button className=" text-gray-500 font-semibold px-2 md:px-9">
                        {" "}
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" ">
            <h1 className="py-1 text-lg text-gray-900 font-bold">
              1.Founder details
            </h1>
            <div>
              <form>
                <div class="my-4">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="Founder first name"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-regular fa-user w-5 h-5 text-gray-400 text-xl"></i>
                    </div>{" "}
                    <i class=""></i>
                  </div>{" "}
                </div>
                <div class="my-4">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="Founder last name"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-regular fa-user w-5 h-5 text-gray-400 text-xl"></i>
                    </div>
                  </div>{" "}
                </div>

                <div class="my-4">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="Business name"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-solid fa-file-invoice  w-5 h-5 text-gray-400 text-xl"></i>
                    </div>
                  </div>{" "}
                </div>

                <div class="my-4">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="Business Email Address"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-regular fa-envelope   w-5 h-5 text-gray-400 text-xl"></i>
                    </div>
                  </div>{" "}
                </div>

                <div class="my-4">
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="Phone number"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-solid fa-phone w-5 h-5 text-gray-400 text-xl"></i>
                    </div>
                  </div>{" "}
                </div>

                <div class="my-4">
                  <div class="relative">
                    <input
                      type="text"
                      id="businessname"
                      class="bg-gray-200   text-gray-900 text-sm rounded-lg  py-4  block w-full pl-3 p-2.5   "
                      placeholder="New Password"
                    />
                    <div class="flex absolute inset-y-0 mr-3 right-0 items-center pl-1 pointer-events-none">
                      <i class="fa-solid fa-lock w-5 h-5 text-gray-400 text-xl"></i>
                    </div>
                  </div>{" "}
                </div>

                <center className="my-9">
                  <FouModalOne />
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderSignUpComp;
