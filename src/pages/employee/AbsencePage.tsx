import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { currentAbsences, expiredAbsences } from "@/data/mockData";

const tabs = ["Current Absences", "Expired Absences", "Request Absence"] as const;

const AbsencePage = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Current Absences");
  const [showExtendModal, setShowExtendModal] = useState<string | null>(null);
  const [showEndModal, setShowEndModal] = useState<string | null>(null);
  const [extendDays, setExtendDays] = useState("");
  const [extendReason, setExtendReason] = useState("");

  // Request form
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleExtend = () => {
    toast.success("Extension request submitted");
    setShowExtendModal(null);
    setExtendDays("");
    setExtendReason("");
  };

  const handleEnd = () => {
    toast.success("Absence ended early");
    setShowEndModal(null);
  };

  const handleRequest = () => {
    if (!startDate || !endDate || !reason) return;
    toast.success("Absence request submitted for approval");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  const getDuration = (start: string, end: string) => {
    const days = Math.ceil((new Date(end).getTime() - new Date(start).getTime()) / 86400000);
    return `${days} day${days !== 1 ? "s" : ""}`;
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Absence</h1>

      <div className="inline-flex bg-muted rounded-lg p-1 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {activeTab === "Current Absences" && (
        <div className="space-y-3">
          {currentAbsences.length === 0 ? (
            <div className="bg-card rounded-xl shadow-sas border border-border p-12 text-center">
              <p className="text-muted-foreground">No current absences.</p>
            </div>
          ) : (
            currentAbsences.map((absence) => {
              const today = new Date();
              const start = new Date(absence.startDate);
              const end = new Date(absence.endDate);
              const total = end.getTime() - start.getTime();
              const elapsed = Math.max(0, today.getTime() - start.getTime());
              const progress = Math.min(100, (elapsed / total) * 100);

              return (
                <div key={absence.id} className="bg-card rounded-xl shadow-sas border border-border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold">{absence.reason}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {formatDate(absence.startDate)} — {formatDate(absence.endDate)} · {getDuration(absence.startDate, absence.endDate)}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">
                      Approved
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                      <span>{formatDate(absence.startDate)}</span>
                      <span>Today</span>
                      <span>{formatDate(absence.endDate)}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {absence.approvedAt && (
                    <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Accepted on {formatDate(absence.approvedAt)}
                    </p>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowExtendModal(absence.id)}
                      className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      Extend Absence
                    </button>
                    <button
                      onClick={() => setShowEndModal(absence.id)}
                      className="px-4 py-2 text-xs font-medium rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    >
                      End Absence
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {activeTab === "Expired Absences" && (
        <div className="space-y-3">
          {expiredAbsences.map((absence) => (
            <div key={absence.id} className="bg-card rounded-xl shadow-sas border border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{absence.reason}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {formatDate(absence.startDate)} — {formatDate(absence.endDate)} · {getDuration(absence.startDate, absence.endDate)}
                  </p>
                  {absence.approvedAt && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Accepted on {formatDate(absence.approvedAt)}
                    </p>
                  )}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
                  Expired
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Request Absence" && (
        <div className="bg-card rounded-xl shadow-sas border border-border p-6">
          <h2 className="text-lg font-bold mb-6">Request Absence</h2>

          <div className="space-y-4 max-w-md">
            {/* Step 1 */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-sm font-semibold">Select Range</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pl-10">
              <div>
                <label className="block text-xs font-medium mb-1 text-muted-foreground">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1 text-muted-foreground">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3 mb-2 mt-6">
              <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-sm font-semibold">Reason</span>
            </div>
            <div className="pl-10">
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Why do you need this absence?"
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Step 3 - Impact */}
            {startDate && endDate && (
              <>
                <div className="flex items-center gap-3 mb-2 mt-6">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm font-semibold">Impact Summary</span>
                </div>
                <div className="pl-10 bg-muted rounded-lg p-4">
                  <p className="text-sm">
                    <strong>{getDuration(startDate, endDate)}</strong> of absence requested.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    This may cover 2 assigned flights during this period.
                  </p>
                </div>
              </>
            )}

            <div className="pl-10 pt-2">
              <button
                onClick={handleRequest}
                disabled={!startDate || !endDate || !reason}
                className="px-5 py-2.5 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 active:scale-[0.98]"
              >
                Request Absence
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Extend Modal */}
      {showExtendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-sas-hover border border-border p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold mb-4">Extend Absence</h3>
            <label className="block text-sm font-medium mb-1.5">Additional days (max 30)</label>
            <input
              type="number"
              min="1"
              max="30"
              value={extendDays}
              onChange={(e) => setExtendDays(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring mb-3"
            />
            <label className="block text-sm font-medium mb-1.5">Reason</label>
            <textarea
              value={extendReason}
              onChange={(e) => setExtendReason(e.target.value)}
              placeholder="Reason for extension..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring mb-4"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowExtendModal(null)} className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors">Cancel</button>
              <button onClick={handleExtend} disabled={!extendDays || !extendReason} className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* End Modal */}
      {showEndModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-sas-hover border border-border p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold mb-2">End Absence Early</h3>
            <p className="text-sm text-muted-foreground mb-4">Are you sure you want to end your current absence early? This cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowEndModal(null)} className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors">Cancel</button>
              <button onClick={handleEnd} className="px-4 py-2 text-sm font-bold rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90">End Absence</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbsencePage;
