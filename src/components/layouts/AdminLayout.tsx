import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AdminLayout() {
  return (
    <div className="grid grid-cols-12">
      <Sidebar></Sidebar>
      <div className="col-span-10 h-full px-5">
      <Outlet></Outlet>
      </div>
    </div>
  );
}

export default AdminLayout;
