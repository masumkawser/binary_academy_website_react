import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog/Blog";
import Courses from "../../pages/Courses/Courses/Courses";
import Home from "../../pages/Home/Home/Home";
import Main from "./layout/Main";

export const routes =createBrowserRouter([

{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/courses/:id',
            element:<Courses></Courses>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        

    ]
}


])