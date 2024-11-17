import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "@/pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
