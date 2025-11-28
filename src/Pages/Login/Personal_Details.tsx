import User from "../../assets/User.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";

const Personal_Details = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    dateofbirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e: any) => {
    if (errors[e.target.name]) {
      setErrors((prev: any) => ({ ...prev, [e.target.name]: "" }));
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let validationErrors: any = {};

    if (!formData.dateofbirth) {
      validationErrors.dateofbirth = "Date of Birth is required";
    }

    if (!formData.gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!formData.address.trim()) {
      validationErrors.address = "Address is required";
    }

    const onlyLettersRegex = /^[A-Za-z ]+$/;

    if (!formData.city.trim()) {
      validationErrors.city = "City is required";
    } else if (!onlyLettersRegex.test(formData.city)) {
      validationErrors.city = "City must contain only letters";
    }

    if (!formData.state.trim()) {
      validationErrors.state = "State is required";
    } else if (!onlyLettersRegex.test(formData.state)) {
      validationErrors.state = "State must contain only letters";
    }

    const pinRegex = /^[0-9]{6}$/;
    if (!formData.pincode) {
      validationErrors.pincode = "Pincode is required";
    } else if (!pinRegex.test(formData.pincode)) {
      validationErrors.pincode = "Pincode must be 6 digits";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Get existing signup data
      const existingData = JSON.parse(localStorage.getItem("signupData") || "{}");
      
      // Merge with personal details
      const updatedData = {
        ...existingData,
        personalDetails: formData,
      };
      
      // Save back to localStorage
      localStorage.setItem("signupData", JSON.stringify(updatedData));

      // Navigate to next step
      navigate("/educational_details");
    } catch (error) {
      console.error("Error saving personal details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex justify-center">
          <img src={User} className="w-20 h-20" alt="user" />
        </div>

        <h2 className="text-2xl font-semibold text-center">
          Personal Details
        </h2>
        <p className="text-center">Tell us more about yourself</p>

        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
          {/* Date of Birth + Gender */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="block mb-1 font-medium">Date of Birth *</label>
              <input
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                type="date"
                className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                  errors.dateofbirth ? "border border-red-500" : ""
                }`}
              />
              {errors.dateofbirth && (
                <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                  errors.gender ? "border border-red-500" : ""
                }`}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium">Address *</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              type="text"
              placeholder="Enter your address"
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                errors.address ? "border border-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          {/* City + State */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="block mb-1 font-medium">City *</label>
              <div className="relative">
                <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your city"
                  className={`w-full py-2 pl-10 pr-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                    errors.city ? "border border-red-500" : ""
                  }`}
                />
              </div>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">State *</label>
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                type="text"
                placeholder="Enter your state"
                className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                  errors.state ? "border border-red-500" : ""
                }`}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
          </div>

          {/* Pincode */}
          <div>
            <label className="block mb-1 font-medium">Pincode *</label>
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              type="text"
              placeholder="Enter your pincode"
              maxLength={6}
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                errors.pincode ? "border border-red-500" : ""
              }`}
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm">{errors.pincode}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              disabled={isLoading}
              className="flex-1 flex justify-center items-center gap-3 py-2 bg-[#F3F3F5] rounded-lg hover:bg-gray-200"
            >
              <FaArrowLeftLong />
              Back
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center gap-3 py-2 bg-[#FC8019] text-white rounded-lg hover:bg-orange-600 disabled:bg-orange-300"
            >
              {isLoading ? "Saving..." : "Continue"}
              <FaArrowRightLong />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal_Details;