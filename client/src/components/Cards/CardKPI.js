import React from "react";
import Card from "../Elements/Card";
// import { FaChevronLeft as Icon } from "react-icons/fa";
import { BsGraphUp as Trend, BsPlus as Plus } from "react-icons/bs";
// import { BiDollar as Dollar } from "react-icons/bi"
function CardKpi({ children, id, header, subHeader, subSpan, spanColor }) {
  return (
    <Card addClass="border-none w-64 h-32 rounded-[18px]">
      <div className="pb-1">
        <div className="">
          <div className="flex justify-between mb-1">
            <div className="text-lg font-bold font-Gothic text-almostBlack text-[#2B4993]">
              {header}
            </div>
            <span className={`text-lg ${spanColor}`}>
              <Trend />
            </span>
          </div>
          <div className="flex justify-between">
            <div className="text-3xl font-bold text-almostBlack text-[#2B4993] flex items-center">
              {subHeader}
            </div>
            <span className={`text-lg ${spanColor} mt-[0.4rem] flex`}>
              <Plus />
              {subSpan}%
            </span>
          </div>
        </div>
      </div>

      {children}
    </Card>
  );
}

export default CardKpi;
