import React from "react";
import Card from "../components/Elements/Card";
import ContentNav from "../components/Elements/ContentNav";
import FormInput from "../components/Forms/FormInput";
import ButtonPrimary from "../components/Elements/ButtonPrimary";
import ButtonReset from "../components/Elements/ButtonReset";
import { IoIosSend as Send } from "react-icons/io";
import DatePicker from "../components/Elements/DatePicker";
import FormSelectReactive from "../components/Forms/FormSelectReactive";
function AddCandidate() {
  return (
    <>
      <ContentNav>
        <div className="Candidate_Form m-10">
          <Card>
            <div className="p-6">
              <div className="header text-3xl font-bold text-[#2B4993] mb-10">
                Candidate Form
              </div>
              <div className="flex gap-16">
                <div className="flex grow flex-col gap-6">
                  <FormInput>First Name</FormInput>
                  <FormInput>Middle Name</FormInput>
                  <FormInput>Last Name</FormInput>
                  <FormInput>Patronymic</FormInput>
                  <FormSelectReactive
                    options={[{text: "test", value: "test"}]}
                    defValue="Select"
                  >
                    Position Interested In
                  </FormSelectReactive>
                  <FormSelectReactive
                    options={[{text: "test", value: "test"}]}
                    defValue="Select"
                  >
                    Candidate Status
                  </FormSelectReactive>
                </div>
                <div className="flex grow flex-col gap-6">
                  <DatePicker id="addCandidateDate">Available Date</DatePicker>
                  <FormInput>Mobile Phone</FormInput>
                  <FormInput>Email</FormInput>
                  <FormSelectReactive
                    options={[{text: "test", value: "test"}]}
                    defValue="Select"
                  >
                    Status
                  </FormSelectReactive>
                  <FormSelectReactive
                    options={[{text: "test", value: "test"}]}
                    defValue="Select"
                  >
                    Qualifications
                  </FormSelectReactive>
                  <FormInput>Address 1</FormInput>
                </div>
                <div className="flex grow flex-col gap-6">
                  <FormInput>Address 2</FormInput>
                  <FormInput>City/District</FormInput>
                  <FormInput>State/Province</FormInput>
                  <FormInput>Postal Code</FormInput>
                  <FormInput>Country</FormInput>
                  <div className="h-[4.063rem] flex items-center justify-end">
                    <div className="flex gap-2">
                      <ButtonPrimary addClass="bg-[#5179DF]">
                        <div className="flex gap-2 items-center">
                          <Send />
                          Submit
                        </div>
                      </ButtonPrimary>
                      <ButtonReset addClass="bg-gray-400">Reset</ButtonReset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </ContentNav>
    </>
  );
}

export default AddCandidate;
