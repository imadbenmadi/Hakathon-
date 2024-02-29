import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
function BookTicket() {
    const [centers] = useState([
        "اتصلات الجزائر فرع ورقلة ",
        "اتصلات الجزائر فرع وهران ",
        "اتصلات الجزائر فرع سطيف",
    ]);
    const Navigate = useNavigate();
    async function handleBooking(values, { setSubmitting }) {
        try {
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
            <div className=" m-auto text-center pt-5 text-2xl font-semibold text-blue ">
                حجز تذكرة جديدة
            </div>

            <div className=" border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
                <Formik
                    initialValues={{
                        center: "",
                        title: "",
                        description: "",
                    }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.center) {
                            errors.center = "يرجى اختيار المركز";
                        }

                        if (!values.title) {
                            errors.title = "العنوان مطلوب";
                        }

                        if (!values.description) {
                            errors.description = "الوصف مطلوب";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        handleBooking(values, { setSubmitting });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className=" flex flex-col text-sm md:text-lg md:mx-5 gap-4">
                            <div>
                                <div>اختر المركز</div>
                                <Field
                                    as="select"
                                    name="center"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full text-end"
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
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>عنوان المشكلة </div>
                                <Field
                                    type="text"
                                    name="title"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    style={errorInputMessage}
                                />
                            </div>
                            <div>
                                <div>وصف المشكلة</div>
                                <Field
                                    as="textarea"
                                    name="description"
                                    disabled={isSubmitting}
                                    className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                />
                                <ErrorMessage
                                    name="description"
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
                                {isSubmitting ? <div>جار التحميل</div> : "حجز"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default BookTicket;
