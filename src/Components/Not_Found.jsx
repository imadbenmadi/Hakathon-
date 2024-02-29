import React from "react";
import { Link } from "react-router-dom";

function Not_Found() {
    return (
        <div className="flex items-center justify-center text-gray font-bold pt-16">
            <div className="p-8 bg-white rounded-md shadow-lg text-center">
                <h1 className="text-3xl md:text-5xl mb-4 text-gray-800">
                    عذرًا! هذه الصفحة غير موجودة
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                    يمكن أن يكون الصفحة التي تبحث عنها قيد الإنشاء أو تم نقلها.
                </p>
                <p className="text-sm text-gray-600">
                    تحقق مرتين من عنوان URL أو ارجع إلى{" "}
                    <Link to={"/"} className="text-green">
                        الصفحة الرئيسية.
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Not_Found;
