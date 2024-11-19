import App from "@/App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import About from "@/pages/About";
import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import AddServices from "@/pages/admin/AddServices";

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
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "service-list",
        element: <ServiceList></ServiceList>,
      },
      {
        path: "add-service",
        element: <AddServices></AddServices>,
      },
    ],
  },
]);

export default router;
