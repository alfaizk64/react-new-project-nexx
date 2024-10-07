import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import  LoginCard  from "./components/LoginCard";
import PricingTable from "./components/PricingTable";
import RoadMapSection from "./components/RoadMapSection";
import FeaturesSection from "./components/FeaturesSection";
import SignUp from "./components/SignUp";

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
      element: <PricingTable/>
    },
    {
      path: "/about",
      element: <RoadMapSection/>
    },
    {
      path: "/feature",
      element: <FeaturesSection/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    // Default route if none of the above match
    {
      path: "*",
      element: <div>Page not found</div>
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
