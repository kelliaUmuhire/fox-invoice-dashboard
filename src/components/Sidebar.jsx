/* eslint-disable react/prop-types */
export default function Sidebar({ hideSidebar }) {
  return (
    <div className="lg:w-[18%] md:w-1/2 w-4/5 lg:relative fixed top-0 bottom-0 min-h-screen overflow-auto z-20 bg-white border-r-2 border-r-gray-200 flex flex-col items-center py-2">
      <img src="/images/logo.svg" alt="Logo" className="w-auto" />
      <div
        className="absolute top-4 right-2 border-1.5 bg-white border-black shadow-main shadow-black rounded-md p-1 cursor-pointer mr-4 lg:hidden"
        onClick={hideSidebar}
      >
        <img src="/images/close.svg" alt="close" className="w-3.5" />
      </div>
      <div className="border-t-2 border-t-gray-200 w-full py-10 px-3">
        <div className="text-gray-500 text-sm px-3 mb-6">MAIN MENU</div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex w-full text-black items-center gap-3 p-3 bg-violet-300 text-sm font-bold rounded-xl shadow-main shadow-black">
            <img src="/images/overview.svg" alt="Overview" className="w-6" />
            <span className="">Overview</span>
          </div>
          <div className="flex w-full text-gray-500 items-center gap-3 p-3">
            <img src="/images/dashboard.svg" alt="Dashboard" className="w-6" />
            <span className="text-sm">Dashboard</span>
          </div>
          <div className="flex w-full text-gray-500 items-center gap-3 p-3">
            <img src="/images/stats.svg" alt="Dashboard" className="w-6" />
            <span className="text-sm">Statistics</span>
          </div>
          <div className="flex w-full text-gray-500 items-center gap-3 p-3">
            <img
              src="/images/transaction.svg"
              alt="Dashboard"
              className="w-6"
            />
            <span className="text-sm">Transaction</span>
          </div>
          <div className="flex w-full text-gray-500 items-center gap-3 p-3">
            <img src="/images/product.svg" alt="Dashboard" className="w-6" />
            <span className="text-sm">Product</span>
          </div>
          <div className="flex w-full text-gray-500 items-center gap-3 p-3">
            <img src="/images/schedule.svg" alt="Dashboard" className="w-6" />
            <span className="text-sm">Schedule</span>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-gray-200 w-full py-10 px-3 lg:pb-10 pb-20">
        <div className="text-gray-500 text-sm px-3 mb-6">HELP & SUPPORT</div>
        <div className="flex w-full text-gray-500 items-center gap-3 p-3">
          <img src="/images/help.svg" alt="Dashboard" className="w-6" />
          <span className="text-sm">Help & Center</span>
        </div>
        <div className="flex w-full text-gray-500 items-center gap-3 p-3">
          <img src="/images/settings.svg" alt="Settings" className="w-6" />
          <span className="text-sm">Settings</span>
        </div>
      </div>
    </div>
  );
}
