import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdDashboard as Dashboard } from "react-icons/md";
import { BsFillBriefcaseFill as Candidate } from "react-icons/bs";
import { FaChair as Requisition } from "react-icons/fa";

export default function SideNav() {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="grid h-32 p-8 select-none logo justify-items-center">
        <Image src={"/images/tumi_logo_blue.png"} width={141} height={67} />
      </div>
      <div className="grid mt-5 ml-8 navLinks ">
        <Link href={"/"}>
          <div
            className={` py-3 flex rounded-l-3xl pl-8 w-56
                        ${
                          router.pathname === "/"
                            ? "text-white bg-[#5179DF] drop-shadow-xl"
                            : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
                        }
                        `}
          >
            <span className="pt-1 mr-2">
              <Dashboard />
            </span>
            Dashboard
          </div>
        </Link>
        <Link href={"/requisition"}>
          <div
            className={` py-3 flex rounded-l-3xl pl-8 w-56
                        ${
                          router.pathname.includes("/requisition")
                            ? "text-white bg-[#5179DF] drop-shadow-xl"
                            : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
                        }
                        `}
          >
            <span className="pt-1 mr-2">
              <Requisition />
            </span>
            Requisition
          </div>
        </Link>
        <Link href={"/candidate"}>
          <div
            className={` py-3 flex rounded-l-3xl pl-8 w-56
                        ${
                          router.pathname.includes("/candidate")
                            ? "text-white bg-[#5179DF] drop-shadow-xl"
                            : "hover:bg-[#b8c5e6] hover:bg-opacity-30"
                        }
                        `}
          >
            <span className="pt-1 mr-2">
              <Candidate />
            </span>
            Candidate
          </div>
        </Link>
      </div>
    </div>
  );
}
