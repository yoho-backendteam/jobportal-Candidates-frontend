import dollar from "../../assets/Home/Dollar_Offer.png"
import location from "../../assets/Home/Location.png"
import department from "../../assets/Home/Department.png"
import date from "../../assets/Home/date.png"
import employeement from "../../assets/Home/Employeetype.png"
import user from "../../assets/Home/Offer_User.png"
import offer from "../../assets/Home/Offer_Letter_icon.png"
import { LuDownload } from "react-icons/lu";

const Offers = () => {
  return (
    <div>
      <div className='flex-flex-col gap-4 bg-[#FF5200] text-white mt-10 rounded-t-2xl p-5'>
        <p className='flex justify-between'>Senior Frontend Engineer<span className='bg-[#FC8019] text-white px-2 py-1 rounded-full'>Pending Response</span></p>
        <p>TechCorp India </p>
      </div>

      <div className='flex flex-row justify-between p-5 mt-5'>
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

      <div className="flex flex-row p-2 border-[#E9E9EB] bg-[#F9F9F9] rounded-xl">
        <img src={offer} className=" w-15 h-15" alt="" />
        <div className="flex flex-row justify-between items-center  w-full">
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

    </div>
  )
}

export default Offers