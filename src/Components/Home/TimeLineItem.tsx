import React from "react";
import ActiveIcon from "../../assets/Home/Active.svg";
import InactiveIcon from "../../assets/Home/Inactive.svg";
import ClockIcon from "../../assets/Home/clock.svg";
import CompletedIcon from "../../assets/Home/Completed.svg";

export type StageStatus = "completed" | "current" | "pending";

export interface StageData {
  title: string;
  description: string;
  time?: string;
  date?: string;
  status: StageStatus;
}

const StageCard: React.FC<StageData> = ({
  title,
  description,
  time,
  date,
  status,
}) => {
  /** ------------ FIXED COLORS (no random colors) ------------- **/
  const background =
    status === "completed"
      ? "linear-gradient(135deg, #059669 0%, #047857 100%)" // GREEN
      : status === "current"
      ? "linear-gradient(135deg, #FE9A00 0%, #E17100 100%)" // ORANGE
      : "linear-gradient(135deg, #E5E7EB 0%, #D1D5DC 100%)"; // GREY

  const lineColor =
    status === "completed" || status === "current" ? "#FC8019" : "#D1D5DB";

  const titleColor =
    status === "completed" || status === "current" ? "#FFFFFF" : "#364153";

  const descColor =
    status === "completed" || status === "current" ? "#FFFFFFCC" : "#4A5565";

  const timeDateColor =
    status === "completed" || status === "current" ? "#FFFFFFB5" : "#4A5565";

  const getIcon = () => {
    if (status === "completed") return CompletedIcon;
    if (status === "current") return ActiveIcon;
    return InactiveIcon;
  };

  return (
    <div className="relative flex gap-4">
      {/* Timeline Dot + Line */}
      <div className="flex flex-col items-center">
        <img src={getIcon()} className="w-5 h-5" />
        <div
          className="flex-1 w-0.5 mt-1"
          style={{ backgroundColor: lineColor }}
        />
      </div>

      {/* Card */}
      <div className="rounded-xl p-4 w-full" style={{ background }}>
        {/* Title + Status Badge */}
        <div className="flex justify-between items-center">
          <h3
            className="font-semibold text-lg"
            style={{ color: titleColor, fontSize: "18px", fontWeight: 500 }}
          >
            {title}
          </h3>

          {status === "current" && (
            <span className="text-xs bg-[#FC8019] text-white px-2 py-1 rounded-md">
              Current Stage
            </span>
          )}

          {status === "pending" && (
            <span className="text-xs bg-[#99A1AF80] text-[#364153] px-2 py-1 rounded-md">
              Pending
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className="text-sm mt-1"
          style={{ color: descColor, fontSize: "15px", fontWeight: 400 }}
        >
          {description}
        </p>

        {/* Time + Date */}
        {time && date && (
          <div
            className="flex items-center gap-2 text-sm mt-3"
            style={{ color: timeDateColor }}
          >
            <img src={ClockIcon} className="w-4 h-4" />
            <span>{time}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StageCard;
