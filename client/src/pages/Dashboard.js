import React from "react";
import { Link } from "react-router-dom";
import ButtonSecondary from "../components/Elements/ButtonSecondary.js";
import CardKpi from "../components/Cards/CardKPI.js";
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
import FormSelect from "../components/Forms/FormSelect.js";
import { FaSortDown as SortDown } from "react-icons/fa";
function Dashboard() {
  return (
    <>
      <ContentNav>
        <div className="DashboardContainer">
          <div className="flex items-center px-2">
            <div className="text-[#333333] font-bold text-[20px] mr-20">
              Overview
            </div>
            <div className="flex ">
              <span className="text-[#7F8289] font-bold">Show :</span>
              <FormSelect
                defValue={"This Year"}
                options={[{ key: 1, value: "Last Year", text: "Last Year" }]}
                icon={
                  <SortDown className="text-[#5179DF] absolute bottom-2 right-0" />
                }
                addClass="text-[#5179DF]"
              />
            </div>
          </div>
          <div className="KPI-container mt-4 grid grid-cols-4 px-2">
            <CardKpi
              header="Total Requisition"
              subHeader="123"
              subSpan="21"
              spanColor="text-green-500"
            />
            <CardKpi
              header="Total Candidates"
              subHeader="23"
              subSpan="10"
              spanColor="text-green-500"
            />
            <CardKpi
              header="Total Employees"
              subHeader="50"
              subSpan="30"
              spanColor="text-green-500"
            />
            <CardKpi
              header="Total Earnings"
              subHeader="12,000"
              subSpan="4"
              spanColor="text-green-500"
            />
          </div>
          <div className="flex px-2">
            <Card addClass={"mt-8 w-1/2 mr-4 rounded-[16px] pb-0"}>
              <div className="table-header flex justify-between">
                <div className="text-[#2B4993] font-bold text-[20px]">
                  New Candidate
                </div>
                <Link to={"/app/candidate/add-candidate"}>
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
                  rowUrl="/app/candidate/profile"
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
            <Card addClass={"mt-8 w-1/2 ml-4 rounded-[16px] pb-0"}>
              <div className="table-header flex justify-between">
                <div className="text-[#2B4993] font-bold text-[20px]">
                  New Requisition
                </div>
                <Link to={"/app/add-requisition"}>
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
                  rowUrl={``}
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
