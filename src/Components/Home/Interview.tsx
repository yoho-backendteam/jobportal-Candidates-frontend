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

      {open && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl w-full sm:max-w-[55%] max-h-[90vh] overflow-y-auto">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-[#FC8019] text-white p-4 rounded-t-xl">
        <div>
          <p className="text-lg font-bold">Interview Details</p>
          <p className="text-sm opacity-90">
            All Information About Your Scheduled Interview
          </p>
        </div>

        <IoClose
          size={32}
          className="cursor-pointer bg-white/30 rounded-lg p-1"
          onClick={() => setopen(false)}
        />
      </div>

      {/* Candidate Info */}
      <div className="p-4">
        <div className="p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FC8019] rounded-full flex items-center justify-center">
            <CiUser size={22} className="text-white" />
          </div>
          <div>
            <p className="text-[16px] text-[#0A0A0A]">Sarah Johnson</p>
            <p className="text-[14px] text-[#717182] flex items-center gap-2">
              <MdCardTravel /> Senior Frontend Developer
            </p>
          </div>
        </div>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col sm:flex-row gap-3 px-4">
        <div className="w-full">
          <div className="p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
            <p className="flex items-center gap-2 text-[#FC8019] text-sm mb-1">
              <MdDateRange size={18} />
              <span className="text-[#717182]">Date</span>
            </p>
            <p className="text-[#0A0A0A] text-[16px]">
              Friday, November 28, 2025
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
            <p className="flex items-center gap-2 text-[#FC8019] text-sm mb-1">
              <FaRegClock size={18} />
              <span className="text-[#717182]">Time</span>
            </p>
            <p className="text-[#0A0A0A] text-[16px]">10:00 AM</p>
          </div>
        </div>
      </div>

      {/* Interview Mode */}
      <div className="p-4 pt-3">
        <div className="p-3 border border-[#E0E0E0] bg-[#F8F9FA] rounded-lg">
          <p className="flex items-center gap-2 text-[#FC8019] text-sm mb-1">
            <CiVideoOn size={18} />
            <span className="text-[#717182]">Interview Mode</span>
          </p>
          <p className="text-[#0A0A0A] text-[16px]">Online</p>
        </div>
      </div>

      {/* Meeting Link */}
      <div className="p-4 pt-1">
        <div className="p-3 border border-[#FFD9B3] bg-[#FFF5EB] rounded-lg">
          <p className="flex items-center gap-2 text-[#FC8019] text-sm mb-1">
            <CiVideoOn size={18} />
            <span className="text-[#7D4A1F]">Meeting Link</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <div className="border border-[#FFD9B3] bg-white p-3 rounded-lg flex-1">
              <p className="text-[14px] text-[#717182] break-all">
                http://localhost:5173/home
              </p>
            </div>
            <button className="bg-[#FC8019] text-white p-3 rounded-lg">
              <FaExternalLinkAlt size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="p-4 pt-1">
        <div className="p-3 border border-[#90CAF9] bg-[#E3F2FD] rounded-lg">
          <p className="text-[#0D47A1] text-[16px] font-semibold mb-2">
            Interview Preparation Tips
          </p>

          {[1, 2, 3, 4].map((_, idx) => (
            <p
              key={idx}
              className="flex items-center gap-3 text-[#1565C0] text-sm mt-1"
            >
              <span className="w-2 h-2 bg-[#1565C0] rounded-full"></span>
              Test your audio and video 10 mins before the interview
            </p>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 p-4">
        <button className="w-full bg-[#FC8019] text-white p-3 rounded-lg flex items-center justify-center gap-2 text-[15px]">
          <CiVideoOn size={18} /> Join Meeting
        </button>

        <button
          className="w-full bg-[#F3F3F5] text-[#0A0A0A] p-3 rounded-lg"
          onClick={() => setopen(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  )
}

export default Interview