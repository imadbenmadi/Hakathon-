import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useAppContext } from "../Context/AppContext";
import { useEffect } from "react";
import { useInView } from "framer-motion";
function BookTicket() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { isAuth } = useAppContext();
  useEffect(() => {
    if (!isAuth) {
      Navigate("/Login");
    }
  }, []);
  const [centers] = useState([
    "اتصلات الجزائر فرع ورقلة",
    "اتصلات الجزائر فرع وهران",
    "اتصلات الجزائر فرع سطيف",
  ]);
  const Navigate = useNavigate();

  async function handleBooking(values, { setSubmitting }) {
    try {
      const response = await Axios.post(
        "https://reasonably-thorough-monitor.ngrok-free.app/Api/Post_FeedBack/",
        values
      );
      if (response.status !== 200) {
        throw new Error("حدث خطأ ما");
      }
      // Add your booking logic here
      Swal.fire("تم الحجز!", "تم حجز التذكرة بنجاح!", "success");
      Navigate("/");
    } catch (error) {
      Swal.fire("خطأ!", `حدث خطأ ما: ${error.message}`, "error");
    }

    setSubmitting(false);
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translatex(50px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.02s",
      }}
    >
      <div className="m-auto text-center pt-5 text-2xl font-semibold text-blue">
        ارسال تعليق جديد{" "}
      </div>

      <div className="border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
        <Formik
          initialValues={{
            center: "",
            Title: "",
            Description: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.center) {
              errors.center = "يرجى اختيار المركز";
            }

            if (!values.Title) {
              errors.Title = "عنوان المشكلة مطلوب";
            }

            if (!values.Description) {
              errors.Description = "وصف المشكلة مطلوب";
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
                  className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
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
                  name="Title"
                  disabled={isSubmitting}
                  className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                />
                <ErrorMessage
                  name="Title"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <div>
                <div>وصف المشكلة</div>
                <Field
                  as="textarea"
                  name="Description"
                  disabled={isSubmitting}
                  className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                />
                <ErrorMessage
                  name="Description"
                  component="div"
                  className="text-red-600 font-semibold"
                />
              </div>
              <button
                type="submit"
                className={`${
                  isSubmitting
                    ? "bg-gray_white text-gray"
                    : "bg-green text-white"
                } w-fit m-auto px-4 py-2 rounded font-semibold`}
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
