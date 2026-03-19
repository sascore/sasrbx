import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sasEmployeeLogo from "@/assets/sasemployee.svg";
import GlobeIcon from "./GlobeIcon";
import { useAuth } from "@/contexts/AuthContext";

const languages = [
  { code: "en", label: "English" },
  { code: "da", label: "Danish" },
  { code: "sv", label: "Swedish" },
  { code: "no", label: "Norwegian" },
];

interface EmployeeHeaderProps {
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

const EmployeeHeader = ({ onMenuToggle, sidebarOpen }: EmployeeHeaderProps) => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/employee/login", { replace: true });
  };

  const getAvatarUrl = () => {
    if (user?.avatar && user?.id) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`;
    }
    return null;
  };

  return (
    <header className="h-[72px] bg-background border-b border-border flex items-center justify-between px-6 relative z-50">
      <div className="flex items-center gap-3">
        {isLoggedIn && onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        )}
        <img src={sasEmployeeLogo} alt="SAS Employee Hub" className="h-6" />
      </div>

      <div className="flex items-center gap-3">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <GlobeIcon className="w-6 h-6 text-foreground" />
          </button>

          {langOpen && (
            <>
              <div className="fixed inset-0" onClick={() => setLangOpen(false)} />
              <div className="absolute right-0 top-full mt-2 bg-card rounded-lg shadow-sas border border-border py-1 min-w-[160px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                      selectedLang === lang.code ? "text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* User info + Login/Logout */}
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            {user && (
              <div className="flex items-center gap-2">
                {getAvatarUrl() ? (
                  <img
                    src={getAvatarUrl()!}
                    alt={user.username}
                    className="w-8 h-8 rounded-full border border-border"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-semibold text-foreground hidden sm:inline">
                  {user.username}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 rounded-full border-2 border-destructive text-destructive font-bold text-sm hover:bg-destructive hover:text-destructive-foreground transition-all active:scale-[0.98]"
            >
              Log ud
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/employee/login")}
            className="px-6 py-2.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all active:scale-[0.98]"
          >
            Log ind
          </button>
        )}
      </div>
    </header>
  );
};

export default EmployeeHeader;
