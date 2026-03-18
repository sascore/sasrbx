import { useState } from "react";
import { ArrowRight, ExternalLink, MessageCircle, X } from "lucide-react";
import type { Flight } from "@/types";

const statusColors: Record<string, string> = {
  "On Time": "bg-success/10 text-success",
  Delayed: "bg-[hsl(40,100%,50%)]/10 text-[hsl(40,100%,35%)]",
  Cancelled: "bg-destructive/10 text-destructive",
  Completed: "bg-muted text-muted-foreground",
};

interface FlightCardProps {
  flight: Flight;
  type: "assigned" | "scheduled";
  onUnassign?: (id: string, reason: string) => void;
  onSignUp?: (id: string) => void;
  onComment?: (id: string, comment: string) => void;
  currentStrikes?: number;
}

const FlightCard = ({ flight, type, onUnassign, onSignUp, onComment, currentStrikes = 0 }: FlightCardProps) => {
  const [showUnassignModal, setShowUnassignModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");

  const arrivalTime = new Date(flight.staffArrival);
  const hoursRemaining = (arrivalTime.getTime() - Date.now()) / 3600000;
  const isStrikeRisk = hoursRemaining < 3 && hoursRemaining > 0;

  const formattedDate = arrivalTime.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const formattedTime = arrivalTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="bg-card rounded-xl shadow-sas border border-border p-5 transition-all hover:shadow-sas-hover animate-slide-in">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Flight Info */}
          <div className="flex items-center gap-6 min-w-0">
            <span className="text-lg font-bold text-primary tabular-nums whitespace-nowrap">
              {flight.flightNumber}
            </span>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="font-medium">{flight.route.from}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="font-medium">{flight.route.to}</span>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="text-muted-foreground">Staff arrival: </span>
              <span className="font-medium tabular-nums">
                {formattedDate}, {formattedTime}
              </span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[flight.status]}`}>
              {flight.status}
            </span>
            <div>
              <span className="text-muted-foreground">Hoster: </span>
              <span className="font-medium">{flight.hoster}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={flight.discordEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Discord Event
            </a>

            {type === "assigned" && (
              <>
                <button
                  onClick={() => setShowCommentModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Comment
                </button>
                <button
                  onClick={() => setShowUnassignModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Unassign
                </button>
              </>
            )}

            {type === "scheduled" && (
              <button
                onClick={() => onSignUp?.(flight.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors active:scale-[0.98]"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Unassign Modal */}
      {showUnassignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-sas-hover border border-border p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold mb-2">Confirm Unassign</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Are you sure you want to unassign from <strong>{flight.flightNumber}</strong> ({flight.route.from} → {flight.route.to})?
            </p>

            {isStrikeRisk && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-destructive">⚠ Strike Warning</p>
                <p className="text-sm text-destructive/80 mt-1">
                  Staff arrival is less than 3 hours away. Unassigning now will result in a <strong>strike</strong>.
                </p>
                <p className="text-sm text-destructive/80 mt-1">
                  Your current strikes: <strong>{currentStrikes}/3</strong>
                </p>
              </div>
            )}

            <label className="block text-sm font-medium mb-1.5">Reason (required)</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Please provide a reason..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => { setShowUnassignModal(false); setReason(""); }}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (reason.trim()) {
                    onUnassign?.(flight.id, reason);
                    setShowUnassignModal(false);
                    setReason("");
                  }
                }}
                disabled={!reason.trim()}
                className="px-4 py-2 text-sm font-bold rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors disabled:opacity-50"
              >
                {isStrikeRisk ? "Confirm (Strike)" : "Confirm Unassign"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comment Modal */}
      {showCommentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
          <div className="bg-card rounded-xl shadow-sas-hover border border-border p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold mb-2">Comment for Hoster</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send a message to <strong>{flight.hoster}</strong> about flight {flight.flightNumber}.
            </p>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="e.g. I will be 5 minutes late"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px] focus:outline-none focus:ring-2 focus:ring-ring mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => { setShowCommentModal(false); setComment(""); }}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (comment.trim()) {
                    onComment?.(flight.id, comment);
                    setShowCommentModal(false);
                    setComment("");
                  }
                }}
                disabled={!comment.trim()}
                className="px-4 py-2 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Send Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightCard;
