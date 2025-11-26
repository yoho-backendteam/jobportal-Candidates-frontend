import { useCallback, useEffect, useState } from "react";
import ContainerImage from "../../assets/jobs/Container.png";
import ContainerBgImg from "../../assets/jobs/ContainerBG.png";
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
import { useDispatch, useSelector } from "react-redux";
import { selectAlljobs } from "../../features/jobs/reducers/selector";
import { getAlljobsThunk } from "../../features/jobs/reducers/thunk";
import type { AppDispatch } from "../../store/store";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Joblist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const alljobs = useSelector(selectAlljobs) || [];

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const fetchAlljobs = useCallback(async () => {
    dispatch(getAlljobsThunk());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleViewDetails = (jobId: any) => {
    navigate(`/${jobId}`);
  };

  useEffect(() => {
    fetchAlljobs();
  }, [fetchAlljobs]);

  // Filtered jobs based on search inputs
  const filteredJobs = alljobs.filter((job: any) => {
    const matchesTitle =
      job.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
      job.jobDescription.toLowerCase().includes(searchTitle.toLowerCase());

    const matchesLocation = job.location
      .toLowerCase()
      .includes(searchLocation.toLowerCase());

    return matchesTitle && matchesLocation;
  });

  return (
    <div className="w-[95%] mx-auto max-w-[1400px] mb-10">
      {/* Hero Section */}
      <div
        className="w-full h-60 sm:h-[380px] md:h-[380px] lg:h-[380px] bg-center flex flex-col justify-center items-center rounded-xl gap-5 mt-4 px-4 text-center"
        style={{ backgroundImage: `url(${ContainerBgImg})` }}
      >
        <div className="px-4 py-2 rounded-[20px] sm:h-10 md:h-10 h-10 bg-white/15 text-white font-medium shadow-md border border-white/25 flex items-center gap-2">
          <img src={Icon10} alt="" className="w-4 h-4 sm:h-5 md:h-5" />
          <span className="text-sm sm:text-lg">
            Welcome to our career Portal
          </span>
        </div>

        <h1 className="text-lg sm:text-5xl md:text-6xl font-extrabold text-white">
          Find Your Dream Career
        </h1>

        <p className="text-white text-sm sm:text-base">
          Discover opportunities that match your skills and ambitions
        </p>

        {/* Search Inputs */}
        <div className="sm:max-w-[766px] w-full h-10 sm:h-15 bg-white rounded-xl flex items-center px-2 sm:px-5 gap-2 sm:gap-4 border border-gray-300 flex-nowrap">
          <input
            type="text"
            placeholder="Job Title, Keywords, or Department"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="flex-1 w-full placeholder:text-xs sm:placeholder:text-md outline-none text-xs sm:text-lg"
          />

          <div className="hidden sm:block w-0.5 h-1/2 bg-gray-300"></div>

          <div className="flex sm:w-40 w-20 items-center gap-1 sm:gap-2">
            <img src={Icon2} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="text"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 placeholder:text-xs outline-none sm:placeholder:text-md"
            />
          </div>

          <button className="bg-[#FC8019] px-2 py-2 sm:w-25 w-16 rounded-xl text-white flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <img src={Icon11} alt="icon" className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:block">Search</span>
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div>
        {filteredJobs?.map((value: any) => (
          <div
            key={value._id}
            className="w-full border border-[#FC8019] rounded-[20px] p-5 mt-5 flex flex-col lg:flex-row justify-between gap-5"
          >
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-[70%]">
              <img
                src={ContainerImage}
                className="w-[70px] h-[70px] flex-shrink-0"
                alt=""
              />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {value?.title}
                </h2>
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 text-[#45556C] mt-1">
                  <h5 className="text-sm sm:text-lg">{value?.department}</h5>
                  <h5 className="text-sm sm:text-lg">{value?.location}</h5>
                  <h5 className="text-sm sm:text-lg">
                    {value?.experienceRequired}
                  </h5>
                </div>

                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="border border-[#FC8019] rounded-lg px-3 py-1 flex items-center gap-2 text-[#FC8019]">
                    <img src={Icon14} alt="" className="w-4 h-4" /> Full Time
                  </div>
                  <div className="border border-[#FC8019] rounded-lg px-3 py-1 text-[#FC8019]">
                    {value?.salaryRange}
                  </div>
                  <div className="border border-[#FC8019] rounded-lg px-3 py-1 text-[#45556C]">
                    Posted - {dayjs(value.updatedAt).format("DD MMM YYYY")}
                  </div>
                </div>

                <p className="mt-3 text-sm sm:text-base text-[#45556C]">
                  {value?.jobDescription}
                </p>

                <div className="flex flex-wrap gap-5 mt-2">
                  <p className="text-[#FC8019] sm:text-md text-sm flex items-center gap-2">
                    <img src={Icon15} className="w-4 h-4" />
                    <span>{value?.applicantsCount} applicants</span>
                  </p>

                  <p className="text-[#FC8019] sm:text-md text-sm flex items-center gap-2">
                    <img src={Icon15} className="w-4 h-4" />
                    <span>{value?.vacancyCount} vacancy</span>
                  </p>

                  {value?.vacancyCount < 10 && (
                    <p className="text-[#FC8019] sm:text-md text-sm flex items-center gap-2">
                      <img src={Icon16} className="w-4 h-4" /> high demand
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-row sm:text-sm text-sm sm:flex-col gap-3 min-w-[180px] sm:w-[180px]">
              <div
                className="border border-[#FC8019] rounded-lg px-5 py-2 sm:text-sm sm:flex-row flex-row text-sm flex items-center gap-2 cursor-pointer"
                onClick={() => handleViewDetails(value._id)}
              >
                <span className="text-md sm:text-sm">View details</span>
                <img src={Icon12} alt="" className="w-4 h-4 sm:text-sm" />
              </div>

              <div className="rounded-lg px-5 py-2 bg-[#FC8019] text-white sm:text-sm sm:flex-row flex-row text-sm flex items-center gap-2 cursor-pointer">
                <img src={Icon13} alt="" className="w-4 h-4 sm:text-sm " />
                <span className="text-md sm:text-sm">Quick Apply</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-5 mt-5">
  {/* Active Jobs Card */}
  <div className="w-full sm:w-[33%] bg-linear-to-r from-[#EFF6FF] to-[#DBEAFE80] h-40 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A] flex flex-col items-center justify-center gap-2 p-4">
    <img src={Container3} alt="" className="w-10 sm:w-fit" />
    <h2 className="text-center font-bold text-lg sm:text-4xl">5+</h2>
    <p className="text-center text-xs sm:text-lg">Active jobs</p>
  </div>

  {/* Departments Card */}
  <div className="w-full sm:w-[33%] bg-linear-to-r from-[#F0FDFA] to-[#CBFBF180] h-40 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A] flex flex-col items-center justify-center gap-2 p-4">
    <img src={Container4} alt="" className="w-10 sm:w-fit" />
    <h2 className="text-center font-bold text-lg sm:text-4xl">3</h2>
    <p className="text-center text-xs sm:text-lg">Departments</p>
  </div>

  {/* Candidates Card */}
  <div className="w-full sm:w-[33%] bg-linear-to-r from-[#FAF5FF] to-[#F3E8FF80] h-40 sm:h-50 rounded-lg shadow-[0_0_20px_0_#0000001A] flex flex-col items-center justify-center gap-2 p-4">
    <img src={Container5} alt="" className="w-10 sm:w-fit" />
    <h2 className="text-center font-bold text-lg sm:text-4xl">10,000+</h2>
    <p className="text-center text-xs sm:text-lg">Candidates</p>
  </div>
</div>

    </div>
  );
};

export default Joblist;
