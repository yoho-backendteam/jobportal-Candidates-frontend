import Education from "../../assets/Education_Icon.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const Experience_Skills = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState<any>({});

    const [formData, setFormData] = useState({
        total_experience: "",
        key_skills: "",
        upload_resume: null as File | null,
    });

    const handleChange = (e: any) => {
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
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ];

            if (!allowedTypes.includes(file.type)) {
                validationErrors.upload_resume = "Only PDF, DOC, or DOCX files are allowed";
                setErrors(validationErrors);
                return;
            }
        }

        setErrors({});
        setFormData({ ...formData, upload_resume: file });
    };

    const handleSubmit = (e: any) => {
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
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ].includes(formData.upload_resume.type)
        ) {
            validationErrors.upload_resume = "Upload only PDF, DOC, or DOCX";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        navigate("/Success");
    };

    return (
        <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center px-4 py-6">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">

                <div className="flex justify-center mb-3">
                    <img src={Education} className="w-20 h-20" alt="icon" />
                </div>

                <h2 className="text-2xl font-semibold text-center">Experience & Skills</h2>
                <p className="text-center">Tell us about your professional journey</p>

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
                            className="w-full py-2 px-3 bg-[#F3F3F5] rounded-lg placeholder:text-gray-400 focus:outline-none"
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
                            placeholder="E.g. React, Node.js, Communication"
                            className="w-full py-2 px-3 bg-[#F3F3F5] rounded-lg placeholder:text-gray-400 focus:outline-none"
                        />
                        {errors.key_skills && (
                            <p className="text-red-500 text-sm">{errors.key_skills}</p>
                        )}
                    </div>

                    {/* Resume Upload */}
                    <div className="w-full">
                        <label className="block mb-1 font-medium">Upload Resume (Optional)</label>

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
                            <p className="text-red-500 text-sm mt-1">{errors.upload_resume}</p>
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
                            className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#F3F3F5] text-black rounded-lg"
                        >
                            <FaArrowLeftLong size={18} />
                            Back
                        </button>

                        <button
                            type="submit"
                            className="flex-1 flex justify-center items-center gap-2 py-2 bg-[#FC8019] text-white rounded-lg"
                        >
                            Continue
                            <FaArrowRightLong size={18} />
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Experience_Skills;
