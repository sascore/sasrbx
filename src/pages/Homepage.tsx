import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const WaveDivider = () => (
  <div className="flex justify-center py-6">
    <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="text-muted-foreground/30">
      <path d="M0 10 Q10 0 20 10 T40 10 T60 10 T80 10 T100 10 T120 10" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

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
              href="https://www.roblox.com/share/g/9673640"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              Roblox Group <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://discord.gg/hDJNMvJUX9"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full border border-border text-foreground hover:bg-muted transition-all"
            >
              Discord Server <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* What are you waiting for? */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <WaveDivider />
          <h2 className="text-3xl md:text-4xl font-black mb-3">What are you waiting for?</h2>
          <p className="text-muted-foreground mb-8">
            Join us today and discover the future with <span className="font-bold text-secondary-foreground">SAS</span>!
          </p>
          <Link
            to="/departures"
            className="inline-flex items-center px-6 py-3 text-sm font-bold rounded-md bg-background text-foreground hover:bg-muted transition-all"
          >
            See upcoming flights
          </Link>
          <WaveDivider />
        </div>
      </section>

      {/* Looking for a job? */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-8 pb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-3">Looking for a job?</h2>
          <p className="text-muted-foreground mb-6">
            Come checkout if we have any open positions for you to apply for!
          </p>
          <a
            href="https://discord.gg/GWyQ3NCbA4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary-foreground hover:underline"
          >
            Discord Server (13+) <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Homepage;
