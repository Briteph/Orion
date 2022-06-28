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
      <div className="flex select-none NavBar">
        <div className="h-screen">
          <div className="grid h-32 p-8 select-none logo justify-items-center">
            <img src={logo} alt="" className="m-0" />
          </div>
          <div className="grid mt-5 ml-8 navLinks ">
            <Link to={"/app"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              URLs.dashboard.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
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
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              URLs.requisition.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
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
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              URLs.candidate.includes(useLocation().pathname)
                                ? "text-white bg-[#5179DF] drop-shadow-xl"
                                : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
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
        <div className="w-full min-h-screen pt-6 pl-6 bg-[#EDEDED]">
          <div className="profile w-full flex text-[#2B4993] justify-end text-[1.1rem] font-bold pr-4 mb-6 items-center gap-2">
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-[#b8c5e6] hover:bg-opacity-30">
              <UserIcon
                className="text-2xl"
                onClick={() => setShowCard(!showCard)}
              />
              <div onClick={() => setShowCard(!showCard)} ref={innerRef}>
                Hi, {user}
              </div>
            </div>
            {showCard ? (
              <div className="absolute translate-y-[5.5rem] z-[999]">
                <div className="w-52 relative py-[0.62rem] px-[0.60rem] border-gray-100 bg-white rounded-lg drop-shadow-lg items-center">
                  <div className="flex flex-col gap-1 text-lg uppercase">
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
          <div className="overflow-y-auto h-[88.5vh]">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ContentNav;
