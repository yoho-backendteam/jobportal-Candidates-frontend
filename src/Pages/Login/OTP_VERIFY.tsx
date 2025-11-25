import { useState } from "react";
import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";

const OTP_VERIFY = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Accept only numbers
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Move to next input if a number is typed
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = e.key;

    if (key === "Backspace") {
      const updated = [...otp];
      if (updated[index]) {
        // Clear current input
        updated[index] = "";
        setOtp(updated);
      } else if (index > 0) {
        // Move to previous input
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    }

    if (key === "ArrowLeft" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }

    if (key === "ArrowRight" && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      alert("Please enter a 6-digit OTP");
      return;
    }
    // Submit OTP here
    console.log("OTP Submitted:", otpValue);
    // navigate("/Personal_Details");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#FC8019] p-3">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src={Logo_for_Login} className="w-16 h-16" alt="logo" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">OTP Verify</h2>
        <p className="text-center text-[#45556C] mb-6">Join TalentHub and start your career</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 text-center text-xl bg-[#F3F3F5] rounded-lg focus:outline-none focus:border-[#FC8019]"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mb-4">Demo code: 289981</p>

          <button
            type="submit"
            className="w-full py-2 mt-4 flex justify-center items-center gap-3 bg-[#FC8019] text-white rounded-xl transition"
          >
            Submit
            <FaArrowRightLong size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP_VERIFY;
