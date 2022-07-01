import React from "react";
import ContentNav from "../components/Elements/ContentNav";
import PrimaryTable from "../components/Tables/PrimaryTable";
import Candidates from "../components/Tables/Candidates.json";
import { CandidateCOLUMNS } from "../components/Tables/Columns";

function CandidateTab() {
  return (
    <>
      <ContentNav>
        <div className="Table pr-4">
          <PrimaryTable
            entryData={Candidates}
            tableColumns={CandidateCOLUMNS}
            newEntryLabel="Add Candidate"
            buttonUrl={"/candidates/add-candidate"}
            rowUrl="/candidates/profile"
            statusValue={[
              { text: "Quick", color: "bg-[#5179DF]" },
              { text: "Que", color: "bg-[#F47E7E]" },
              { text: "Hired", color: "bg-[#5DA36D]" },
            ]}
            colIdxOfStatus={2}
          />
        </div>
      </ContentNav>
    </>
  );
}

export default CandidateTab;
