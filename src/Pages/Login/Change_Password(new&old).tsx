import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Change_Password = () => {
  return (
    <div className="h-screen bg-[#FC8019] flex items-center justify-center p-3">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={Logo_for_Login} className="w-16 h-16" alt="Logo" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-1">Change Password</h2>
        <p className="text-center text-[#45556C] mb-6">Join TalentHub and start your career</p>

        {/* Form */}
        <form className="space-y-5">

          {/* New Password */}
          <div>
            <label className="block mb-2 font-medium">New Password *</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-[#717182] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium">Confirm Password *</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-[#717182] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 flex items-center justify-center gap-3 mt-6 bg-[#FC8019] text-white rounded-xl transition hover:bg-orange-600"
          >
            Continue
            <FaArrowRightLong size={20} />
          </button>

          {/* Sign Up Link */}
          <div className="mt-5 text-center">
            <p className="text-[#45556C] text-sm">
              Don’t have an account?{" "}
              <span className="text-[#0052CC] font-semibold cursor-pointer">Sign Up</span>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Change_Password;
