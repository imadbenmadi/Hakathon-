import React from "react";
// import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
function Login() {
    const { set_Auth, store_login, isAuth, IsEmailVerified, Notifications } =
        useAppContext();
    const Navigate = useNavigate();
    const [showpassword, setShowpassword] = useState(false);

    function handleShowpassword() {
        setShowpassword(!showpassword);
    }

    async function handleLogin(values, { setSubmitting }) {
        try {
            let response = await Axios.post(
                "https://reasonably-thorough-monitor.ngrok-free.app/Auth/token/",
                values,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log(response);
            if (response.status === 400) {
                // throw new Error(" رقم الهاتف او كلمة المرور غير صحيحة");
                setLoading(false);
                Swal.fire(
                    "خطأ!",
                    "رقم الهاتف او كلمة المرور غير صحيحة",
                    "error"
                );

            }
            else if (response.status === 200) {
                Swal.fire("تم!", "تم تسجيل الدخول بنجاح", "success");

                store_login({
                    first_name: response.data.user.first_name,
                    last_name: response.data.user.last_name,
                    home_number: response.data.user.username,  
                    // address: response.data.user.address, 
                    id: response.data.user.id,
                });

                localStorage.setItem("token", response.data.user.token);
                set_Auth(true);
                Navigate("/");
            } 
            else {
                Swal.fire("خطأ!", "حدث خطأ ما", "error");
            }
        } catch (error) {
            setLoading(false);
            Swal.fire("خطأ!", "حدث خطأ ما", "error");
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    }

    return (
        <div className=" text-end">
            <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                تسجيل الدخول الى حسابك
            </div>

            <div className=" m-auto text-center pt-1 text-lg font-semibold text-gray ">
                اتصالات الجزائر دائما اقرب
            </div>
            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        // Validate username
                        if (!values.username) {
                            errors.username = "الرقم اجباري";
                        } else if (!/^\d+$/.test(values.username)) {
                            errors.username = "رقم غير صالح";
                        }

                        // Validate password
                        if (!values.password) {
                            errors.password = "كلمة المرور اجبارية";
                        } else if (values.password.length < 8) {
                            errors.password =
                                "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // Call your registration logic here
                        handleLogin(values, { setSubmitting });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="  flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div>
                                <div>
                                    رقم هاتف منزلك 
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="text"
                                    name="username"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full outline-none"
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>
                                    كلمة السر{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <div className=" flex items-center">
                                    <div className=" px-2 py-1 rounded-e cursor-pointer border border-gray_white shadow-sm ">
                                        {showpassword ? (
                                            <IoMdEyeOff
                                                className="text-gray text-xl md:text-2xl"
                                                onClick={handleShowpassword}
                                            />
                                        ) : (
                                            <IoMdEye
                                                className=" text-gray text-xl md:text-2xl"
                                                onClick={handleShowpassword}
                                            />
                                        )}
                                    </div>
                                    <Field
                                        type={
                                            showpassword ? "text" : "password"
                                        }
                                        name="password"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-2 py-1 rounded-s shadow-sm w-full outline-none"
                                    />
                                </div>

                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>

                            <button
                                type="submit"
                                className={` ${
                                    isSubmitting
                                        ? "bg-gray_white text-gray"
                                        : " bg-green text-white"
                                } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div>جار التحميل</div>
                                ) : (
                                    "تسجيل الدخول"
                                )}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="text-center mt-4 text-black_text">
                ليس لديك حساب؟{" "}
                <Link
                    to={"/Register"}
                    className="text-green font-semibold cursor-pointer"
                >
                    سجل الآن
                </Link>
            </div>
        </div>
    );
}

const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default Login;
