import React, { useState } from "react";
import lineone from "../assets/Line1.png";
import linethree from "../assets/Line3.png";
import numberone from "../assets/number1.png";
import numbertwo from "../assets/number2.png";
import numberthree from "../assets/number3.png";

const InvesModalOne = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [show, setShow] = useState(true);
  const [showw, setShoww] = useState(false);
  const [showww, setShowww] = useState(false);
  return (
    <>
      <div className="px-8 w-full my-2">
        <center>
          <button
            class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
            type="button"
            onClick={() => { setShowModal(true); setShowww(false); setShow(true); }}
          >
            Sign Up
          </button>
        </center>
      </div>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative container w-full my-3 mx-auto  ">
              {/*content*/}
              <div className="border-0  rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="">
                  <i
                    class="fa-solid fa-circle-xmark float-right px-6 pt-3 text-3xl cursor-pointer"
                    onClick={() => setShowModal(false)}
                  ></i>
                </div>
                <div className="      ">
                  <h3 className="text-[36px] text-gray-900 text-center font-semibold">
                    Update Investor Profile
                  </h3>
                  <p className="text-gray-400 text-center py-2 px-2">
                    {" "}
                    Please update your profile to complete sign up process
                  </p>
                </div>
                {/*body*/}
                {/* modal one body hide and show div start below */}
                {show ? (
                  <div>
                    <div>
                      <div className="relative md:w-[70%] mx-auto p-6 flex-auto">
                        <div className="w-full   ">
                          <div className="flex justify-center ">
                            <img src={numberone} alt="img" />
                            <img
                              src={lineone}
                              alt="img"
                              className="h-0.5 mt-5 w-14 md:w-[25%]"
                            />
                            <img src={numbertwo} alt="img" />
                            <img
                              src={linethree}
                              alt="img"
                              className="h-0.5 mt-5 w-14 md:w-[25%]"
                            />
                            <img src={numberthree} alt="img" />
                          </div>
                          <div className="flex py-2 justify-between w-[67%]">
                            <p className="text-gray-900 text-sm font-bold  ">
                              About
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  "></p>
                          </div>
                        </div>

                        <div className="w-full   ">
                          <div className="w-full  my-4  ">
                            <div class="my-4">
                              <div class="relative">
                                <input
                                  type="text"
                                  id="go"
                                  class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                                  placeholder="Position / Title"
                                />
                              </div>{" "}
                            </div>
                          </div>

                          <div className="w-full  my-4  ">
                            <div class="my-4">
                              <div class="relative">
                                <input
                                  type="text"
                                  id="go"
                                  class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                                  placeholder="Firm website"
                                />
                              </div>{" "}
                            </div>
                          </div>

                          <div className="w-full  my-4  ">
                            <div class="my-4">
                              <div class="relative">
                                <input
                                  type="text"
                                  id="go"
                                  class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                                  placeholder="Twitter profile URL"
                                />
                              </div>{" "}
                            </div>
                          </div>

                          <div className="w-full  my-4  ">
                            <div class="my-4">
                              <div class="relative">
                                <input
                                  type="text"
                                  id="go"
                                  class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                                  placeholder="LinkedIn profile URL"
                                />
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center py-2  ">
                        <button
                          class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
                          type="button"
                          onClick={() => {
                            setShow(false);
                            setShoww(true);
                          }}
                        >
                          {" "}
                          Next{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* modal one body hide and show div end above*/}

                {/* invest modal two body start hide and show below */}

                {showw ? (
                  <div>
                    <div>
                      <div className="relative md:w-[70%] mx-auto p-6 flex-auto">
                        <div className="w-full   ">
                          <div className="flex justify-center ">
                            <div className=" p-3 px-4 rounded-full bg-black">
                              <i class="fa-solid fa-check text-xl text-gray-50"></i>
                            </div>
                            <img
                              src={lineone}
                              alt="img"
                              className="h-0.5 mt-5 w-14 md:w-[25%]"
                            />
                            <img src={numbertwo} alt="img" />
                            <img
                              src={linethree}
                              alt="img"
                              className="h-0.5 mt-5 w-14 md:w-[25%]"
                            />
                            <img src={numberthree} alt="img" />
                          </div>
                          <div className="flex py-2 justify-between w-[67%]">
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                              Investment interests{" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                          </div>
                        </div>

                        <div className="w-full   ">
                          <div className="w-full  my-1  ">
                            <div class="my-2">
                              <div class="relative bg-gray-200 px-3  rounded">
                                <select className="bg-gray-200 outline-none text-gray-500 text-sm rounded  py-4  block w-full pl-3 p-2.5  ">
                                  <option>Geolocations interested in</option>
                                  <option>Geolocations interested in</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" flex">
                            <div className=" flex justify-between  bg-gray-300 mr-2 h-11 py-2 w-[10rem] px-3 rounded">
                              <p className="text-gray-600 ">Oslo, Norway</p>
                              <i class="fa-solid fa-xmark  text-xl  cursor-pointer"></i>
                            </div>

                            <div className=" flex justify-between   mx-2 bg-gray-300 h-11 py-2 w-auto px-3 rounded">
                              <p className="text-gray-600 ">
                                New York city, USA
                              </p>
                              <i class="fa-solid fa-xmark text-xl cursor-pointer mx-2"></i>
                            </div>
                          </div>

                          <div className="w-full  my-1  ">
                            <div class="my-2">
                              <div class="relative bg-gray-200 px-3  rounded">
                                <select className="bg-gray-200 outline-none text-gray-500 text-sm rounded  py-4  block w-full pl-3 p-2.5  ">
                                  <option>Industries interested in</option>
                                  <option>Industries interested in</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className=" flex">
                            <div className=" flex justify-between  bg-gray-300 mr-2 h-11 py-2 w-[10rem] px-3 rounded">
                              <p className="text-gray-600 ">
                                Electric Vehicles
                              </p>
                              <i class="fa-solid fa-xmark  text-xl  cursor-pointer"></i>
                            </div>

                            <div className=" flex justify-between   mx-2 bg-gray-300 h-11 py-2 w-[10rem] px-3 rounded">
                              <p className="text-gray-600 ">Blockchain</p>
                              <i class="fa-solid fa-xmark text-xl cursor-pointer"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center py-2  ">
                        <button
                          class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
                          type="button"
                          onClick={() => {
                            setShoww(false);
                            setShowww(true);
                          }}
                        >

                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* invest  modal two body end hide and show above */}

                {/* invest modal Three body start hide and show below */}

                {showww ? (
                  <div>
                    <div>
                      <div className="relative md:w-[70%] mx-auto p-6 flex-auto">
                        <div className="w-full   ">
                          <div className="flex justify-center ">
                            <div className=" p-3 px-4 rounded-full bg-black">
                              <i class="fa-solid fa-check text-xl text-gray-50"></i>
                            </div>
                            <img
                              src={lineone}
                              alt="img"
                              className="h-0.5 mt-6 w-14 md:w-[25%]"
                            />
                            <div className=" p-3 px-4 rounded-full bg-black">
                              <i class="fa-solid fa-check text-xl text-gray-50"></i>
                            </div>
                            <img
                              src={lineone}
                              alt="img"
                              className="h-0.5 mt-6 w-14 md:w-[25%]"
                            />
                            <img src={numberthree} alt="img" />
                          </div>
                          <div className="flex py-2 justify-between w-[69%]">
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                            </p>
                            <p className="text-gray-900 text-sm font-bold  ">
                              {" "}
                              Velocity & size
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-left">Deal velocity per quarter</p>{" "}
                        </div>
                        <div className="w-full   ">
                          <div className="w-full  my-1  ">
                            <div class="my-2">
                              <div class=" flex grid grid-cols-2  sm:grid-cols-4 md:grid-cols-4 gap-4 h-20">
                                <label
                                  htmlFor="label-class-1"
                                  className="label-class label-class-1"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-1"
                                    className="input-radio hidden"
                                  />
                                  <span className="radio-span">1-2</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-2"
                                  className="label-class label-class-2"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-2"
                                    className="hidden input-radio"
                                  />
                                  <span className="radio-span">2-5</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-3"
                                  className="label-class label-class-3"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-3"
                                    className="input-radio hidden"
                                  />
                                  <span className="radio-span">5-10</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-4"
                                  className="label-class label-class-4"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-4"
                                    className="hidden input-radio"
                                  />
                                  <span className="radio-span">10+</span>
                                  <div className="dot"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-left">Check size</p>{" "}
                        </div>
                        <div className="w-full   ">
                          <div className="w-full  my-1  ">
                            <div class="my-2  ">
                              <div class=" flex  grid grid-cols-2  sm:grid-cols-4 md:grid-cols-4 gap-4 h-20 h-20">
                                <label
                                  htmlFor="label-class-5"
                                  className="label-class label-class-5"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-5"
                                    className="input-radio hidden"
                                  />
                                  <span className="radio-span">5k - 50k</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-6"
                                  className="label-class label-class-6"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-6"
                                    className="hidden input-radio"
                                  />
                                  <span className="radio-span">51k-250k</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-7"
                                  className="label-class label-class-7"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-7"
                                    className="input-radio hidden"
                                  />
                                  <span className="radio-span">
                                    251k - 500k
                                  </span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-8"
                                  className="label-class label-class-8"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-8"
                                    className="hidden input-radio"
                                  />
                                  <span className="radio-span">501K-1M</span>
                                  <div className="dot"></div>
                                </label>

                                <label
                                  htmlFor="label-class-9"
                                  className="label-class label-class-9"
                                >
                                  <input
                                    type="radio"
                                    name="size"
                                    id="label-class-9"
                                    className="hidden input-radio"
                                  />
                                  <span className="radio-span">2-5</span>
                                  <div className="dot"></div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-center mt-16 py-2  ">
                        <button
                          class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          {" "}
                          Update profile{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* invest  modal Three body end hide and show above */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default InvesModalOne;
