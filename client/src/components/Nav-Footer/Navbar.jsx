import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo3.svg";
import menu from "../assets/menu2.svg";
const Navbar = () => {
  let location = useLocation();  
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className=" border-b border-gray-300 md:border-gray-50  ">
          <nav className="bg-[#F7F7F7]  px-2 sm:px-4  pt-2 rounded ">
            <div className="container md:w-[90%]   flex flex-wrap pb-3  md:border-b border-gray-300 justify-between items-center mx-auto">
              <a href="#" className="flex items-center">
                <Link to="/">
                  {" "}
                  <img
                    src={logo}
                    alt="logo"
                    className="h-[37px] w-[66px] md:h-[6rem] w-[6rem] ml-2 mt-2 "
                  />
                </Link>
              </a>
              <div className="flex md:order-2">
                <Link to="/FounderLoginComp">
                  <button
                    type="button"
                    className="text-black bg-gray-50 border border-gray-800   hidden md:block font-medium rounded text-sm px-7 py-3 text-center mr-3 md:mr-0  "
                  >
                    Login
                  </button>{" "}
                </Link>
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  data-collapse-toggle="mobile-menu-4"
                  type="button"
                  className="inline-flex items-center p-2 text-sm  "
                  aria-controls="mobile-menu-4"
                  aria-expanded="false"
                >
                  <img src={menu} alt="img" className="md:hidden h-6 w-6" />
                </button>
              </div>
              {show ? (
                <div
                  className=" mt-2 bg-gray-200 rounded-md justify-between items-center w-full md:flex md:w-auto md:order-1"
                  id="mobile-menu-4"
                >
                  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                      <Link
                        to="/"
                        className={` ${location.pathname === "/" ? "active" : ""
                        } block py-2 pr-4 font-bold pl-3   text-gray-500  rounded md:bg-transparent md:text-gray-900 md:p-0  `}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ForFounderComp"
                        className={` ${location.pathname === "/ForFounderComp" ? "active" : ""} block py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                      >
                        For Founders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`block ${location.pathname === "/" ? "active" : ""
                          } py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                      >
                        For investors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 "
                      >
                        Need virtual CTO
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Aboutus"
                        className={`block ${location.pathname === "/Aboutus" ? "active" : ""
                          } py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                      >
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}

              <div
                className=" hidden md:block justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-4"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link
                      to="/"
                      className={` ${location.pathname === "/" ? "active" : ""
                        } block py-2 pr-4 font-bold pl-3 text-white bg-black  rounded md:bg-transparent md:text-gray-500 md:p-0  `}
                    >
                      Home   
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ForFounderComp"
                      className={`block ${location.pathname === "/ForFounderComp" ? "active" : ""
                        } py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                    >
                      For Founders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`block ${location.pathname === "/ForFounder" ? "active" : ""
                        } py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                    >
                      For investors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 "
                    >
                      Need virtual CTO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Aboutus"
                      className={`block ${location.pathname === "/Aboutus" ? "active" : ""
                        } py-2 pr-4 pl-3 font-bold text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 `}
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
