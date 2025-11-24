import Education from "../../assets/Education_Icon.png"
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";


const Experience_Skills = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState<any>({});


    const [formData, setFormData] = useState({
        education: "",
        institute: "",
        graduationYear: "",
        percentage: "",
        major: ""
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

        if (!formData.graduationYear) {
            validationErrors.graduationYear = "Graduation year is required";
        } else if (!yearRegex.test(formData.graduationYear)) {
            validationErrors.graduationYear = "Enter a valid  year";
        }

        const percentageValue = Number(formData.percentage);

        if (!formData.percentage) {
            validationErrors.percentage = "Percentage/CGPA is required";
        } else if (isNaN(percentageValue)) {
            validationErrors.percentage = "Percentage must be a valid number";
        } else if (percentageValue < 0 || percentageValue > 100) {
            validationErrors.percentage = "Enter a value between 0 and 100";
        }


        if (!formData.major.trim()) {
            validationErrors.major = "Major is required";
        } else if (!onlyLetters.test(formData.major)) {
            validationErrors.major = "Major must contain only letters";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        navigate("/Educational_Details");
    };


    return (
        <div className="">
            <div className="h-screen m-3 rounded-lg">
                <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center ">

                    <div className="  bg-white p-8 rounded-2xl shadow-lg h-[90vh] w-[100vh] overflow-y-auto hide-scrollbar">
                        <div className="flex flex-row justify-center ">
                            <img src={Education} className="w-15 h-15" alt="" />
                        </div>

                        <h2 className="text-2xl font-semibold text-center">Experience & Skills</h2>
                        <p className="flex justify-center">Tell us about your professional journey</p>

                        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>

                            <div className="w-full">
                                <label className="block mb-1 font-medium">Total Experience *</label>
                                <input
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your education"
                                    className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label className="block mb-1 font-medium">Key Skills *</label>
                                <input
                                    name="address"
                                    value={formData.institute}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your institure/university"
                                    className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                    required
                                />

                            </div>

                            <div className="flex flex-row gap-5 justify-between">
                                <div className="w-full">
                                    <label className="block mb-1 font-medium">Graduation Year  *</label>

                                    <div className="relative w-full bg-[#F3F3F5] rounded-lg">
                                        <MdDateRange className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                        <input
                                            name="graduation year"
                                            value={formData.graduationYear}
                                            onChange={handleChange}
                                            type="number"
                                            placeholder="Graduation Year"
                                            className="w-full py-2 pl-10 pr-3 placeholder:text-sm placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019] "
                                            required
                                        />
                                    </div>

                                    {errors.dateofbirth && (
                                        <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
                                    )}
                                </div>


                                <div className="w-full">
                                    <label className="block mb-1 font-medium">Percentage/CGPA *</label>
                                    <input
                                        name="percentage"
                                        value={formData.percentage}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="Your Percentage"
                                        className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                        required
                                    />
                                    {errors.gender && (<p className="text-red-500 text-sm mt-1">{errors.gender}</p>)}

                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block mb-1 font-medium">Specialization/Major (Optional) *</label>
                                <input
                                    name="Major"
                                    value={formData.major}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your major subject like Mechanical, Electrical"
                                    className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                    required
                                />
                                {errors.pincode && (<p className="text-red-500 text-sm mt-1">{errors.pincode}</p>)}

                            </div>

                            <div className="flex flex-col md:flex-row gap-3 mt-3">
                                <button className="flex-1 flex justify-center items-center gap-5 py-2 bg-[#F3F3F5] text-black rounded-lg">
                                    <FaArrowLeftLong size={20} />
                                    Cancel
                                </button>
                                <button className="flex-1 flex justify-center items-center gap-5 py-2 bg-[#FC8019] text-white rounded-lg">
                                    Continue
                                    <FaArrowRightLong size={20} />
                                </button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience_Skills