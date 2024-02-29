import React from "react";
import homePage from "../assets/images/homePage.png";
function Home() {
  return (
    <div className="flex md:py-20   justify-between items-center w-screen max-w-[1300px] mx-auto max-md:flex-col">
      <div className="w-[48%] max-md:w-screen  ">
        <img src={homePage} alt="" />
      </div>
      <div className="w-[48%] max-md:w-screen  max-md:px-5  ">
        <div className="w-full text-right max-md:text-3xl   text-blue-300 text-5xl font-extrabold font-['Cairo'] leading-10">
          مشروع تحسين خدمات المستخدمين{" "}
        </div>
        <div className=" h-fit  max-md:py-5 text-right max-md:text-xl text-black text-opacity-50 text-2xl font-medium font-['Cairo'] leading-10">
          يهدف هذا المسروع الى تعزيز العلاقة بين الشركة والذي يقوم بدوره على
          تقريب المستخدمين من الشركة بحيث يعمل على تسهيل عملية التنقل من خلال
          توفير طريقة عملية والتي تقوم على توفير وقتك عزيزي المستخدم من خلال
          اضهار ترتيبك والوقت المتبقي لخدمتك وكذالك بعض الشروحات لمنتجاتنا
          الجديدة وايضا يمكنك ترك تعليق لنا في حالة لم تعجبك الخدمة{" "}
        </div>

        <div className=" max-md:mx-auto px-10 py-3 w-fit text-white bg-blue-400 rounded-lg text-center text-xl font-bold">
          جرب الأن
        </div>
      </div>
    </div>
  );
}

export default Home;
