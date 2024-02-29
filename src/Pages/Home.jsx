import React, { useRef } from "react";
import homePage from "../assets/images/homePage.png";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
      <div
          ref={ref}
          className="flex md:py-20   justify-between items-center w-screen max-w-[1300px] mx-auto max-md:flex-col"
      >
          <div
              style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : "translatex(-50px)",
                  transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
              }}
              className="w-[48%] max-md:w-screen   "
          >
              <img src={homePage} alt="" />
          </div>
          <div
              style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : "translatex(50px)",
                  transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
              }}
              className="w-[48%] max-md:w-screen  max-md:px-5   "
          >
              <div className="w-full text-right max-md:text-3xl  my-5 leading-30  text-blue-300 text-5xl font-extrabold font-['Cairo'] ">
                  مشروع تحسين خدمة الزبائن{" "}
              </div>
              <div className=" h-fit  max-md:py-5 text-right max-md:text-xl text-black text-opacity-50 text-2xl font-medium font-['Cairo'] leading-10">
                  هذا المشروع يعتبر موقعًا إلكترونيًا يهدف إلى تعزيز العلاقة بين
                  الشركة والعملاء، حيث يهدف إلى تقريب المستخدمين من الشركة من
                  خلال تسهيل عملية التنقل وتوفير وقتهم الثمين. يوفر الموقع
                  ترتيبًا مبسطًا للخدمات المقدمة والوقت المتبقي لخدمة العميل،
                  بالإضافة إلى شروحات لمنتجاتنا الجديدة. كما يتيح الموقع
                  للمستخدمين إمكانية تقديم تعليقات في حالة عدم الرضا عن الخدمة
                  المقدمة.
              </div>

              <Link
                  to="/Tickets/Tech"
                  className=" mx-auto float-right  my-10 py-5 px-10 w-fit text-white bg-blue-400 rounded-lg text-center text-xl font-bold"
              >
                  جرب الأن
              </Link>
          </div>
      </div>
  );
}

export default Home;
