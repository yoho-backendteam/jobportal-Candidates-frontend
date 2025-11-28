import { BiArrowBack } from "react-icons/bi";
import Location from "../../assets/Jobs/Location.png";
import Workmode from "../../assets/Jobs/Workmode.png";
import Experience from "../../assets/Jobs/Experience.png";
import Package from "../../assets/Jobs/Package.png";
import Chkpoint from "../../assets/Jobs/chkpoint.png";
import Applicants from "../../assets/Jobs/Applicants.png";
import Posted from "../../assets/Jobs/posted.png";
import { FaRupeeSign } from "react-icons/fa";
import { useCallback, useEffect } from "react";
import { getSelectedjobThunk } from "../../features/jobs/reducers/thunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { selectedjob } from "../../features/jobs/reducers/selector";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import { applyJobThunk } from "../../features/applications/reducers/thunk";
import { toast } from "react-toastify";

const Jobcard = () => {
  const { jobname } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const selectjob: any = useSelector(selectedjob) || [];
  const location = useLocation();
  const { appliedStatus } = location.state || {};
  const { isAuthenticated } = useAuth();

  const fetchselectedjob = useCallback(async () => {
    dispatch(getSelectedjobThunk(jobname));
  }, []);

  useEffect(() => {
    fetchselectedjob();
  }, [dispatch]);


  return (
    <div>
     <div>
       <p
        className="flex items-center gap-3 w-fit border border-[#FC8019] rounded-lg p-1 font-medium my-4 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BiArrowBack  size={20}/> 
      </p>
     </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Main Job Card */}
        <div className="w-full lg:w-[65%] rounded-2xl mx-auto">
          <div className="border-2 bg-linear-to-br from-[#ffe7d5] via-[#ffe8d8] to-[#ffdec6] border-[#FC8019] p-4 sm:p-5 rounded-2xl">
            <section className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              {/* Icon */}
              <div className="bg-[linear-gradient(to_bottom_right,#FC8019,#FF5200)] h-16 w-16 sm:h-20 sm:w-20 rounded-2xl text-white flex justify-center items-center text-3xl sm:text-4xl">
                T
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <section>
                  <h1 className="text-[#0F172B] text-xl sm:text-2xl font-semibold">
                    {selectjob?.title}
                  </h1>
                  <p className="text-[#45556C] text-sm sm:text-base">
                    TalentHub India
                  </p>
                </section>

                <section className="flex flex-col sm:flex-row gap-4 sm:gap-12 my-4 sm:my-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Location}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      {selectjob?.location}
                    </p>
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Workmode}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      {selectjob?.employmentType} • {selectjob?.workingMode}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Experience}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      {selectjob?.experienceRequired}
                    </p>
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Package}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      ₹ {selectjob?.salaryRange}
                    </p>
                  </div>
                </section>
              </div>
            </section>

            <hr className="my-3 sm:my-4 text-[#62748E]" />

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-[#62748E] text-sm sm:text-base mt-2 sm:mt-4">
              <p className="flex items-center gap-2">
                <img src={Applicants} alt="Applicants" />
                {selectjob?.applicantsCount} applications
              </p>
              <p className="flex items-center gap-2">
                <img src={Posted} alt="Applicants" />
                Posted {dayjs(selectjob.updatedAt).format("DD MMM YYYY")}
              </p>
              <p className="flex items-center gap-2">
                <img src={Applicants} alt="Applicants" />
                {selectjob?.vacancyCount} vacancy
              </p>
            </div>
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">About the Role</h1>

            <p className="text-[#45556C] text-[15px] mb-8">
              We are seeking a talented Senior Frontend Engineer to join our
              growing engineering team. You will be responsible for building
              high-quality, scalable, and maintainable web applications using
              modern technologies like React, TypeScript, and Next.js.
            </p>
            <p className="text-[#45556C] text-[15px]">
              As a senior member of the team, you'll collaborate closely with
              designers, product managers, and backend engineers to deliver
              exceptional user experiences. You'll also mentor junior developers
              and contribute to architectural decisions.
            </p>
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">
              Key Responsibilities
            </h1>

            {selectjob?.keyResponsibilities?.map(
              (keypoints: any, index: any) => {
                return (
                  <p
                    key={index}
                    className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]"
                  >
                    <img src={Chkpoint} alt="chkimg" /> <span>{keypoints}</span>
                  </p>
                );
              }
            )}
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">
              Required Qualifications
            </h1>
            {selectjob?.qualifications?.map(
              (qualification: any, index: any) => {
                return (
                  <p
                    key={index}
                    className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]"
                  >
                    <img src={Chkpoint} alt="chkimg" />
                    <span>{qualification}</span>
                  </p>
                );
              }
            )}
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">Nice to Have</h1>
            {Array(5).fill(
              <p className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]">
                <img src={Chkpoint} alt="chkimg" />
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[35%]">
          {/* Sidebar */}
          {/* <div className=" bg-amber-300 rounded-2xl p-3"> */}
          <div className="border-2 border-[#FC8019] bg-linear-to-br from-[#ffe7d5] via-[#ffe6d4] to-[#ffd9be] rounded-2xl p-5">
            <p className="text-[24px] font-bold flex gap-1 items-center">
              <span>
                <FaRupeeSign />
              </span>
              {selectjob?.salaryRange}
            </p>
            <p className="text-[14px] text-[#45556C]">Per Annum</p>
            {/* <div className="mt-4 "> */}

            {appliedStatus == undefined ? (
              <button
                onClick={async () => {
                  if (!isAuthenticated) {
                    navigate("/signin", { state: { from: location.pathname } });
                    return;
                  }
                  const result = await dispatch(applyJobThunk(selectjob?._id));
                  if (result?.success) {
                    navigate("/success_page");
                  } else {
                    toast.error("Aleady Applied");
                  }
                }}
                className="p-3 mt-4 flex items-center justify-center rounded-lg bg-[#FC8019] text-[#ffffff] w-full cursor-pointer"
              >
                Apply for this Position
              </button>
            ) : (
              <button className="p-3 mt-4 flex items-center justify-center rounded-lg bg-[#278540] text-[#ffffff] w-full cursor-pointer">
                Applied for this Position
              </button>
            )}

            {/* </div> */}

            <hr className="my-3 sm:my-4 text-[#62748E]" />

            <div className="mt-4 space-y-1.5">
              <p className="flex justify-between">
                <span className="text-[14px] text-[#45556C]">Job Type</span>
                <span className="text-[14px] text-[#0F172B]">
                  {selectjob?.employmentType}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-[14px] text-[#45556C]">Work Mode</span>
                <span className="text-[14px] text-[#0F172B]">
                  {selectjob?.workingMode}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-[14px] text-[#45556C]">Experience</span>
                <span className="text-[14px] text-[#0F172B]">
                  {selectjob?.experienceRequired}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-[14px] text-[#45556C]">Department</span>
                <span className="text-[14px] text-[#0F172B]">
                  {selectjob?.department}
                </span>
              </p>
            </div>
            <div className="mt-4">
              <p className="text-[14px] text-[#62748E]">
                Application Deadline:28/02/2025
              </p>
              <p className="text-[14px] text-[#62748E]">
                {selectjob?.applicantsCount} people have applied for this job
              </p>
            </div>
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">
              About TalentHub India
            </h1>

            <p className="text-[#45556C] text-[15px]">
              We are seeking a talented Senior Frontend Engineer to join our
              growing engineering team. You will be responsible for building
              high-quality, scalable, and maintainable web applications using
              modern technologies like React, TypeScript, and Next.js.
            </p>

            <div className="mt-5 text-[#45556C] grid gap-2">
              <p className="flex items-center gap-2">
                <img src={Applicants} alt="Applicants" />
                500+ employees
              </p>
              <p className="flex items-center gap-2">
                <img src={Location} alt="Applicants" />
                Offices in 5 cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
