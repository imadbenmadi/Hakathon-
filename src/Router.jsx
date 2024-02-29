import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";
import FAQ from "./Pages/FAQ";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Tickets from "./Pages/Tickets";
import Tickets_item from "./Pages/Tickets_item";
import BookTicket from "./Pages/BookTicket";
import Feedback from "./Pages/Feedback";
import Profile from "./Pages/Profile";
import Not_Found from "./Components/Not_Found";
import AgencyInfo from "./Pages/agencyInfo";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/FAQ", element: <FAQ /> },
            { path: "/NewProduct", element: <NewProduct /> },
            { path: "/Login", element: <Login /> },
            { path: "/Register", element: <Register /> },
            { path: "/Tickets/Tech", element: <Tickets /> },
            { path: "/BookTicket", element: <BookTicket /> },
            { path: "/Tickets/Center", element: <Tickets /> },
            { path: "/Tickets/Center/:id", element: <AgencyInfo /> },
            { path: "/Tickets/Tech/:id", element: <Tickets_item /> },
            { path: "/Feedback", element: <Feedback /> },
            { path: "/Profile", element: <Profile /> },
            { path: "*", element: <Not_Found /> },
        ],
    },
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
