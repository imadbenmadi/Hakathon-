import React from "react";
import prodact from "../../assets/images/download.jpg";
function Prodect() {
  return (
    <div className="mx-auto my-5 relative max-md:flex-col  flex gap-10 border border-grey-100 mx-5 md:px-5 py-10 rounded-lg bg-slate-200">
      <div className=" w-[48%] max-md:w-fit px-2 max-md:order-2 ">
        <div className="text-2xl  "> كيفية تشغيل مودم اتصالات الجزائر </div>
        <div className="text-xl">
          لتشغيل مودم اتصالات الجزائر، أولاً يجب تأكيد توافر الأدوات اللازمة مثل
          الكابلات والتعريفات. بعد ذلك، قم بتوصيل المودم بجهاز الكمبيوتر أو
          الجهاز المتوافق باستخدام الكابل المناسب. قد تتطلب الخطوة الثانية تثبيت
          التعريفات إذا لم يتعرف النظام على المودم تلقائياً، ويمكن ذلك عادةً من
          خلال قرص التعريفات المرفق أو عبر تنزيلها من موقع الشركة المصنعة. بعد
          ذلك، قم بإعداد الاتصال الجديد في إعدادات الشبكة بحسب توجيهات النظام
          الخاص بك، وادخل المعلومات المطلوبة مثل اسم المستخدم وكلمة المرور
          المقدمة من شركة الاتصالات. بمجرد إتمام عملية الاتصال، يمكنك فتح متصفح
          الويب والتأكد من الاتصال الناجح بالإنترنت. هذه الخطوات تعد الطريقة
          الأساسية لتشغيل مودم اتصالات الجزائر والاستمتاع بالاتصال بالإنترنت بكل
          سهولة ويسر.
        </div>
      </div>

      <div className="w-[48%] max-md:w-full ">
        <img className="w-[80%]  mx-auto h-full" src={prodact} alt="" />
      </div>
    </div>
  );
}

export default Prodect;
