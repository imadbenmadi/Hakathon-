import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";
function App() {
  return <div className="">
    <NavBar />
    <Outlet />
  </div>;
}

export default App;
