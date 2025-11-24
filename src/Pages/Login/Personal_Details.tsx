import User from "../../assets/User.png"
import { FaArrowRightLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Personal_Details = () => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState<any>({});


    const [formData, setFormData] = useState({
        dateofbirth: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
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

        const onlyLettersRegex = /^[A-Za-z ]+$/;

        const dobRegex = /^\d{2}\/\d{2}\/\d{4}$|^\d{4}-\d{2}-\d{2}$/;
        if (!formData.dateofbirth) {
            validationErrors.dateofbirth = "Date of Birth is required";
        } else if (!dobRegex.test(formData.dateofbirth)) {
            validationErrors.dateofbirth = "Enter a valid date (DD/MM/YYYY or YYYY-MM-DD)";
        }

        if (!formData.gender.trim()) {
            validationErrors.gender = "Gender is required";
        } else if (!onlyLettersRegex.test(formData.gender)) {
            validationErrors.gender = "Gender must contain only letters";
        }

        if (!formData.address.trim()) {
            validationErrors.address = "Address is required";
        }

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

        navigate("/Educational_Details");
    };

    return (
        <div className="">
            <div className="h-screen m-3 rounded-lg">
                <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center ">

                    <div className="  bg-white p-8 rounded-2xl shadow-lg h-[90vh] w-[100vh] overflow-y-auto hide-scrollbar">
                        <div className="flex flex-row justify-center ">
                            <img src={User} className="w-15 h-15" alt="" />
                        </div>

                        <h2 className="text-2xl font-semibold text-center">Personal Details</h2>
                        <p className="flex justify-center">Tell us more about yourself</p>

                        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>

                            <div className="flex flex-row gap-5 justify-between">
                                <div className="w-full">
                                    <label className="block mb-1 font-medium">Date Of Birth *</label>

                                    <div className="relative w-full bg-[#F3F3F5] rounded-lg">
                                        <MdDateRange className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                        <input
                                            name="dateofbirth"
                                            value={formData.dateofbirth}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Enter your date of birth"
                                            className="w-full py-2 pl-10 pr-3 placeholder:text-sm placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019] "
                                            required
                                        />
                                    </div>

                                    {errors.dateofbirth && (
                                        <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
                                    )}
                                </div>


                                <div className="w-full">
                                    <label className="block mb-1 font-medium">Gender *</label>
                                    <input
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Enter your gender"
                                        className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                        required
                                    />
                                    {errors.gender && (<p className="text-red-500 text-sm mt-1">{errors.gender}</p>)}

                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block mb-1 font-medium">Address *</label>
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your address"
                                    className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                    required
                                />

                            </div>

                            <div className="flex flex-row gap-5 justify-between">
                                <div className="w-full">
                                    <label className="block mb-1 font-medium">City*</label>

                                    <div className="relative w-full bg-[#F3F3F5] rounded-lg">
                                        <FaLocationDot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

                                        <input
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Enter your date of birth"
                                            className="w-full py-2 pl-10 pr-3 placeholder:text-sm placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019] "
                                            required
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
                                        className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                        required
                                    />
                                    {errors.state && (<p className="text-red-500 text-sm mt-1">{errors.state}</p>)}

                                </div>
                            </div>

                            <div className="w-full">
                                <label className="block mb-1 font-medium">Pincode *</label>
                                <input
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter your pincode"
                                    className="w-full  py-2 placeholder:bg-[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 placeholder:p-5 placeholder:rounded-2xl rounded-lg focus:outline-none focus:border-[#FC8019]"
                                    required
                                />
                                {errors.pincode && (<p className="text-red-500 text-sm mt-1">{errors.pincode}</p>)}

                            </div>

                            <div className="flex flex-col md:flex-row gap-3 mt-3">
                                <button className="flex-1 flex justify-center items-center gap-5 py-2 bg-[#F3F3F5] text-black rounded-lg">
                                    <FaArrowLeftLong size={20} />
                                    Back
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

export default Personal_Details