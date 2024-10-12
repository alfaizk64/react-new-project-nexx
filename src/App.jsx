import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import  LoginCard  from "./components/LoginCard";
import SignUp from "./components/SignUp";
import FeatureRoute from "./components/FeatureRoute";
import AboutUsRoute from "./components/AboutUsRoute";
import PricingRoute from "./components/PricingRoute";
import Error from "./components/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>,
      
    },
    {
      path: "/login",
      element:<LoginCard/>
    },
    {
      path: "/pricing",
      element: <PricingRoute/>
    },
    {
      path: "/about",
      element: <AboutUsRoute/>
    },
    {
      path: "/feature",
      element: <FeatureRoute/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    // Default route if none of the above match
    {
      path: "*",
      element: <Error/>
    },
   
  ]
)

const App = () => {
  
  return (
    
    <>
      <RouterProvider router={router}/>
      
   
    </>
  );
};

export default App;
