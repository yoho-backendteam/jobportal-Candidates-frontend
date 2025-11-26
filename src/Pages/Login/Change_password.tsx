import { MdOutlineMail } from "react-icons/md";
import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Change_Password = () => {
  return (
    <div className="">
      <div className=" h-screen  rounded-lg">
        <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center ">
          <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-row  justify-center ">
              <img src={Logo_for_Login} className="w-15 h-15 " alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-center">
              Change Password
            </h2>
            <p className="flex items-center justify-center text-[#45556C] ">
              Join TalentHub and start your carrer
            </p>

            <form className="space-y-4 mt-8">
              <div className="w-full">
                <label className="block mb-1 font-medium">Email/Phone *</label>

                <div className="relative w-full">
                  {/* Icon inside input */}
                  <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                  <input
                    type="text"
                    placeholder="Enter your email or phone number"
                    className="w-full pl-10 pr-4 py-2 bg-[#F3F3F5] text-sm rounded-lg 
                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                 focus:ring-[#FC8019] transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-10 flex flex-row justify-center items-center gap-5 bg-[#FC8019]  text-white rounded-xl transition"
              >
                Verify your OTP
                <FaArrowRightLong size={20} />
              </button>
              <div className="mt-5">
                <p className="flex items-center justify-center gap-2">
                  Don"t have an account?{" "}
                  <span className="text-[#0052CC] text-xl">Sign Up</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Change_Password;
