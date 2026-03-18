import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import GlobeIcon from "@/components/GlobeIcon";

const SiteHeader = () => (
  <header className="h-[64px] bg-background border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
    <div className="flex items-center gap-8">
      <Link to="/">
        <img src={sasLogo} alt="SAS" className="h-5" />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm font-semibold text-foreground">Home</Link>
        <Link to="/departures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Flights</Link>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <Search className="w-[18px] h-[18px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
      <GlobeIcon className="w-[18px] h-[18px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
    </div>
  </header>
);

export default SiteHeader;
