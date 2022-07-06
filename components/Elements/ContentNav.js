import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdDashboard as Dashboard, MdLogout as Logout } from "react-icons/md";
import { BsFillBriefcaseFill as Candidate } from "react-icons/bs";
import {
  FaChair as Requisition,
  FaUserCircle as UserIcon,
  FaChevronLeft as BackIcon,
} from "react-icons/fa";
import { IoIosSettings as Settings } from "react-icons/io";
import useWindowSize from "../../hooks/useWindowSize";
import Tooltip from "./Tooltip";
import {
  BiArrowBack as ThinBackIcon,
  BiEditAlt as AccEditIcon,
} from "react-icons/bi";

function ContentNav({ children }) {
  const router = useRouter();
  const [showCard, setShowCard] = useState(false);
  const [menuState, setMenuState] = useState("main");
  const menuRef = useRef();
  const { height, width } = useWindowSize();
  const user = "Zach";

  useEffect(() => {
    function checkForOutsideClick(event) {
      if (
        showCard &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowCard(false);
        setMenuState("main");
      }
    }
    document.addEventListener("mousedown", checkForOutsideClick);
    return () => {
      document.removeEventListener("mousedown", checkForOutsideClick);
    };
  }, [showCard]);

  function menuRender() {
    switch (menuState) {
      case "main":
        return (
          <div className="flex flex-col gap-2 text-[1rem]">
            <button
              className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full"
              onClick={() => setMenuState("profile")}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <UserIcon className="text-3xl" />
                  <div>Profile</div>
                </div>
                <div>{`>`}</div>
              </div>
            </button>
            <button
              className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full"
              onClick={() => setMenuState("settings")}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Settings className="text-3xl" />
                  <div>Settings</div>
                </div>
                <div>{`>`}</div>
              </div>
            </button>
            <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Logout className="text-3xl" />
                  <div>Logout</div>
                </div>
              </div>
            </button>
          </div>
        );
      case "profile":
        return (
          <div className="flex flex-col gap-1 text-[1rem]">
            <div className="flex items-center gap-4 rounded-full text-[#2B4993] w-full mb-2 p-1">
              <div className="flex items-center justify-center w-[30px] h-[30px] hover:bg-[#5179DF] hover:bg-opacity-25 rounded">
                <ThinBackIcon
                  className="text-2xl"
                  onClick={() => setMenuState("main")}
                />
              </div>
              <div className="text-2xl font-bold">Profile</div>
            </div>
            <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
              <div className="flex items-center gap-4">
                <AccEditIcon className="text-3xl" />
                <div>Edit account</div>
              </div>
            </button>
            <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
              <div className="flex items-center gap-4">
                <UserIcon className="text-3xl" />
                <div>Lorem ipsum</div>
              </div>
            </button>
          </div>
        );
      case "settings":
        return (
          <div className="flex flex-col gap-1 text-[1rem]">
            <div className="flex items-center gap-4 rounded-full text-[#2B4993] w-full mb-2 p-1">
              <div className="flex items-center justify-center w-[30px] h-[30px] hover:bg-[#5179DF] hover:bg-opacity-25 rounded">
                <ThinBackIcon
                  className="text-2xl"
                  onClick={() => setMenuState("main")}
                />
              </div>
              <div className="text-2xl font-bold">Settings</div>
            </div>
            <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
              <div className="flex items-center gap-4">
                <AccEditIcon className="text-3xl" />
                <div>Edit account</div>
              </div>
            </button>
            <button className="rounded p-1 text-[#2B4993] hover:bg-[#5179DF] hover:bg-opacity-25 w-full">
              <div className="flex items-center gap-4">
                <UserIcon className="text-3xl" />
                <div>Lorem ipsum</div>
              </div>
            </button>
          </div>
        );
      default:
        return <div className="flex flex-col gap-1 text-lg">default</div>;
    }
  }

  return (
    <>
      <div className="flex select-none NavBar">
        <div className="h-screen">
          <div className="grid h-32 p-8 select-none logo justify-items-center">
            <Image src={"/images/tumi_logo_blue.png"} width={141} height={67} />
          </div>
          <div className="grid mt-5 ml-8 navLinks ">
            <Link href={"/"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              router.pathname === "/"
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
            <Link href={"/requisition"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              router.pathname.includes("/requisition")
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
            <Link href={"/candidate"}>
              <div
                className={` py-3 flex rounded-l-3xl pl-8 w-56
                            ${
                              router.pathname.includes("/candidate")
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
        <div className="w-full min-h-screen pl-6 bg-[#EDEDED]">
          <div
            className={`profile w-full flex text-[#2B4993] 
            ${
              router.pathname.match(/[\/]/g).length > 1
                ? "justify-between"
                : "justify-end"
            }
            text-[1.1rem] font-bold items-center gap-2 py-6 pr-6`}
          >
            {router.pathname.match(/[\/]/g).length > 1 ? (
              <Tooltip title="Back" position="bottom">
                <div
                  className="flex items-center rounded-md cursor-pointer p-2 hover:bg-[#b8c5e6] hover:bg-opacity-30"
                  onClick={() => router.back()}
                >
                  <BackIcon />
                </div>
              </Tooltip>
            ) : (
              ""
            )}
            <div
              className="flex items-center justify-end gap-2 p-2 rounded-md hover:bg-[#b8c5e6] hover:bg-opacity-30 cursor-pointer"
              ref={menuRef}
            >
              <UserIcon
                className="text-2xl"
                onClick={() => {
                  setMenuState("main");
                  setShowCard(!showCard);
                }}
              />
              <div
                onClick={() => {
                  setMenuState("main");
                  setShowCard(!showCard);
                }}
              >
                Hi, {user}
              </div>
              {showCard ? (
                <div
                  className="absolute z-[999] border-gray-100 bg-white rounded-lg drop-shadow-lg p-3 translate-x-[0.5rem] top-[70px] font-normal"
                  style={{
                    width: `calc(${menuRef.current.clientWidth}px + 10rem)`,
                  }}
                >
                  {menuRender()}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="overflow-y-auto pr-6"
            style={{ height: `${height - 92}px` }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentNav;
