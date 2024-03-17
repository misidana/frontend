"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const identifier = e.currentTarget.identifier.value;
    const password = e.currentTarget.password.value;

    const res = await signIn("credentials", {
      identifier: identifier,
      password: password,
      redirect: false,
      callbackUrl: "/dashboard",
    });

    if (res?.status) {
      router.push("/dashboard");
    }
  };

  return (
    <div className='w-full bg-blue-600/70 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
      <div className='flex flex-col items-center'>
        <img
          className='rounded-full h-[100px] mx-auto w-[100px]'
          src='/logo.png'
          alt='logo'
        />
        <h1 className='text-xl font-bold text-white md:text-2xl'>
          Suruhan Jaya MasterBinary
        </h1>
      </div>
      <div className='p-6 space-y-4 sm:p-8'>
        <h1 className='text-lg font-bold leading-tight tracking-tight text-white'>
          Log In to your account
        </h1>
        <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-white'
            >
              Username Or Email
            </label>
            <input
              type='text'
              name='identifier'
              className='bg-black/30 border focus:outline-none focus:border-red-500 text-white sm:text-sm rounded-lg block w-full p-2.5 focus:p-3 duration-200'
              placeholder='John Doe'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-white'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='••••••••'
              className='bg-black/30 border focus:outline-none focus:border-red-500 text-white sm:text-sm rounded-lg block w-full p-2.5 focus:p-3 duration-200'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Login
          </button>
          <p className='text-sm font-light text-gray-300'>
            Don't have an account?{" "}
            <a
              href='/register'
              className='font-medium text-primary-600 hover:underline'
            >
              Sign up here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
