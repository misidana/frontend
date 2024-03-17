"use client";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import { COLORS } from "./Colors";
import Dropdown from "./Dropdown";

import { usePathname } from "next/navigation";

const AdminSidebar = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) => {
  const [showNav, setShowNav] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <button
        onClick={() => setShowNav(true)}
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        className={
          showNav
            ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0"
            : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
      >
        <div
          className={`h-full px-3 py-4 overflow-y-auto bg-[#232A34] shadow-xl`}
        >
          <div className='flex justify-center items-center flex-col bg-[#333c49] p-5 rounded-lg my-6'>
            <h2 className='text-white mb-4 text-center'>
              Welcome {pathName.includes("admin") ? "Admin" : "User"}
            </h2>
            <img
              className='w-10 h-10 mb-3 rounded-full'
              src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              alt='user photo'
            />
            <h3 className='text-white'>{session?.user?.name}</h3>
          </div>
          <ul className='space-y-5 font-medium'>
            <li>
              <Link
                href='/dashboard'
                className='flex items-center p-2 text-white/70 hover:text-white rounded-lg group hover:bg-white/10'
              >
                <svg
                  className='w-5 h-5 transition duration-75'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span className='ms-3'>Dashboard</span>
              </Link>
            </li>
            <Dropdown
              Menus={Menus}
              Title='Balance'
              onPress={() => setShowNav(false)}
            />
            <li>
              <Link
                href=''
                className='flex items-center p-2 text-white/70 hover:text-white rounded-lg group hover:bg-white/10'
              >
                <svg
                  className='flex-shrink-0 w-5 h-5 transition duration-75 transform rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 16'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3'
                  />
                </svg>
                <span className='flex-1 ms-3 whitespace-nowrap'>Log Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className='p-3 bg-slate-100/70 sm:ml-64 h-screen'>{children}</div>
      {showNav && (
        <div
          onClick={() => setShowNav(false)}
          className='w-full h-screen overflow-hidden bg-black/40 absolute top-0 right-0'
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
const Menus = [
  { name: "Home", url: "/" },
  { name: "Balance", url: "/balance" },
];
