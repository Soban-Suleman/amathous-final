import React from "react";
import lineone from "../assets/Line1.png";
import numberthree from "../assets/number3.png";
import numberfour from "../assets/number4.png";
import FouModalFour from "./FouModalFour";

export default function FouModalThree() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="px-8 w-full my-4">
        <center>
          <button
            class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
            type="button"
            onClick={() => setShowModal(true)}
          >
            Next
          </button>
        </center>
      </div>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative container w-full my-6 mx-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div>
                  <i
                    class="fa-solid fa-circle-xmark float-right px-6 pt-3 text-3xl cursor-pointer"
                    onClick={() => setShowModal(false)}
                  ></i>
                </div>
                <div className="     rounded-t">
                  <h3 className="text-5xl text-gray-900 text-center font-semibold">
                    Update Founder Profile
                  </h3>
                  <p className="text-gray-400 text-center py-2 px-2">
                    {" "}
                    Please update your profile to complete sign up process
                  </p>
                </div>
                {/*founer three modal body start below*/}

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
                      <div className=" p-3 px-4 rounded-full bg-black">
                        <i class="fa-solid fa-check text-xl text-gray-50"></i>
                      </div>
                      <img
                        src={lineone}
                        alt="img"
                        className="h-0.5 mt-5 w-14 md:w-[25%]"
                      />
                      <img src={numberthree} alt="img" />
                      <img
                        src={lineone}
                        alt="img"
                        className="h-0.5 mt-5 w-14 md:w-[25%]"
                      />
                      <img src={numberfour} alt="img" />
                    </div>
                    <div className="flex py-2 justify-between">
                      <p className="text-gray-900 text-sm font-bold  "> </p>
                      <p className="text-gray-900 text-sm font-bold  "> </p>
                      <p className="text-gray-900 text-sm font-bold  ">
                        {" "}
                        Financials
                      </p>
                      <p className="text-gray-900 text-sm font-bold  "> </p>
                    </div>
                  </div>

                  <div className="w-full   ">
                    <div className="  ">
                      <div className=" flex justify-between  bg-gray-200   h-14 py-2 px-3 rounded">
                        <input
                          type="text"
                          id="email"
                          class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                          placeholder="MRR (Monthly Recurring Revenue)"
                        />
                        <div className="flex">
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class="fa-solid fa-minus text-lg text-gray-50 mt-1  "></i>
                          </span>
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class=" fa-solid fa-plus text-lg  text-gray-50 mt-1 "></i>{" "}
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between  bg-gray-200 my-5  h-14 py-2 px-3 rounded">
                        <input
                          type="text"
                          id="email"
                          class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                          placeholder="ARR (Accounting Rate of Return)"
                        />
                        <div className="flex">
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class="fa-solid fa-minus text-lg text-gray-50 mt-1 "></i>
                          </span>
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class=" fa-solid fa-plus text-lg  text-gray-50 mt-1 "></i>{" "}
                          </span>
                        </div>
                      </div>

                      <div className=" flex justify-between  bg-gray-200   h-14 py-2 px-3 rounded">
                        <input
                          type="text"
                          id="email"
                          class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                          placeholder="$ Fundraise amount"
                        />
                        <div className="flex">
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class="fa-solid fa-minus text-lg text-gray-50 mt-1  "></i>
                          </span>
                          <span className="bg-black mx-2 p-3 rounded-lg cursor-pointer pt-1">
                            {" "}
                            <i class=" fa-solid fa-plus text-lg  text-gray-50 mt-1 "></i>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center py-2  border-t border-solid border-blueGray-200 rounded-b">
                  <FouModalFour />
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
