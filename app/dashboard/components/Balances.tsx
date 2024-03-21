"use client";
import { useUpload, useUserStore } from "@/lib/zustand";
import Layout from "./Layout";
import UploadForm from "./UploadImage";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import Loading from "@/components/Loading";

export const BuyBalance = () => {
  const { user } = useUserStore();
  const { imgUrl } = useUpload();
  const [amount, setAmount] = useState("");

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post("/api/transactions/deposit", {
        username: user?.username,
        image: imgUrl,
        amount: parseInt(amount),
      });
      if (data?.success) {
        toast.success("Buy balance is process");
        window.location.href = "/dashboard/transactions/history";
        return;
      }
      toast.error(data?.message);
      return data;
    },
  });

  return (
    <Layout title='Buy Balance'>
      {isPending && <Loading />}
      <form>
        <div className='text-white flex flex-col gap-2 w-full'>
          <div className='p-2 text-sm bg-red-500 text-white rounded-lg'>
            You still have a transaction pending status. Wait until the
            transaction is processed in order to be able to buy USD balance
            again.
          </div>
          <p className='text-sm'>Amount</p>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount min $10'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
          <div className='my-3'>
            payment screenshot:
            <UploadForm />
          </div>
          <button
            onClick={() => {
              if (amount.includes("-")) {
                toast.error("Amount is not a valid number");
                return null;
              }
              mutate();
            }}
            type='button'
            className='p-3 rounded hover:bg-[#279d80] mt-5 bg-[#00CC99] text-white w-[20%] max-lg:w-full'
          >
            Add Balance
          </button>
        </div>
      </form>
    </Layout>
  );
};

// export const HistoryBalance = ({}) => {
//   const [deposit, setDeposit]
//   return (
//     <Layout title='History'>
//       <table className='min-w-full text-white/60 rounded my-6'>
//         <thead>
//           <tr className='border-b'>
//             <th className='text-left p-3 px-5'>Date</th>
//             <th className='text-left p-3 px-5'>Amount</th>
//             <th className='text-left p-3 px-5'>Pay</th>
//             <th className='text-left p-3 px-5'>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className='border-b'>
//             <td className='p-3 px-5'>1</td>
//             <td className='p-3 px-5'>John Doe</td>
//             <td className='p-3 px-5'>
//               30{" "}
//               <a
//                 href=''
//                 className='text-white bg-yellow-500 p-2 rounded text-sm'
//               >
//                 Payment
//               </a>
//             </td>
//             <td className='p-3 px-5'>Jakarta</td>
//           </tr>
//         </tbody>
//       </table>
//     </Layout>
//   );
// };
