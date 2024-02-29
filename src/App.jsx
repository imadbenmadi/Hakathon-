import React from "react";
import { Outlet } from "react-router";
function App() {
  return <div className=" text-red-500">
    hello 
    <Outlet/>
    </div>;
}

export default App;
