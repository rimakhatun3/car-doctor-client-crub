import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Book from "../Pages/Book/Book";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
{
    path:'/',
element:<Main></Main>,
children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/signUp',
       element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    
    {
        path:'/book/:id',
        element:<PrivateRoute><Book></Book></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        
    },
    {
        path:'/booking',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
    }
]
}
])
export default router