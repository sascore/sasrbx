import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeSidebar from "./EmployeeSidebar";
import { useAuth } from "@/contexts/AuthContext";

const EmployeeLayout = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Allow login page without auth
  if (location.pathname === "/employee/login") {
    return <Outlet />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/employee/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <EmployeeHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-foreground/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Sidebar */}
        <div
          className={`fixed top-[72px] left-0 z-40 h-[calc(100vh-72px)] transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <EmployeeSidebar onNavigate={() => setSidebarOpen(false)} />
        </div>
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EmployeeLayout;
