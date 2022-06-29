import React, { useState } from "react";
import ButtonPrimary from "../components/Elements/ButtonPrimary";
import Card from "../components/Elements/Card";
import ContentNav from "../components/Elements/ContentNav";
function Candidate() {
  const [tabState, setTabState] = useState("personal info");

  return (
    <>
      <ContentNav>
        <div className="flex gap-6 pt-16 pr-5">
          <Card addClass="w-1/3">
            <div className="flex items-center justify-between pt-24 pl-5 pr-2 text-2xl font-bold text-gray-400">
              <div>Kent Cortes</div>
              <ButtonPrimary addClass="bg-[#F47E7E] text-sm">
                <div className="px-5 font-bold">Que</div>
              </ButtonPrimary>
            </div>
            <div className="flex flex-col gap-5 text-gray-400 mt-9">
              <div className="flex items-center pl-5 pr-2">
                <div className="w-28">Email</div>
                <div className="font-bold">kentcortes@gmail.com</div>
              </div>
              <div className="flex items-center pl-5 pr-2">
                <div className="w-28">Phone</div>
                <div className="font-bold">+63 936 316 1855</div>
              </div>
              <div className="flex items-center pl-5 pr-2">
                <div className="w-28">Address</div>
                <div className="font-bold">Japan, 3rd Floor</div>
              </div>
              <div className="flex items-center pl-5 pr-2">
                <div className="w-28">Position</div>
                <div className="font-bold">Sakristan</div>
              </div>
            </div>
          </Card>
          <div
            className={`border-gray-100 bg-white drop-shadow-md rounded-full w-[9.625rem] h-[9.625rem] flex items-center justify-center left-80 top-24 absolute`}
          >
            test
          </div>
          <Card addClass="w-2/3">
            <div className="flex border-b border-gray-300">
              <div
                className={`${
                  tabState === "personal info"
                    ? `border-b-4 border-[#5179DF]`
                    : ``
                } px-5 py-1`}
                onClick={() => setTabState("personal info")}
              >
                Personal Information
              </div>
              <div
                className={`${
                  tabState === "documents"
                    ? `border-b-4 border-[#5179DF]`
                    : ``
                } px-5 py-1`}
                onClick={() => setTabState("documents")}
              >
                Documents
              </div>
              <div
                className={`${
                  tabState === "notes"
                    ? `border-b-4 border-[#5179DF]`
                    : ``
                } px-5 py-1`}
                onClick={() => setTabState("notes")}
              >
                Notes
              </div>
            </div>
          </Card>
        </div>
        <div className="flex gap-5 pr-5 mt-12">
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">Open</div>
            <Card>
              ahsdkhajsd
            </Card>
          </div>
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">In Progress</div>
            <Card>
              ahsdkhajsd
            </Card>
          </div>
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">Status History</div>
            <Card>
              ahsdkhajsd
            </Card>
          </div>
        </div>
      </ContentNav>
    </>
  );
}
export default Candidate;
