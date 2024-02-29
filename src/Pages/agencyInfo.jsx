import React, { useState } from "react";
import { useParams } from "react-router";
import agency from './data';

function AgencyInfo() {
    const { id } = useParams();
    const selectedAgency = agency.find((item) => item.id === parseInt(id, 10));
    const [number, setNumber] = useState(0)
    const IncrementNumber = () => {
        setNumber(number + 1)
    }
    setTimeout(() => {
        IncrementNumber();
    }, 10000);
    if (!selectedAgency) {
        return <div>Agency not found</div>;
    }
    return <div className="flex flex-col justify-center items-center w-full p-10 gap-1">
        <p className="text-[23px] my-10">Current Booked Tiket</p>
        <div className="w-auto h-auto rounded-md bg-black bg-opacity-5 flex flex-col p-1 md:p-3">
            <p className="text-xl md:text-4xl  mx-auto">{selectedAgency.name}</p>
            <div className="flex flex-wrap justify-center items-center p-3 gap-5">
                <p className="text-[200px]">{number}</p>
            </div>
        </div>
    </div>;
}

export default AgencyInfo;