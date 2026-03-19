import { Link } from "react-router-dom";
import sasLogo from "@/assets/sas.svg";

const SiteHeader = () => (
  <header className="h-[64px] bg-background border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
    <Link to="/">
      <img src={sasLogo} alt="SAS" className="h-5" />
    </Link>
    <nav className="flex items-center gap-6">
      <Link to="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Home</Link>
      <Link to="/departures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Flights</Link>
      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
    </nav>
  </header>
);

export default SiteHeader;
