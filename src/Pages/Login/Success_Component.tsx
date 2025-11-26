import success from "../../assets/Success_Image.png";
import Success_icon from "../../assets/Success_Icon.png";

const Success_Component = () => {
  return (
    <div className="min-h-screen bg-[#FC8019] rounded-lg flex items-center justify-center px-4">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg text-center">

        {/* Success Illustration */}
        <div className="flex justify-center">
          <img src={success} className="w-40" alt="success" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#0F172B]">
          Application Submitted
        </h2>
        <h2 className="text-3xl font-semibold text-[#0F172B] mb-4">
          Successfully!
        </h2>

        {/* Description */}
        <p className="text-[#45556C] text-md">
          Thank you for applying to <strong>Senior Frontend Engineer</strong>.
        </p>
        <p className="text-[#45556C] text-md">
          We've received your application and our HR team will review it shortly.
        </p>

        {/* Redirect Row */}
        <div className="flex items-center justify-center gap-3 mt-10 text-[#45556C]">
          <img src={Success_icon} className="w-8" alt="redirect" />
          <p className="text-md">Redirecting to your dashboard...</p>
        </div>

      </div>

    </div>
  );
};

export default Success_Component;
