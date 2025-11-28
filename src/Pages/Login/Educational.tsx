import Education from "../../assets/Education_Icon.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Educational = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    education: "",
    institute: "",
    graduationYear: "",
    percentage: "",
    major: "",
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

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let validationErrors: any = {};

    const onlyLetters = /^[A-Za-z ]+$/;
    const onlyLettersNumbers = /^[A-Za-z0-9 .,&()-]+$/;
    const yearRegex = /^[0-9]{4}$/;

    if (!formData.education.trim()) {
      validationErrors.education = "Education is required";
    } else if (!onlyLetters.test(formData.education)) {
      validationErrors.education = "Education must contain only letters";
    }

    if (!formData.institute.trim()) {
      validationErrors.institute = "Institute/University is required";
    } else if (!onlyLettersNumbers.test(formData.institute)) {
      validationErrors.institute = "Institute name is invalid";
    }

    if (!formData.graduationYear.trim()) {
      validationErrors.graduationYear = "Graduation year is required";
    } else if (!yearRegex.test(formData.graduationYear)) {
      validationErrors.graduationYear = "Enter a valid 4-digit year";
    }

    const percentageValue = Number(formData.percentage);

    if (!formData.percentage) {
      validationErrors.percentage = "Percentage/CGPA is required";
    } else if (isNaN(percentageValue)) {
      validationErrors.percentage = "Percentage must be a valid number";
    } else if (percentageValue < 0 || percentageValue > 100) {
      validationErrors.percentage = "Enter a value between 0 and 100";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Get existing signup data
      const existingData = JSON.parse(
        localStorage.getItem("signupData") || "{}"
      );

      // Merge with educational details
      const updatedData = {
        ...existingData,
        educationalDetails: formData,
      };

      // Save back to localStorage
      localStorage.setItem("signupData", JSON.stringify(updatedData));

      // Navigate to next step
      navigate("/exprience_skill");
    } catch (error) {
      console.error("Error saving educational details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex justify-center">
          <img src={Education} className="w-20 h-20" alt="education-icon" />
        </div>

        <h2 className="text-2xl font-semibold text-center">
          Educational Details
        </h2>
        <p className="text-center">Share your academic background</p>

        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
          {/* Highest Education */}
          <div className="w-full">
            <label className="block mb-1 font-medium">
              Highest Education *
            </label>
            <input
              name="education"
              value={formData.education}
              onChange={handleChange}
              type="text"
              placeholder="Enter your education (e.g., B.Tech, B.Sc)"
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                errors.education ? "border border-red-500" : ""
              }`}
            />
            {errors.education && (
              <p className="text-red-500 text-sm">{errors.education}</p>
            )}
          </div>

          {/* Institute */}
          <div className="w-full">
            <label className="block mb-1 font-medium">
              Institute/University *
            </label>
            <input
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              type="text"
              placeholder="Enter your institute/university"
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                errors.institute ? "border border-red-500" : ""
              }`}
            />
            {errors.institute && (
              <p className="text-red-500 text-sm">{errors.institute}</p>
            )}
          </div>

          {/* Graduation Year + Percentage */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="block mb-1 font-medium">
                Graduation Year *
              </label>
              <input
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                type="number"
                placeholder="e.g., 2022"
                className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                  errors.graduationYear ? "border border-red-500" : ""
                }`}
              />
              {errors.graduationYear && (
                <p className="text-red-500 text-sm">{errors.graduationYear}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">
                Percentage/CGPA *
              </label>
              <input
                name="percentage"
                value={formData.percentage}
                onChange={handleChange}
                type="number"
                step="0.01"
                placeholder="Enter your score"
                className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none ${
                  errors.percentage ? "border border-red-500" : ""
                }`}
              />
              {errors.percentage && (
                <p className="text-red-500 text-sm">{errors.percentage}</p>
              )}
            </div>
          </div>

          {/* Major */}
          <div className="w-full">
            <label className="block mb-1 font-medium">
              Specialization/Major (optional)
            </label>
            <input
              name="major"
              value={formData.major}
              onChange={handleChange}
              type="text"
              placeholder="E.g., Mechanical, Computer Science"
              className="w-full py-2 px-3 bg-[#F3F3F5] rounded-lg focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <button
              type="button"
              className="flex-1 flex justify-center items-center gap-3 py-2 bg-[#F3F3F5] rounded-lg hover:bg-gray-200"
              onClick={() => navigate(-1)}
              disabled={isLoading}
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

export default Educational;
