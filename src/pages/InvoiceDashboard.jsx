import DashboardGraph from "../components/DashboardGraph";
import PageContainer from "../components/PageContainer";

export default function InvoiceDashboard() {
  return (
    <PageContainer>
      <div className="border-1.5 border-black shadow-main shadow-black p-5 rounded-xl flex lg:flex-row flex-col gap-6 w-full">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-xl font-bold mb-4">My Card</h2>
          <div className="flex gap-4">
            <img src="/images/card_front.svg" alt="Card" className="w-[70%]" />
            <div className="bg-purple-300 rounded-xl w-[30%] p-3">
              <div className="w-full h-full rounded-xl border border-gray-800 border-dashed flex flex-col justify-center items-center px-3 gap-4">
                <img src="/images/add.svg" alt="Add" className="w-6" />
                <div className="text-xs font-poppins text-center">
                  Add New Card
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-end">
          <div className="flex gap-6 items-center mb-4">
            <div className="flex gap-3">
              <div className="w-fit px-4 py-1.5 text-xs text-gray-600 bg-gray-100 rounded-full cursor-pointer">
                Expenses
              </div>
              <div className="w-fit px-4 py-1.5 text-xs text-black font-medium bg-purple-300 rounded-full cursor-pointer">
                Income
              </div>
            </div>
            <select
              name="range"
              className="rounded-full bg-gray-100 w-fit py-1.5 pl-3 pr-8 appearance-none bg-no-repeat text-xs focus:outline-none bg-[url('/images/chevron-down.svg')]"
              style={{
                backgroundSize: "10px 10px",
                backgroundPosition: "calc(100% - 10px)",
              }}
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
          <DashboardGraph />
        </div>
      </div>
    </PageContainer>
  );
}
