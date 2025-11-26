import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logout from '../../assets/Logout.png';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const {isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    logout(); // clears localStorage + sets isAuthenticated false
    setShowLogoutModal(false);
    navigate('/'); // redirect to login or landing page
  };

  return (
    <div>
      <nav className="p-3 bg-amber-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="h-[55px] w-[55px] bg-orange-400 rounded-2xl flex justify-center items-center text-3xl text-white">
            T
          </div>
          <h1>Talent Hub</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-4 **:cursor-pointer">
            <Link to={"/"}>Jobs</Link>
            {isAuthenticated && <Link to={"/applications"}>Applications</Link>}
            
          </div>
          {isAuthenticated && <><div className="flex items-center gap-4 border-2 px-4 py-1 border-[#E9E9EB] rounded-lg bg-[#F9F9F9]">
            <section className="h-[35px] w-[35px] bg-orange-400 rounded-full flex justify-center items-center text-lg text-white">
              M
            </section>

            <section>
              <h1 className="text-[#282C3F]">Mukesh</h1>
              <p className="font-light text-[#686B78]">User</p>
            </section>
          </div>

          {/* Logout Button */}
          <div
            onClick={() => setShowLogoutModal(true)}
            className="cursor-pointer text-[#686B78] flex gap-2 border-2 border-[#E9E9EB] p-2 px-5 rounded-xl bg-[#F9F9F9]"
          >
            <img src={Logout} alt="logouticon" className="h-6" />
            <span>Logout</span>
          </div></>}
          


        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]">
          <div className="bg-white w-80 p-6 rounded-xl shadow-xl animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Confirm Logout
            </h2>

            <p className="text-gray-600 mb-5">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-end gap-3">
              {/* Cancel */}
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              {/* Confirm Logout */}
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
