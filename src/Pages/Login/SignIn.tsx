import Logo_for_Login from "../../../src/assets/Container.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { loginThunk } from "../../features/auth/reducers/thunk";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { login } = useAuth();

  const { isAuthenticated } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await dispatch(loginThunk({ email, password }));
      if (result?.token && result?.user) {
        login(result);
        toast.success("Login successful!");
      }
    } catch (err) {
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="">
      <div className="h-screen m-3 rounded-lg">
        <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center">
          <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-row justify-center">
              <img src={Logo_for_Login} className="w-15 h-15" alt="logo" />
            </div>

            <h2 className="text-2xl font-semibold text-center">Sign In</h2>
            <p className="flex items-center justify-center text-[#45556C]">
              Join TalentHub and start your career
            </p>

            <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium">Email/Phone *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email or phone number"
                  className="w-full px-4 py-2 bg-[#F3F3F5] rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Password *</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="**********"
                  className="w-full px-4 py-2 bg-[#F3F3F5] rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
              </div>

              <p
                onClick={() => navigate("/forgot-password")}
                className="cursor-pointer text-[#717182] text-end"
              >
                Forget Password?
              </p>

              <button
                type="submit"
                className="w-full py-2 mt-3 flex justify-center items-center gap-5 bg-[#FC8019] text-white rounded-lg transition"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
                {!loading && <FaArrowRightLong size={20} />}
              </button>
            </form>

            <div className="mt-5 text-center">
              <p className="flex items-center justify-center">
                Don't have an account?&nbsp;
                <span
                  onClick={() => navigate("/signup")}
                  className="text-[#0052CC] cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
