"use client";
import { useUserStore } from "@/lib/zustand";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import {
  MdNotificationsActive,
  MdOutlineCircleNotifications,
} from "react-icons/md";

const IconsNav = () => {
  const { user } = useUserStore();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotif = async () => {
      const { data } = await axios.get("/api/notifications/" + user?.username);
      setNotifications(data?.result);
    };
    if (user) {
      getNotif();
    }
  }, [user]);
  return (
    <div className='flex items-center gap-3'>
      {/* <div className='text-2xl hover:bg-[#3ab093] relative rounded-lg cursor-pointer p-3 text-white'>
        <MdNotificationsActive />
        <div className='w-[300px] flex flex-col text-center text-white/70 p-3 rounded-lg border border-white/40 right-0 bottom-[-200%] bg-[#1f1f1f] shadow-lg shadow-[#A1A1A1]/15 absolute'>
          <div>You Have {notifications.length} Notifications</div>
          {notifications.map((notif: any) => (
            <div className='flex items-center border border-white/20 gap-4 rounded-lg p-2'>
              <div className='p-2 rounded-md text-3xl text-white bg-blue-500'>
                <MdOutlineCircleNotifications />
              </div>
              <div>
                <h3 className='font-bold'>{notif.sender}</h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className='p-2 rounded-full cursor-pointer text-white text-xl bg-yellow-500'>
        <FaUser />
      </div>
    </div>
  );
};

export default IconsNav;
