import { useState } from "react";
import { toast } from "sonner";
import FlightCard from "@/components/FlightCard";
import { assignedFlights, scheduledFlights, currentEmployee } from "@/data/mockData";
import type { Flight } from "@/types";

const tabs = ["Assigned Flights", "Scheduled Flights"] as const;

const FlightsPage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Assigned Flights");
  const [assigned, setAssigned] = useState<Flight[]>(assignedFlights);
  const [scheduled, setScheduled] = useState<Flight[]>(scheduledFlights);

  const handleUnassign = (id: string, reason: string) => {
    setAssigned((prev) => prev.filter((f) => f.id !== id));
    toast.success("Successfully unassigned from flight");
  };

  const handleSignUp = (id: string) => {
    const flight = scheduled.find((f) => f.id === id);
    if (flight) {
      setScheduled((prev) => prev.filter((f) => f.id !== id));
      setAssigned((prev) => [...prev, flight]);
      toast.success("Successfully signed up for flight");
    }
  };

  const handleComment = (id: string, comment: string) => {
    toast.success("Comment sent to hoster");
  };

  const flights = activeTab === "Assigned Flights" ? assigned : scheduled;

  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Flights</h1>

      {/* Segmented Control */}
      <div className="inline-flex bg-muted rounded-lg p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === tab
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Flight List */}
      <div className="space-y-3">
        {flights.length === 0 ? (
          <div className="bg-card rounded-xl shadow-sas border border-border p-12 text-center">
            <p className="text-muted-foreground">
              {activeTab === "Assigned Flights"
                ? "No assigned flights. View Scheduled Flights to sign up."
                : "No scheduled flights available at this time."}
            </p>
          </div>
        ) : (
          flights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
              type={activeTab === "Assigned Flights" ? "assigned" : "scheduled"}
              onUnassign={handleUnassign}
              onSignUp={handleSignUp}
              onComment={handleComment}
              currentStrikes={currentEmployee.strikes}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FlightsPage;
