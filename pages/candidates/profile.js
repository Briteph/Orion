import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ButtonPrimary from "../../components/Elements/ButtonPrimary";
import Card from "../../components/Elements/Card";
import ContentNav from "../../components/Elements/ContentNav";
import Tab from "../../components/Elements/Tab";

function Candidate() {
  const tabData = [
    { state: "personal info", text: "Personal Info" },
    { state: "documents", text: "Documents" },
    { state: "notes", text: "Notes" },
  ];
  const [tabState, setTabState] = useState(tabData[0].state);

  return (
    <>
      <Head>
        <title>Candidate Profile - Orion</title>
      </Head>
      <ContentNav>
        <div className="flex gap-6 pt-14">
          <Card addClass="w-1/3">
            <div className="-translate-y-20 w-[165px] h-[165px] bg-white rounded-full drop-shadow-md flex items-center justify-center">
              <Image
                src="/images/cat.jpeg"
                width="154px"
                height="154px"
                className="rounded-full"
              />
            </div>
            <div className="pl-5 pr-2 -translate-y-16">
              <div className="flex items-center justify-between mb-6 text-2xl font-bold text-gray-400">
                <div>Kent Cortes</div>
                <ButtonPrimary addClass="bg-[#F47E7E] text-sm">
                  <div className="px-5 font-bold">Que</div>
                </ButtonPrimary>
              </div>
              <div className="grid grid-flow-col text-gray-400 translate-y-3">
                <div>
                  <div className="candidate-details">Email</div>
                  <div className="candidate-details">Phone</div>
                  <div className="candidate-details">Address</div>
                  <div className="candidate-details">Position</div>
                </div>
                <div className="font-bold">
                  <div className="candidate-details">juliardactub@gmail.com</div>
                  <div className="candidate-details">+63 936 316 1855</div>
                  <div className="candidate-details">Japan, 3rd Floor</div>
                  <div className="candidate-details">Doctor</div>
                </div>
              </div>
            </div>
          </Card>

          <Card addClass="w-2/3">
            <Tab tabs={tabData} tabState={tabState} setTabState={setTabState}>
              {tabState}
            </Tab>
          </Card>
        </div>
        <div className="flex gap-5 mt-12">
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">
              Open
            </div>
            <Card>lorem ipsum churva lunglong</Card>
          </div>
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">
              In Progress
            </div>
            <Card>lorem ipsum churva lunglong</Card>
          </div>
          <div className="grow">
            <div className="pb-5 pl-5 text-xl font-bold text-gray-500">
              Status History
            </div>
            <Card>lorem ipsum churva lunglong</Card>
          </div>
        </div>
      </ContentNav>
    </>
  );
}
export default Candidate;
