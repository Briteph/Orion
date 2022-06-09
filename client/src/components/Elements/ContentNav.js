import React from 'react';
import { Link, useLocation } from "react-router-dom";
// import ButtonPrimary from "./buttonPrimary.js"
import logo from '../../Assets/images/tumi_logo_blue.png'
import { MdDashboard as Dashboard } from 'react-icons/md'
import { BsFillBriefcaseFill as Candidate } from 'react-icons/bs'
import { FaChair as Requisition, FaUserCircle as UserIcon } from 'react-icons/fa'
function ContentNav({children}) {
    let user = 'Zach'
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
                            ${useLocation().pathname === '/app/'? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
                            `}>
                                <span className='pt-1 mr-2'>
                                    <Dashboard/>
                                </span>
                                Dashboard
                            </div>
                        </Link>
                        <Link to= {"/requisition"}>
                            <div className={` py-3 flex rounded-l-3xl pl-8
                            ${useLocation().pathname === '/requisition'? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
                            `}>
                                <span className='pt-1 mr-2'>
                                    <Requisition/>
                                </span>
                                Requisition
                            </div>
                        </Link>
                        <Link to= {"/candidate"}>
                            <div className={` py-3 flex rounded-l-3xl pl-8
                            ${useLocation().pathname === '/candidate'? 'text-white bg-[#5179DF] drop-shadow-xl': '' }
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
                        Hi {user}! <span className=' ml-2 text-[2rem]'><UserIcon/></span> 
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default ContentNav;