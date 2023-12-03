import { Outlet } from "react-router-dom";
import Sider from "./headers/Sider";

export const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[20vw]">
        <Sider />
      </div>
      <div className="w-[80vw] mt-5">
        <Outlet />
      </div>
    </div>
  );
};
