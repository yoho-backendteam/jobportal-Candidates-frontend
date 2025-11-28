import { useCallback, useEffect, useState } from "react";
import ApplicationIcon from "../../assets/Home/ApplicationIcon.png";
import ApplicationBlkIcon from "../../assets/Home/ApplIconBlk.png";
import ProgressIcon from "../../assets/Home/ProgressIcon.png";
import ActiveBlkIcon from "../../assets/Home/ActiveBlk.png";
import InterviewIcon from "../../assets/Home/InterviewIcon.png";
import InterviewBlkIcon from "../../assets/Home/IntrviewBlk.png";
import OffersIcon from "../../assets/Home/OffersIcon.png";
import OffersBlkIcon from "../../assets/Home/OfferBlk.png";
import AllApplication from "../../Components/Home/AllApplication";
import Active from "../../Components/Home/Active";
import Interview from "../../Components/Home/Interview";
import Offers from "../../Components/Home/Offers";
import DocVerification from "../../Components/Home/DocVerification";
import { GetLocalStorage } from "../../utils/helpers";
import { useAuth } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { getAllapplicationThunk } from "../../features/applications/reducers/thunk";
import { selectAllapplication } from "../../features/applications/reducers/selectors";



const Home = () => {
  const [activeTab, setActiveTab] = useState("All Applications");
    const dispatch = useDispatch<AppDispatch>();


  const tabs = [
    {
      label: "All Applications",
      activeIcon: ApplicationIcon,
      inactiveIcon: ApplicationBlkIcon,
    },
    {
      label: "Active",
      activeIcon: ProgressIcon,
      inactiveIcon: ActiveBlkIcon,
    },
    {
      label: "Interviews",
      activeIcon: InterviewIcon,
      inactiveIcon: InterviewBlkIcon,
    },
    {
      label: "Offers",
      activeIcon: OffersIcon,
      inactiveIcon: OffersBlkIcon,
    },
    // {
    // 	label: 'DocVerification',
    // 	activeIcon: OffersIcon,
    // 	inactiveIcon: OffersBlkIcon,
    // },
  ];

  const [userName, setUserName] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();
  const alljobs = useSelector(selectAllapplication) || [];

  const inProgress=["shortlisted","interview scheduled","interview rescheduled","interview selected","offer sent"]
  const interviews=["interview scheduled","interview rescheduled","interview selected"]
  const offers=["offer sent","offer accepted"]
const [inProgressCount, setInprogressCount] = useState(0);
const [interviewCount, setInterviewCount] = useState(0);
const [offerCount, setOfferCount] = useState(0);
  const fetchAllapplication = useCallback(async () => {
    dispatch(getAllapplicationThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchAllapplication();
  }, [fetchAllapplication]);

  useEffect(() => {
    if (isAuthenticated) {
      const user = GetLocalStorage("candidateDetails");
      if (user && typeof user === "object") {
        setUserName(user.fullName || null);
      }
    }
  }, [isAuthenticated]);

useEffect(() => {
  if (alljobs && alljobs.length > 0) {

    const inProg = alljobs.filter((job: any) =>
      inProgress.includes(job?.status?.toLowerCase())
    ).length;

    const inter = alljobs.filter((job: any) =>
      interviews.includes(job?.status?.toLowerCase())
    ).length;

    const off = alljobs.filter((job: any) =>
      offers.includes(job?.status?.toLowerCase())
    ).length;

    setInprogressCount(inProg);
    setInterviewCount(inter);
    setOfferCount(off);
  }
}, [alljobs]);

  return (
    <div className="p-4">
      <div className="h-auto lg:h-[250px] bg-[#FC8019] text-white rounded-2xl flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between p-6 sm:p-8 gap-6">
        <div>
          <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-tight">
            Welcome back, {userName} ! 👋
          </h1>
          <p className="text-sm sm:text-base">
            Track your applications and manage your career journey
          </p>
        </div>

        <div className="bg-[#FFFFFF66] p-4 sm:p-5 lg:p-6 h-20 w-20 sm:h-[90px] sm:w-[90px] lg:h-[100px] lg:w-[100px] text-[40px] sm:text-[50px] lg:text-[60px] border border-white rounded-2xl flex justify-center items-center">
          {userName?.charAt(0)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-8">
        {/* CARD 1 */}
        <div className="bg-[linear-gradient(to_bottom_right,#EFF6FF,#DBEAFE)] h-[180px] sm:h-[188px] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col justify-center items-center rounded-2xl p-4">
          <section className="bg-[linear-gradient(to_bottom_right,#0052CC,#155DFC)] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-2xl flex justify-center items-center">
            <img
              src={ApplicationIcon}
              alt="AppIcon"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </section>

          <h1 className="text-[30px] sm:text-[40px] font-medium mt-2">{alljobs?.length}</h1>
          <p className="text-sm sm:text-base">Total Applications</p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[linear-gradient(to_bottom_right,#FFFBEB,#FFEDD480)] h-[180px] sm:h-[188px] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col justify-center items-center rounded-2xl p-4">
          <section className="bg-[linear-gradient(to_bottom_right,#FE9A00,#FF6900)] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-2xl flex justify-center items-center">
            <img
              src={ProgressIcon}
              alt="ProgressIcon"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </section>

          <h1 className="text-[30px] sm:text-[40px] font-medium mt-2">{inProgressCount}</h1>
          <p className="text-sm sm:text-base">In Progress</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[linear-gradient(to_bottom_right,#F0FDFA,#CBFBF180)] h-[180px] sm:h-[188px] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col justify-center items-center rounded-2xl p-4">
          <section className="bg-[linear-gradient(to_bottom_right,#00C2A8,#009689)] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-2xl flex justify-center items-center">
            <img
              src={InterviewIcon}
              alt="InterviewIcon"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </section>

          <h1 className="text-[30px] sm:text-[40px] font-medium mt-2">{interviewCount}</h1>
          <p className="text-sm sm:text-base">Interviews</p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[linear-gradient(to_bottom_right,#ECFDF5,#D0FAE580)] h-[180px] sm:h-[188px] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] flex flex-col justify-center items-center rounded-2xl p-4">
          <section className="bg-[linear-gradient(to_bottom_right,#00BC7D,#009966)] h-[45px] w-[45px] sm:h-[50px] sm:w-[50px] rounded-2xl flex justify-center items-center">
            <img
              src={OffersIcon}
              alt="OffersIcon"
              className="h-6 w-6 sm:h-7 sm:w-7"
            />
          </section>

          <h1 className="text-[30px] sm:text-[40px] font-medium mt-2">{offerCount}</h1>
          <p className="text-sm sm:text-base">Offers</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;

          return (
            <section
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-1.5 sm:gap-2 cursor-pointer rounded-lg shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]
                            ${
                              isActive
                                ? "bg-[#FC8019] text-white"
                                : "border border-[#0000001A] text-black"
                            }
                            px-3 py-1.5 sm:px-4 sm:py-2 
                            `}
            >
              <img
                src={isActive ? tab.activeIcon : tab.inactiveIcon}
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h1 className="text-xs sm:text-sm lg:text-base font-medium">
                {tab.label}
              </h1>
            </section>
          );
        })}
      </div>

      {activeTab === "All Applications" && <AllApplication />}
      {activeTab === "Active" && <Active />}
      {activeTab === "Interviews" && <Interview />}
      {activeTab === "Offers" && <Offers />}
      {activeTab === "DocVerification" && <DocVerification />}
    </div>
  );
};

export default Home;
