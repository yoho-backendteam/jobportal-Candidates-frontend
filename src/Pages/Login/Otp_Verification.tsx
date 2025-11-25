import { useState } from "react";
import email from "../../assets/Email_Image.png"
import { SiTicktick } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Otp_Verification = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (value: string, index: number) => {
        const updated = [...otp];
        updated[index] = value;
        setOtp(updated);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }

        if (updated.join("").length === 6) {
            navigate("/Personal_Details");
        }
    };


    return (
        <div className="min-h-screen bg-[#FC8019] flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">

                <div className="flex justify-center mb-4">
                    <img src={email} className="w-15 h-15" alt="" />
                </div>

                <h2 className="text-2xl font-semibold text-center">Verify Your Email</h2>
                <p className="text-center text-gray-600 mb-4">
                    We’ve sent a 6-digit code to <br />
                    <span className="font-medium">chandran1@gmail.com</span>
                </p>

                <h2 className="text-2xl font-semibold text-center">Enter Verification Code</h2>

                <div className="flex justify-center items-center gap-2 mb-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="w-10 h-12 text-center text-xl bg-[#F3F3F5] rounded-lg focus:outline-none focus:border-[#FC8019]"
                        />
                    ))}
                </div>

                <p className="text-center text-gray-400 text-sm mb-4">Demo code: 289981</p>

                <button className="w-full bg-[#FC8019] text-white py-3 rounded-full text-lg flex items-center justify-center gap-5">
                    Verify Email
                    <span> <SiTicktick /></span>
                </button>

                <p className="text-center text-[#0052CC] mt-4 cursor-pointer">Resend Code</p>

                <button className="w-full bg-white  mt-4 py-3 rounded-full flex items-center justify-center gap-2">
                    <span><FaArrowLeftLong /></span> Back
                </button>

            </div>
        </div>
    );
};

export default Otp_Verification;
