import Layout from "./Layout";

export const BuyBalance = () => {
  return (
    <Layout title='Buy Balance'>
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
            placeholder='Enter amount min $10'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
          <button
            type='submit'
            className='p-3 rounded hover:bg-[#279d80] mt-5 bg-[#00CC99] text-white w-full'
          >
            Add Balance
          </button>
        </div>
      </form>
    </Layout>
  );
};

export const HistoryBalance = () => {
  return (
    <Layout title='History'>
      <table className='min-w-full text-white/60 rounded my-6'>
        <thead>
          <tr className='border-b'>
            <th className='text-left p-3 px-5'>Date</th>
            <th className='text-left p-3 px-5'>Amount</th>
            <th className='text-left p-3 px-5'>Pay</th>
            <th className='text-left p-3 px-5'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='p-3 px-5'>1</td>
            <td className='p-3 px-5'>John Doe</td>
            <td className='p-3 px-5'>
              30{" "}
              <a
                href=''
                className='text-white bg-yellow-500 p-2 rounded text-sm'
              >
                Payment
              </a>
            </td>
            <td className='p-3 px-5'>Jakarta</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};
