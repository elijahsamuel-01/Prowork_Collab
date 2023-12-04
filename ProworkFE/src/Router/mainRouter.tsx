import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Homescreen from "../pages/Homescreen";
import LandingPage from "../pages/LandingPage";
import Layout2 from "../components/Layout2";
import Register from "../pages/auth/Register";
import Sign_In from "../pages/auth/Sign_In";
import AddTask from "../pages/AddTask";
import AddProject from "../pages/AddProject";
import PrivateRouter from "./PrivateRouter";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout2 />
      </PrivateRouter>
    ),

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
  // {
  //   path: "/addproject",
  //   element: <AddProject />,
  // },
  // {
  //   path: "/addtask",
  //   element: <AddTask />,
  // },
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
