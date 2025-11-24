import success from "../../assets/Success_Image.png"
import Success_icon from "../../assets/Success_Icon.png"
const Success_Component = () => {
  return (
    <div className="">
            <div className="h-screen  rounded-lg">
                <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center">

                    <div className="bg-white p-5 rounded-2xl  h-[80vh] w-full max-w-[650px] overflow-y-auto hide-scrollbar">
                    <div className="flex flex-row items-center justify-center">
                    <img src={success} className="w-45 " alt="" />
                    </div>
                    <p className="text-3xl flex items-center justify-center text-[#0F172B]">Application Submitted</p>
                    <p className="text-3xl flex items-center justify-center text-[#0F172B]">Successfully!</p>
                    <p className="text-md flex items-center justify-center mt-5 text-[#45556C]">Thank you aplying  to Senior Frontend Engineer. We've received</p>
                    <p className="text-md flex items-center justify-center text-[#45556C]">your application and our HR team will review it shortly</p>
                    <p className="text-md flex items-center justify-start gap-5 mt-10 text-[#45556C]"><span><img src={Success_icon} className="w-8" alt="" /></span>Redirecting toyour dashboard</p>
                    

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Success_Component