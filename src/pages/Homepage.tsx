import { ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      {/* Hero — full-width image */}
      <section className="relative w-full overflow-hidden" style={{ height: '400px' }}>
        <img
          src={heroBg}
          alt="SAS Aircraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
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

      {/* Spacer to push footer down */}
      <div className="flex-1" />

      <SiteFooter />
    </div>
  );
};

export default Homepage;
