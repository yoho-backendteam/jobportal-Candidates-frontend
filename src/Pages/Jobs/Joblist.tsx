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
          h-[320px] sm:h-[380px] md:h-[380px] lg:h-[380px]
          bg-center 
          flex flex-col justify-center items-center
          rounded-[50px] gap-5 px-4 text-center
        "
        style={{ backgroundImage: `url(${Container2})` }}
      >
        <div className="px-4 py-2 rounded-[20px] bg-white/15 text-white font-medium shadow-md border border-white/25 flex items-center gap-2">
          <img src={Icon10} alt="" className="w-5 h-5" />
          5 premium opportunities available
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Find Your Dream Career
        </h1>

        <p className="text-white text-sm sm:text-base">
          Discover opportunities that match your skills and ambitions
        </p>

        <div className="w-full max-w-[766px] h-[74px] bg-white rounded-[24px] flex items-center px-5 gap-4 border border-gray-300">
          <input
            type="text"
            placeholder="Job Title, Keywords, or Company"
            className="flex-1 outline-none text-[1.1rem]"
          />

          <div className="w-[2px] h-1/2 bg-gray-300"></div>

          <div className="flex items-center gap-2">
            <img src={Icon2} alt="" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 outline-none text-[1.1rem]"
            />
          </div>

          <button className="bg-[#FC8019] px-4 py-2 rounded-xl text-white flex items-center gap-2">
            <img src={Icon11} alt="icon" className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col gap-5">
        <div className="flex flex-wrap gap-3 items-center">
          <h3 className="text-base font-light">Filter by Department:</h3>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {departments.map((item) => (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`
                  px-5 py-3 rounded-xl border-2 border-[#FC8019] 
                  font-light cursor-pointer whitespace-nowrap
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
              <div className="flex gap-4 text-[#45556C]">
                <h5 className="font-light">Engineering</h5>
                <h5 className="font-light">Banglore, India</h5>
                <h5 className="font-light">3.5 Years</h5>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-3 flex-wrap">
            <div className="border border-[#FC8019] rounded-lg px-3 py-1 font-light flex items-center gap-2 text-[#FC8019]">
              <img src={Icon14} alt="" className="w-4 h-4" /> Full Time
            </div>
            <div className="border border-[#FC8019] rounded-lg px-3 py-1 font-light text-[#FC8019]">
              18-25 LPA
            </div>
            <div className="border border-[#FC8019] rounded-lg px-3 py-1 font-light text-[#45556C]">
              Posted 10/01/25
            </div>
          </div>

          <p className="mt-3 font-light text-sm sm:text-base text-[#45556C]">
            We are looking for an experienced frontend engineer to join our dynamic team.
          </p>

          <div className="flex gap-5 mt-2">
            <h5 className="font-light text-[#FC8019] flex items-center gap-2">
              <img src={Icon15} className="w-4 h-4" /> 59 applicants
            </h5>
            <h5 className="font-light text-[#FC8019] flex items-center gap-2">
              <img src={Icon16} className="w-4 h-4" /> high demand
            </h5>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[180px]">
          <h3 className="border border-[#FC8019] rounded-lg px-5 py-2 flex items-center gap-2 cursor-pointer">
            View details <img src={Icon12} alt="" className="w-4 h-4" />
          </h3>

          <h3 className="rounded-lg px-5 py-2 bg-[#FC8019] text-white flex items-center gap-2 cursor-pointer">
            <img src={Icon13} alt="" className="w-4 h-4" />
            Quick Apply
          </h3>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">

        <div className="w-full sm:w-[33%] bg-[#DBEAFE] h-[200px] rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container3} alt="" className="mt-5 mx-auto" />
          <h2 className="text-center font-bold text-4xl">5+</h2>
          <div className="text-center">
            <p>Active</p>
            <p>Jobs</p>
          </div>
        </div>

        <div className="w-full sm:w-[33%] bg-[#DBEAFE] h-[200px] rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container4} alt="" className="mt-5 mx-auto" />
          <h2 className="text-center font-bold text-4xl">3</h2>
          <p className="text-center">Departments</p>
        </div>

        <div className="w-full sm:w-[33%] h-[200px] rounded-lg shadow-[0_0_20px_0_#0000001A]">
          <img src={Container5} alt="" className="mt-5 mx-auto" />
          <h2 className="text-center font-bold text-4xl">10,000+</h2>
          <p className="text-center">Candidates</p>
        </div>
      </div>
    </div>
  );
};

export default Joblist;
