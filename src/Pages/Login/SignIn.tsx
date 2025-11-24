import Logo_for_Login from "../../../src/assets/Container.png"
import { COLORS, FONTS } from "../../Constants/uiConstants"


const SignIn = () => {
  return (
    <div className="">
      <div className=" h-screen m-3 rounded-lg">
        <div className="min-h-screen flex items-center justify-center ">
          <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-row  justify-center ">
              <img src={Logo_for_Login} className="w-15 h-15 " alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-center">Sign In</h2>
            <p className="flex items-center justify-center ">Join TalentHub  and start your carrer</p>

            <form className="space-y-4 mt-5">
              <div>
                <label className="block mb-1 font-medium">Email?Phone *</label>
                <input
                  type="email"
                  placeholder="Enter Your email or phone number"
                  className="w-full px-4 py-2 placeholder:bg=[#F3F3F5] placeholder:text-sm placeholder:text-gray-300 rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password *</label>
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full px-4 py-2 placeholder:bg=[#F3F3F5] placeholder:text-sm placeholder:text-gray-300  rounded-lg focus:outline-none focus:border-[#FC8019]"
                  required
                />
              </div>


              <div className="flex justify-end">
                <label className="block mb-1 font-medium">Forget Password?</label>
              </div>


              <button

                type="submit"
                className="w-full py-2 mt-3  text-white rounded-lg transition"
              >
                Sign In
              </button>
            </form>
            <div className="mt-5">
              <p className="flex items-center justify-center" >Don"t have an account? <span className="text-[#0052CC]">Sign Up</span></p>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default SignIn