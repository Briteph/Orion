import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MdLogout as Logout } from "react-icons/md";
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { IoIosSettings as Settings } from "react-icons/io";
import {
  BiArrowBack as ThinBackIcon,
  BiEditAlt as AccEditIcon,
} from "react-icons/bi";
import MenuBar from "./MenuBar";

export default function TopNav() {
  const [menuState, setMenuState] = useState("main");
  const [showCard, setShowCard] = useState(false);
  const menuRef = useRef();
  const router = useRouter();
  const user = "Zach";
  const isChildPage = router.pathname.match(/[\/]/g).length > 1;

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
        return <div className="flex flex-col gap-1 text-lg"></div>;
    }
  }

  return (
    <div
      className={`profile w-full flex text-[#2B4993] 
      ${isChildPage ? "justify-between" : "justify-end"}
      text-[1.1rem] font-bold items-center gap-2 py-6 pr-6`}
    >
      {isChildPage ? <MenuBar /> : ""}
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
  );
}
