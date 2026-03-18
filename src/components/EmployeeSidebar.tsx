import { NavLink, useLocation } from "react-router-dom";
import { Home, Plane, MessageSquare, CalendarOff, FileText, Settings } from "lucide-react";
import { messages } from "@/data/mockData";

const navItems = [
  { to: "/employee", icon: Home, label: "Home", end: true },
  { to: "/employee/flights", icon: Plane, label: "Flights" },
  { to: "/employee/messages", icon: MessageSquare, label: "Messages" },
  { to: "/employee/absence", icon: CalendarOff, label: "Absence" },
  { to: "/employee/documents", icon: FileText, label: "Documents" },
  { to: "/employee/settings", icon: Settings, label: "Settings" },
];

interface EmployeeSidebarProps {
  onNavigate?: () => void;
}

const EmployeeSidebar = ({ onNavigate }: EmployeeSidebarProps) => {
  const location = useLocation();
  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <aside className="w-[260px] h-full bg-background border-r border-border flex flex-col">
      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = item.end
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to);

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={onNavigate}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" strokeWidth={1.8} />
                  <span className="flex-1">{item.label}</span>
                  {item.label === "Messages" && unreadCount > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;
