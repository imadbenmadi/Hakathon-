import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiClock1 } from "react-icons/ci";

import { useAppContext } from "../Context/AppContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { MdOutlineDone } from "react-icons/md";
function Tickets_tech() {

    const { isAuth } = useAppContext();
    const Navigate = useNavigate();
    
   
    useEffect(() => {
        if(!isAuth){
            Navigate("/Login");
        }
    }, []);
    const [number, setNumber] = useState(0);
    const IncrementNumber = () => {
        setNumber(number + 1);
    };
    setTimeout(() => {
        IncrementNumber();
    }, 10000);
    // get the status from the api
    const [status, setStatus] = React.useState("pending");
    // write a function to change the status in the ui
    return (
        <div className="flex flex-col justify-center items-center w-full p-10 gap-1">
            <Link
                to="/bookTicket"
                className="w-32 p-3 bg-green text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105"
            >
                Book Ticket
            </Link>
            <p className="text-[23px] my-10">Current Booked Tiket</p>
            <div className="w-auto h-auto rounded-md bg-black bg-opacity-5 flex flex-col p-1 md:p-3">
                <p className="text-xl md:text-4xl  mx-auto">
                    Alger Telecome Ouargla
                </p>
                <div className="flex flex-wrap justify-center items-center p-3 gap-5">
                    <p className="text-[200px]">{number}</p>
                    <div className="flex flex-col justify-start gap-5 items-center">
                        <p
                            className={`${
                                status == "pending"
                                    ? "bg-[#9b59b6]"
                                    : "bg-[#30cb83]"
                            } flex justify-center items-center gap-5 w-32 p-3 text-xl rounded-[8px] text-center  text-[22px] text-white`}
                        >
                            {status}
                            {status == "pending" ? (
                                <CiClock1 className="w-20" />
                            ) : (
                                <MdOutlineDone className="w-20" />
                            )}
                        </p>
                        <button className="w-32 p-3 bg-red-500 text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets_tech;
