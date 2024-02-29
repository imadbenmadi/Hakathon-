import React from "react";
import { useNavigate } from "react-router";
import agency from './data'
function Tickets_center() {
    const [selectedAgency, setSelectedAgency] = React.useState(null);
    const navigate = useNavigate();
    const handleAgencyClick = (id) => {
        setSelectedAgency(id);
        navigate(`/Tickets/Center/${id}`);
    };
    return (
        <div className="relative w-fit h-full mx-auto p-3 bg-black bg-opacity-5 flex flex-col justify-center items-center gap-5">
            {agency.map((item, index) => (
                <div key={index} className="w-full h-20 bg-white bg-opacity-50 rounded-lg flex justify-between items-center gap-5 p-3">
                    <div className="flex justify-start items-start flex-col">
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                    </div>
                    <button onClick={() => handleAgencyClick(item.id)} className="w-20 h-10 bg-blue-500 rounded-lg text-white">Select</button>
                </div>
            ))}
        </div>
    );
}

export default Tickets_center;
