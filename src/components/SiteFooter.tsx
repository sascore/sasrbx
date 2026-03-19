import skyteamLogo from "@/assets/skyteam.svg";

const SiteFooter = () => (
  <footer className="bg-background border-t border-border">
    <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © 2026 Scandinavian Airlines System Denmark-Norway-Sweden, org.nr 902001-7720, 195 87 Stockholm
      </p>
      <img src={skyteamLogo} alt="SkyTeam Alliance Member" className="h-8" />
    </div>
  </footer>
);

export default SiteFooter;
