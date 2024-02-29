import React from "react";
import avatar from "../assets/images/avatar.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router";

function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const { first_name, last_name, home_number } = useAppContext();

  return (
      <div className=" max-w-[1300px] mx-auto flex justify-center items-center ">
          <div
              ref={ref}
              style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : "translatex(-50px)",
                  transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
              }}
              className="flex bg-slate-100 flex-col items-end px-20 py-4 text-sm font-semibold tracking-tight text-right text-black rounded-xl bg-slate-50 max-w-[375px]"
          >
              <img
                  loading="lazy"
                  src={avatar}
                  className="self-center ml-5 w-16 aspect-square"
              />
              <div className="self-stretch mt-2 text-base tracking-tighter text-center text-zinc-800">
                  {first_name} {last_name}
              </div>
              <div className="self-stretch mt-2 text-center text-zinc-400">
                  @first_name{" "}
              </div>
              <div className="mt-10 whitespace-nowrap">
                  الاسم : {first_name}{" "}
              </div>
              <div className="mt-5">اللقب : {last_name} </div>
              <div className="mt-6">الموقع : ورقلة </div>
              <div className="mt-6 whitespace-nowrap">
                  الرقم المنزلي : {home_number}{" "}
              </div>
              <div className="mt-5">الايميل : cntic.cntic@gmail.com </div>
              <div className="justify-center self-center p-3 mt-20 text-center text-white whitespace-nowrap bg-violet-600 rounded-lg">
                  تسجيل الخروج{" "}
              </div>
          </div>
      </div>
  );
}

export default Profile;
