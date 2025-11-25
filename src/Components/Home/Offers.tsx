import dollar from "../../assets/Home/Dollar_Offer.png"
import location from "../../assets/Home/Location.png"
import department from "../../assets/Home/Department.png"
import date from "../../assets/Home/date.png"
import employeement from "../../assets/Home/Employeetype.png"
import user from "../../assets/Home/Offer_User.png"
import offer from "../../assets/Home/Offer_Letter_icon.png"
import { LuDownload } from "react-icons/lu";
import Accept from "../../assets/Home/Home_Offer_accept.png"
import Decline from "../../assets/Home/Home_Offer_decline.png"
import { useState } from "react"
import Success from "../../assets/Home/Confirmation_icon.png"
import decline from "../../assets/Home/Confirmation_decline_icon.png"

const Offers = () => {
  const [page, setpage] = useState(false)
  const [declinepage, setdeclinepage] = useState(false)
  return (
    <div>
      <div className='flex-flex-col gap-4 bg-[#FF5200] text-white mt-10 rounded-t-2xl p-5'>
        <p className='flex justify-between'>Senior Frontend Engineer<span className='bg-[#FC8019] text-white px-2 py-1 rounded-full'>Pending Response</span></p>
        <p>TechCorp India </p>
      </div>

      <div className='md:flex md:flex-row md:justify-between   p-5 mt-5'>
        <div className='w-full flex flex-col gap-4'>
          <div className="flex flex-row items-center gap-2">
            <img src={dollar} className="w-15" alt="" />
            <div>
              <p>Compensation</p>
              <p>22LPA</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={location} className="w-15" alt="" />
            <div>
              <p>Location</p>
              <p>Bangalore,Karnataka</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={department} className="w-15" alt="" />
            <div>
              <p>Department</p>
              <p>Engineering</p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full flex flex-col gap-4'>
            <div className="flex flex-row items-center gap-2">
              <img src={date} className="w-15" alt="" />
              <div>
                <p>Joining Date</p>
                <p>15 February 2025</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={employeement} className="w-15" alt="" />
              <div>
                <p>Employement Type</p>
                <p>Full-Type</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={user} className="w-15" alt="" />
              <div>
                <p>Reporting To</p>
                <p>Prakash (VP Engineering)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row p-2 border-[#E9E9EB] bg-[#F9F9F9] gap-5 rounded-xl">
        <img src={offer} className=" w-12 h-12" alt="" />
        <div className="flex flex-row justify-between items-center   w-full">
          <div className=" ">
            <p>Offer Letter</p>
            <p className="text-gray-400">Official offer Documet</p>
          </div>
          <div className="flex flex-row items-center gap-5 border border-[#E9E9EB] rounded-lg p-1.5">
            <LuDownload />
            <button>
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10">
        <button onClick={() => setpage(true)} className="w-full rounded-lg bg-[#60B246] flex items-center justify-center text-white gap-2"><span><img src={Accept} alt="" className="w-10 p-2" /></span> Accept Offer</button>
        <button onClick={() => setdeclinepage(true)} className="w-full rounded-lg text-[#E7000B] flex items-center justify-center border border-[#E9E9EB] "><span><img src={Decline} alt="" className="w-10 p-2" /></span>Decline Offer</button>
      </div>


      {page && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-center">
              <img src={Success} className="w-30" alt="" />
            </div>
            <p className="text-2xl font-bold text-center">Accept Offer</p>
            <p className="text-md text-gray-500 text-center">
              Are you sure want to accept this offer? This action will notify the HR team
            </p>

            <div className="flex gap-5 mt-5">
              <button
                onClick={() => setpage(false)}
                className="w-full rounded-lg p-2 border border-[#E9E9EB]"
              >
                Cancel
              </button>
              <button className="w-full rounded-lg bg-[#60B246] text-white p-2">
                Yes, Accept
              </button>
            </div>
          </div>
        </div>
      )}


      {declinepage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-center">
              <img src={decline} className="w-30" alt="" />
            </div>
            <p className="text-2xl font-bold text-center">Decline Offer</p>
            <p className="text-md text-gray-500 text-center">
              Are you sure want to decline this offer? This action will notify the HR team
            </p>

            <div className="flex gap-5 mt-5">
              <button
                onClick={() => setdeclinepage(false)}
                className="w-full rounded-lg p-2 border border-[#E9E9EB]"
              >
                Cancel
              </button>
              <button className="w-full rounded-lg bg-[#EB3636] text-white p-2">
                Decline
              </button>
            </div>
          </div>
        </div>
      )}




    </div>
  )
}

export default Offers