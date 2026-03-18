import { Link } from "react-router-dom";
import { Plane, ExternalLink } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import heroBg from "@/assets/hero-bg.png";
import heroTail from "@/assets/hero-tail.png";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-[72px] bg-background border-b border-border flex items-center justify-between px-8">
        <img src={sasLogo} alt="SAS" className="h-7" />
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-foreground">Home</Link>
          <Link to="/departures" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Flights</Link>
          <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Link to="/employee" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            Hub <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '520px' }}>
        {/* Two tilted/overlapping images behind content */}
        <div className="absolute inset-0">
          {/* Left image - tilted */}
          <div className="absolute left-0 top-8 w-[48%] h-[90%] rounded-2xl overflow-hidden shadow-2xl"
               style={{ transform: 'rotate(-3deg) translateX(-5%)' }}>
            <img src={heroTail} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/30" />
          </div>
          {/* Right image - tilted opposite */}
          <div className="absolute right-0 top-4 w-[55%] h-[95%] rounded-2xl overflow-hidden shadow-2xl"
               style={{ transform: 'rotate(2deg) translateX(5%)' }}>
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          {/* Overlay to let text pop */}
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Plane className="w-4 h-4" /> Scandinavian Airlines · Roblox
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-foreground">
            Welcome to <span className="text-primary">SAS</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Scandinavian Airlines on Roblox. Join our community, fly with us, and be part of the crew.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
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
      </section>

      {/* Quick Links */}
      <section className="px-8 pb-24 pt-16 max-w-4xl mx-auto">
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
      </section>
    </div>
  );
};

export default Homepage;
