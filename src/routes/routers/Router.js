import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Blogs from "../../pages/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import ForgetPassword from "../../pages/ForgetPassword/ForgetPassword";
import Home from "../../pages/Home/Home";
import LatestNews from "../../pages/Latest-News/LatestNews";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import Errorpage from "../../pages/Shared/ErrorPage/Errorpage";

export const routers = createBrowserRouter([

    {
        path:"/",
        element:<Main/>,
        errorElement:<Errorpage/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/home",
                element:<Home/>,
            },
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/register",
                element:<Register/>,
            },
            {
                path:"/forget",
                element:<ForgetPassword/>,
            },
            {
                path:"/profile",
                element:<Profile/>,
            },
            {
                path:"/blogs",
                loader:()=>fetch('https://emirates-agency-server.vercel.app/latest'),
                element:<Blogs/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/about-us",
                element:<AboutUs/>,
            },
            {
                path:"/latestNews",
                element:<LatestNews/>
            }
        ]
    }
])