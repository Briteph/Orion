import React from "react";
import Card from "../components/Elements/Card";
import ContentNav from "../components/Elements/ContentNav";
function Candidate() {
  return (
    <>
      <ContentNav>
        <Card>
          <div className="Candidate_Form m-10">
            <div className="header text-[30px] mb-3 font-bold text-[#2B4993]">
              Candidate Profile
            </div>
          </div>
        </Card>
      </ContentNav>
    </>
  );
}
export default Candidate;
