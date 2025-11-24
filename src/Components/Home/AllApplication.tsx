import { useState } from "react";
import ApplicationIcon from "../../assets/Home/ApplicationIcon.png";
import { FaArrowRight } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const AllApplication = () => {
  const [data, setData] = useState([1, 2]);
  return (
    <div>
      <div className="my-10">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className="shadow-[0px_0px_15px_0px_#0000001A] p-4 sm:p-6 my-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                
              <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full">
                <section className="flex justify-center items-center rounded-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] bg-[#FC8019]">
                  <img src={ApplicationIcon} alt="" className="h-6 sm:h-8" />
                </section>

                <section className="flex flex-col gap-2">
                  <h1 className="text-lg sm:text-2xl font-medium">
                    Ui/Ux Designer
                  </h1>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#45556C] text-xs sm:text-sm">
                    <span>Design</span>
                    <span className="w-1 h-1 bg-[#1F2937] rounded-full"></span>

                    <span>Remote</span>
                    <span className="w-1 h-1 bg-[#1F2937] rounded-full"></span>

                    <span className="text-[#1F2937]">Applied 21/11/2025</span>
                  </div>
                </section>
              </div>

              <button className="bg-[#FC8019] text-white flex items-center gap-2 sm:gap-3 p-2 px-3 sm:px-4 rounded-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-normal whitespace-nowrap">
                View Details <FaArrowRight />
              </button>
            </div>
          );
        })}
      </div>

      <div className="shadow-[0px_0px_15px_0px_#0000001A] p-4 sm:p-6 my-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <section className="flex flex-col gap-1 sm:gap-2">
          <h1 className="text-xl sm:text-2xl font-medium">
            Keep Your Momentum Going
          </h1>
          <p className="text-[#45556C] text-sm sm:text-base">
            Apply to more positions to increase your chances
          </p>
        </section>

        <button className="bg-[#FC8019] text-white flex items-center gap-2 sm:gap-3 p-2 px-3 sm:px-4 rounded-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-normal">
          <HiLightningBolt /> Browse Jobs
        </button>
      </div>
    </div>
  );
};

export default AllApplication;
