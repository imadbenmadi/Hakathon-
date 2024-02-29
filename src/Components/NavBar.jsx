import React, { useEffect, useState } from "react";
import Logo from "../assets/images/download-removebg-preview.png";
import { useNavigate } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
function NavBar() {
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(show);
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
        <>
            {isSmall ? (
                <div className="flex justify-between items-center p-3">
                    <img src={Logo} alt="" className="w-28" />
                    <CiMenuBurger
                        size={50}
                        className="cursor-pointer ml-auto"
                        onClick={() => setShowMenu(!showMenu)}
                    />
                    {showMenu && (
                        <div>
                            <div className="fixed flex justify-center items-center flex-col gap-10 shadow-md top-20 left-0 bg-white w-full h-auto p-5 z-50">
                                {Links.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="text-xl text-gray-600 hover:text-blue-500 transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div
                                className="w-screen h-screen absolute top-0 left-0 z-30"
                                onClick={() => setShowMenu(false)}
                            ></div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full bg-white fixed flex justify-between items-center top-0 left-0 z-30 p-5 shadow-lg">
                    <div className="flex justify-start items-center gap-3">
                        <img src={Logo} alt="" className="w-28" />
                        <p></p>
                    </div>
                    <div className="flex justify-center items-center gap-14">
                        {Links.map((link, index) => (
                            <Link
                                key={index}
                                to={`${link.path}`}
                                className="text-xl text-gray-600 hover:text-blue-500 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <button
                            onClick={() => navigate("/Login")}
                            className="w-32 p-3 bg-blue-500 text-white text-xl rounded-[8px] transition-all duration-300 hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default NavBar;
