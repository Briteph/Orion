import React, { useState } from 'react'
import Card from '../components/Elements/card';
import { RiBuildingLine as BuildingIcon } from 'react-icons/ri'
import DropDown from '../components/Elements/DropDown';
import Content from '../components/Elements/DivContent';
import ContentNav from '../components/Elements/ContentNav';
function Requisition() {
    const [TabState, setTabState] = useState('Details')
    // useEffect(() => {
    //     setTabState('Details')
    // },[])
    return (
        <>
        <ContentNav>
            <div className='Requisition_Info'>
                <Card addClass={'px-9 py-9 drop-shadow-none'}>
                    <div className='header text-[30px] mb-3 font-bold text-[#2B4993]'>
                        Requisition
                    </div>
                    <div className='Info_Header flex'>
                        <Card addClass="w-1/6 justify-center flex items-center">
                            <BuildingIcon className='text-[11rem] text-[#D3D3D3]'/>
                        </Card>
                        <div className=' ml-5 h-1/2'>
                            <div className='text-[2.5rem] font-bold'>Hotel 1</div>
                            <div className='text-[1.1rem] mb-2'>St.Bldg. A, Iligan City</div>
                            <DropDown buttonClass={"bg-[#5179DF] text-[#ffff]"} label="Open">
                                <div>Open</div>
                                <div>Closed</div>
                                <div>Filled</div>
                            </DropDown>
                        </div>
                    </div>
                    <div className='Other_Details flex mt-7'>
                        <Card addClass={'mr-4 w-2/3 h-[26rem]'}>
                            <div className='tabs flex'>
                                <div className={`tab px-8 select-none cursor-pointer ${
                                    TabState === 'Details' ? " border-b-[3px] border-[#5179DF] " : " "
                                }`} onClick={
                                    () => setTabState('Details')
                                }>Details</div>
                                <div className={`tab px-8 select-none cursor-pointer ${
                                    TabState === 'Documents' ? " border-b-[3px] border-[#5179DF] " : " "
                                }`} onClick={
                                    () => setTabState('Documents')
                                }>Documents</div>
                                <div className={`tab px-8 select-none cursor-pointer ${
                                    TabState === 'Notes' ? " border-b-[3px] border-[#5179DF] " : " "
                                }`} onClick={
                                    () => setTabState('Notes')
                                }>Notes</div>
                            </div>
                            <div className='mt-5'>
                                {TabState === "Details" ? 
                                    (
                                        <Content addClass="Details_Tab">
                                            <table>
                                                <tbody>
                                                    <tr className='odd:bg-white even:bg-[#D3D3D3] '>
                                                        <td className='p-5 px-20'>Field 1</td>
                                                        <td className='p-5 px-20'>Value 1</td>
                                                    </tr>
                                                    <tr className='odd:bg-white even:bg-[#D3D3D3]'>
                                                        <td className='p-5 px-20'>Field 2</td>
                                                        <td className='p-5 px-20'>Value 2</td>
                                                    </tr>
                                                    <tr className='odd:bg-white even:bg-[#D3D3D3]'>
                                                        <td className='p-5 px-20'>Field 3</td>
                                                        <td className='p-5 px-20'>Value 3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                        </Content>
                                    ): TabState === "Documents" ? 
                                    (
                                        <Content>
                                            Documents
                                        </Content>
                                    ) : 
                                    (
                                        <Content>
                                            Notes
                                        </Content>
                                    )
                                }
                            </div>
                        </Card>
                        <Card addClass={'ml-4 w-1/3'}>
                            <div className=''>

                            </div>
                        </Card>
                    </div>
                </Card>
            </div>
        </ContentNav>
        </>
    );
}

export default Requisition;