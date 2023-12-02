import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import Homescreen from "../pages/Homescreen";
import LandingPage from "../pages/LandingPage";
import Layout2 from "../components/Layout2";

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
