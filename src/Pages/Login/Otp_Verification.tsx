import { useEffect, useState } from "react";
import emailicon from "../../assets/Email_Image.png";
import { SiTicktick } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import {
  resendOtpThunk,
  verifySignupOtpThunk,
  sendOtpThunk,
} from "../../features/auth/reducers/thunk";

const Otp_Verification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [demoOtp, setDemoOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const email = localStorage.getItem("signupEmail");

  // Send OTP on mount
  useEffect(() => {
    if (email) {
      sendOtp();
    } else {
      setError("Email not found. Please sign up again.");
    }
  }, [email]);

  const sendOtp = async () => {
    setIsLoading(true);
    setError("");
    try {
      const responseData = await dispatch(sendOtpThunk({ email }));
      if (responseData.otp) {
        setDemoOtp(responseData.otp);
        setOtp(responseData.otp.split(""));
      }
    } catch {
      setError("Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text");
    if (!/^\d{6}$/.test(paste)) return;

    setOtp(paste.split(""));
    document.getElementById("otp-5")?.focus();
  };

  const handleVerify = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter all 6 digits!");
      return;
    }

    if (!email) {
      setError("Email not found. Please sign up again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await dispatch(
        verifySignupOtpThunk({
          email,
          otp: code,
        })
      );
      navigate("/Personal_Details");
    } catch {
      setError("OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      setError("Email not found. Please sign up again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const responseData = await dispatch(resendOtpThunk({ email }));
      if (responseData.otp) {
        setDemoOtp(responseData.otp);
        setOtp(responseData.otp.split(""));
      }
    } catch {
      setError("Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FC8019] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <img src={emailicon} className="w-15 h-15" alt="" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Verify Your Email</h2>
        <p className="text-center text-gray-600 mb-4">
          We've sent a 6-digit code to <br />
          <span className="font-medium">{email || "your email"}</span>
        </p>

        <h2 className="text-2xl font-semibold text-center">
          Enter Verification Code
        </h2>

        <div className="flex justify-center items-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-10 h-12 text-center text-xl bg-[#F3F3F5] rounded-lg 
                focus:outline-none focus:border-[#FC8019]"
              disabled={isLoading}
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <p className="text-center text-gray-400 text-sm mb-4">
          Demo code: {demoOtp || "Sending..."}
        </p>

        <button
          onClick={handleVerify}
          disabled={otp.join("").length !== 6 || isLoading}
          className={`w-full py-3 rounded-full text-lg flex items-center justify-center gap-5
            ${
              otp.join("").length === 6 && !isLoading
                ? "bg-[#FC8019] text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          {isLoading ? "Verifying..." : "Verify Email"}
          {!isLoading && (
            <span>
              <SiTicktick />
            </span>
          )}
        </button>

        <p
          className="text-center text-[#0052CC] mt-4 cursor-pointer hover:underline"
          onClick={handleResendOtp}
        >
          {isLoading ? "Sending..." : "Resend Code"}
        </p>

        <button
          className="w-full bg-white mt-4 py-3 rounded-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50"
          onClick={() => navigate(-1)}
          disabled={isLoading}
        >
          <FaArrowLeftLong />
          Back
        </button>
      </div>
    </div>
  );
};

export default Otp_Verification;
