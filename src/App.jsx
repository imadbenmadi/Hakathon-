import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
function App() {
  return <div className=" text-red-500">
    hello 
    <NavBar/>
    <Outlet/>
    </div>;
}

export default App;
