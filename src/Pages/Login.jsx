import React from "react";
// import Logo from "../../../public/Logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Axios from "axios";
import Swal from "sweetalert2";
function Login() {
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    function handleShowPassword() {
        setShowPassword(!showPassword);
    }
    async function handleLogin(values, { setSubmitting }) {
        try {
            let response = await Axios.post(
                "https://backend.skate-consult.com/Login",
                values,
                {
                    withCredentials: true,

                    validateStatus: () => true,
                }
            );

            if (response.status == 200) {
                Swal.fire("Done!", "Logged in Successfully", "success");
                Navigate("/");
            } else if (response.status == 401) {
                Swal.fire(
                    "HomeNumber already exists",
                    `Username or Password isn't correct  `,
                    "error"
                );
            } else if (response.status == 409) {
                Swal.fire("Error!", `${response.data.message} `, "error");
            } else if (response.status == 500) {
                Swal.fire("Error!", `Internal Server Error   `, "error");
            } else if (response.status == 429) {
                Swal.fire(
                    "Error!",
                    `Too many requests ,try again latter\n  `,
                    "error"
                );
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }

        setSubmitting(false);
    }

    return (
        <div className=" text-end">
            <div>
                {/* <img className=" w-20 m-auto pt-5 " src={Logo} alt="" /> */}
            </div>
            <div className=" text-lg font-semibold mb-4 text-center">
                تسجيل الدخول الى حسابك
            </div>

            {/* input fields */}
            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg  ">
                <Formik
                    initialValues={{
                        HomeNumber: "",
                        Password: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        // Validate HomeNumber
                        if (!values.HomeNumber) {
                            errors.HomeNumber = "Number is Required";
                        } else if (!/^\d+$/.test(values.HomeNumber)) {
                            errors.HomeNumber = "Invalid Number";
                        }

                        // Validate Password
                        if (!values.Password) {
                            errors.Password = "Password is Required";
                        } else if (values.Password.length < 8) {
                            errors.Password =
                                "Password must be at least 8 characters long";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        // Call your registration logic here
                        handleLogin(values, { setSubmitting });
                        // Succeed_Login ? Navigate("/") : null;
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="  flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div>
                                <div>
                                    رقم الهاتف المزلي{" "}
                                    <span className=" text-red-600 font-semibold">
                                        *
                                    </span>
                                </div>
                                <Field
                                    type="HomeNumber"
                                    name="HomeNumber"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded  shadow-sm w-full outline-none"
                                />
                                <ErrorMessage
                                    name="HomeNumber"
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
                                        {showPassword ? (
                                            <IoMdEyeOff
                                                className="text-gray text-xl md:text-2xl"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <IoMdEye
                                                className=" text-gray text-xl md:text-2xl"
                                                onClick={handleShowPassword}
                                            />
                                        )}
                                    </div>
                                    <Field
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="Password"
                                        disabled={isSubmitting}
                                        className="border border-gray_white px-2 py-1  rounded-s  shadow-sm w-full outline-none"
                                    />
                                </div>

                                <ErrorMessage
                                    name="Password"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>

                            <button
                                type="submit"
                                className={` ${isSubmitting
                                    ? "bg-gray_white text-gray"
                                    : " bg-green text-white"
                                    } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? <div>loading</div> : "Submit"}
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
