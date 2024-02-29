import React, { useRef } from "react";
import prodact from "../../assets/images/download.jpg";
import { useInView } from "framer-motion";
function Prodect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translatex(-100px)",
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
      }}
      className="mx-auto my-5 relative max-md:flex-col  flex gap-10 border border-grey-100 mx-5 md:px-5 py-10 rounded-lg bg-slate-100 border-gray_white shadow-sm"
    >
      <div className=" w-[48%] max-md:w-fit px-2 max-md:order-2 ">
        <div className="text-2xl font-bold  ">
          {" "}
          كيفية تشغيل مودم اتصالات الجزائر{" "}
        </div>
        <div className="text-xl opacity-80">
          لتشغيل مودم اتصالات الجزائر، أولاً يجب تأكيد توافر الأدوات اللازمة مثل
          الكابلات والتعريفات. بعد ذلك، قم بتوصيل المودم بجهاز الكمبيوتر أو
          الجهاز المتوافق باستخدام الكابل المناسب. قد تتطلب الخطوة الثانية تثبيت
          التعريفات إذا لم يتعرف النظام على المودم تلقائياً، ويمكن ذلك عادةً من
          خلال قرص التعريفات المرفق أو عبر تنزيلها من موقع الشركة المصنعة. بعد
          ذلك، قم بإعداد الاتصال الجديد في إعدادات الشبكة بحسب توجيهات النظام
        </div>
      </div>

      <div ref={ref} className="w-[48%] max-md:w-full ">
        <img className="w-[80%]  mx-auto h-full" src={prodact} alt="" />
      </div>
    </div>
  );
}

export default Prodect;
