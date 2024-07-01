import NumberCard from "../components/NumberCard";
import ActivityChart from "../components/ActivityChart";
import Invoices from "../components/Invoices";
import AvailableBalances from "../components/AvailableBalances";
import RecentActivity from "../components/RecentActivity";
import PageContainer from "../components/PageContainer";

export default function InvoiceOverview() {
  return (
    <PageContainer>
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
    </PageContainer>
  );
}
