import { useState } from "react";
import Logo_for_Login from "../../../src/assets/Container.png"
import { FaArrowRightLong } from "react-icons/fa6"

const OTP_VERIFY = () => {
     
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (value: string, index: number) => {
        const updated = [...otp];
        updated[index] = value;
        setOtp(updated);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`)?.focus();
        }

        if (updated.join("").length === 6) {
            // navigate("/Personal_Details");
        }
    };
  return (
    <div className="">
            <div className=" h-screen  rounded-lg">
                <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center ">
                    <div className="w-full max-w-sm bg-white p-4 rounded-2xl shadow-lg">
                        <div className="flex flex-row  justify-center ">
                            <img src={Logo_for_Login} className="w-15 h-15 " alt="" />
                        </div>
                        <h2 className="text-2xl font-semibold text-center">OTP Verify</h2>
                        <p className="flex items-center justify-center text-[#45556C] ">Join TalentHub  and start your carrer</p>

                        <form className="space-y-4 mt-8">
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

                            <button

                                type="submit"
                                className="w-full py-2 mt-10 flex flex-row justify-center items-center gap-5 bg-[#FC8019]  text-white rounded-xl transition"
                            >
                                Submit
                                <FaArrowRightLong size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OTP_VERIFY