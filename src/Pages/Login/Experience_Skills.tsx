import Education from "../../assets/Education_Icon.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { signupThunk } from "../../features/auth/reducers/thunk";

const Experience_Skills = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    total_experience: "",
    key_skills: "",
    upload_resume: null as File | null,
  });

  const handleChange = (e: any) => {
    if (errors[e.target.name]) {
      setErrors((prev: any) => ({ ...prev, [e.target.name]: "" }));
    }
    if (apiError) {
      setApiError("");
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    let validationErrors: any = {};

    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        validationErrors.upload_resume =
          "Only PDF, DOC, or DOCX files are allowed";
        setErrors(validationErrors);
        return;
      }
    }

    setErrors({});
    setFormData({ ...formData, upload_resume: file });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let validationErrors: any = {};

    if (!formData.total_experience.trim()) {
      validationErrors.total_experience = "Total experience is required";
    }

    if (!formData.key_skills.trim()) {
      validationErrors.key_skills = "Key skills are required";
    }

    if (
      formData.upload_resume &&
      ![
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(formData.upload_resume.type)
    ) {
      validationErrors.upload_resume = "Upload only PDF, DOC, or DOCX";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setApiError("");

    try {
      const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

      const finalPayload = {
        // Basic signup info
        fullName: signupData.fullName,
        email: signupData.email,
        phoneNumber: signupData.phoneNumber,
        password: signupData.password,
        role: signupData.role,

        // Personal details
        dateOfBirth: signupData.personalDetails?.dateOfBirth,
        gender: signupData.personalDetails?.gender,
        address: signupData.personalDetails?.address,
        city: signupData.personalDetails?.city,
        state: signupData.personalDetails?.state,
        pincode: signupData.personalDetails?.pincode,

        // Educational details
        highestEducation: signupData.educationalDetails?.highestEducation,
        institution: signupData.educationalDetails?.institute, 
        graduationYear: Number(signupData.educationalDetails?.graduationYear),
        percentage: Number(signupData.educationalDetails?.percentage),
        specialization: signupData.educationalDetails?.major,

        // Experience & Skills
        totalExperience: Number(formData.total_experience),
        keySkills: formData.key_skills
          .split(",")
          .map((skill: string) => skill.trim()),
      };

      if (formData.upload_resume) {
        const formDataToSend = new FormData();
        Object.entries(finalPayload).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formDataToSend.append(key, JSON.stringify(value));
          } else {
            formDataToSend.append(key, value as string);
          }
        });
        formDataToSend.append("resume", formData.upload_resume);
      }

      await dispatch(signupThunk(finalPayload));
      localStorage.removeItem("signupData");
      localStorage.removeItem("signupEmail");

      navigate("/signin");
    } catch (error: any) {
      console.error("Signup Error:", error);
      setApiError(
        error?.message ||
          error?.response?.data?.message ||
          "Signup failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center px-4 py-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex justify-center mb-3">
          <img src={Education} className="w-20 h-20" alt="icon" />
        </div>

        <h2 className="text-2xl font-semibold text-center">
          Experience & Skills
        </h2>
        <p className="text-center">Tell us about your professional journey</p>

        {/* API Error Message */}
        {apiError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{apiError}</p>
          </div>
        )}

        <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
          {/* Total Experience */}
          <div className="w-full">
            <label className="block mb-1 font-medium">Total Experience *</label>
            <input
              name="total_experience"
              value={formData.total_experience}
              onChange={handleChange}
              type="text"
              placeholder="E.g. 3 years, Fresher"
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg placeholder:text-gray-400 focus:outline-none ${
                errors.total_experience ? "border border-red-500" : ""
              }`}
            />
            {errors.total_experience && (
              <p className="text-red-500 text-sm">{errors.total_experience}</p>
            )}
          </div>

          {/* Key Skills */}
          <div className="w-full">
            <label className="block mb-1 font-medium">Key Skills *</label>
            <input
              name="key_skills"
              value={formData.key_skills}
              onChange={handleChange}
              type="text"
              placeholder="E.g. React, Node.js, Communication (comma-separated)"
              className={`w-full py-2 px-3 bg-[#F3F3F5] rounded-lg placeholder:text-gray-400 focus:outline-none ${
                errors.key_skills ? "border border-red-500" : ""
              }`}
            />
            {errors.key_skills && (
              <p className="text-red-500 text-sm">{errors.key_skills}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="w-full">
            <label className="block mb-1 font-medium">
              Upload Resume (Optional)
            </label>

            <div
              onClick={() => document.getElementById("resumeInput")?.click()}
              className="w-full h-32 border-2 border-dashed border-gray-300 bg-[#FFF9F4]
                flex flex-col items-center justify-center rounded-xl cursor-pointer
                hover:border-[#FC8019] hover:bg-[#FFF4EB] transition"
            >
              <FiUpload className="w-10 h-10 text-gray-400" />
              <p className="text-gray-500 mt-2">Click to upload resume</p>
              <p className="text-xs text-gray-400">PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <input
              id="resumeInput"
              name="upload_resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />

            {errors.upload_resume && (
              <p className="text-red-500 text-sm mt-1">
                {errors.upload_resume}
              </p>
            )}

            {formData.upload_resume && (
              <p className="text-green-600 text-sm mt-1">
                Uploaded: {formData.upload_resume.name}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              disabled={isLoading}
              className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#F3F3F5] text-black rounded-lg hover:bg-gray-200 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              <FaArrowLeftLong size={18} />
              Back
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#FC8019] text-white rounded-lg hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <FaArrowRightLong size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience_Skills;
