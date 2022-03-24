import React from "react";
import dots from "../assets/dots.png";

const Graph = () => {
  return (
    <>
      <div>
        <div className="md:w-[60%] w-[86%] mx-auto md:mt-[8rem] mt-16">
          <div className="flex md:w-[90%]  mx-auto">
            <h1 className="text-black text-center text-[24px] leading-[38px] md:text-[34px] font-bold font-Outfit">
              The problem is real - help us close the race & gender gap in
              Venture Capital.
            </h1>
            <img
              src={dots}
              alt="dots"
              className="h-[30px] w-[32px] absolute mt-[75px] ml-[17rem] md:ml-[40rem]   md:mt-[3rem] "
            />
          </div>
        </div>

        <div className="  md:-mt-14 ">
          <div className="md:h-[37px] h-[26px] -rotate-90 w-[384px] md:py-2 py-1 -ml-[180px] rounded-b-md absolute mt-[293px] md:mt-[18rem] bg-black">
            <h1 className="text-gray-50 text-[13px]   text-center">
              Share of venture capitalists by ethnic, race & gender identity
            </h1>
          </div>

          <div className=" flex md:w-[80%] w-[95%] mx-auto h-auto ">
            <div className="-rotate-90 w-[30rem] md:-ml-[5rem] -ml-[8rem] mt-[15rem] h-4">
              <p className="text-gray-500 text-[12px]  font-semibold">
                Share of venture capitalists (Number of partners)
              </p>
            </div>
            <div className="ml-1 w-8 pt-2 mt-[83px]  -ml-[170px] md:-ml-40">
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                70%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                60%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                50%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                40%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                30%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                20%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">
                10%
              </p>
              <p className="text-gray-500 text-[11px] font-semibold py-4">0%</p>
            </div>
            <div className="flex w-[100%]  reltive    ">
              <div>
                <div className="mx-2  absolute   mt-[9rem] ">
                  <p className="text-gray-500 text-sm font-semibold  pt-10">
                    53%
                  </p>
                  <div
                    className="flex  "
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    <div className="bg-black w-[2px] h-[16rem]"></div>
                    <div
                      className="h-[16rem] bg-gray-300 w-4 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg  reltive"
                      style={{ animationDuration: "5s" }}
                      max="1"
                      value="-1"
                    >
                      {/* <div className='bg-gray-300 h-[16rem] w-3   md:w-12 absolute bottom-0   '></div> */}
                    </div>
                  </div>
                  <div className="w-[22px] md:w-12">
                    <p className=" text-center w-[22px] md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px]">
                      White & male
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-2  absolute ml-[3rem] md:ml-[7rem] mt-[15rem] ">
                <p className="text-gray-500 text-sm font-semibold  pt-10">
                  34%
                </p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[10rem] "></div>
                  <div
                    className="h-[10rem] bg-gray-300 w-4 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg  reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[10rem] w-3 md:w-12 absolute bottom-0    '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px]  md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px]">
                    Asian & Male
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[5rem] md:ml-[13rem] mt-[19rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">
                  21%
                </p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[6rem]"></div>
                  <div
                    className="h-[6rem] bg-gray-300 w-4 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg   reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[6rem] w-3 md:w-12 absolute bottom-0   '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center  w-[22px] md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px]">
                    White & Female
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[7rem] md:ml-[19rem] mt-[21rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">
                  {" "}
                  14%
                </p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[4rem]"></div>
                  <div
                    className="h-[4rem] bg-gray-300 w-4 md:w-12 is-loadinggg barrr is-loadinggg  reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[4rem] w-3 md:w-12 absolute bottom-0   '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px] md:w-14  text-gray-500 text-[6px] py-2 md:text-[11px]">
                    Asian & Female
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[9rem] md:ml-[25rem] mt-[23rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">9%</p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[2rem]"></div>
                  <div
                    className="h-[2rem] bg-gray-300 w-4 md:w-12 is-loadinggg barrr is-loadinggg  reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[2rem] w-3 md:w-12 absolute bottom-0   '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px] md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px]">
                    Black & Male
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[11rem] md:ml-[31rem] mt-[24rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">2%</p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[1rem]"></div>
                  <div
                    className="h-[1rem] bg-gray-300 w-4 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg  reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[1rem] w-3 md:w-12 absolute bottom-0   '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px] md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px] ">
                    Black & Female
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[13rem] md:ml-[37rem] mt-[24rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">2%</p>
                <div
                  className="flex "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="bg-black w-[2px] h-[1rem]"></div>
                  <div
                    className="h-[1rem] bg-gray-300 w-4 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg  reltive"
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  >
                    {/* <div className='bg-gray-300 h-[1rem] w-3 md:w-12 absolute bottom-0   '></div> */}
                  </div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px] md:w-14 text-gray-500  text-[5px] py-2 md:text-[11px]  ">
                    Latinx & male
                  </p>
                </div>
              </div>

              <div className="mx-2 mt-8 absolute ml-[15rem] md:ml-[43rem] mt-[25rem]">
                <p className="text-gray-500 text-sm font-semibold  pt-10">0%</p>
                <div className="flex ">
                  <div className="bg-black w-[2px]  "></div>
                  <div
                    className="  bg-gray-600 w-3 md:w-12 bg-gray-300 is-loadinggg barrr is-loadinggg   reltive "
                    style={{ animationDuration: "5s" }}
                    max="1"
                    value="-1"
                  ></div>
                </div>
                <div className="w-[22px] md:w-12">
                  <p className=" text-center w-[22px] md:w-14 text-gray-500 text-[6px] py-2 md:text-[11px]">
                    Latinx & Female
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-center text-[12px] md:text-sm text-gray-500   font-semibold py-10">
              Ethnic, race, & gender identity of venture capital investors
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
