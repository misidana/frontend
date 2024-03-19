import CopyUrl, { Welcome } from "@/components/CopyUrl";
import DashboardCard from "@/components/DashboardCard";
import React from "react";
import { FaChartLine, FaGift, FaUsers, FaWallet } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const data = [1];
const labels = ["Jan"];
const DashboardPage = () => {
  return (
    <section>
      <CopyUrl />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <DashboardCard
          icon={<FaUsers />}
          desc='Total Refferal'
          percent='0%'
          title='Refferal'
          total={2}
          data={data}
          labels={labels}
        />
        <DashboardCard
          icon={<FaGift />}
          desc='Total Bonus'
          percent='0%'
          title='Bonus'
          total={0}
          data={data}
          labels={labels}
        />
        <DashboardCard
          icon={<GiTakeMyMoney />}
          desc='Total Profits'
          percent='0%'
          title='Profits'
          total={0}
          data={data}
          labels={labels}
        />
        <DashboardCard
          icon={<FaWallet />}
          desc='Total Balance'
          percent='0%'
          title='USD Wallet'
          total={0}
          data={data}
          labels={labels}
        />
      </div>
      <Welcome />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='flex bg-[#1f1f1f] rounded-lg flex-col my-5 text-white w-full shadow-lg shadow-[#A1A1A1]/15'>
          <h2 className='text-xl border-b border-[#A1A1A1]/60 p-3'>
            Latest News
          </h2>
          <p className='text-[#A1A1A1] p-3'>
            Welcome to Suruhanjaya Master Binary Member Panel. <br /> Your
            Refferal Link:
          </p>
        </div>

        <div className='flex bg-[#1f1f1f] rounded-lg flex-col my-5 text-white w-full shadow-lg shadow-[#A1A1A1]/15'>
          <h2 className='text-xl border-b border-[#A1A1A1]/60 p-3'>
            Latest Notifications
          </h2>
          <div>
            <p className='text-[#A1A1A1] p-3'>
              Welcome to Suruhanjaya Master Binary Member Panel. <br /> Your
              Refferal Link:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
