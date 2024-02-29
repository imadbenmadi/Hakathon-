import React from "react";
import { Link } from "react-router-dom";

function Tickets_tech() {
    // get the status from the api
    const [status, setStatus] = React.useState('Pending')
    // write a function to change the status in the ui
    return <div className="flex flex-col justify-center items-center w-full p-10 gap-10">
        <Link to='/bookTicket' className='w-32 p-3 bg-green-500 text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105'>Book Ticket</Link>
        <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-[23px]">Curretn Booked Tikets</p>
            <div className="flex justify-center items-center gap-5 rounded-md shadow-lg p-32 border border-solid border-black border-opacity-5">
                {/* ticket number */}
                <p className="w-32 h-32 text-white bg-black bg-opacity-50 text-[23px]  flex justify-center items-center">
                    30
                </p>
                {/* agency info */}
                <div className="flex flex-col justify-start items-start gap-5 p-1">
                    {/* agency name */}
                    <p className="text-[23px]">Alger Telecome Ouargla</p>
                    {/* ticket status */}
                    <p className={`${status == 'pending' ? 'text-[#9b59b6]' : 'text-[#30cb83] text-[22px]'}`}>{status}</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Tickets_tech;
