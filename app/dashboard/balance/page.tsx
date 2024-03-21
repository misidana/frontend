import React from "react";
import { BuyBalance, HistoryBalance } from "../components/Balances";

const BalancePage = () => {
  return (
    <div className='flex w-full flex-col xl:flex-row gap-6'>
      <div className='w-full xl:w-[30%]'>
        <BuyBalance />
      </div>
      <div className='w-full xl:w-[70%]'>
        <HistoryBalance />
      </div>
    </div>
  );
};

export default BalancePage;
