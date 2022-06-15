import React from "react";
import ContentNav from "../components/Elements/ContentNav";
import Table from "../components/Tables/PrimaryTable";
import Requisitions from "../components/Tables/Requisitions.json";
import { RequisitionCOLUMNS } from "../components/Tables/Columns";
function RequisitionTab() {
  return (
    <>
      <ContentNav>
        <div className="Table">
          <Table
            entryData={Requisitions}
            tableColumns={RequisitionCOLUMNS}
            newEntryLabel="Add Requisition"
            buttonUrl={"/app/add-requisition"}
            statusValue={[
              { text: "Open", color: "bg-[#5179DF]" },
              { text: "Closed", color: "bg-[#F47E7E]" },
              { text: "Filled", color: "bg-[#5DA36D]" },
            ]}
            colIdxOfStatus={1}
          />
        </div>
      </ContentNav>
    </>
  );
}

export default RequisitionTab;
