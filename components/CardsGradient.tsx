import React from "react";

const CardsGradient = () => {
  return (
    <section className='flex flex-col gap-10 pb-10'>
      <h2 className='text-center text-white text-3xl font-bold'>
        Our Invesment Plan
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        <div className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-white mb-4'>Total Refferal</h2>
          <p className='text-white'>20</p>
        </div>
        <div className='w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-white mb-4'>Total Refferal</h2>
          <p className='text-white'>20</p>
        </div>
        <div className='w-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-white mb-4'>Total Refferal</h2>
          <p className='text-white'>20</p>
        </div>
        <div className='w-full bg-gradient-to-r from-green-500 to-sky-600 rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-white mb-4'>Total Refferal</h2>
          <p className='text-white'>20</p>
        </div>
      </div>
    </section>
  );
};

export default CardsGradient;
