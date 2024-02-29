import React from "react";
import rowaBlue from "../../assets/images/akar-icons_chevron-right-blue.svg";
import rowa from "../../assets/images/akar-icons_chevron-right.svg";
function FaqLine({ text, color, status }) {
  return (
    <div className="w-full h-16 px-4 py-6 bg-white shadow flex-col justify-start items-start inline-flex">
      <div className="justify-center items-center gap-6 inline-flex">
        <div className="justify-start items-start gap-4 flex">
          <div className={`w-6 h-6 ${color}  rounded-full`} />
          <div className="w-96 text-red text-base font-normal font-['Inter'] leading-normal">
            {text}{" "}
          </div>
        </div>
        <div className="w-6 h-6 relative">
          {status ? <img src={rowaBlue} alt="" /> : <img src={rowa} alt="" />}
        </div>
      </div>
    </div>
  );
}

export default FaqLine;
