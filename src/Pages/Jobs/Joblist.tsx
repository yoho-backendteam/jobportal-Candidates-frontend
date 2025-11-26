import { useState } from "react";
import ContainerImage from "../../assets/jobs/Container.png";
import Container2 from "../../assets/jobs/Container2.png";
import Container3 from "../../assets/jobs/Container3.png";
import Container4 from "../../assets/jobs/Container4.png";
import Container5 from "../../assets/jobs/Container5.png";
import Icon2 from "../../assets/jobs/icon2.png";
import Icon10 from "../../assets/jobs/icon10.png";
import Icon11 from "../../assets/jobs/icon11.png";
import Icon12 from "../../assets/jobs/icon12.png";
import Icon13 from "../../assets/jobs/icon13.png";
import Icon14 from "../../assets/jobs/icon14.png";
import Icon15 from "../../assets/jobs/icon15.png";
import Icon16 from "../../assets/jobs/icon16.png";

const Joblist = () => {
  const [selected, setSelected] = useState("All Departments");


  const departments = ["All Departments", "Engineering", "Product", "Design"];

  return (
    <div className="w-[95%] mx-auto max-w-[1400px] mb-10">

      <div
        className="
          w-full 
          h-60 sm:h-[380px] md:h-[380px] lg:h-[380px]
          bg-center 
          flex flex-col justify-center items-center
          rounded-xl gap-5 mt-4 px-4 text-center 
        "
        style={{ backgroundImage: `url(${Container2})` }}
      >
        <div className="px-4 py-2 rounded-[20px] sm:h-10  md:h-10 h-10  bg-white/15  text-white font-medium shadow-md border border-white/25 flex items-center gap-2">
          <img src={Icon10} alt="" className="w-4 h-4 sm:h-5 md:h-5 " />
          <span className="text-sm sm:text-lg">5 premium opportunities available</span>
        </div>

        <h1 className="text-lg sm:text-5xl md:text-6xl font-extrabold text-white">
          Find Your Dream Career
        </h1>

        <p className="text-white text-sm sm:text-base">
          Discover opportunities that match your skills and ambitions
        </p>


        <div className="sm:max-w-[766px] w-full h-10 sm:h-15 bg-white rounded-xl flex items-center 
                px-2 sm:px-5 gap-2 sm:gap-4 border border-gray-300 flex-nowrap">

          <input
            type="text"
            placeholder="Job Title, Keywords, or Company"
            className="flex-1 w-full placeholder:text-xs sm:placeholder:text-md 
               outline-none text-xs sm:text-lg"
          />

          <div className="hidden sm:block w-0.5 h-1/2 bg-gray-300"></div>

          <div className="flex sm:w-40 w-20 items-center gap-1 sm:gap-2">
            <img src={Icon2} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 placeholder:text-xs outline-none sm:placeholder:text-md"
            />
          </div>

          <button className="bg-[#FC8019] px-2 py-2 sm:w-25 w-16 rounded-xl text-white 
                     flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <img src={Icon11} alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:block">Search</span>
          </button>

        </div>

      </div>

      <div className="w-full mt-5 sm:mt-10 flex flex-col gap-5">
        <div className="flex flex-wrap sm:flex-row  gap-3 items-center">
          <h3 className=" sm:text-lg text-sm ">Filter by Department:</h3>

          <div className="flex gap-3 sm:flex-row overflow-x-auto pb-2">
            {departments.map((item) => (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`
                  p-1 sm:p-3 text-sm sm:text-lg rounded-xl border-2 border-[#FC8019] 
                   cursor-pointer whitespace-nowrap
                  ${selected === item
                    ? "bg-[#FC8019] text-black"
                    : "text-[#FC8019]"
                  }
                `}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border border-[#FC8019] rounded-[20px] p-5 mt-5 flex flex-col lg:flex-row justify-between gap-5">
        <div>
          <div className="flex gap-3">
            <img src={ContainerImage} className="w-[70px] h-[70px]" alt="" />

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Senior Frontend Engineer
              </h2>
              <div className="sm:flex-row sm:gap-4 gap-1 flex flex-col  text-[#45556C]">
                <h5 className=" text-sm sm:text-lg">Engineering</h5>
                <h5 className=" text-sm sm:text-lg">Banglore, India</h5>
                <h5 className="text-sm sm:text-lg">3.5 Years</h5>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-3 flex-wrap">
            <div className="border border-[#FC8019] rounded-lg px-3 py-1  flex items-center gap-2 text-[#FC8019]">
              <img src={Icon14} alt="" className="w-4 h-4" /> Full Time
            </div>
            <div className="border border-[#FC8019] rounded-lg px-3 py-1  text-[#FC8019]">
              18-25 LPA
            </div>
            <div className="border border-[#FC8019] rounded-lg px-3 py-1  text-[#45556C]">
              Posted 10/01/25
            </div>
          </div>

          <p className="mt-3  text-sm sm:text-base text-[#45556C]">
            We are looking for an experienced frontend engineer to join our dynamic team.
          </p>

          <div className="flex gap-5 mt-2">
            <p className=" text-[#FC8019] sm:text-md text-sm flex items-center gap-2">
              <img src={Icon15} className="w-4 h-4" /> <span>59 applicants</span>
            </p>
            <h5 className=" text-[#FC8019] sm:text-md text-sm flex items-center gap-2">
              <img src={Icon16} className="w-4 h-4" /> high demand
            </h5>
          </div>
        </div>

        <div className="flex flex-row sm:text-sm text-sm sm:flex-col gap-3 min-w-[180px]">
          <div className="border border-[#FC8019] rounded-lg px-5 py-2 sm:text-sm sm:flex-row  flex-row text-sm flex items-center gap-2 cursor-pointer">
            <span className="text-md sm:text-sm">View details </span><img src={Icon12} alt="" className="w-4 h-4 sm:text-sm" />
          </div>

          <div className="rounded-lg px-5 py-2 bg-[#FC8019] text-white sm:text-sm sm:text-green-500 sm:flex-row flex-row text-sm flex items-center gap-2 cursor-pointer">
            <img src={Icon13} alt="" className="w-4 h-4 sm:text-sm " />
            <span className="text-md sm:text-sm">Quick Apply</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:flex-row gap-5 mt-5">

        <div className="w-[35%] sm:w-[33%]  bg-linear-to-r from-[#EFF6FF] to-[#DBEAFE80] h-30 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container3} alt="" className="mt-5 mx-auto w-10 sm:w-fit" />
          <h2 className="text-center font-bold text-lg sm:text-4xl">5+</h2>
          <div className="text-center flex items-center justify-center sm:flex-col sm:text-lg text-xs">
            <p>Active jobs</p>
          </div>
        </div>

        <div className="w-[35%] sm:w-[33%]  bg-linear-to-r from-[#F0FDFA] to-[#CBFBF180] h-30 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container4} alt="" className="mt-5 mx-auto w-10 sm:w-fit" />
          <h2 className="text-center font-bold text-lg sm:text-4xl">3</h2>
          <div className="text-center flex items-center justify-center sm:flex-col sm:text-lg text-xs">
            <p>Departments</p>
          </div>
        </div>

        <div className="w-[35%] sm:w-[33%] bg-linear-to-r from-[#FAF5FF] to-[#F3E8FF80] h-30 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container5} alt="" className="mt-5 mx-auto w-10 sm:w-fit" />
          <h2 className="text-center font-bold text-lg sm:text-4xl">10,000+</h2>
          <div className="text-center flex items-center justify-center sm:flex-col sm:text-lg text-xs">
            <p>Candidates</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Joblist;
