import { Outlet } from "react-router-dom";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <EmployeeHeader />
      <div className="flex">
        <EmployeeSidebar />
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
