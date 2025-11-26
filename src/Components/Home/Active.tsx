import type { StageData } from "./TimeLineItem";
import StageCard from "./TimeLineItem";

const Active = () => {
  const stages: StageData[] = [
    {
      title: "Applied",
      description: "Application received and under review",
      date: "Nov 10, 2024",
      time: "02:30 PM",
      status: "completed",
    },
    {
      title: "Reviewed",
      description: "Resume reviewed - Strong technical background",
      date: "Nov 12, 2024",
      time: "08:00 PM",
      status: "completed",
    },
    {
      title: "Shortlisted",
      description: "Candidate selected for technical interview",
      date: "Nov 15, 2024",
      time: "03:45 PM",
      status: "completed",
    },
    {
      title: "Interview Scheduled",
      description: "Technical interview scheduled for Nov 25, 2024",
      date: "Nov 18, 2024",
      time: "04:30 PM",
      status: "current",
    },
    {
      title: "Interview Completed",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Selected",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Offer Sent",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Offer Accepted",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Offer Rejected",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Doc Verification Pending",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Doc Verified",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
    {
      title: "Onboarded",
      description: "This stage has not been completed yet",
      date: "",
      time: "",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-6 p-5">
      <div style={{ fontSize: "16px", fontWeight: 400 }}>
        Application Timeline
      </div>
      {stages.map((stage, idx) => (
        <StageCard key={idx} {...stage} />
      ))}
    </div>
  );
};

export default Active;
