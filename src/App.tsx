import { BrowserRouter, Route, Routes } from "react-router-dom"
import Joblist from "./Pages/Jobs/Joblist"
import Jobcard from "./Pages/Jobs/Jobcard"
import SignIn from "./Pages/Login/SignIn"
import SignUp from "./Pages/Login/SignUp"
import Otp_Verification from "./Pages/Login/Otp_Verification"
import Personal_Details from "./Pages/Login/Personal_Details"
import Educational from "./Pages/Login/Educational"
import Experience_Skills from "./Pages/Login/Experience_Skills"
import Success_Component from "./Pages/Login/Success_Component"
import Change_Password from "./Pages/Login/Change_Password(new&old)"
import CHANGEPASSWORD from "../src/Pages/Login/Change_password"
import OTP_VERIFY from "./Pages/Login/OTP_VERIFY"
import Home from "./Pages/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Main Page</h1>} />
        <Route path="joblist" element={<Joblist />} />
        <Route path="jobcard" element={<Jobcard />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="otp" element={<Otp_Verification />} />
        <Route path="Personal_Details" element={<Personal_Details />} />
        <Route path="Educational_Details" element={<Educational />} />
        <Route path="Experience_Skills" element={<Experience_Skills />} />
        <Route path="Success" element={<Success_Component />} />
        <Route path="change_password_email" element={<CHANGEPASSWORD />} />
        <Route path="OTP_Verify" element={<OTP_VERIFY />} />
        <Route path="change_password" element={<Change_Password />} />
        <Route path="/" element={<h1>Main Page</h1>}/>
        <Route path="joblist" element={<Joblist/>}/>
        <Route path="jobcard" element={<Jobcard/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App