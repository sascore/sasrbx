import { Link } from "react-router-dom";
import { ExternalLink, Search } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import heroBg from "@/assets/hero-bg.png";
import GlobeIcon from "@/components/GlobeIcon";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header — SAS style */}
      <header className="h-[64px] bg-background border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <img src={sasLogo} alt="SAS" className="h-5" />
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-foreground">Home</Link>
            <Link to="/departures" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Flights</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <Link to="/employee" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Hub
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-[18px] h-[18px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          <GlobeIcon className="w-[18px] h-[18px] text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>
      </header>

      {/* Hero — full-width image */}
      <section className="relative w-full overflow-hidden" style={{ height: '400px' }}>
        <img
          src={heroBg}
          alt="SAS Aircraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Overlay content */}
        <div className="absolute bottom-10 left-0 right-0 px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-lg">
              Welcome to journeys<br />that matter
            </h1>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-muted-foreground text-sm mb-1">SAS on Roblox</p>
            <h2 className="text-xl font-bold text-foreground">Join the Scandinavian community</h2>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Roblox Group <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full border border-border text-foreground hover:bg-muted transition-all"
            >
              Discord Server <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-background flex-1">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden bg-muted h-44 mb-4 flex items-center justify-center">
                <span className="text-4xl">✈️</span>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Upcoming Flights</h3>
              <p className="text-sm text-muted-foreground mt-1">Check our latest scheduled departures and routes.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden bg-muted h-44 mb-4 flex items-center justify-center">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Our Community</h3>
              <p className="text-sm text-muted-foreground mt-1">Join thousands of aviation enthusiasts on Discord.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden bg-muted h-44 mb-4 flex items-center justify-center">
                <span className="text-4xl">🛫</span>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Become Crew</h3>
              <p className="text-sm text-muted-foreground mt-1">Apply to become part of the SAS team on Roblox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-secondary-foreground/60">About</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About SAS</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Our Fleet</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-secondary-foreground/60">Community</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Discord</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Roblox Group</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Social Media</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-secondary-foreground/60">Travel</h4>
              <ul className="space-y-2.5">
                <li><Link to="/departures" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Departures</Link></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Routes</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-secondary-foreground/60">Support</h4>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact Us</a></li>
                <li><Link to="/employee" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Employee Hub</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <img src={sasLogo} alt="SAS" className="h-4 brightness-0 invert opacity-60" />
            <p className="text-xs text-secondary-foreground/40">© 2026 Scandinavian Airlines — Roblox. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
