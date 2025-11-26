import ContainerImage from "../../assets/jobs/Container1.png";
import Icon from "../../assets/jobs/icon1.png";
import Icon2 from "../../assets/jobs/icon2.png";
import Icon3 from "../../assets/jobs/icon3.png";
import Icon4 from "../../assets/jobs/icon4.png";
import Icon5 from "../../assets/jobs/icon5.png";
import Icon6 from "../../assets/jobs/icon6.png";
import Icon7 from "../../assets/jobs/icon7.png";
import Icon8 from "../../assets/jobs/icon8.png";
import Icon9 from "../../assets/jobs/icon9.png";

const Jobcard = () => {
  return (
    <div className="w-[95%] mx-auto my-5">

      <div className="flex flex-col lg:flex-row gap-6 justify-between">

        <div className="flex flex-col gap-4 w-full lg:w-[65%]">

          <div className="border border-[#FC8019] rounded-2xl p-5 bg-gradient-to-b from-[#FFDDC5] to-[#FFA363D4] w-full">
            <div className="flex flex-col gap-3">

              <div className="flex gap-3">
                <img src={ContainerImage} alt="logo" className="w-[70px] h-[70px]" />
                <div>
                  <h4 className="text-2xl md:text-3xl font-semibold">Senior Frontend Engineer</h4>
                  <p className="text-sm font-light text-[#45556C]">TechCorp India</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 md:ml-[85px] text-sm font-light text-[#45556C]">
                <div>
                  <p className="flex items-center gap-1"><img src={Icon2} className="w-4 h-4" />Banglore,India</p>
                  <p className="flex items-center gap-1"><img src={Icon4} className="w-4 h-4" />Full Time Remote</p>
                </div>
                <div>
                  <p className="flex items-center gap-1"><img src={Icon3} className="w-4 h-4" />3-5 Years</p>
                  <p className="flex items-center gap-1"><img src={Icon5} className="w-4 h-4" />18-25 LPA</p>
                </div>
              </div>

              <div className="h-px w-full bg-[#E2E8F0] mt-3"></div>

              <div className="flex flex-wrap gap-4 text-sm text-[#45556C]">
                <p className="flex items-center gap-1"><img src={Icon6} className="w-4 h-4" />23 Applications</p>
                <p className="flex items-center gap-1"><img src={Icon7} className="w-4 h-4" />Posted 05/02/2021</p>
                <p className="flex items-center gap-1"><img src={Icon8} className="w-4 h-4" />High Demand</p>
              </div>
            </div>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-4 w-full">
            <h2 className="text-xl font-semibold mb-2">About the role</h2>
            <p className="font-light text-sm text-[#45556C]">
              We are seeking a talented frontend engineer...
            </p>
            <br />
            <p className="font-light text-sm text-[#45556C]">
              As a senior member of the team, you will collaborate...
            </p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-4 w-full">
            <h2 className="text-xl font-semibold mb-2">Key responsibilities</h2>
            <ul className="flex flex-col gap-3 text-sm font-light text-[#45556C]">
              {[
                "Design and develop responsive web applications",
                "Collaborate with UX/UI designers",
                "Participate in code reviews",
                "Optimize application performance",
                "Stay updated with industry trends",
                "Mentor junior developers",
                "Explore new technologies",
              ].map((t, i) => (
                <li key={i} className="flex gap-2"><img src={Icon} /><p>{t}</p></li>
              ))}
            </ul>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-4 w-full">
            <h2 className="text-xl font-semibold mb-2">Required qualifications</h2>
            <ul className="flex flex-col gap-3 text-sm font-light text-[#45556C]">
              {[
                "Bachelor's degree in computer science",
                "5+ years frontend experience",
                "Proficiency in React, TypeScript",
                "State management experience",
                "Strong HTML/CSS knowledge",
                "REST APIs & GraphQL",
                "Testing frameworks",
                "Strong communication skills",
              ].map((t, i) => (
                <li key={i} className="flex gap-2"><img src={Icon} /><p>{t}</p></li>
              ))}
            </ul>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-4 w-full">
            <h2 className="text-xl font-semibold mb-2">Nice to Have</h2>
            <ul className="flex flex-col gap-3 text-sm font-light text-[#45556C]">
              {[
                "Experience with Next.js",
                "Design systems knowledge",
                "CI/CD pipelines",
                "Open-source contributions",
                "Performance optimization",
              ].map((t, i) => (
                <li key={i} className="flex gap-2"><img src={Icon} /><p>{t}</p></li>
              ))}
            </ul>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-4 w-full">
            <h2 className="text-xl font-semibold mb-3">Benefits and perks</h2>

            <div className="flex flex-col sm:flex-row gap-10 text-[#45556C]">
              <ul className="flex flex-col gap-3 text-sm font-light">
                {["Competitive salary", "Flexible working hours", "Professional development", "Latest MacBook"].map((t, i) => (
                  <li key={i} className="flex gap-2"><img src={Icon} className="w-5 h-5" /><p>{t}</p></li>
                ))}
              </ul>

              <ul className="flex flex-col gap-3 text-sm font-light">
                {["Next.js knowledge", "Design systems", "CI/CD pipelines", "Open-source contributions"].map((t, i) => (
                  <li key={i} className="flex gap-2"><img src={Icon} className="w-5 h-5" /><p>{t}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-[35%]">

          <div className="border border-[#FC8019] rounded-2xl p-5 bg-gradient-to-b from-[#FFDDC5] to-[#FFA363D4] ">
            <h2 className="text-xl font-semibold">₹18-25 LPA</h2>
            <p className="font-light text-sm text-[#45556C]">Per Annum</p>

            <button className="w-full bg-[#FC8019] text-white h-[50px] rounded-xl mt-3">
              Apply for this position
            </button>

            <div className="h-px bg-[#E2E8F0] my-3"></div>

            <div className="flex justify-between text-sm text-[#45556C]">
              <div className="font-light">
                <p>Job Type</p>
                <p>Work Mode</p>
                <p>Experience</p>
                <p>Department</p>
              </div>
              <div className="font-light">
                <p>Full Time</p>
                <p>Remote</p>
                <p>3–5 Years</p>
                <p>Engineering</p>
              </div>
            </div>

            <div className="h-px bg-[#E2E8F0] my-3"></div>

            <p className="text-xs font-light text-[#45556C]">Application Deadline: 28/02/2025</p>
            <p className="text-xs font-light text-[#45556C]">23 people have applied</p>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-5">
            <h2 className="text-lg font-semibold">About TechCorp India</h2>
            <p className="text-xs text-[#45556C] mb-3 text-[#45556C]">
              TechCorp is a leading technology company focused on building innovative products that solve real world problems.Join our team of talented engineers and make an impact
            </p>

            <p className="flex items-center gap-2 text-xs text-[#45556C]">
              <img src={Icon9} className="w-4 h-4" />500+ employees
            </p>
            <p className="flex items-center gap-2 text-xs text-[#45556C]">
              <img src={Icon2} className="w-4 h-4" />Offices in 5 cities
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#45556C] text-white mt-16 py-10 px-10 md:px-24 flex flex-col md:flex-row gap-10 md:gap-20">

        <div>
          <h2 className="text-sm font-light">TalentHub</h2>
          <p className="text-xs font-light mt-1">
            Your trusted job recruitment and management platform
          </p>
        </div>

        <div>
          <h2 className="text-sm font-light mb-2">For Candidates</h2>
          <ul className="text-xs font-light space-y-1">
            <li>Browse Jobs</li>
            <li>Apply Online</li>
            <li>Track Applications</li>
            <li>Manage Interview</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-light mb-2">For Employers</h2>
          <ul className="text-xs font-light space-y-1">
            <li>Post Jobs</li>
            <li>Manage Candidates</li>
            <li>Schedule Interviews</li>
            <li>Onboard Employees</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-light mb-2">Support</h2>
          <ul className="text-xs font-light space-y-1">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Jobcard;
