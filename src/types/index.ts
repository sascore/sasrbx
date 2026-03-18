export interface Flight {
  id: string;
  flightNumber: string;
  route: { from: string; to: string };
  staffArrival: string;
  status: "On Time" | "Delayed" | "Cancelled" | "Completed";
  hoster: string;
  discordEventUrl: string;
}

export interface Message {
  id: string;
  from: string;
  subject: string;
  body: string;
  date: string;
  read: boolean;
  isSystem: boolean;
  type?: "reminder" | "strike" | "warning" | "absence_approved" | "absence_rejected" | "general";
}

export interface Absence {
  id: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: "approved" | "pending" | "rejected" | "expired";
  approvedAt?: string;
}

export interface Employee {
  id: string;
  discordUsername: string;
  robloxUsername: string;
  role: string;
  strikes: number;
  flightsThisMonth: number;
  nextPayout: string;
}
