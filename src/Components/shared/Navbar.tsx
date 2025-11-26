import { Link } from 'react-router-dom';
import Logout from '../../assets/Logout.png'

const Navbar = () => {
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
          <Link to={"/applications"}>Applications</Link>
          </div>

          <div className="flex items-center  gap-4 border-2 px-4 py-1 border-[#E9E9EB] rounded-lg bg-[#F9F9F9]">
            <section className="h-[35px] w-[35px] bg-orange-400 rounded-full flex justify-center items-center text-lg text-white">
              M
            </section>

            <section className="">
              <h1 className="text-[#282C3F]">Mukesh</h1>
              <p className="font-light text-[#686B78]">User</p>
            </section>
          </div>

          <div className="text-[#686B78] flex gap-2 border-2 border-[#E9E9EB] p-2 px-5 rounded-xl bg-[#F9F9F9]">
            <img src={Logout} alt="logouticon" className="h-6"/>
            <span>Logout</span>
          </div>
        </div> 


      </nav>
    </div>
  );
};

export default Navbar;
