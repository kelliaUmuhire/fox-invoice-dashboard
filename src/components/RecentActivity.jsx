export default function RecentActivity() {
  return (
    <div className="w-full border-1.5 border-black shadow-main shadow-black px-5 pb-5 pt-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="flex items-start mb-5">
        <div className="rounded-full border border-slate-200 px-1 mr-2 w-8 h-8">
          <img
            src="images/microsoft.svg"
            alt="Microsoft"
            className="w-8 h-8 rounded-full mr-3"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-medium text-sm">Microsoft</h3>
          <p className="text-gray-600 text-xs">INV3485930572</p>
        </div>
        <div className="ml-auto text-gray-500 text-xs">1 Sep 5: 40 am</div>
      </div>
      <div className="flex items-start mb-5">
        <div className="rounded-full border border-slate-200 px-1 mr-2 w-8 h-8">
          <img
            src="images/tcs.svg"
            alt="TCS"
            className="w-8 h-8 rounded-full mr-3"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-medium text-sm">TCS Services</h3>
          <p className="text-gray-600 text-xs">INV8478290103</p>
        </div>
        <div className="ml-auto text-gray-500 text-xs">30 Aug 6: 45 pm</div>
      </div>
      <div className="flex items-start mb-5">
        <div className="rounded-full border border-slate-200 px-1 mr-2 w-8 h-8">
          <img
            src="images/infosys.svg"
            alt="infosys"
            className="w-8 h-8 rounded-full mr-3"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-medium text-sm">Infosys</h3>
          <p className="text-gray-600 text-xs">INV78549031111</p>
        </div>
        <div className="ml-auto text-gray-500 text-xs">28 Aug 8: 20 pm</div>
      </div>
      <div className="flex items-start mb-5">
        <div className="rounded-full border border-slate-200 px-1 mr-2 w-8 h-8">
          <img
            src="images/ibm.svg"
            alt="IBM"
            className="w-8 h-8 rounded-full mr-3"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-medium text-sm">IBM</h3>
          <p className="text-gray-600 text-xs">INV4523352070</p>
        </div>
        <div className="ml-auto text-gray-500 text-xs">27 Aug 7: 30 pm</div>
      </div>
      <div className="flex items-start">
        <div className="rounded-full border border-slate-200 px-1 mr-2 w-8 h-8">
          <img
            src="images/sap.svg"
            alt="SAP"
            className="w-8 h-8 rounded-full mr-3"
          />
        </div>
        <div>
          <h3 className="text-gray-900 font-medium text-sm">SAP</h3>
          <p className="text-gray-600 text-xs">INV1359874830</p>
        </div>
        <div className="ml-auto text-gray-500 text-xs">27 Aug 5:45 am</div>
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-black text-white text-sm font-bold py-1.5 px-6 rounded-xl mt-6 flex items-center">
          <span>Sell All</span>
          <img
            src="/images/chevron-down-white.svg"
            alt="Chevron"
            className="w-2.5 -rotate-90 ml-2.5"
          />
        </button>
      </div>
    </div>
  );
}
