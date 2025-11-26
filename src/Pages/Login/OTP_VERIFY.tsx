import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  verifyOtpThunk,
  resendOtpThunk,
} from "../../features/auth/reducers/thunk";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../store/store";
import { toast } from "react-toastify";

const OTP_VERIFY = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail") || undefined;
  const serverOtp = localStorage.getItem("serverOtp");
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  const handleResend = async () => {
    try {
      const res = await dispatch(
        resendOtpThunk({
          email: email,
        })
      );
      if (res?.otp) {
        localStorage.setItem("serverOtp", res.otp);
      }
      toast.success("OTP Resent Successfully!");
      setTimer(120);
      setCanResend(false);
    } catch (err) {
      toast.error("Failed to resend OTP");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < 5) {
      const nextInput = document.getElementById(
        `otp-${index + 1}`
      ) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast.error("Enter 6-digit OTP");
      return;
    }

    try {
      await dispatch(
        verifyOtpThunk({
          email: email,
          otp: otpValue,
          type: "reset",
        })
      );

      toast.success("OTP Verified Successfully!");
      navigate("/change-password", { state: { email } });
    } catch (error) {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#FC8019] p-3">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <img src={Logo_for_Login} className="w-16 h-16" alt="logo" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">OTP Verify</h2>

        {serverOtp && (
          <p className="text-center text-green-600 font-semibold mb-3">
            Server OTP: {serverOtp}
          </p>
        )}

        <p className="text-center text-[#45556C] mb-6">
          Enter the OTP sent to your email
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center gap-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-14 text-center text-xl bg-[#F3F3F5] rounded-lg focus:outline-none"
                type="text"
              />
            ))}
          </div>

          {/* TIMER + RESEND */}
          <div className="text-center mb-4">
            {!canResend ? (
              <p className="text-gray-600 text-sm">
                Resend OTP in{" "}
                <span className="font-semibold">{formatTime(timer)}</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-[#FC8019] font-semibold"
              >
                Resend OTP
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 flex justify-center items-center gap-3 bg-[#FC8019] text-white rounded-xl transition"
          >
            Submit <FaArrowRightLong size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTP_VERIFY;
