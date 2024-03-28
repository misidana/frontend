"use client";

import { SmallLoading } from "@/components/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [err, setErr] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [origin, setOrigin] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const loc = location.origin;
    setOrigin(loc);
  }, []);

  const findUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const identifier = e.currentTarget.identifier.value;
    if (!identifier) return;
    setIsLoading(true);
    const { data } = await axios.get(
      "/api/user/findacc-by-email/" + identifier
    );
    setIsLoading(false);
    if (data?.success) {
      toast.success("Please check your email");
      sendLink(data?.result?.email, data?.result?.id);
      setIsSending(true);
      return;
    } else {
      setErr(data?.message);
    }
    setIsLoading(false);
  };

  const sendLink = async (email: string, id: string) => {
    const { data } = await axios.post("/api/forget-password", {
      link: `${origin}/reset-password?user=${id}`,
      to: email,
    });
    console.log(data);
  };

  return (
    <section className="bg-[url('/bg-auth.jpg')] bg-no-repeat bg-cover py-[70px] h-screen">
      <div className='flex flex-col items-center justify-center h-full bg-[#000]/40 px-6 mx-auto lg:py-0'>
        <div className='w-full bg-blue-600/70 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
          {isSending && (
            <div className='p-2 rounded-lg bg-green-500 text-white'>
              Check Your Email
            </div>
          )}
          {err && (
            <div className='p-2 rounded-lg bg-red-500 text-white'>{err}</div>
          )}
          <div className='flex flex-col items-center'>
            <img
              className='rounded-full h-[100px] mx-auto w-[100px]'
              src='/logo.png'
              alt='logo'
            />
            <h1 className='text-xl font-bold text-white md:text-2xl'>
              Suruhanjaya Master Binary
            </h1>
          </div>
          <div className='p-6 space-y-4 sm:p-8'>
            <h1 className='text-lg font-bold leading-tight tracking-tight text-white'>
              Find your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={findUser}>
              <div>
                <label className='block mb-2 text-sm font-medium text-white'>
                  email
                </label>
                <input
                  type='email'
                  name='identifier'
                  className='bg-black/30 border focus:outline-none focus:border-red-500 text-white sm:text-sm rounded-lg block w-full p-2.5 focus:p-3 duration-200'
                  placeholder='Enter Your Email'
                  required
                />
              </div>

              <button
                disabled={isLoading}
                type='submit'
                className='w-full disabled:bg-red-700 flex justify-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                {isLoading ? <SmallLoading /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
