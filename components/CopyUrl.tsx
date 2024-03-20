"use client";
import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";

const CopyUrl = () => {
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const copyLink = () => {
    const textToCopy = document?.getElementById("textToCopy")?.innerText;

    navigator.clipboard
      .writeText(textToCopy as any)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Unable to copy text: ", error);
      });
  };
  return (
    <div className='flex mb-5 items-center text-white lg:w-[40%]'>
      <div className='p-3 bg-[#1f1f1f] text-sm rounded-l-lg border border-[#A1A1A1]/60'>
        <p id='textToCopy'>{origin}</p>
      </div>
      <div
        onClick={copyLink}
        className='p-3 bg-[#00CC99] hover:bg-[#00CC99]/80 cursor-pointer rounded-r-lg gap-2 flex'
      >
        <p className='text-sm'>Copy Reff URL</p>
        <FaCopy />
      </div>
    </div>
  );
};

export default CopyUrl;

export const Welcome = () => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);
  return (
    <div className='flex bg-[#1f1f1f] rounded-lg flex-col mb-3 mt-5 text-white w-full shadow-lg shadow-[#A1A1A1]/15'>
      <h2 className='text-xl border-b border-[#A1A1A1]/60 p-3'>Welcome</h2>
      <p className='text-[#A1A1A1] p-3'>
        Welcome to Suruhanjaya Master Binary Member Panel. <br /> Your Refferal
        Link:
      </p>
      <h2 className='text-lg lg:text-2xl text-[#A1A1A1] p-3'>{origin}</h2>
    </div>
  );
};
