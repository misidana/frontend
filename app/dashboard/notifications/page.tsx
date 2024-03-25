import React from "react";
import Layout from "../components/Layout";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/nextauth";
import { BASE_URL } from "@/lib/Constant";

const NotificationsPage = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    BASE_URL + "/api/notifications/" + session?.user?.name
  );
  const data = await res.json();
  const history = data?.result;

  return (
    <Layout title='All Notifications'>
      <table className='w-full text-white/60 rounded my-6 overflow-x-scroll'>
        <thead>
          <tr className='border-b'>
            <th className='text-left p-3 px-5'>Date</th>
            <th className='text-left p-3 px-5'>From</th>
            <th className='text-left p-3 px-5'>Description</th>
          </tr>
        </thead>
        <tbody>
          {history.map((his: any, idx: number) => (
            <tr key={idx} className='border-b'>
              <td className='p-3 px-5'>{his?.date?.slice(1, -16)}2024</td>
              <td className='p-3 px-5'>{his?.sender}</td>
              <td className='p-3 px-5'>{his?.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default NotificationsPage;
