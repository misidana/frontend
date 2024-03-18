import DashboardCard from "@/components/DashboardCard";
import React from "react";
import { FaUsers } from "react-icons/fa6";

const data = [1];
const labels = ["Jan"];
const DashboardPage = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
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
        icon={<FaUsers />}
        desc='Total Bonus'
        percent='0%'
        title='Bonus'
        total={0}
        data={data}
        labels={labels}
      />
      <DashboardCard
        icon={<FaUsers />}
        desc='Total Profits'
        percent='0%'
        title='Profits'
        total={0}
        data={data}
        labels={labels}
      />
      <DashboardCard
        icon={<FaUsers />}
        desc='Total Balance'
        percent='0%'
        title='USD Wallet'
        total={0}
        data={data}
        labels={labels}
      />
    </div>
  );
};

export default DashboardPage;
