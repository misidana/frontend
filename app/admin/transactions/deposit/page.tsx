import React from "react";
import prisma from "@/lib/prisma";
import Layout from "@/app/dashboard/components/Layout";
import { AccDeposit, DelDeposit } from "../../components/Actions";

const HIstoryDepositPage = async () => {
  const history = await prisma.deposit.findMany();
  return (
    <Layout title='Semua History Transaksi'>
      <table className='w-full text-white/60 rounded my-6 overflow-x-scroll'>
        <thead>
          <tr className='border-b'>
            <th className='text-left p-3 px-5'>Date</th>
            <th className='text-left p-3 px-5'>Username</th>
            <th className='text-left p-3 px-5'>Amount</th>
            <th className='text-left p-3 px-5'>Bukti pay</th>
            <th className='text-left p-3 px-5'>Status</th>
            <th className='text-left p-3 px-5'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {history.map((his, idx) => (
            <tr key={idx} className='border-b'>
              <td className='p-3 px-5'>{his.createdAt.toLocaleDateString()}</td>
              <td className='p-3 px-5'>${his.username}</td>
              <td className='p-3 px-5'>${his.amount}</td>
              <td className='p-3 px-5'>
                <img src={his.image} alt='bukti' />
              </td>
              <td className='p-3 px-5'>{his.status ? "Success" : "Pending"}</td>
              <td className='p-3 px-5'>
                <div className='flex'>
                  <AccDeposit id={his.id} />
                  <DelDeposit id={his.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default HIstoryDepositPage;
