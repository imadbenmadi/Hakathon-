import React from "react";

import Prodect from "../Components/Prodact/Prodect";
function NewProduct() {
  return (
    <div className=" max-w-[1300px] mx-auto w-screen mt-32 text-end  ">
      <div className="text-center text-5xl font-bold w-full py-10">
        {" "}
        معلومات منتجاتنا الجديدة{" "}
      </div>
      <Prodect />
      <Prodect />
      <Prodect />
      <Prodect />
    </div>
  );
}

export default NewProduct;
