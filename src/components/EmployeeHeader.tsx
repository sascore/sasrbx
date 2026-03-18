import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const { isLoggedIn, login, logout } = useAuth();

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

        {/* Login / Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="px-6 py-2.5 rounded-full border-2 border-destructive text-destructive font-bold text-sm hover:bg-destructive hover:text-destructive-foreground transition-all active:scale-[0.98]"
          >
            Log ud
          </button>
        ) : (
          <button
            onClick={login}
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
