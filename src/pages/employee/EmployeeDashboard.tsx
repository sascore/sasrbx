import { useState } from "react";
import { Plane, AlertTriangle, DollarSign, Calendar, CheckCircle } from "lucide-react";
import StatCard from "@/components/StatCard";
import { currentEmployee, assignedFlights } from "@/data/mockData";
import { useAuth } from "@/contexts/AuthContext";

const periods = ["Week", "Month", "Year"] as const;

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const [period, setPeriod] = useState<(typeof periods)[number]>("Month");

  const flightsByPeriod = {
    Week: 2,
    Month: currentEmployee.flightsThisMonth,
    Year: 42,
  };

  return (
    <div className="max-w-6xl">
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-8">
        👋 Hej, {currentEmployee.discordUsername}!
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={CheckCircle} label="Status" value="Active" accent="success" />
        <StatCard icon={AlertTriangle} label="Strikes" value={`${currentEmployee.strikes}/3`} accent={currentEmployee.strikes > 0 ? "destructive" : "muted"} />
        <StatCard icon={DollarSign} label="Next Payout" value={currentEmployee.nextPayout} accent="muted" />
        <StatCard icon={Calendar} label="Upcoming Flights" value={assignedFlights.length} accent="primary" />
      </div>

      {/* Flight Attendance */}
      <div className="bg-card rounded-xl shadow-sas border border-border p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Flights Attended</h2>
          <div className="flex bg-muted rounded-lg p-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  period === p
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <p className="text-4xl font-bold tabular-nums">{flightsByPeriod[period]}</p>
        <p className="text-sm text-muted-foreground mt-1">flights this {period.toLowerCase()}</p>
      </div>

      {/* Upcoming Flights Quick View */}
      <div className="bg-card rounded-xl shadow-sas border border-border p-6">
        <h2 className="text-lg font-bold mb-4">Upcoming Flights</h2>
        {assignedFlights.length === 0 ? (
          <p className="text-sm text-muted-foreground">No upcoming flights. View the schedule to sign up.</p>
        ) : (
          <div className="space-y-3">
            {assignedFlights.map((f) => {
              const date = new Date(f.staffArrival);
              return (
                <div key={f.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-4">
                    <Plane className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary tabular-nums">{f.flightNumber}</span>
                    <span className="text-sm text-muted-foreground">
                      {f.route.from} → {f.route.to}
                    </span>
                  </div>
                  <span className="text-sm font-medium tabular-nums">
                    {date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })},{" "}
                    {date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
