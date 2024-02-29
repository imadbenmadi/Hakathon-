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
import Report from "./Pages/Report";
import BookTicket from "./Pages/BookTicket";
import Feedback from "./Pages/Feedback";
import Profile from "./Pages/Profile";
import Not_Found from "./Components/Not_Found";
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
            { path: "/Tickets/Center/:id", element: <Tickets_item /> },
            { path: "/Report", element: <Report /> },
            { path: "/Feedback", element: <Feedback /> },
            { path: "/Profile", element: <Profile /> },
            { path: "*", element: <Not_Found /> },
        ],
    },
    // {
    //     path: "/Dashboard",
    //     element: <Dashboard />,
    //     children: [
    //         { index: true, element: <Dashboard_home /> },
    //         {
    //             path: "/Dashboard/Users",
    //             element: <Dashboard_Users />,
    //             children: [
    //                 { index: true, element: <Table /> },
    //                 {
    //                     path: "/Dashboard/Users/Add",
    //                     element: <Add_user />,
    //                 },
    //                 {
    //                     path: "/Dashboard/Users/:id",
    //                     element: <User />,
    //                     children: [
    //                         { index: true, element: <Default_user /> },
    //                         {
    //                             path: "/Dashboard/Users/:id/Edit",
    //                             element: <Edit_user />,
    //                         },
    //                         {
    //                             path: "/Dashboard/Users/:id/Notification",
    //                             element: <Dashboard_Users_Notification />,
    //                         },
    //                         {
    //                             path: "/Dashboard/Users/:id/Current_Notifications",
    //                             element: <Current_Notifications />,
    //                         },
    //                         {
    //                             path: "/Dashboard/Users/:id/Courses",
    //                             element: <UserCourses />,
    //                         },
    //                         {
    //                             path: "/Dashboard/Users/:id/Services",
    //                             element: <UserServices />,
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //         { path: "/Dashboard/Courses", element: <Dashboard_Courses /> },
    //         { path: "/Dashboard/Courses/Add", element: <Add_Course /> },

    //         { path: "/Dashboard/Services", element: <Dashboard_Services /> },
    //         { path: "/Dashboard/Events", element: <Dashboard_Events /> },
    //         { path: "/Dashboard/Blogs", element: <Dashboard_Blogs /> },
    //         {
    //             path: "*",
    //             element: <Not_Found />,
    //         },
    //     ],
    // },
    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
