import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/images/tumi_logo_blue.png";
import { MdDashboard as Dashboard, MdLogout as Logout } from "react-icons/md";
import { BsFillBriefcaseFill as Candidate } from "react-icons/bs";
import {
  FaChair as Requisition,
  FaUserCircle as UserIcon,
} from "react-icons/fa";
import { IoIosSettings as Settings } from "react-icons/io";

function ContentNav({ children }) {
  const [showCard, setShowCard] = useState(false);
  const innerRef = useRef();
  const user = "Zach";
  const URLs = {
    requisition: [
      "/app/requisition",
      "/app/requistion/info",
      "/app/requistion/add-requisition",
    ],
    candidate: [
      "/app/candidate",
      "/app/candidate/profile",
      "/app/candidate/add-candidate",
    ],
    dashboard: ["/app"],
  };

  useEffect(() => {
    function checkForOutsideClick(event) {
      if (
        showCard &&
        innerRef.current &&
        !innerRef.current.contains(event.target)
      ) {
        setShowCard(false);
      }
    }
    document.addEventListener("mousedown", checkForOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkForOutsideClick);
    };
  }, [showCard]);

  return (
    <>
      <div className="flex NavBar select-none">
        <div className="w-1/5 h-screen">
          <div className="grid  logo h-32 justify-items-center p-8 select-none">
            <img src={logo} alt="" className="m-0" />
          </div>
          <div className="navLinks mt-5 grid ml-12 ">
            <Link to={"/app"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8
                            ${
                              URLs.dashboard.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : ""
                            }
                            `}
              >
                <span className="pt-1 mr-2">
                  <Dashboard />
                </span>
                Dashboard
              </div>
            </Link>
            <Link to={"/app/requisition"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8
                            ${
                              URLs.requisition.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : ""
                            }
                            `}
              >
                <span className="pt-1 mr-2">
                  <Requisition />
                </span>
                Requisition
              </div>
            </Link>
            <Link to={"/app/candidate"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8
                            ${
                              URLs.candidate.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : ""
                            }
                            `}
              >
                <span className="pt-1 mr-2">
                  <Candidate />
                </span>
                Candidate
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full min-h-screen p-5 bg-[#EDEDED]">
          <div className="profile w-full flex text-[#2B4993] justify-end text-[1.1rem] font-bold pr-4 my-6 items-center gap-2">
            <UserIcon
              className="text-2xl"
              onClick={() => setShowCard(!showCard)}
            />
            <div onClick={() => setShowCard(!showCard)} ref={innerRef}>
              Hi, {user}
            </div>
            {showCard ? (
              <div className="absolute translate-y-[5.5rem] z-[999]">
                <div className="w-52 relative py-[0.62rem] px-[0.60rem] border-gray-100 bg-white rounded-lg drop-shadow-lg items-center">
                  <div className="flex flex-col gap-1 uppercase text-lg">
                    <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <UserIcon className="text-2xl" />
                          <div>Profile</div>
                        </div>
                        <div>{`>`}</div>
                      </div>
                    </button>
                    <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Settings className="text-2xl" />
                          <div>Settings</div>
                        </div>
                        <div>{`>`}</div>
                      </div>
                    </button>
                    <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                          <Logout className="text-2xl" />
                          <div>Logout</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default ContentNav;
