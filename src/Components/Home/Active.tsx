import { useDispatch, useSelector } from "react-redux";
import StageCard from "./TimeLineItem";
import { selectTimeline } from "../../features/Timeline/Reducers/Selector";
import { useEffect, useState } from "react";
import { getTimelineThunks } from "../../features/Timeline/Reducers/Thunks";
import { FaArrowRight } from "react-icons/fa";
import ApplicationIcon from "../../assets/Home/ApplicationIcon.png";
import dayjs from "dayjs";
import { selectAllapplication } from "../../features/applications/reducers/selector";


const Active = () => {


  const [open, setopen] = useState(false)
    ;
  const dispatch = useDispatch();

  const alljobs = useSelector(selectAllapplication) || [];
  const ids = alljobs.map(job => job._id);
  console.log(ids);


  const timeline = useSelector(selectTimeline) || [];
  console.log(timeline, "timelinnnnnnnnnn");

  useEffect(() => {
    dispatch(getTimelineThunks(ids as any) as any);
  }, [dispatch]);



  return (
    <div className="space-y-6 p-5">
      <div style={{ fontSize: "16px", fontWeight: 400 }}>
        Application Timeline
      </div>
      <div>{alljobs?.map((value: any, index) => {
        return (
          <div
            key={index}
            className="shadow-[0px_0px_15px_0px_#0000001A] p-4 sm:p-6 my-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0"
          >
            <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full">
              <section className="flex justify-center items-center rounded-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] bg-[#FC8019]">
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
              onClick={() => setopen(prev => !prev)}>
              View Timeline <FaArrowRight />
            </button>
          </div>
        );
      })}</div>
      {open && (
        <div className="space-y-5">
          {timeline?.data?.timeline?.map((item: any, idx: any) => {
            const status =
              item.inProgress
                ? "current"
                : item.completed
                  ? "completed"
                  : "pending";

            return (
              <StageCard
                key={idx}
                title={item.title}
                description={item.description}
                status={status}
                time={item.time || ""}
                date={item.date || ""}
              />
            );
          })}
        </div>
      )}

    </div>
  );
};

export default Active;
