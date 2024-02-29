import React from "react";
// import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
// import { handleRegistration } from "./handleRegistration";
import { useEffect } from "react";
// import VerifyEmail from "./VerifyEmail";
import Axios from "axios";
import Swal from "sweetalert2";

function Register() {
    async function handleRegistration(
        values,
        { setSubmitting, setSucced_Register, setVerifyId, set_rigester_Date }
    ) {
        try {
            let response = await Axios.post(
                "https://reasonably-thorough-monitor.ngrok-free.app/Auth/Sign_Up/",
                values,
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );

            if (response.status == 401) {
                Swal.fire(
                    "البريد الإلكتروني موجود بالفعل",
                    `الرجاء استخدام بريد إلكتروني آخر , ${response.data.message}`,
                    "error"
                );
            } else if (response.status == 200) {
                setVerifyId(response.data._id);
                set_rigester_Date(response.data.Date);
                setSucced_Register(true);
            } else if (response.status == 400) {
                Swal.fire("خطأ!", `${response.data.message} `, "error");
            } else if (response.status == 409) {
                Swal.fire("خطأ!", `${response.data.message}`, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "خطأ!",
                    `تحذير! لقد أنشأت الكثير من الحسابات في وقت قصير ، جرب مرة أخرى لاحقًا`,
                    "error"
                );
            } else if (response.status == 500) {
                Swal.fire("خطأ!", `خطأ في الخادم الداخلي.`, "error");
            } else {
                Swal.fire(
                    "خطأ!",
                    `حدث خطأ ما. الرجاء المحاولة مرة أخرى `,
                    "error"
                );
            }
        } catch (error) {
            Swal.fire(
                "خطأ!",
                `حدث خطأ ما. الرجاء المحاولة مرة أخرى , ${error.message}`,
                "error"
            );
        }

        setSubmitting(false);
    }

    const [open_verify, setOpen_verify] = useState(false);
    const [Verify_id, setVerifyId] = useState(null);
    const [Verify_email, setVerifyEmail] = useState("");
    const [Verify_Password, setVerifyPassword] = useState("");
    const [rigester_Date, set_rigester_Date] = useState(null);
    const [Succed_Register, setSucced_Register] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    useEffect(() => {
        if (Succed_Register) {
            setOpen_verify(true);
        }
    }, [Succed_Register]);

    return (
        <div>
            {!open_verify && (
                <div>
                    <div>
                        {/* <img className=" w-20 m-auto pt-5 " src={Logo} alt="" /> */}
                    </div>
                    <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                        إنشاء حسابك الجديد
                    </div>

                    <div className=" m-auto text-center pt-1 text-lg font-semibold text-gray ">
                        اتصالات الجزائر دائما اقرب
                    </div>
                    {/* input fields */}
                    <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                        <div className=" text-lg font-semibold mb-4 "></div>

                        <Formik
                            initialValues={{
                                FirstName: "",
                                LastName: "",
                                PersonalPhoneNumber: "",
                                HomePhoneNumber: "",
                                Email: "",
                                Password: "",
                                Age: "",
                                Gender: "male",
                            }}
                            validate={(values) => {
                                const errors = {};
                                // Validate First Name
                                if (!values.FirstName) {
                                    errors.FirstName = "الاسم الأول اجباري";
                                } else if (values.FirstName > 14)
                                    errors.FirstName =
                                        "يجب أن يكون الاسم الأول أقل من 14 حرفًا";
                                else if (values.FirstName < 3)
                                    errors.FirstName =
                                        "يجب أن يكون الاسم الأول أكثر من 3 أحرف";
                                if (!values.LastName) {
                                    // Validate Last Name
                                    errors.LastName = "الاسم الأخير اجباري";
                                } else if (values.LastName > 14) {
                                    ("يجب أن يكون الاسم الأخير أقل من 14 حرفًا");
                                } else if (values.LastName < 3)
                                    errors.LastName =
                                        "يجب أن يكون الاسم الأخير أكثر من 3 أحرف";

                                // Validate Personal Phone Number
                                if (!values.PersonalPhoneNumber) {
                                    errors.PersonalPhoneNumber =
                                        "رقم الهاتف الشخصي اجباري";
                                } else if (
                                    !/^(0)(5|6|7)[0-9]{8}$/.test(
                                        values.PersonalPhoneNumber
                                    )
                                ) {
                                    errors.PersonalPhoneNumber =
                                        "رقم الهاتف الشخصي غير صالح";
                                }

                                // Validate Home Phone Number
                                if (!values.HomePhoneNumber) {
                                    errors.HomePhoneNumber =
                                        "رقم الهاتف المنزلي اجباري";
                                } else if (
                                    !/^(0)(1|2|3|4)[0-9]{9}$/.test(
                                        values.HomePhoneNumber
                                    )
                                ) {
                                    errors.HomePhoneNumber =
                                        "رقم الهاتف المنزلي غير صالح";
                                }

                                // Validate Email
                                if (!values.Email) {
                                    errors.Email = "البريد الإلكتروني اجباري";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.Email
                                    )
                                ) {
                                    errors.Email =
                                        "عنوان البريد الإلكتروني غير صالح";
                                }

                                // Validate Password
                                if (!values.Password) {
                                    errors.Password = "كلمة المرور اجبارية";
                                } else if (values.Password.length < 8) {
                                    errors.Password =
                                        "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل";
                                }
                                return errors;
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                // Call your registration logic here
                                setVerifyEmail(values.Email);
                                setVerifyPassword(values.Password);
                                await handleRegistration(values, {
                                    setSubmitting,
                                    setSucced_Register,
                                    setVerifyId,
                                    set_rigester_Date,
                                });
                                if (Succed_Register) {
                                    setOpen_verify(true);
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className=" flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                                    <div className=" flex justify-center gap-4 flex-wrap ">
                                        <div>
                                            <div>
                                                الاسم الأول
                                                <span className=" text-red-600 font-semibold">
                                                    *
                                                </span>
                                            </div>
                                            <div>
                                                <Field
                                                    type="text"
                                                    name="FirstName"
                                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm "
                                                    disabled={isSubmitting}
                                                />
                                                <ErrorMessage
                                                    name="FirstName"
                                                    component="div"
                                                    style={errorInputMessage}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                الاسم الأخير
                                                <span className=" text-red-600 font-semibold">
                                                    *
                                                </span>
                                            </div>
                                            <div>
                                                <Field
                                                    type="text"
                                                    name="LastName"
                                                    disabled={isSubmitting}
                                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm "
                                                />
                                                <ErrorMessage
                                                    name="LastName"
                                                    component="div"
                                                    style={errorInputMessage}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            رقم الهاتف الشخصي
                                            <span className=" text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="PersonalPhoneNumber"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                        />
                                        <ErrorMessage
                                            name="PersonalPhoneNumber"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            رقم الهاتف المنزلي
                                            <span className=" text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            type="text"
                                            name="HomePhoneNumber"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                        />
                                        <ErrorMessage
                                            name="HomePhoneNumber"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            البريد الإلكتروني{" "}
                                            <span className=" text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            type="Email"
                                            name="Email"
                                            disabled={isSubmitting}
                                            className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full"
                                        />
                                        <ErrorMessage
                                            name="Email"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            كلمة المرور{" "}
                                            <span className=" text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <div className=" flex items-center">
                                            <Field
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="Password"
                                                disabled={isSubmitting}
                                                className="border border-gray_white px-2 py-1  rounded-s  shadow-sm w-full"
                                            />

                                            <div className=" px-2 py-1 rounded-e cursor-pointer border border-gray_white shadow-sm ">
                                                {showPassword ? (
                                                    <IoMdEyeOff
                                                        className="text-gray text-xl md:text-2xl"
                                                        onClick={
                                                            handleShowPassword
                                                        }
                                                    />
                                                ) : (
                                                    <IoMdEye
                                                        className=" text-gray text-xl md:text-2xl"
                                                        onClick={
                                                            handleShowPassword
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <ErrorMessage
                                            name="Password"
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
                                            "تسجيل"
                                        )}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className=" text-center mt-4 text-black_text">
                        هل لديك حساب بالفعل؟{" "}
                        <Link
                            to={"/Login"}
                            className=" text-green font-semibold cursor-pointer"
                        >
                            تسجيل الدخول
                        </Link>
                    </div>
                </div>
            )}

            
        </div>
    );
}

const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default Register;
