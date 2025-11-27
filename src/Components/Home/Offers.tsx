import dollar from "../../assets/Home/Dollar_Offer.png";
import location from "../../assets/Home/Location.png";
import department from "../../assets/Home/Department.png";
import date from "../../assets/Home/date.png";
import employeement from "../../assets/Home/Employeetype.png";
import user from "../../assets/Home/Offer_User.png";
import offer from "../../assets/Home/Offer_Letter_icon.png";
import { LuDownload } from "react-icons/lu";
import Accept from "../../assets/Home/Home_Offer_accept.png";
import Decline from "../../assets/Home/Home_Offer_decline.png";
import { useState } from "react";
import Success from "../../assets/Home/Confirmation_icon.png";
import decline from "../../assets/Home/Confirmation_decline_icon.png";
import doubletick from "../../assets/Home/Double_tick.png";
import { selectAllapplication } from "../../features/applications/reducers/selector";
import { useDispatch, useSelector } from "react-redux";
import { getOfferThunks } from "../../features/Offer/reducers/Thunks";
import { IoMdClose } from "react-icons/io";
import { PiSmileySadFill } from "react-icons/pi";


const Offers = () => {
  const [page, setpage] = useState(false);
  const [declinepage, setdeclinepage] = useState(false);
  const [success, setsuccess] = useState(false);
  const [reason, setReason] = useState("");
  const [failure,setfailure]=useState(false)

  const alljobs = useSelector(selectAllapplication) as any[];
  const applicationId = alljobs[0]?._id;
  console.log(applicationId, "idddd");

  const dispatch = useDispatch();

  const handleAcceptOffer = async () => {
    try {
      await dispatch(
        getOfferThunks(applicationId, {
          status: "offer accepted",
        }) as any
      );

       setsuccess(true);
    setfailure(false); 
    setpage(false)
    } catch (error) {
      console.log("Failed to accept offer:", error);
    }
  };

  const handleRejecttOffer = async () => {
    try {
      await dispatch(
        getOfferThunks(applicationId, {
          status: "offer rejected",
          rejectionReason: reason,
        }) as any
      );

       setfailure(true);
    setdeclinepage(false);
    setsuccess(false);
    } catch (error) {
      console.log("Failed to accept offer:", error);
    }
  };


  console.log(alljobs, "data");

  return (
    <div className="border border-gray-300 pb-4 my-4 rounded-2xl">

      {alljobs[0]?.status === "offer sent" ? (
        <>
          <div className="flex-flex-col gap-4 bg-[#FF5200] text-white rounded-t-2xl p-5">
            <p className="flex justify-between">
              Senior Frontend Engineer
              <span className="bg-[#FC8019] text-white px-2 py-1 rounded-full">
                Pending Response
              </span>
            </p>
            <p>TechCorp India </p>
          </div>

          <div className="md:flex md:flex-row md:justify-between shadow-lg rounded-b-2xl  p-5 mt-5">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-row items-center gap-2">
                <img src={dollar} className="w-15" alt="" />
                <div>
                  <p className="text-[#686B78]">Compensation/salary</p>
                  <p>{alljobs[0]?.offerDetails?.salary}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={location} className="w-15" alt="" />
                <div>
                  <p className="text-[#686B78]">Location</p>
                  <p>{alljobs[0]?.job?.location}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <img src={department} className="w-15" alt="" />
                <div>
                  <p className="text-[#686B78]">Department</p>
                  <p>{alljobs[0]?.job?.department}</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                  <img src={date} className="w-15" alt="" />
                  <div>
                    <p className="text-[#686B78]">Joining Date</p>
                    <p>{new Date(alljobs[0]?.offerDetails?.joiningDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={employeement} className="w-15" alt="" />
                  <div>
                    <p className="text-[#686B78]">Employement Type</p>
                    <p>{alljobs[0]?.job?.employmentType}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img src={user} className="w-15" alt="" />
                  <div>
                    <p className="text-[#686B78]">Reporting To</p>
                    <p>Prakash (VP Engineering)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="px-6">
            {!success && !failure && (
              <div className="flex flex-row p-2 border-[#E9E9EB] bg-[#F9F9F9] gap-5 rounded-xl my-6">
                <img src={offer} className=" w-12 h-12" alt="" />
                <div className="flex flex-row justify-between items-center   w-full">
                  <div className=" ">
                    <p>{alljobs[0]?.offerDetails?.offerLetter}</p>
                    <p className="text-gray-400">Official offer Documet</p>
                  </div>
                  <button className="flex flex-row items-center gap-5 border border-[#E9E9EB] rounded-lg p-1.5 cursor-pointer">
                    <LuDownload /> <span>Download</span>
                  </button>
                </div>
              </div>
            )}

            {success && (
              <div className="border border-[#60B24633] bg-[#60B2461A] rounded-xl px-5 py-4 my-6 flex justify-between items-center">
                <div className="flex gap-5">
                  <img src={doubletick} className="w-10" alt="" />
                  <div>
                    <p className="text-2xl text-gray-800 font-bold">
                      Offer Accept Successfully!
                    </p>
                    <p className="text-md text-gray-400">
                      Plesae upload required document to complete your onboarding
                    </p>
                  </div>
                </div>

                <button className="flex flex-row items-center gap-5 border border-[#E9E9EB] bg-white cursor-pointer rounded-lg p-1.5">
                  {" "}
                  <LuDownload /> <span>Download</span>
                </button>
              </div>
            )}

             {failure && (
              <div className="border border-[#60B24633] bg-[#60B2461A] rounded-xl px-5 py-4 my-6 flex justify-between items-center">
                <div className="flex gap-5">
                  <span className="flex items-center justify-center "><IoMdClose className="text-red-700" size={35}/></span>
                  <div>
                    <p className="text-2xl text-red-700 font-bold">
                      Offer Rejected!
                    </p>
                    <p className="text-md text-gray-400">
                      Better Luck Next Time 
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!success && (
              <div className="flex gap-5 mt-10">
                <button
                  onClick={() => setpage(true)}
                  className="w-full rounded-lg bg-[#60B246] flex items-center justify-center text-white gap-2 cursor-pointer"
                >
                  <span>
                    <img src={Accept} alt="" className="w-10 p-2" />
                  </span>{" "}
                  Accept Offer
                </button>
                <button
                  onClick={() => setdeclinepage(true)}
                  className="w-full rounded-lg text-[#E7000B] flex items-center justify-center border border-[#E9E9EB] cursor-pointer hover:border-red-600"
                >
                  <span>
                    <img src={Decline} alt="" className="w-10 p-2" />
                  </span>
                  Decline Offer
                </button>
              </div>
            )}
          </div>

        </>
      ) : <><div>
        <div className="flex flex-col items-center justify-center h-45 mt-3 mx-100  rounded-lg border-gray-200 border bg-[#F8F9FA]">
          <p className="text-gray-400"><PiSmileySadFill size={30} /></p>
          <p className="text-[20px]">Dear user there is no offer letter pdf here</p>
        </div>
        </div></>}



      {page && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-center">
              <img src={Success} className="w-15" alt="" />
            </div>
            <p className="text-2xl font-bold text-center">Accept Offer</p>
            <p className="text-md text-gray-500 text-center">
              Are you sure want to accept this offer? This action will notify
              the HR team
            </p>

            <div className="flex gap-5 mt-5">
              <button
                onClick={() => setpage(false)}
                className="w-full rounded-lg p-2 border border-[#E9E9EB]"
              >
                Cancel
              </button>
              <button
                onClick={() => (setsuccess(true), setpage(false), handleAcceptOffer())}
                className="w-full rounded-lg bg-[#60B246] text-white p-2"
              >
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
              <img src={decline} className="w-15" alt="" />
            </div>
            <p className="text-2xl font-bold text-center">Decline Offer</p>
            <p className="text-md text-gray-500 text-center">
              Are you sure want to decline this offer? This action will notify
              the HR team
            </p>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border border-gray-300 focus:border-[#FC8019] focus:ring-1 focus:ring-[#FC8019] outline-none  rounded-lg p-3 mt-4"
              placeholder="Please mention the reason for declining..."
              rows={2}
            ></textarea>

            <div className="flex gap-5 mt-5">
              <button
                onClick={() => setdeclinepage(false)}
                className="w-full rounded-lg p-2 border border-[#E9E9EB]"
              >
                Cancel
              </button>
              <button onClick={() => {handleRejecttOffer(),setfailure(true),setdeclinepage(false),setsuccess(false)}} className="w-full rounded-lg bg-[#EB3636] text-white p-2">
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
