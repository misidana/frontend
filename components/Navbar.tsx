import React from "react";

const Navbar = () => {
  return (
    <header className='absolute top-0 w-full'>
      <nav className='bg-gray-900 py-5'>
        <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
          <a href='#' className='flex items-center'>
            <img
              src='/logo.png'
              className='mr-3 max-lg:hidden h-16'
              alt='Landwind Logo'
            />
            <span className='text-xl max-lg:ml-5 font-semibold whitespace-nowrap text-white'>
              Suruhan Jaya Masterbinary
            </span>
          </a>
          <div className='lg:flex hidden items-center lg:order-2'>
            <a
              href='#'
              className='text-white ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800'
            >
              Log in
            </a>
            <a
              href='https://themesberg.com/product/tailwind-css/landing-page'
              className='text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-blue-600 focus:outline-none focus:ring-blue-800'
            >
              Register
            </a>
          </div>
          <div className='flex items-center justify-between w-full lg:hidden'>
            <img src='/logo.png' className='mr-3 h-16' alt='Landwind Logo' />
            <button
              data-collapse-toggle='mobile-menu-2'
              type='button'
              className='inline-flex items-center p-2 ml-auto mt-2 text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2 bg-gray-700 focus:ring-gray-600'
              aria-controls='mobile-menu-2'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 text-white'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
