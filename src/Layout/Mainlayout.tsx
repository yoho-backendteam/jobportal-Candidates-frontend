import { Outlet } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";

export default function MainLayout() {
  return (
    <div className="w-full h-screen flex flex-col">
      
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <main 
        className="flex-1 pt-[100px] p-4 overflow-y-auto bg-gray-50 hide-scrollbar"
      >
        <Outlet />
      </main>

    </div>
  );
}
