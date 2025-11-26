import { SiTicktick } from "react-icons/si";
import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiUser, CiVideoOn } from "react-icons/ci";
import { MdCardTravel } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

const Interview = () => {

  const [open, setopen] = useState(false)
  return (
    <div className="mt-5">
      <div className="border border-[#E0E0E0] bg-[#FFFFFF] rounded-lg p-4">
        <p className="flex flex-col  items-start sm:flex-row justify-between"><span className="text-[13px] sm:text-[16px] text-[#0A0A0A]">Senior Frontend Developer</span> <span className="text-[#2E7D32] sm:w-fit w-fit bg-[#E8F5E9] px-2.5 py-0.5 m-1 rounded-2xl flex flex-row gap-2 items-center mt-2 sm:mt-0 sm:mb-0 mb-2 text-sm sm:text-md"><SiTicktick />Interview Schedule</span></p>
        <p className="text-[#717182] sm:text-[13px] text-[11px] mt-3 sm:mt-2 ">TechCorp Solution</p>
        <p className="mt-3 sm:mt-2 flex items-center gap-2 sm:text-[13px] text-[13px] text-[#717182]"><MdDateRange size={20} />Applied 11/202025</p>

        <div className="bg-[#FC8019] border-[#FFD9B3] text-white p-3 rounded-lg mt-5">
          <p className="flex flex-col  items-start sm:items-center sm:flex-row justify-between"><span className="text-[13px] sm:text-[16px] ">Interview Scheduled</span> <span className="text-[#2E7D32] sm:w-fit w-25 bg-[#E8F5E9] p-1 sm:p-3 m-1 rounded-lg flex flex-row gap-2 items-center mt-2 sm:mt-0 sm:mb-0 mb-2 text-sm sm:text-md cursor-pointer" onClick={() => setopen(true)}>View Details</span></p>
          <p className="mt-3 sm:mt-2 flex items-center gap-2 sm:text-[13px] text-[13px] "><MdDateRange size={20} />Applied 11/202025</p>
          <p className="mt-3 sm:mt-2 flex items-center gap-2.5 sm:text-[13px] text-[13px] "><FaRegClock size={18} />10.00 AM</p>
        </div>
      </div>

      <div className="border border-[#E0E0E0] bg-[#FFFFFF] rounded-lg p-4 mt-5">
        <p className="flex flex-col  items-start sm:flex-row justify-between"><span className="text-[13px] sm:text-[16px] text-[#0A0A0A]">UX Designer</span> <span className="text-[#FC8019] sm:w-fit w-fit bg-[#FFF5EB] px-2.5 py-0.5 m-1 rounded-2xl flex flex-row gap-2 items-center mt-2 sm:mt-0 sm:mb-0 mb-2 text-sm sm:text-md"><FaRegClock />pending</span></p>
        <p className="text-[#717182] sm:text-[13px] text-[11px] mt-3 sm:mt-2 ">Design Studio Inc</p>
        <p className="mt-3 sm:mt-2 flex items-center gap-2 sm:text-[13px] text-[13px] text-[#717182]"><MdDateRange size={20} />Applied 11/202025</p>
      </div>

      {open && <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 ">
        <div className="bg-white rounded-xl  w-full sm:max-w-[50%] max-h-[90vh] overflow-y-auto ">

          <div className="flex flex-row bg-[#FC8019] text-white p-3 rounded-t-lg">

            <div>
              <p className="sm:text-lg text-md flex items-center justify-between font-bold ">
                Interview Details
              </p>
              <p className="text-xs sm:text-md flex items-center justify-between font-bold ">
                All Information About your Schedule Interview
              </p>
            </div>

            <div className="">
              <IoClose size={30} className="cursor-pointer flex ml-30 p-1 sm:ml-75 bg-[#FFFFFF30] rounded-lg  flex-row items-end justify-end " onClick={() => setopen(false)} />

            </div>
          </div>

          <div className="p-3">
            <div className="p-2 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg flex items-center gap-3">
              <div className="flex items-center justify-start">
                <div className="w-10 h-10 bg-[#FC8019] rounded-full flex items-center justify-center">
                  <CiUser size={22} className="text-white" />
                </div>
              </div>

              <div className="">
                <p className="text-[#0A0A0A] text-[16px]">Sarah Johnson</p>
                <p className="text-[#717182] text-[14px] flex gap-3 items-center"><MdCardTravel />Senior Frontend Developer</p>
              </div>
            </div>
          </div>

          <div className="flex sm:gap-5 gap-2 sm:flex-row flex-col">
            <div className="p-3 w-full">
              <div className="p-2 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
                <div className="">
                  <p className="flex flex-row sm:gap-4 gap-2 items-center justify-start sm:text-[16px] text-xs text-[#FC8019]  w-full"> <MdDateRange size={20} /><span className="text-[#717182] ">date</span></p>
                </div>
                <p className="text-[#0A0A0A] text-[16px]">Friday, November 28, 2025</p>
              </div>
            </div>
            <div className="p-3 w-full">
              <div className="p-2 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
                <div className="">
                  <p className="flex flex-row sm:gap-4 gap-2 items-center justify-start sm:text-[16px] text-xs text-[#FC8019]  w-full"> <FaRegClock size={20} /><span className="text-[#717182] ">Time</span></p>
                </div>
                <p className="text-[#0A0A0A] text-[16px]">10.00 AM</p>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="p-2 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
              <div className="">
                <p className="flex flex-row sm:gap-4 gap-2 items-center justify-start sm:text-[16px] text-xs text-[#FC8019]  w-full"> <CiVideoOn size={20} /><span className="text-[#717182] ">Interview Mode</span></p>
              </div>
              <p className="text-[#0A0A0A] text-[16px]">Online</p>
            </div>
          </div>

          <div className="p-3">
            <div className="p-2 border border-[#FFD9B3] bg-[#FFF5EB] rounded-lg">
              <div className="">
                <p className="flex flex-row sm:gap-4 gap-2 items-center justify-start sm:text-[16px] text-xs text-[#FC8019]  w-full"> <CiVideoOn size={20} /><span className="text-[#7D4A1F] ">Meeting Link</span></p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className=" border border-[#FFD9B3] p-3 bg-[#FFFFFF] mt-4 rounded-lg sm:w-[90%] w-[70%]">
                  <p className="text-[14px] text-[#717182] break-all">http://localhost:5173/home</p>
                </div>
                <div className="w-20% bg-[#FC8019] rounded-lg text-white mt-3">
                  <p className=" p-3.5"><FaExternalLinkAlt size={15} /></p>
                </div>
              </div>
            </div>
          </div>



          <div className="p-3 ">
            <div className="p-2 border border-[#90CAF9] bg-[#E3F2FD] rounded-lg">
              <p className="text-[#0D47A1] text-[16px]  mt-3">Interview Preparation Tips </p>
              <p className="flex items-center gap-4 text-[#1565C0] sm:text-[14px] text-sm mt-2"><span className="w-2 h-2 rounded-full  bg-[#1565C0]"></span>Test your audio and video 10 mins before the interview</p>
              <p className="flex items-center gap-4 text-[#1565C0] sm:text-[14px] text-sm mt-2"><span className="w-2 h-2 rounded-full  bg-[#1565C0]"></span>Test your audio and video 10 mins before the interview</p>
              <p className="flex items-center gap-4 text-[#1565C0] sm:text-[14px] text-sm mt-2"><span className="w-2 h-2 rounded-full  bg-[#1565C0]"></span>Test your audio and video 10 mins before the interview</p>
              <p className="flex items-center gap-4 text-[#1565C0] sm:text-[14px] text-sm mt-2"><span className="w-2 h-2 rounded-full  bg-[#1565C0]"></span>Test your audio and video 10 mins before the interview</p>

            </div>
          </div>


          <div className="flex p-3 gap-4">
            <button
              className="w-full sm:flex flex flex-row text-sm  gap-3 items-center mt-5 rounded-lg p-2 cursor-pointer bg-[#FC8019] text-white text-[14px]"
            >
              <p className="flex sm:gap-4 gap-2 items-center justify-center sm:text-[16px] text-xs  w-full"> <CiVideoOn size={20} />
                Join Meeting</p>
            </button>
            <button
              className="w-full mt-5 rounded-lg p-2 cursor-pointer  bg-[#F3F3F5] text-[#0A0A0A] text-[14px]"
            >
              Close
            </button>

          </div>

        </div>
      </div>}

    </div>
  )
}

export default Interview