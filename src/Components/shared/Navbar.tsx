import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "../../assets/Logout.png";
import { useAuth } from "../../context/AuthContext";
import { GetLocalStorage } from "../../utils/helpers";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      const user = GetLocalStorage("candidateDetails");
      if (user && typeof user === "object") {
        setUserName(user.fullName || null);
      }
    }
  }, [isAuthenticated]);

  const handleConfirmLogout = () => {
    toast.success("Successfully Logout")
    logout();
    setShowLogoutModal(false);
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-amber-100 p-3 flex justify-between items-center shadow-sm z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-[50px] w-[50px] bg-orange-400 rounded-2xl flex justify-center items-center text-2xl text-white font-semibold">
            T
          </div>
          <h1 className="text-xl font-semibold">Talent Hub</h1>
        </div>

        {/* Hamburger (Mobile Only) */}
<button
  className="md:hidden text-3xl transition-all duration-200"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-600">Jobs</Link>

          {isAuthenticated && (
            <Link to="/applications" className="hover:text-orange-600">
              Applications
            </Link>
          )}

          {!isAuthenticated && (
            <Link
              to="/signin"
              className="px-4 py-2 rounded-xl bg-[#FC8019] text-white hover:bg-orange-600 transition"
            >
              Sign In
            </Link>
          )}

          {isAuthenticated && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 border px-4 py-1 bg-white rounded-lg shadow-sm">
                <div className="h-[35px] w-[35px] bg-orange-400 rounded-full flex justify-center items-center text-lg text-white">
                  {userName ? userName.charAt(0).toUpperCase() : "U"}
                </div>

                <div>
                  <h1 className="text-[#282C3F] font-medium">{userName || "User"}</h1>
                  <p className="text-sm text-gray-500">User</p>
                </div>
              </div>

              <div
                onClick={() => setShowLogoutModal(true)}
                className="cursor-pointer text-[#686B78] flex gap-2 border p-2 px-5 rounded-xl bg-white shadow-sm hover:bg-gray-50"
              >
                <img src={Logout} className="h-5" />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-amber-50 shadow-inner px-5 py-4 space-y-4">
          <Link to="/" className="block text-md" onClick={() => setMenuOpen(false)}>
            Jobs
          </Link>

          {isAuthenticated && (
            <Link
              to="/applications"
              className="block text-md"
              onClick={() => setMenuOpen(false)}
            >
              Applications
            </Link>
          )}

          {!isAuthenticated && (
            <Link
              to="/signin"
              className="block w-full text-center py-2 rounded-lg bg-[#FC8019] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          )}

          {/* ⭐ Mobile Flex Row Layout */}
          {isAuthenticated && (
            <div className="flex items-center gap-3">
              
              {/* User Card */}
              <div className="flex items-center gap-3 border p-2 bg-white rounded-lg shadow-sm flex-1">
                {/* <div className="h-[30px] w-[35px] bg-orange-400 rounded-full flex justify-center items-center text-white">
                  {userName ? userName.charAt(0).toUpperCase() : "U"}
                </div> */}
                <div>
                  <h1 className="font-semibold text-sm">{userName}</h1>
                  <p className="text-gray-500 text-xs">User</p>
                </div>
              </div>

              {/* Logout Button (Orange) */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowLogoutModal(true);
                }}
                className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#FC8019] text-white shadow-sm hover:bg-orange-600 transition"
              >
                <p><FaArrowRightFromBracket /></p>
                <span className="text-sm">Logout</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-9999">
          <div className="bg-white w-80 p-6 rounded-xl shadow-xl animate-fadeIn">
            <h2 className="text-xl font-semibold mb-2">Confirm Logout</h2>
            <p className="text-gray-600 mb-5">Are you sure you want to logout?</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 rounded-lg bg-[#FC8019] text-white hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
