import Logo_for_Login from "../../../src/assets/Container.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: "" }));
    }
    if (apiError) {
      setApiError("");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors: any = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      validationErrors.fullName = "Full name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      validationErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password)) {
      validationErrors.password = "Password must contain letters and numbers";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const signupData = {
        fullName: formData.fullName.trim(),
        email: formData.email.toLowerCase(),
        phoneNumber: formData.phone,
        password: formData.password,
        role: "candidate",
      };

      localStorage.setItem("signupData", JSON.stringify(signupData));
      localStorage.setItem("signupEmail", formData.email);
      // navigate("/emailotpverfication");
      toast.success("User Registered Successfully")
      navigate("/Personal_Details");
    } catch (error: any) {
      console.error("Error:", error);
      setApiError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInClick = () => {
    navigate("/signin");
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

        {apiError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{apiError}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
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
              className={`w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC8019] focus:border-transparent ${
                errors.fullName ? "border border-red-500" : ""
              }`}
              disabled={isLoading}
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
              className={`w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC8019] focus:border-transparent ${
                errors.email ? "border border-red-500" : ""
              }`}
              disabled={isLoading}
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
              type="tel"
              placeholder="Enter phone number"
              className={`w-full px-4 py-2 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC8019] focus:border-transparent ${
                errors.phone ? "border border-red-500" : ""
              }`}
              maxLength={10}
              disabled={isLoading}
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
              className={`w-full px-4 py-2 pr-10 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC8019] focus:border-transparent ${
                errors.password ? "border border-red-500" : ""
              }`}
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
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
              className={`w-full px-4 py-2 pr-10 bg-[#F3F3F5] text-[#717182] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC8019] focus:border-transparent ${
                errors.confirmPassword ? "border border-red-500" : ""
              }`}
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <FiEyeOff size={18} />
              ) : (
                <FiEye size={18} />
              )}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-3 py-3 mt-3 bg-[#FC8019] text-white rounded-lg hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                Continue
                <FaArrowRightLong size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-5 text-center text-[#717182]">
          <p>
            Already have an account?{" "}
            <span
              onClick={handleSignInClick}
              className="text-[#0052CC] cursor-pointer hover:underline font-medium"
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

// Updated Personal_Details.tsx
// Save to localStorage and navigate to next step
