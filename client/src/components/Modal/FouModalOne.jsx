import React,{useState} from "react";
import lineone from "../assets/Line1.png";
import linethree from "../assets/Line3.png";
import numberone from "../assets/number1.png";
import numbertwo from "../assets/number2.png";
import numberthree from "../assets/number3.png";
import numberfour from "../assets/number4.png";
import FouModalTwo from "./FouModalTwo";

export default function FouModalOne() {
  const [showModal, setShowModal] =  useState(false);
  const [show, setShow] = useState(true);
  const [showw, setShoww] = useState(false);
  const [showww, setShowww] = useState(false);
  const [showwww, setShowwww] = useState(false);
  return (
    <>
      <div className="px-8 w-full my-4">
        <center>
          <button
            class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
            type="button"
            onClick={() => { setShowModal(true); setShow(true);  }}
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
                    Update Founder Profile
                  </h3>
                  <p className="text-gray-400 text-[12px] text-center py-2 px-2">
                    {" "}
                    Please update your profile to complete sign up process
                  </p>
                </div>



                {/*body founer modal one div start below*/}
                {show ? <div>
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
                        <img
                          src={linethree}
                          alt="img"
                          className="h-0.5 mt-5 w-14 md:w-[25%]"
                        />
                        <img src={numberfour} alt="img" />
                      </div>
                      <div className="flex py-2 justify-between">
                        <p className="text-gray-900 text-sm font-bold  ">
                          Company detail
                        </p>
                        <p className="text-gray-900 text-sm font-bold  "> </p>
                        <p className="text-gray-900 text-sm font-bold  "> </p>
                        <p className="text-gray-900 text-sm font-bold  "></p>
                      </div>
                    </div>

                    <div className="w-full     ">
                      <div class="">
                        <div class="relative">
                          <input
                            type="text"
                            id="input"
                            class="bg-gray-200 outline-none h-[44px] text-gray-900 text-sm rounded     block w-full pl-3 p-2.5   "
                            placeholder="Co-founder  name"
                          />
                        </div>{" "}
                      </div>
                      <p className="text-gray-900 font-semibold text-right cursor-pointer hover:text-blue-400 ">
                        {" "}
                        + Add another co-founder{" "}
                      </p>
                    </div>

                    <div className="w-full   ">
                      <div className="w-full   ">
                        <div>
                          <p className="text-left">Company size</p>{" "}
                        </div>
                        <div className="w-full  my-1  ">
                          <div class="my-2">
                            <div class=" flex grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-3 h-14">
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
                                <span className="radio-span">1-10</span>
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
                                <span className="radio-span">11-50</span>
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
                                <span className="radio-span">50+</span>
                                <div className="dot"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full  my-1  ">
                        <div class="my-2 mt-11 md:mt-0">
                          <div class="  bg-gray-200 px-3 h-[44px]  rounded">
                            <select className="bg-gray-200 h-[44px] outline-none text-gray-500 text-sm rounded  py-1  block w-full pl-3 p-2.5  ">
                              <option>Industry of startup</option>
                              <option>Electric Ve</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className=" flex">
                        <div className=" flex justify-between  bg-gray-300 mr-2 h-11 py-3 w-[151px] px-3 rounded">
                          <p className="text-gray-600 text-[12px] ">
                            Electric Vehicles
                          </p>
                          <i class="fa-solid fa-xmark  text-[12px ]  cursor-pointer"></i>
                        </div>

                        <div className=" flex justify-between   mx-2 bg-gray-300 h-11 py-2 w-[10rem] px-3 rounded">
                          <p className="text-gray-600 text-[12px] py-1 ">Blockchain</p>
                          <i class="fa-solid fa-xmark text-xl cursor-pointer"></i>
                        </div>
                      </div>

                      <div className="w-full  my-1 ">
                        <div class="my-4">
                          <div class="relative bg-gray-200 px-3 h-[44px] rounded">
                            <select className="bg-gray-200 outline-none text-gray-500 text-sm rounded  py-1 h-[44px]  block w-full pl-3 p-2.5  ">
                              <option>Startup city</option>
                              <option>Electric Ve</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="w-full  my-1 ">
                        <div class="my-4">
                          <div class="relative bg-gray-200 px-3 h-[44px] rounded">
                            <select className="bg-gray-200 outline-none h-[44px] text-gray-500 text-sm rounded  py-1  block w-full pl-3 p-2.5  ">
                              <option>Startup country</option>
                              <option>Electric Ve</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="w-full  my-1 ">
                        <div class="my-4 ">
                          <div class="relative bg-gray-200 px-3 h-[44px] rounded">
                            <select className="bg-gray-200 outline-none h-[44px] text-gray-500 text-sm rounded  py-1  block w-full pl-3 p-2.5  ">
                              <option>Year founded</option>
                              <option>Electric Ve</option>
                            </select>
                          </div>
                        </div>
                      </div>

                  <div  className=' flex'>
               
               <div  className=' flex justify-between  bg-gray-300 mr-2 h-11 py-3 w-[151px] px-3 rounded'> 
               <p className='text-gray-600 text-[12px] '>Electric Vehicles</p>
               <i class="fa-solid fa-xmark  text-[12px ]  cursor-pointer"></i>
               </div>

               <div  className=' flex justify-between     bg-gray-300 h-11 py-3 w-[151px] px-3 rounded'> 
               <p className='text-gray-600 text-[12px]'>Blockchain</p>
               <i class="fa-solid fa-xmark  text-[12px ]  cursor-pointer"></i>
               </div>
 

               </div>

               <div className='w-full  my-1 '>
                  <div class="my-4">
                    <div class="relative bg-gray-200 px-3 h-[44px] rounded">
 
                    <select  className='bg-gray-200 outline-none text-gray-500 text-sm rounded  h-[44px] block w-full pl-3 p-2.5  '>
                      <option>Startup city</option>
                      <option>Electric Ve</option>
                    </select>
 
  
                  </div>
                  </div> 
                  </div>

                  <div className='w-full  my-1 '>
                  <div class="my-4">
                    <div class="relative bg-gray-200 px-3 h-[44px] rounded">
 
                    <select  className='bg-gray-200 outline-none h-[44px] text-gray-500 text-sm rounded     block w-full pl-3 p-2.5  '>
                      <option>Startup country</option>
                      <option>Electric Ve</option>
                    </select>
 
  
                  </div>
                  </div> 
                  </div>

                  <div className='w-full  my-1 '>
                  <div class="my-4 ">
                    <div class="relative bg-gray-200 px-3 h-[44px] rounded">
 
                    <select  className='bg-gray-200 outline-none text-gray-500 text-sm rounded  h-[44px] block w-full pl-3 p-2.5  '>
                      <option>Year founded</option>
                      <option>Electric Ve</option>
                    </select>
 
  
                  </div>
                  </div> 
                  </div>

                  <div className='w-full  my-4  '>
                  <div class="my-4">
                    <div class="relative">
                      <input type="text" id="go" class="bg-gray-200 h-[44px] outline-none text-black text-sm rounded  py-4  block w-full pl-3 p-2.5   " placeholder="One line summary" />
  
                    </div> </div>
 
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
                          
                          Next 
                        </button>
                  </div>
                </div> : null}
                {/* founder  modal one div close above */}



                 {/*founder two modal body  start below*/}
                 {showw ? <div>
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
                          src={lineone}
                          alt="img"
                          className="h-0.5 mt-5 w-14 md:w-[25%]"
                        />
                        <img src={numberthree} alt="img" />
                        <img
                          src={linethree}
                          alt="img"
                          className="h-0.5 mt-5 w-14 md:w-[25%]"
                        />
                        <img src={numberfour} alt="img" />
                      </div>
                      <div className="flex py-2 justify-between">
                        <p className="text-gray-900 text-sm font-bold  "> </p>
                        <p className="text-gray-900 text-sm font-bold  ">
                          Traction Metrics
                        </p>
                        <p className="text-gray-900 text-sm font-bold  "> </p>
                        <p className="text-gray-900 text-sm font-bold  "></p>
                      </div>
                    </div>

                    <div className="w-full   ">
                      <div className="  ">
                        <div className=" flex justify-between  bg-gray-200   h-14 py-2 px-3 rounded">
                          <input
                            type="text"
                            id="email"
                            class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                            placeholder="MAU (Monthly Active Users)"
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
                            placeholder="MoM (Month-over-Month) Growth %"
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

                        <div className=" flex justify-between  bg-gray-200   h-14 py-2 px-3 rounded">
                          <input
                            type="text"
                            id="email"
                            class="bg-gray-200  outline-none text-gray-900 text-sm rounded  py-4  block w-full pl-3 p-2.5   "
                            placeholder="YoY (Year-over-Year) Growth %"
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
                </div>  : null}

                {/* founder body two end above */}






                {/*founer three modal body start below*/}
                {showww ?  <div>
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
                <button
                          class="text-white bg-black w-[15rem]  font-medium rounded  text-sm px-5 py-4 text-center  "
                          type="button"
                          onClick={() => {
                            setShowww(false);
                            setShowwww(true);
                          }}
                        >
                          
                          Next 
                        </button>
                </div>
                </div> : null}


               {/* founder modal three body end above */}
                    



                    {/*founder modal four body end below*/}
               {showwww ?  <div>
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
                      <div className=" p-3 px-4 rounded-full bg-black">
                        <i class="fa-solid fa-check text-xl text-gray-50"></i>
                      </div>
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
                      <p className="text-gray-900 text-sm font-bold  "> </p>
                      <p className="text-gray-900 text-sm font-bold  ">
                        {" "}
                        Supporting Documents
                      </p>
                    </div>
                  </div>

                  <div className="w-full   ">
                    <div className="  ">
                      <p className="text-gray-900 text-left text-sm  font-bold">
                        Business plan
                      </p>
                      <div className=" flex justify-between ">
                        <div className=" bg-gray-200  my-3 h-14 py-3 px-3 rounded">
                          <label
                            htmlFor="fileInput"
                            className="text-sm   font-bold"
                          >
                            <i class="fa-solid fa-paperclip mx-2 text-3xl"></i>
                            Attach business plan document
                          </label>
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                          />
                        </div>
                        <p className="pt-3">No file chosen</p>
                      </div>

                      <p className="text-gray-900 text-left text-sm  font-bold">
                        Business plan
                      </p>
                      <div className=" flex justify-between ">
                        <div className=" bg-gray-200  my-3 h-14 py-3 px-3 rounded">
                          <label
                            htmlFor="fileInput"
                            className="text-sm  font-bold"
                          >
                            <i class="fa-solid fa-paperclip mx-2 text-3xl"></i>
                            Attach business plan document
                          </label>
                          <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                          />
                        </div>
                        <p className="pt-3"> No file chosen</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center py-2    ">
                  <center>
                    <button
                      class="text-white bg-black w-[15rem] my-4 font-medium rounded  text-sm px-5 py-4 text-center  "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Update
                    </button>
                  </center>
                </div>
                </div> : null }
                 {/* founder modal four body end above */}













              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
