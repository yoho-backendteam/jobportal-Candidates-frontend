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

const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
const darkenColor = (hex: string) => {
  let num = parseInt(hex.replace("#", ""), 16);
  let r = Math.max(0, (num >> 16) - 40);
  let g = Math.max(0, ((num >> 8) & 0x00ff) - 40);
  let b = Math.max(0, (num & 0x0000ff) - 40);
  return `rgb(${r}, ${g}, ${b})`;
};

const StageCard: React.FC<StageData> = ({
  title,
  description,
  time,
  date,
  status,
}) => {
  const baseColor = status === "completed" ? randomHex() : "";
  const darker = status === "completed" ? darkenColor(baseColor) : "";

  const background =
    status === "completed"
      ? `linear-gradient(135deg, ${baseColor} 0%, ${darker} 100%)`
      : status === "current"
      ? "linear-gradient(135deg, #FE9A00 0%, #E17100 100%)"
      : "linear-gradient(135deg, #E5E7EB 0%, #D1D5DC 100%)";

  const lineColor =
    status === "completed" || status === "current" ? "#FE9A00" : "#D1D5DB";

  const getIcon = () => {
    if (status === "completed") return CompletedIcon;
    if (status === "current") return ActiveIcon;
    return InactiveIcon;
  };
  const titleColor =
    status === "completed" || status === "current" ? "#FFFFFF" : "#364153";

  const descColor =
    status === "completed" || status === "current" ? "#FFFFFFE5" : "#4A5565";

  const timeDateColor =
    status === "completed" || status === "current" ? "#FFFFFFCC" : "#4A5565";
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <img src={getIcon()} className="w-5 h-5" />

        <div
          className="flex-1 w-[2px] mt-1"
          style={{ backgroundColor: lineColor }}
        />
      </div>

      {/* Card */}
      <div className="rounded-xl p-4 w-full" style={{ background }}>
        <div className="flex justify-between items-center">
          <h3
            className="font-semibold text-lg"
            style={{ color: titleColor, fontSize: "18px", fontWeight: 400 }}
          >
            {title}
          </h3>

          {status === "current" && (
            <span
              className="text-xs bg-[#FC8019] text-[#FFFFFF] px-2 py-1 rounded-md"
              style={{ fontSize: "12px", fontWeight: 400 }}
            >
              Current Stage
            </span>
          )}

          {status === "pending" && (
            <span
              className="text-xs bg-[#99A1AF80] text-[#364153] px-2 py-1 rounded-md"
              style={{ fontSize: "12px", fontWeight: 400 }}
            >
              Pending
            </span>
          )}
        </div>

        <p
          className="text-sm mt-1"
          style={{ color: descColor, fontSize: "16px", fontWeight: 400 }}
        >
          {description}
        </p>

        {time && date && (
          <div
            className="flex items-center gap-2 text-sm mt-3"
            style={{ color: timeDateColor, fontSize: "14px", fontWeight: 400 }}
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
