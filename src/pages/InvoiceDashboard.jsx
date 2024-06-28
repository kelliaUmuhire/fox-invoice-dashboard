import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import NumberCard from "../components/NumberCard";
import ActivityChart from "../components/ActivityChart";
import Invoices from "../components/Invoices";
import AvailableBalances from "../components/AvailableBalances";
import RecentActivity from "../components/RecentActivity";

export default function InvoiceDashboard() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 1024);
  return (
    <div className="flex w-full font-roboto relative">
      {showSidebar && <Sidebar hideSidebar={() => setShowSidebar(false)} />}
      <div className="lg:w-[82%] w-full p-6 relative z-10">
        <Topbar displaySidebar={() => setShowSidebar(true)} />
        <div className="w-full h-1 my-8 rounded bg-gradient-to-l from-indigo-600 to-orange-500"></div>
        <div className="flex lg:flex-nowrap flex-wrap lg:gap-5 gap-10">
          <div className="lg:w-[72%] w-full">
            <div className="flex md:flex-row flex-col gap-5 justify-between">
              <NumberCard
                title={"Total Earning"}
                amount={"$ 98,000"}
                color={"bg-emerald-100"}
                percentage={"80%"}
                rise
              />
              <NumberCard
                title={"Total Spending"}
                amount={"$ 32,000"}
                color={"bg-orange-200"}
                percentage={"40%"}
              />
              <NumberCard
                title={"Gold this month"}
                amount={"$ 16,900"}
                color={"bg-indigo-200"}
                percentage={"20%"}
                rise
                skew
              />
            </div>
            <ActivityChart />
            <Invoices />
          </div>
          <div className="lg:w-[28%] w-full flex lg:flex-col md:flex-row flex-col gap-6">
            <AvailableBalances />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
}
