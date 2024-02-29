import React from "react";

function Tickets_center() {
    const [clicked, setClicked] = React.useState(false);
    console.log(clicked)

    return <div className="relative w-fit h-full mx-auto p-3 bg-black bg-opacity-5 flex flex-col justify-center items-center gap-5">
        {clicked && (
            <div className="absolute left-[110%] top-0 w-full h-full bg-black">louai</div>
        )}
        <div onClick={() => setClicked(!clicked)} className="flex cursor-pointer justify-center items-center gap-10 border-b border-solid border-black border-opacity-15 p-3">
            <p className="text-[23px]">Ourgla agency</p>
            <p className="text-[23px]">El nacer neighbor hood</p>
        </div>
        <div className="flex cursor-pointer justify-center items-center gap-10 border-b border-solid border-black border-opacity-15 p-3">
            <p className="text-[23px]">Ourgla agency</p>
            <p className="text-[23px]">El nacer neighbor hood</p>
        </div>
        <div className="flex cursor-pointer justify-center items-center gap-10 border-b border-solid border-black border-opacity-15 p-3">
            <p className="text-[23px]">Ourgla agency</p>
            <p className="text-[23px]">El nacer neighbor hood</p>
        </div>
        <div className="flex cursor-pointer justify-center items-center gap-10 border-b border-solid border-black border-opacity-15 p-3">
            <p className="text-[23px]">Ourgla agency</p>
            <p className="text-[23px]">El nacer neighbor hood</p>
        </div>
    </div>;
}

export default Tickets_center;
