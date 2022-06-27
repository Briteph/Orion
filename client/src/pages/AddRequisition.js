import React from "react";
import ButtonPrimary from "../components/Elements/ButtonPrimary";
import ButtonReset from "../components/Elements/ButtonReset";
import ContentNav from "../components/Elements/ContentNav";
import FormInput from "../components/Forms/FormInput";
import Card from "../components/Elements/Card";

function AddRequisition() {
  return (
    <>
      <ContentNav>
        <Card>
          <div className="Candidate_Form mx-10 my-10 ">
            <div className="header text-[30px] mb-3 font-bold text-[#2B4993] px-12 ">
              Requisition Form
            </div>
            <div className="border-b-[3px] mx-12 rounded-full"></div>
            <div className="pt-10 px-10 ">
              <div className="rowContainer grid grid-cols-2">
                <FormInput labelClass="mt-1" containerClass="ml-5 mr-5">
                  Name
                </FormInput>
                <FormInput
                  labelClass="mt-1"
                  containerClass="ml-5 mr-5"
                  inputClass={""}
                >
                  Status
                </FormInput>
              </div>
              <div className="rowContainer grid grid-cols-2">
                <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5">
                  Requisition Type
                </FormInput>
                <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5">
                  Hour Type
                </FormInput>
              </div>
              <div className="rowContainer grid grid-cols-2">
                <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5">
                  Code
                </FormInput>
                <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5">
                  Address
                </FormInput>
              </div>
              <div className="rowContainer grid grid-cols-2">
                <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5">
                  Recruiter
                </FormInput>
                <FormInput
                  labelClass={"mt-1"}
                  containerClass="ml-5 mr-5"
                  type={"Date"}
                >
                  Date Started
                </FormInput>
              </div>
            </div>
            <div className="footer flex justify-between mt-10 px-12">
              <ButtonReset addClass="bg-[#7F8289] px-10 rounded-full">
                Reset
              </ButtonReset>
              <ButtonPrimary addClass="bg-[#2B4993] text-[#FFFFFF] px-10 rounded-full">
                Save
              </ButtonPrimary>
            </div>
          </div>
        </Card>
      </ContentNav>
    </>
  );
}

export default AddRequisition;
