import { Link } from "react-router-dom";
import { Plane, ExternalLink, Search } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import heroBg from "@/assets/hero-bg.png";
import GlobeIcon from "@/components/GlobeIcon";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header - white on blue */}
      <header className="h-[72px] flex items-center justify-between px-8 relative z-20">
        <img src={sasLogo} alt="SAS" className="h-7 brightness-0 invert" />
        <div className="flex items-center gap-5">
          <Search className="w-5 h-5 text-primary-foreground/80 cursor-pointer hover:text-primary-foreground" />
          <GlobeIcon className="w-5 h-5 text-primary-foreground/80 cursor-pointer hover:text-primary-foreground" />
        </div>
      </header>

      {/* Hero - full width image on blue background */}
      <section className="relative w-full" style={{ height: '420px' }}>
        <img
          src={heroBg}
          alt="SAS Aircraft"
          className="w-full h-full object-cover"
        />
        {/* Blue gradient fade at top and bottom to blend with bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
      </section>

      {/* Content below hero */}
      <section className="bg-background">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
            <Plane className="w-4 h-4" /> Scandinavian Airlines · Roblox
          </div>
          <h1 className="text-5xl font-black leading-tight text-foreground">
            Welcome to <span className="text-primary">SAS</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scandinavian Airlines on Roblox. Join our community, fly with us, and be part of the crew.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" /> Join Roblox Group
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Discord Server
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-8 pb-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/departures" className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover hover:border-primary/20 transition-all">
              <h3 className="font-bold mb-1 text-foreground">Departures</h3>
              <p className="text-sm text-muted-foreground">View upcoming flights and schedules.</p>
            </Link>
            <a href="#" className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover hover:border-primary/20 transition-all">
              <h3 className="font-bold mb-1 text-foreground">Discord</h3>
              <p className="text-sm text-muted-foreground">Join our community server.</p>
            </a>
            <a href="#" className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover hover:border-primary/20 transition-all">
              <h3 className="font-bold mb-1 text-foreground">Roblox Group</h3>
              <p className="text-sm text-muted-foreground">Join SAS on Roblox.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
