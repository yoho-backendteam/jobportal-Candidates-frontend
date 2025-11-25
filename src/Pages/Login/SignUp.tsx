import Logo_for_Login from "../../../src/assets/Container.png"
import { FiEye } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e: any) => {
  e.preventDefault();

  let validationErrors: any = {};

  if (!formData.fullName.trim()) {
    validationErrors.fullName = "Full name is required";
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
  }

  if (!formData.confirmPassword) {
    validationErrors.confirmPassword = "Confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    validationErrors.confirmPassword = "Passwords do not match";
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  navigate("/otp");
};



  return (
    <div className="">
      <div className="h-screen m-3 rounded-lg">
        <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center ">
          
          <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg h-[80vh] overflow-y-auto hide-scrollbar">
            <div className="flex flex-row justify-center ">
              <img src={Logo_for_Login} className="w-15 h-15" alt="" />
            </div>

            <h2 className="text-2xl font-semibold text-center">Create Account</h2>
            <p className="flex justify-center">Join TalentHub and start your career</p>

            <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
              
              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
                {errors.fullName && (<p className="text-red-500 text-sm mt-1">{errors.fullName}</p>)}

              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
                {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}

              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
                {errors.phone && (<p className="text-red-500 text-sm mt-1">{errors.phone}</p>)}

              </div>

              <div className="relative">
                <label className="block mb-1 font-medium">Password *</label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-2 bg-[#F3F3F5] placeholder:text-gray-300 pr-10 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
                <FiEye className="absolute right-3 top-10 text-gray-400 cursor-pointer" />
                {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}

              </div>

              <div className="relative">
                <label className="block mb-1 font-medium">Confirm Password *</label>
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="Re-enter the password"
                  className="w-full px-4 py-2 pr-10 bg-[#F3F3F5] placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
                <FiEye className="absolute right-3 top-10 text-gray-400 cursor-pointer" />
                {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>)}

              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-3 py-2 mt-3 bg-[#FC8019] text-white rounded-lg"
              >
                Continue
                <FaArrowRightLong size={20} />
              </button>
            </form>

            <div className="mt-5 text-center flex flex-col gap-2">
              <p className="flex flex-row justify-center gap-3">
                Already have an <span className="text-[#0052CC]">Sign In</span> 
              </p>
              <p className="mr-15">account?</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
