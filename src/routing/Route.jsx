import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CreateUsers from '../crud/CreateUsers'
import EditUsers from '../crud/EditUsers'
import Users from '../crud/Users'
import NotFound from '../crud/NotFound'
import AllUsers from '../crud/AllUsers'
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import PrivateRoute from "../authentication/PrivateRoute";
export const router = createBrowserRouter([
    {
      path: '/' ,
      element: <Layout/>,
      children: [
        {
            path: '/',
            element: <PrivateRoute><CreateUsers/></PrivateRoute>
        },
        {
            path: '/editusers/:id',
            element: <EditUsers/>
        },
        {
            path: '/datausers',
            element: <PrivateRoute><Users/></PrivateRoute>
        },
        {
            path: '/allusers',
            element: <PrivateRoute><AllUsers/></PrivateRoute>
        },
        {
            path : '/register',
            element: <Register/>
        },
        {
            path : '/login',
            element: <Login/>
        },
        {
            path: '*',
            element: <NotFound/>
        },


      ]    }
])

