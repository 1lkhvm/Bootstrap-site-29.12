import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../page/Home';
import About from '../page/About'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
     {
         path: "/About",
         element: <About></About>,
     }
    
]);

export default router