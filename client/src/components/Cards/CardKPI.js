import React from "react";
import Card from "../Elements/Card";
// import { FaChevronLeft as Icon } from "react-icons/fa";
import {
  BsGraphUp as GraphUp,
  BsPlus as Plus,
  BsGraphDown as GraphDown,
} from "react-icons/bs";
import { BiMinus as Minus } from "react-icons/bi";
// import { BiDollar as Dollar } from "react-icons/bi"
function CardKPI({
  children,
  header,
  subHeader,
  subSpan,
  spanColor,
  decline = false,
}) {

  return (
    <Card addClass="border-none w-64 h-32 rounded-[18px] sm:CardKPI">
      <div className="pb-1">
        <div className="">
          <div className="flex items-center justify-between mb-1">
            <div className="text-lg font-bold font-Gothic text-almostBlack text-[#2B4993]">
              {header}
            </div>
            <span
              className={`text-lg ${
                decline ? spanColor.decline : spanColor.incline
              }`}
            >
              {decline ? <GraphDown /> : <GraphUp />}
            </span>
          </div>
          <div className="flex justify-between">
            <div className="text-3xl font-bold text-almostBlack text-[#2B4993] flex items-center">
              {subHeader}
            </div>
            <span
              className={`text-lg flex items-center mt-[0.4rem] ${
                decline ? spanColor.decline : spanColor.incline
              }`}
            >
              {decline ? <Minus /> : <Plus />}
              {subSpan}%
            </span>
          </div>
        </div>
      </div>

      {children}
    </Card>
  );
}

export default CardKPI;
