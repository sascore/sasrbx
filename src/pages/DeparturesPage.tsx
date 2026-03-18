import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sasLogo from "@/assets/sas.svg";
import { scheduledFlights } from "@/data/mockData";

const DeparturesPage = () => (
  <div className="min-h-screen bg-background">
    <header className="h-[72px] bg-card border-b border-border flex items-center justify-between px-8">
      <Link to="/">
        <img src={sasLogo} alt="SAS" className="h-7" />
      </Link>
    </header>
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Departures</h1>
      <div className="bg-card rounded-xl shadow-sas border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Flight</th>
              <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Route</th>
              <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Departure</th>
              <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {scheduledFlights.map((f) => {
              const date = new Date(f.staffArrival);
              return (
                <tr key={f.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary tabular-nums">{f.flightNumber}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      {f.route.from} <ArrowRight className="w-3 h-3 text-muted-foreground" /> {f.route.to}
                    </span>
                  </td>
                  <td className="px-6 py-4 tabular-nums">
                    {date.toLocaleDateString("en-GB", { day: "numeric", month: "short" })},{" "}
                    {date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">
                      {f.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default DeparturesPage;
