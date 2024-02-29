import React from "react";

function FaqAnsewar() {
  return (
    <div className="w-full h-96 pl-36 pr-8 pt-10 pb-3.5 bg-slate-50 rounded-2xl shadow justify-end items-center inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-10 inline-flex">
        <div className="w-96 text-zinc-900 text-lg font-bold font-['Inter'] leading-7">
          Do I need to pay to Instapay even when there is no transaction going
          on in my business?
        </div>
        <div className="w-96 h-80 text-black text-base font-normal font-['Inter'] leading-normal">
          No, you do not need to pay Instapay where there is no transaction
          happening. With one of the lowest transaction charges in the industry,
          pay only when you get paid!
        </div>
      </div>
    </div>
  );
}

export default FaqAnsewar;
