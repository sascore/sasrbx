import { Link } from "react-router-dom";
import { Plane, ExternalLink } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import heroTail from "@/assets/hero-tail.png";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="h-[72px] bg-background border-b border-border flex items-center justify-between px-8">
        <img src={sasLogo} alt="SAS" className="h-7" />
        






        
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 flex items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
              <Plane className="w-4 h-4" /> Scandinavian Airlines · Roblox
            </div>
            <h1 className="text-5xl font-black leading-tight text-foreground">
              Welcome to SAS
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Scandinavian Airlines on Roblox. Join our community, fly with us, and be part of the crew.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]">
                
                <ExternalLink className="w-4 h-4" /> Join Roblox Group
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full border-2 border-border text-foreground hover:bg-muted transition-all">
                
                <ExternalLink className="w-4 h-4" /> Discord Server
              </a>
            </div>
          </div>
          <div className="hidden lg:block flex-1">
            <img
              src={heroTail}
              alt="SAS Aircraft Tail"
              className="w-full rounded-2xl shadow-sas object-cover" />
            
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-8 pb-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/departures"
            className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover transition-all">
            
            <h3 className="font-bold mb-1">Departures</h3>
            <p className="text-sm text-muted-foreground">View upcoming flights and schedules.</p>
          </Link>
          <a
            href="#"
            className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover transition-all">
            
            <h3 className="font-bold mb-1">Discord</h3>
            <p className="text-sm text-muted-foreground">Join our community server.</p>
          </a>
          <a
            href="#"
            className="bg-card rounded-xl shadow-sas border border-border p-6 hover:shadow-sas-hover transition-all">
            
            <h3 className="font-bold mb-1">Roblox Group</h3>
            <p className="text-sm text-muted-foreground">Join SAS on Roblox.</p>
          </a>
        </div>
      </section>
    </div>);

};

export default Homepage;