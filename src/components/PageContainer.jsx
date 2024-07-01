/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function PageContainer({ children }) {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 1024);
  return (
    <div className="flex w-full font-roboto relative">
      {showSidebar && <Sidebar hideSidebar={() => setShowSidebar(false)} />}
      <div className="lg:w-[82%] w-full p-6 relative z-10">
        <Topbar displaySidebar={() => setShowSidebar(true)} />
        <div className="w-full h-1 my-8 rounded bg-gradient-to-l from-indigo-600 to-orange-500"></div>
        {children}
      </div>
    </div>
  );
}
