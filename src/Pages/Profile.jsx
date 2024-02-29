import React from "react";
import avatar from "../assets/images/avatar.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div className=" max-w-[1300px] mx-auto flex justify-center items-center ">
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translatex(-50px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
        }}
        className="flex bg-slate-100 flex-col items-end px-20 py-4 text-sm font-semibold tracking-tight text-right text-black rounded-xl bg-slate-50 max-w-[375px]"
      >
        <img
          loading="lazy"
          src={avatar}
          className="self-center ml-5 w-16 aspect-square"
        />
        <div className="self-stretch mt-2 text-base tracking-tighter text-center text-zinc-800">
          salah khenfer
        </div>
        <div className="self-stretch mt-2 text-center text-zinc-400">
          @salahkhenfer{" "}
        </div>
        <div className="mt-10 whitespace-nowrap">الاسم : صلاح الدين </div>
        <div className="mt-5">اللقب : خنفر </div>
        <div className="mt-6">الموقع : ورقلة </div>
        <div className="mt-6 whitespace-nowrap">الرقم : 029000000 </div>
        <div className="mt-5">الايميل : cntic.cntic@gmail.com </div>
        <div className="justify-center self-center p-3 mt-20 text-center text-white whitespace-nowrap bg-violet-600 rounded-lg">
          تسجيل الخروج{" "}
        </div>
      </div>
    </div>
  );
}

export default Profile;
