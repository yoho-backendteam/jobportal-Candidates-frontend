import { BrowserRouter, Route, Routes } from "react-router-dom"
import Joblist from "./Pages/Jobs/Joblist"
import Jobcard from "./Pages/Jobs/Jobcard"
import SignIn from "./Pages/Login/SignIn"
import SignUp from "./Pages/Login/SignUp"
import Home from "./Pages/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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