import { useState, type FormEvent } from "react";
import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { resetPasswordThunk } from "../../features/auth/reducers/thunk";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Change_Password_old = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const email: string =
    (location.state?.email as string) ||
    localStorage.getItem("resetEmail") ||
    "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const loading = useSelector((state: any) => state.auth.loading);
  const error = useSelector((state: any) => state.auth.error);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setLocalError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    if (!email) {
      toast.error("Invalid request. Email missing!");
      return;
    }

    try {
      setLocalError("");

      const resetData = {
        email,
        newPassword,
        confirmPassword,
      };

      const actionResult = await dispatch(resetPasswordThunk(resetData));

      if (actionResult?.success) {
        toast.success("Password reset successfully!");
        navigate("/login");
      }
    } catch (err) {
      console.error("Reset Error:", err);
      toast.error("Failed to reset password");
    }
  };

  return (
    <div className="h-screen bg-[#FC8019] flex items-center justify-center p-3">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={Logo_for_Login} className="w-16 h-16" alt="Logo" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-1">
          Change Password
        </h2>
        <p className="text-center text-[#45556C] mb-6">
          Set a new password to continue
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* New Password */}
          <div>
            <label className="block mb-2 font-medium">New Password *</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-[#717182] text-[#717182] rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium">Confirm Password *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-[#717182] text-[#717182] rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Error Message */}
          {(localError || error) && (
            <p className="text-red-600 text-sm mt-2">{localError || error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 flex items-center justify-center gap-3 mt-6 bg-[#FC8019] text-white rounded-xl transition hover:bg-orange-600 disabled:bg-orange-300"
          >
            {loading ? "Please wait..." : "Continue"}
            <FaArrowRightLong size={20} />
          </button>

          {/* Sign Up Link */}
          <div className="mt-5 text-center">
            <p className="text-[#45556C] text-sm">
              Don’t have an account?{" "}
              <span className="text-[#0052CC] font-semibold cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Change_Password_old;
