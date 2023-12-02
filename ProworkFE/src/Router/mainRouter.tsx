import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Homescreen from "../pages/Homescreen";
import LandingPage from "../pages/LandingPage";
import Layout2 from "../components/Layout2";
import Register from "../pages/auth/Register";
import Sign_In from "../pages/auth/Sign_In";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout2 />,

    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Sign_In />,
  },

  {
    path: "/dashBoard",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);
