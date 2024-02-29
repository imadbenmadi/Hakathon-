import { useRef, useState } from "react";

import arrowdonw2 from "../../assets/images/akar-icons_chevron-right.svg";
import { useInView } from "framer-motion";

const Fqadw = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translatex(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
      }}
      className="rounded-[3px] max-md:mx-2 max-md:px-2 my-5 mx-auto bg-zinc-100 py-5 md:px-20 duration-500"
    >
      <button
        className={`w-full flex items-center  justify-end gap-4 hover:bg-gray-300 md:px-7 md:py-[17px]  bg-zinc-100 rounded-[3px]${
          isOpen ? "rounded-[3px]" : ""
        }`}
        onClick={toggleAccordion}
      >
        <div
          className={`transform duration-300 rotate-180 mr-auto ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <img src={arrowdonw2} alt="up" />
        </div>
        <div className="text-right text-zinc-700 text-lg">
          كيف اقوم باعادة استعادة تدوير المودام ؟
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all flex justify-end flex-col ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        {/* {content.map((e, index) => {
          if (type === Type.freeCourse) {
            if (e.url !== undefined)
              return (
                <button
                  onClick={() => {
                    if (e.url === undefined) {
                      router.push(false_url)
                    }
                    else { router.push(${true_url}${e.id}) }
                    //TODO: this is not solution 
                    setTimeout(() => { setRender!(false) }, 2000)
                  }}
                  key={index}
                  className="px-7 py-[17px] bg-neutral-50 rounded-[3px] flex justify-end items-end text-right gap-4"
                >
                  <p>{e.title}</p>
                  <RxVideo size={25} />
                </button>
              )
          } else
            return (
              <button
                onClick={() => {
                  if (e.url === undefined) {

                    router.push(false_url)
                  }
                  else { router.push(${true_url}${e.id}) }
                  //TODO: this is not solution 
                  setTimeout(() => { setRender!(false) }, 2000)

                }}
                key={index}
                className="px-7 py-[17px] bg-neutral-50 rounded-[3px] flex text-right justify-end items-end gap-4"
              >
                <p>{e.title}</p>
                <RxVideo size={25} />
              </button>
            )
        })} */}
        لإعادة تدوير المودم، يمكن اتباع الخطوات التالية: قم بفصل سلك الكهرباء من
        مأخذ الطاقة الخاص بالمودم، ثم انتظر لمدة 30 ثانية إلى دقيقة واحدة للسماح
        بتفريغ أي طاقة متبقية في المودم. بعد ذلك، قم بإعادة توصيل سلك الكهرباء
        بمأخذ الطاقة لإعادة تشغيل المودم. انتظر حتى يبدأ المودم في التشغيل بشكل
        كامل، قد تستغرق هذه العملية بضع دقائق. بمجرد أن يكون المودم مشغّلًا
        بالكامل ويعمل بشكل صحيح، يمكنك محاولة الاتصال بالإنترنت للتأكد من أن
        الإعادة تمت بنجاح. للتأكد من أن الإعادة تمت بنجاح. للتأكد من أن الإعادة
        تمت بنجاح.
      </div>
    </div>
  );
};

export default Fqadw;
