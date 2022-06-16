import React from 'react';
import { Link, useLocation } from "react-router-dom";
// import ButtonPrimary from "./buttonPrimary.js"
import logo from '../../Assets/images/tumi_logo_blue.png'
import { MdDashboard as Dashboard } from 'react-icons/md'
import { BsFillBriefcaseFill as Candidate } from 'react-icons/bs'
import { FaChair as Requisition, FaUserCircle as UserIcon } from 'react-icons/fa'
import DropDown from './DropDown';
function ContentNav({children}) {
    let user = 'Zach'
    const URLs = {
        "requisition": ["/app/requisition", "/app/requistion/info", "/app/requistion/add-requisition"],
        "candidate": ["/app/candidate", "/app/candidate/profile", "/app/candidate/add-candidate"],
        "dashboard": ["/app"] 
    }
    return (
        <>
            <div className = "flex NavBar select-none">
                <div className='w-1/5 h-screen'>
                    <div className='grid  logo h-32 justify-items-center p-8 select-none'>
                        <img src={logo} alt='' className='m-0'/>
                    </div>
                    <div className='navLinks mt-5 grid ml-12 '>
                        <Link to= {"/app"}>
                            <div className={` py-3 flex rounded-l-3xl pl-8
                            ${URLs.dashboard.includes(useLocation().pathname)? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
                            `}>
                                <span className='pt-1 mr-2'>
                                    <Dashboard/>
                                </span>
                                Dashboard
                            </div>
                        </Link>
                        <Link to= {"/app/requisition"}>
                            <div className={` py-3 flex rounded-l-3xl pl-8
                            ${URLs.requisition.includes(useLocation().pathname) ? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
                            `}>
                                <span className='pt-1 mr-2'>
                                    <Requisition/>
                                </span>
                                Requisition
                            </div>
                        </Link>
                        <Link to= {"/app/candidate"}>
                            <div className={` py-3 flex rounded-l-3xl pl-8
                            ${URLs.candidate.includes(useLocation().pathname) ? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
                            `}>
                                <span className='pt-1 mr-2'>
                                    <Candidate/>
                                </span>
                                Candidate
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='w-full h-full mt-12 mr-4 p-5 bg-[#EDEDED] rounded-3xl'>
                    <div className='profile w-full flex text-[#2B4993] justify-end text-[1.1rem] font-bold pr-4 mb-6 items-center'>
                        <DropDown label={`Hi ${user}!`} dropDownIcon={<UserIcon className='text-[1.4rem]'/>} labelClass="text-[1.4rem]" buttonClass="w-36">
                            <button className='hover:bg-[#5179DF] hover:bg-opacity-25 hover:text-black w-full'>Profile</button>
                            <button className='hover:bg-[#5179DF] hover:bg-opacity-25 hover:text-black w-full'>Settings</button>
                            {/* Hi {user}! <span className=' ml-2 text-[2rem]'><UserIcon/></span>  */}
                        </DropDown>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default ContentNav;