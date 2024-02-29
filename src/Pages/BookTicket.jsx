import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useAppContext } from "../Context/AppContext";

function BookTicket() {
    const { isAuth, first_name, last_name, home_number } = useAppContext();
    

    const [centers] = useState([
        "اتصلات الجزائر فرع ورقلة",
        "اتصلات الجزائر فرع وهران",
        "اتصلات الجزائر فرع سطيف",
    ]);
    const Navigate = useNavigate();

    async function handleBooking(values, { setSubmitting }) {
        try {
            const response = await Axios.post(
                "https://reasonably-thorough-monitor.ngrok-free.app/Api/TicketTech/",
                values
            );
            if (response.status !== 200) {
                throw new Error("حدث خطأ ما");
            }
            
            // Add your booking logic here
            Swal.fire("تم الحجز!", "تم حجز التذكرة بنجاح!", "success");
            Navigate("/Tickets/Tech");
        } catch (error) {
            Swal.fire("خطأ!", `حدث خطأ ما: ${error.message}`, "error");
        }

        setSubmitting(false);
    }

    return (
        <div>
            <div className="m-auto text-center pt-5 text-2xl font-semibold text-blue">
                حجز تذكرة جديدة
            </div>

            <div className="border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
                <Formik
                    initialValues={{
                        center: "", // اختر المركز
                        title: "", // عنوان المشكلة
                        description: "", // وصف المشكلة
                        first_name: first_name, // اسم الشخص الأول
                        last_name: last_name, // اسم الشخص الأخير
                        phone_number: home_number, // رقم الهاتف
                        address: "", // العنوان
                    }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.center) {
                            errors.center = "يرجى اختيار المركز";
                        }

                        if (!values.title) {
                            errors.title = "عنوان المشكلة مطلوب";
                        }

                        if (!values.description) {
                            errors.description = "وصف المشكلة مطلوب";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleBooking(values, { setSubmitting });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div>
                                <div>اختر المركز</div>
                                <Field
                                    as="select"
                                    name="center"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full text-end outline-none"
                                >
                                    <option value="">اختر المركز</option>
                                    {centers.map((center, index) => (
                                        <option key={index} value={center}>
                                            {center}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage
                                    name="center"
                                    component="div"
                                    className="text-red-600 font-semibold"
                                />
                            </div>
                            <div>
                                <div>عنوان المشكلة</div>
                                <Field
                                    type="text"
                                    name="title"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full outline-none"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-600 font-semibold"
                                />
                            </div>
                            <div>
                                <div>وصف المشكلة</div>
                                <Field
                                    as="textarea"
                                    name="description"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full outline-none resize-none"
                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-600 font-semibold"
                                />
                            </div>
                            <div>
                                <div>عنوان المنزل </div>
                                <Field
                                    type="textarea"
                                    name="address"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full outline-none"
                                />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className="text-red-600 font-semibold"
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
                                {isSubmitting ? "جارٍ التحميل..." : "حجز"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default BookTicket;
