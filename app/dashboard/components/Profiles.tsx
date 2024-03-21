export const Data = () => {
  return (
    <div className='bg-[#1f1f1f] p-4 rounded-lg shadow-xl shadow-[#A1A1A1]/15'>
      <form className='flex w-full flex-col gap-5'>
        <h3 className='text-2xl text-white py-3 border-b border-white/35'>
          Profile Data
        </h3>
        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Username</p>
          <input
            type='text'
            placeholder='Enter your username'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>

        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Email Address</p>
          <input
            placeholder='Enter your email'
            type='email'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>
        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Phone Number</p>
          <input
            placeholder='Enter your phone number'
            type='number'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>

        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Country</p>
          <input
            placeholder='Enter your country'
            type='number'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>
        <button className='p-3 rounded hover:bg-[#279d80] mt-5 bg-[#00CC99] text-white w-full sm:w-[30%]'>
          Update
        </button>
      </form>
    </div>
  );
};

export const Password = () => {
  return (
    <div className='bg-[#1f1f1f] p-4 rounded-lg shadow-xl shadow-[#A1A1A1]/15'>
      <form className='flex w-full flex-col gap-5'>
        <h3 className='text-2xl text-white py-3 border-b border-white/35'>
          Update Password
        </h3>
        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Current Password</p>
          <input
            type='text'
            placeholder='Enter your current password'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>
        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Update Password</p>
          <input
            type='text'
            placeholder='Enter update password'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>

        <div className='text-white flex flex-col gap-2 w-full'>
          <p>Confirm Update Password</p>
          <input
            placeholder='Enter your confirm update password'
            type='number'
            className='rounded-md p-2.5 w-full flex border outline-none bg-[#1f1f1f] border-white/35'
          />
        </div>
        <button
          type='submit'
          className='p-3 rounded hover:bg-[#279d80] mt-5 bg-[#00CC99] text-white w-full sm:w-[30%]'
        >
          Update
        </button>
      </form>
    </div>
  );
};
