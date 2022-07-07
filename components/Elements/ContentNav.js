import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

function ContentNav({ children }) {
  const { height } = useWindowSize();

  return (
    <>
      <div className="flex select-none NavBar">
        <SideNav />
        <div className="w-full min-h-screen pl-6 bg-[#EDEDED]">
          <TopNav />
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
