import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import sasLogo from "@/assets/sas.svg";
import heroBg from "@/assets/hero-bg.png";
import heroTail from "@/assets/hero-tail.png";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="h-[72px] flex items-center justify-between px-8 relative z-10">
        <img src={sasLogo} alt="SAS" className="h-7 brightness-0 invert" />
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Home</Link>
          <Link to="/departures" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">Flights</Link>
          <a href="#" className="text-sm font-semibold text-white/60 hover:text-white transition-colors">FAQ</a>
          <Link to="/employee" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white transition-colors">
            Hub <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative">
            <img
              src={heroTail}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-[#0a0a0a]/80" />
          </div>
          <div className="w-1/2 h-full relative">
            <img
              src={heroBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-tl-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/30 to-[#0a0a0a]/60" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-32 md:py-44 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight tracking-tight">
            discover the future with <span className="font-black">SAS</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            discover the future of flying with <span className="font-bold text-white">SAS</span> for as a low low price of <span className="font-black text-white">0 Robux!</span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-xl bg-white text-[#0a0a0a] hover:bg-white/90 transition-all active:scale-[0.98] shadow-lg"
            >
              Roblox Group <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-xl bg-white text-[#0a0a0a] hover:bg-white/90 transition-all active:scale-[0.98] shadow-lg"
            >
              Discord Server (13+) <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-8 py-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/departures"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
          >
            <h3 className="font-bold mb-1 text-white">Departures</h3>
            <p className="text-sm text-white/50">View upcoming flights and schedules.</p>
          </Link>
          <a
            href="#"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
          >
            <h3 className="font-bold mb-1 text-white">Discord</h3>
            <p className="text-sm text-white/50">Join our community server.</p>
          </a>
          <a
            href="#"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
          >
            <h3 className="font-bold mb-1 text-white">Roblox Group</h3>
            <p className="text-sm text-white/50">Join SAS on Roblox.</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
