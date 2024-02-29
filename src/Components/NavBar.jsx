import React from "react";
import Logo from "../assets/images/download-removebg-preview.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function NavBar() {
    const navigate = useNavigate();
    const Links = [
        {
            name: "التذاكر",
            path: "/Tickets/Tech",
        },
        {
            name: "تعليق",
            path: "/Feedback",
        },
        {
            name: "الاسئلة الشائعة",
            path: "/FAQ",
        },
        {
            name: "المنتوجات الجديدة",
            path: "/NewProduct",
        },
    ];
    return (
        <div className="w-full h-[10%] bg-white fixed flex justify-between items-center top-0 left-0 z-50 p-5 shadow-lg">
            {/* logo */}
            <div className="flex justify-start items-center gap-3">
                <img src={Logo} alt="" className="w-28" />
                <p></p>
            </div>
            {/* links */}
            <div className="flex justify-center items-center gap-5">
                {Links.map((link, index) => (
                    <Link
                        to={`${link.path}`}
                        key={index}
                        // href={link.path}
                        className="text-xl text-gray-600 hover:text-blue-500 transition-all duration-300"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            {/* auth */}
            <div>
                <button
                    onClick={() => navigate("/Login")}
                    className="w-32 p-3 bg-blue-500 text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default NavBar;
