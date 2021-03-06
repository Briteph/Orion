import React, { useRef, useState } from "react";
import Link from "next/link";
import ButtonSecondary from "../components/Elements/ButtonSecondary.js";
import CardKPI from "../components/Cards/CardKPI.js";
import Card from "../components/Elements/Card.js";
import ContentNav from "../components/Elements/ContentNav";
import { FaUserPlus as AddIcon } from "react-icons/fa";
import { BiChevronsDown as DownIcon } from "react-icons/bi";
import SecondaryTable from "../components/Tables/SecondaryTable.js";
import NewCandidates from "../components/Tables/NewCandidates.json";
import NewRequisitions from "../components/Tables/NewRequisition.json";
import {
  NewCandidateCOLUMNS,
  NewRequisitionCOLUMNS,
} from "../components/Tables/Columns";
import DropDown from "../components/Elements/DropDown";
import { BsFilter as FilterIcon } from "react-icons/bs";
import Head from "next/head.js";

function Dashboard() {
  const dropdownRef = useRef();
  const [filterState, setFilterState] = useState("This Year");

  return (
    <>
      <Head>
        <title>Orion</title>
      </Head>
      <ContentNav>
        <div className="DashboardContainer">
          <div className="flex items-center gap-5">
            <div className="text-[#333333] font-bold text-[20px]">
              Overview
            </div>
            <div>
              <DropDown
                dropDownIcon={<FilterIcon className="text-xl" />}
                label={filterState}
                buttonClass="hover:bg-[#5179DF] hover:bg-opacity-10 rounded"
                ref={dropdownRef}
              >
                <div className="py-1 w-full">
                  <div className="hover:bg-[#5179DF] hover:bg-opacity-25 rounded text-center"
                    onClick={() => {
                      setFilterState("This Year");
                      dropdownRef.current.toggle();
                    }}
                  >
                    This Year
                  </div>
                  <div className="hover:bg-[#5179DF] hover:bg-opacity-25 rounded text-center"
                    onClick={() => {
                      setFilterState("Last Year");
                      dropdownRef.current.toggle();
                    }}
                  >
                    Last Year
                  </div>
                </div>
              </DropDown>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 px-2 mt-4 sm:flex-nowrap KPI-container">
            <CardKPI
              header="Total Requisition"
              subHeader="123"
              subSpan="21"
              spanColor={{ incline: "text-green-500", decline: "text-red-500" }}
              decline={true}
            />
            <CardKPI
              header="Total Candidates"
              subHeader="23"
              subSpan="10"
              spanColor={{ incline: "text-green-500", decline: "text-red-500" }}
            />
            <CardKPI
              header="Total Employees"
              subHeader="50"
              subSpan="30"
              spanColor={{ incline: "text-green-500", decline: "text-red-500" }}
              decline={true}
            />
            <CardKPI
              header="Total Earnings"
              subHeader="12,000"
              subSpan="4"
              spanColor={{ incline: "text-green-500", decline: "text-red-500" }}
            />
          </div>
          <div className="flex flex-col flex-wrap gap-5 px-2 mt-10 sm:flex-row sm:flex-nowrap">
            <Card addClass={"w-full sm:w-1/2 rounded-[16px] pb-0"}>
              <div className="flex justify-between table-header">
                <div className="text-[#2B4993] font-bold text-[20px]">
                  New Candidate
                </div>
                <Link href={"/candidates/add-candidate"}>
                  <ButtonSecondary addClass="text-white flex items-center text-[14px]">
                    <span className="mr-1">
                      <AddIcon />
                    </span>
                    Add Candidate
                  </ButtonSecondary>
                </Link>
              </div>
              <div className="NewCandidate-table">
                <SecondaryTable
                  tableColumns={NewCandidateCOLUMNS}
                  entryData={NewCandidates}
                  rowUrl="/candidate/profile"
                />
                <div className="text-[#2B4993] flex justify-center my-5 font-bold bottom-0 ">
                  <div className="hover:text-[#5179DF] flex">
                    See More
                    <span className="mr-1 pt-[0.1rem] text-[22px]">
                      <DownIcon />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <Card addClass={"w-full sm:w-1/2 rounded-[16px] pb-0"}>
              <div className="flex justify-between table-header">
                <div className="text-[#2B4993] font-bold text-[20px]">
                  New Requisition
                </div>
                <Link href={"/requisitions/add-requisition"}>
                  <ButtonSecondary addClass="text-white flex items-center ">
                    <span className="mr-1">
                      <AddIcon />
                    </span>
                    Add Requisition
                  </ButtonSecondary>
                </Link>
              </div>
              <div className="NewRequisition-table">
                <SecondaryTable
                  tableColumns={NewRequisitionCOLUMNS}
                  entryData={NewRequisitions}
                  rowUrl="/requistion/info"
                />
              </div>
              <div className="text-[#2B4993] flex m-auto my-5 font-bold justify-center align-bottom">
                <div className="hover:text-[#5179DF] flex">
                  See More
                  <span className="mr-1 pt-[0.1rem] text-[22px]">
                    <DownIcon />
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </ContentNav>
    </>
  );
}

export default Dashboard;
