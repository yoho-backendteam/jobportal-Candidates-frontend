import { useCallback, useEffect } from "react";
import ApplicationIcon from "../../assets/Home/ApplicationIcon.png";
import { FaArrowRight } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import EmptyApplication from "../../assets/Home/UserDashboard.png";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import { selectAllapplication } from "../../features/applications/reducers/selectors";

const AllApplication = () => {
  const alljobs = useSelector(selectAllapplication) || [];
  const navigate = useNavigate();

  

  const handleViewDetails = (jobId: any, status: any) => {
    navigate(`/applications/${jobId}`, {
      state: {
        appliedStatus: status,
      },
    });
  };

  

  return (
    <div>
      <div className="my-10">
        {alljobs?.length == 0 ? (
          <div className="h-[280px] sm:h-80 lg:h-[350px] shadow-[0px_0px_15px_0px_#00000026] rounded-2xl flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-5 px-4 sm:px-6">
            <img
              src={EmptyApplication}
              alt="Empty Application"
              className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] lg:h-[100px] lg:w-[100px]"
            />
            <h1 className="text-[#45556C] text-xl sm:text-2xl font-medium text-center">
              No Applications Yet
            </h1>
            <p className="text-xs sm:text-sm text-[#62748E] text-center max-w-xs sm:max-w-sm">
              Start applying to jobs to see them here
            </p>
          </div>
        ) : (
          alljobs?.map((value: any, index) => {
            return (
              <div
                key={index}
                className="shadow-[0px_0px_15px_0px_#0000001A]  p-4 sm:p-6 my-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full">
                  <section className="flex  justify-center items-center sm:rounded-2xl rounded-sm h-[45px] w-[50px] sm:h-[50px] sm:w-[50px] bg-[#FC8019]">
                    <img src={ApplicationIcon} alt="" className="h-6 sm:h-8" />
                  </section>

                  <section className="flex flex-col gap-2">
                    <h1 className="text-lg sm:text-2xl font-medium">
                      {value?.job?.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#45556C] text-xs sm:text-sm">
                      <span>{value?.job?.department}</span>
                      <span className="w-1 h-1 bg-[#1F2937] rounded-full"></span>

                      <span>{value?.job?.workingMode}</span>
                      <span className="w-1 h-1 bg-[#1F2937] rounded-full"></span>

                      <span className="text-[#1F2937]">
                        Applied -{" "}
                        {dayjs(value?.createdAt).format("DD MMM YYYY")}
                      </span>
                    </div>
                  </section>
                </div>

                <button
                  className="bg-[#FC8019] text-white flex items-center gap-2 sm:gap-3 p-2 px-3 sm:px-4 rounded-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-normal whitespace-nowrap"
                  onClick={() =>
                    handleViewDetails(value?.job?._id, value?.status)
                  }
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            );
          })
        )}
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

        <Link
          to={"/"}
          className="bg-[#FC8019] text-white flex items-center gap-2 sm:gap-3 p-2 px-3 sm:px-4 rounded-lg cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-normal"
        >
          <HiLightningBolt /> Browse Jobs
        </Link>
      </div>
    </div>
  );
};

export default AllApplication;
