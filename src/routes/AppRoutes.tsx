import { Route } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Jobs from "../Pages/Jobs/Joblist";
import Jobcard from "../Pages/Jobs/Jobcard";
import Applications from "../Pages/Home/Home";
import SignIn from "../Pages/Login/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../Pages/Login/SignUp";
import Change_Password from "../Pages/Login/Change_password";
// import Otp_Verification from "../Pages/Login/Otp_Verification";
import OTP_VERIFY from "../Pages/Login/OTP_VERIFY";
import Change_Password_old from "../Pages/Login/Change_Password(new&old)";

export const appRoutes = (
  <>
    {/* Public Routes */}
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forgot-password" element={<Change_Password />} />
    <Route path="/otp-verfication" element={<OTP_VERIFY />} />
    <Route path="/change-password" element={<Change_Password_old />} />

    {/* <Route path='/otp-verfication1' element={<Otp_Verification/>}/> */}

    {/* Protected Routes */}
    <Route element={<ProtectedRoute />}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Jobs />} />
        <Route path="/:jobname" element={<Jobcard />} />
        <Route path="/applications" element={<Applications />} />
      </Route>
    </Route>
  </>
);
