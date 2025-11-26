import Logo_for_Login from "../../../src/assets/Container.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let validationErrors: any = {};

    if (!formData.fullName.trim())
      validationErrors.fullName = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) validationErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      validationErrors.email = "Enter a valid email address";

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      validationErrors.phone = "Phone number must be 10 digits";

    if (!formData.password) validationErrors.password = "Password is required";
    else if (formData.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      validationErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    navigate("/otp");
  };

  return (
    <div className="min-h-screen bg-[#FC8019] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-6 md:p-8 rounded-2xl shadow-lg overflow-y-auto hide-scrollbar">
        <div className="flex justify-center mb-4">
          <img src={Logo_for_Login} alt="Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-[#717182] mb-6">
          Join TalentHub and start your career
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-[#717182]">
              Full Name *
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-[#717182]">
              Email Address *
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-[#717182]">
              Phone Number *
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium text-[#717182]">
              Password *
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className="w-full px-4 py-2 pr-10 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
            />
            <span
              className="absolute right-3 top-10 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-1 font-medium text-[#717182]">
              Confirm Password *
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter the password"
              className="w-full px-4 py-2 pr-10 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:border-[#FC8019]"
            />
            <span
              className="absolute right-3 top-10 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 py-2 mt-3 bg-[#FC8019] text-white rounded-lg hover:bg-orange-500 transition"
          >
            Continue
            <FaArrowRightLong size={20} />
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-5 text-center text-[#717182]">
          <p>
            Already have an account ?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-[#0052CC] cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
