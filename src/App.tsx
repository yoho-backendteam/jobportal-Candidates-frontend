import { BrowserRouter, Route, Routes } from "react-router-dom"
import Joblist from "./Pages/Jobs/Joblist"
import Jobcard from "./Pages/Jobs/Jobcard"
import SignIn from "./Pages/Login/SignIn"
import SignUp from "./Pages/Login/SignUp"
import Otp_Verification from "./Pages/Login/Otp_Verification"
import Personal_Details from "./Pages/Login/Personal_Details"
import Educational from "./Pages/Login/Educational"
import Experience_Skills from "./Pages/Login/Experience_Skills"

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
      </Routes>
    </BrowserRouter>
  )
}

export default App