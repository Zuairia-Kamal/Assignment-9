import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Plants from "../pages/Plants";       
import PlantDetails from "../pages/PlantDetails"; 
import PrivateRoute from "../privateRoute/PrivateRoute";
import EcoDecor from "../pages/EcoDecor";
import About from "../pages/About";
import UpdateProfile from "../pages/UpdateProfile";

//import EcoDecor from "../pages/EcoDecor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      
      {
        path: "/plants",
        element: <Plants />,
        loader: () => fetch("/plants.json"),
      },
      {
        path: "/ecodecor",
        element: <EcoDecor />,
        loader: () => fetch("/ecodecor.json"),
      },
      
      {
        path: "/plants/:id", 
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile />,
      },
      
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);
