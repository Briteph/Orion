import React from 'react'
import ButtonPrimary from '../components/Elements/buttonPrimary';
import ButtonReset from '../components/Elements/ButtonReset';
import ContentNav from '../components/Elements/ContentNav';
import FormInput from '../components/Forms/FormInput';
import Card from '../components/Elements/card';
import { MdSend as Submit } from 'react-icons/md'
import FormSelect from '../components/Forms/FormSelect';
import { RiArrowDownSLine as ArrowDown } from 'react-icons/ri'
import FormTextarea from '../components/Forms/FormTextArea';
function AddRequisition() {
    return (
        <>
        <ContentNav>
            <Card>
                <div className='Candidate_Form mx-10 my-10 '>
                    <div className='header text-[30px] mb-3 font-bold text-[#7F8289] px-12 '>
                        Requisition Form
                    </div>
                    <div className='pt-10 px-10 grid grid-cols-3 '>
                        <div className='col1 grid grid-rows-5'>
                            <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5" type={"Date"}>Requisition Date</FormInput>
                            <div className='mx-5 mt-1'>
                                <FormSelect 
                                    addClass="pt-1 pb-1 border-b-[1px] px-0  focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-[16px] font-normal" 
                                    options={[
                                        {key:1,value:"Open", text:"Open"},
                                        {key:2,value:"Que", text:"Que"},
                                        {key:3,value:"Filled", text:"Filled"}
                                    ]} 
                                    defValue="Select"
                                    labelClass=''
                                    icon={<ArrowDown className='absolute bottom-2 right-0'/>}>
                                        Status
                                </FormSelect>
                            </div>
                            <div className='mx-5 mt-1'>
                                <FormSelect 
                                    addClass="pt-1 pb-1 border-b-[1px] px-0  focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-[16px] font-normal" 
                                    options={[
                                        {key:1,value:"Hotel 1", text:"Hotel 1"},
                                        {key:2,value:"Hotel 2", text:"Hotel 2"},
                                        {key:3,value:"Hotel 3", text:"Hotel 3"}
                                    ]} 
                                    defValue="Select"
                                    labelClass=''
                                    icon={<ArrowDown className='absolute bottom-2 right-0'/>}>
                                        Client Code
                                </FormSelect>
                            </div>
                            <div className='mx-5 mt-1'>
                                <FormSelect 
                                    addClass="pt-1 pb-1 border-b-[1px] px-0  focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-[16px] font-normal" 
                                    options={[
                                        {key:1,value:"Full Time", text:"Hotel 1"},
                                        {key:2,value:"Holiday", text:"Hotel 2"},
                                        {key:3,value:"Part Time", text:"Hotel 3"}
                                    ]} 
                                    defValue="Select"
                                    labelClass=''
                                    icon={<ArrowDown className='absolute bottom-2 right-0'/>}>
                                        Hour Type
                                </FormSelect>
                            </div>
                            <div className='mx-5 mt-1'>
                                <FormTextarea 
                                    textareaClass="focus:outline-[#5179DF] focus:border-[#5179DF] resize-none" 
                                    placeholder={'Details ....'}>
                                    Job Description
                                </FormTextarea>
                            </div>
                            
                        </div>
                        <div className='col2 grid grid-rows-5'>
                            <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5" type={"Date"}>Target Fill Date</FormInput>
                            <div className='mx-5 mt-1'>
                                <FormSelect 
                                    addClass="pt-1 pb-1 border-b-[1px] px-0  focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-[16px] font-normal" 
                                    options={[
                                        {key:1,value:"Full Time", text:"Hotel 1"},
                                        {key:2,value:"Holiday", text:"Hotel 2"},
                                        {key:3,value:"Part Time", text:"Hotel 3"}
                                    ]} 
                                    defValue="Select"
                                    labelClass=''
                                    icon={<ArrowDown className='absolute bottom-2 right-0'/>}>
                                        Requisition Type
                                </FormSelect>
                            </div>
                            <div className='mx-5 mt-1'>
                                <FormSelect 
                                    addClass="pt-1 pb-1 border-b-[1px] px-0  focus:outline-none focus:border-b-[2px] focus:border-[#5179DF] border-[#707070] border-opacity-25 text-[16px] font-normal" 
                                    options={[
                                        {key:1,value:"Full Time", text:"Hotel 1"},
                                        {key:2,value:"Holiday", text:"Hotel 2"},
                                        {key:3,value:"Part Time", text:"Hotel 3"}
                                    ]} 
                                    defValue="Select"
                                    labelClass=''
                                    icon={<ArrowDown className='absolute bottom-2 right-0'/>}>
                                        Client Department
                                </FormSelect>
                            </div>
                            <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5" >Target Fill Date</FormInput>
                            <div className='mx-5 mt-1'>
                                <FormTextarea 
                                    textareaClass="focus:outline-[#5179DF] focus:border-[#5179DF] resize-none" 
                                    placeholder={'Parking ....'}>
                                    Parking
                                </FormTextarea>
                            </div>
                        </div>
                        <div className='col3 grid grid-rows-5'>
                            <FormInput labelClass={"mt-1"} containerClass="ml-5 mr-5" >Number Position</FormInput>
                            <div className='mx-5 mt-1'>
                                <FormTextarea 
                                    textareaClass="focus:outline-[#5179DF] focus:border-[#5179DF] resize-none" 
                                    placeholder={'Uniform ....'}>
                                    Uniform
                                </FormTextarea>
                            </div>
                            <div className='mx-5 mt-1'>
                                <FormTextarea 
                                    textareaClass="focus:outline-[#5179DF] focus:border-[#5179DF] resize-none" 
                                    placeholder={'Notes ....'}>
                                    Notes
                                </FormTextarea>
                            </div>
                            
                        </div>
                    </div>
                    <div className='footer flex justify-end px-12'>
                        <ButtonPrimary addClass='bg-[#5179DF] text-[#FFFFFF] px-12 py-5 rounded flex border-none mr-5'><span className='mt-1 mr-1'><Submit/></span>Submit</ButtonPrimary>
                        <ButtonReset addClass='bg-none border-none shadow-none text-[#747474] rounded px-11 hover:text-[#000000] hover:bg-[#7F8289]'>Reset</ButtonReset>
                    </div>
                </div>
            </Card>
        </ContentNav>
        </>
    );
}

export default AddRequisition;