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

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ height: '400px' }}>
        <img src={heroBg} alt="SAS Aircraft" className="w-full h-full object-cover" />
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

      {/* Social Media — only on homepage, white background */}
      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-8 py-10 text-center">
          <h3 className="text-lg font-bold text-foreground mb-6">Social Media</h3>
          <div className="flex items-center justify-center gap-6">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://discord.gg/GWyQ3NCbA4" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>
            <a href="https://www.roblox.com/communities/9673640/SAS-Scandinavian-Airlines" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
                <path d="M5.164 0L0 18.627 18.836 24 24 5.373ZM10.477 14.059l-2.536-.678.678-2.536 2.536.678Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Homepage;
