import { createRoot } from "react-dom/client";
import  App  from "./App.js";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./components/Login.js";
import Content from "./components/Content.js";
import Signup from "./components/Signup.js";
import Dashboard from "./components/Dashboard.js";
import Profile from "./components/Profile.js";



const layoutRoute = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },{
                path:'/',
                element:<Content/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },{
                path:'/dashboard',
                element:<Dashboard/>
            },{
                path:'/profile',
                element:<Profile/>
            }
        ]
    }
]);







const container = document.getElementById("root");
const root = createRoot(container)
root.render(<RouterProvider router={layoutRoute}/>);