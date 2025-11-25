import { BiArrowBack } from "react-icons/bi";
import Location from "../../assets/Jobs/Location.png";
import Workmode from "../../assets/Jobs/Workmode.png";
import Experience from "../../assets/Jobs/Experience.png";
import Package from "../../assets/Jobs/Package.png";
import Chkpoint from "../../assets/Jobs/chkpoint.png";

const Jobcard = () => {
  return (
    <div>
      <p className="flex items-center gap-3 font-medium my-4">
        <BiArrowBack /> Back to jobs
      </p>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Main Job Card */}
        <div className="w-full lg:w-[65%] rounded-2xl mx-auto">
          <div className="border-2 bg-orange-100 border-[#FC8019] p-4 sm:p-5 rounded-2xl">
            <section className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              {/* Icon */}
              <div className="bg-[linear-gradient(to_bottom_right,#FC8019,#FF5200)] h-16 w-16 sm:h-20 sm:w-20 rounded-2xl text-white flex justify-center items-center text-3xl sm:text-4xl">
                T
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <section>
                  <h1 className="text-[#0F172B] text-xl sm:text-2xl font-semibold">
                    Senior Frontend Engineer
                  </h1>
                  <p className="text-[#45556C] text-sm sm:text-base">
                    TechCorp India
                  </p>
                </section>

                <section className="flex flex-col sm:flex-row gap-4 sm:gap-12 my-4 sm:my-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Location}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />{" "}
                      Bangalore, India
                    </p>
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Workmode}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />{" "}
                      Full-time • Remote
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Experience}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />{" "}
                      3-5 years
                    </p>
                    <p className="text-[#45556C] flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                      <img
                        src={Package}
                        alt=""
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />{" "}
                      ₹18-25 LPA
                    </p>
                  </div>
                </section>
              </div>
            </section>

            <hr className="my-3 sm:my-4 text-[#62748E]" />

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[#62748E] text-sm sm:text-base mt-2 sm:mt-4">
              <p>Applications</p>
              <p>Posted</p>
              <p>Applications</p>
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
            {Array(5).fill(
              <p className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]">
                <img src={Chkpoint} alt="chkimg" />{" "}
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>{" "}
              </p>
            )}
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">
              Required Qualifications
            </h1>
            {Array(5).fill(
              <p className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]">
                <img src={Chkpoint} alt="chkimg" />{" "}
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>{" "}
              </p>
            )}
          </div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">Nice to Have</h1>
            {Array(5).fill(
              <p className="flex gap-4 items-center my-2 text-[#45556C] text-[15px]">
                <img src={Chkpoint} alt="chkimg" />{" "}
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </span>{" "}
              </p>
            )}
          </div>
        </div>

        <div className="w-full lg:w-[35%]">
          {/* Sidebar */}
          <div className=" h-[200px] bg-amber-300 rounded-2xl"></div>

          <div className="border-2 my-6 p-4 border-[#E2E8F0] rounded-2xl">
            <h1 className="text-[#0F172B] text-2xl mb-5">
              About TechCorp India
            </h1>

            <p className="text-[#45556C] text-[15px] mb-8">
              We are seeking a talented Senior Frontend Engineer to join our
              growing engineering team. You will be responsible for building
              high-quality, scalable, and maintainable web applications using
              modern technologies like React, TypeScript, and Next.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
