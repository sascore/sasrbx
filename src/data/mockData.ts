import type { Flight, Message, Absence, Employee } from "@/types";

export const currentEmployee: Employee = {
  id: "1",
  discordUsername: "Falke",
  robloxUsername: "FalkeAviation",
  role: "Cabin Crew",
  strikes: 1,
  flightsThisMonth: 7,
  nextPayout: "April 1, 2026",
};

export const assignedFlights: Flight[] = [
  {
    id: "1",
    flightNumber: "SK 1427",
    route: { from: "Copenhagen", to: "Stockholm" },
    staffArrival: "2026-03-20T08:30:00",
    status: "On Time",
    hoster: "NordicPilot",
    discordEventUrl: "#",
  },
  {
    id: "2",
    flightNumber: "SK 2841",
    route: { from: "Oslo", to: "Bergen" },
    staffArrival: "2026-03-21T14:00:00",
    status: "On Time",
    hoster: "SkyCommander",
    discordEventUrl: "#",
  },
  {
    id: "3",
    flightNumber: "SK 1590",
    route: { from: "Stockholm", to: "Helsinki" },
    staffArrival: "2026-03-22T10:15:00",
    status: "Delayed",
    hoster: "AeroAdmin",
    discordEventUrl: "#",
  },
];

export const scheduledFlights: Flight[] = [
  {
    id: "4",
    flightNumber: "SK 3012",
    route: { from: "Copenhagen", to: "Oslo" },
    staffArrival: "2026-03-23T09:00:00",
    status: "On Time",
    hoster: "NordicPilot",
    discordEventUrl: "#",
  },
  {
    id: "5",
    flightNumber: "SK 4455",
    route: { from: "Bergen", to: "Tromsø" },
    staffArrival: "2026-03-24T16:30:00",
    status: "On Time",
    hoster: "FjordFlyer",
    discordEventUrl: "#",
  },
  {
    id: "6",
    flightNumber: "SK 7789",
    route: { from: "Helsinki", to: "Copenhagen" },
    staffArrival: "2026-03-25T11:45:00",
    status: "On Time",
    hoster: "SkyCommander",
    discordEventUrl: "#",
  },
];

export const messages: Message[] = [
  {
    id: "1",
    from: "System",
    subject: "Flight Reminder: SK 1427",
    body: "Reminder: You have a flight SK 1427 (CPH → STO) tomorrow at 08:30. Please ensure you arrive on time.",
    date: "2026-03-19T08:00:00",
    read: false,
    isSystem: true,
    type: "reminder",
  },
  {
    id: "2",
    from: "System",
    subject: "Strike Received",
    body: "You have received a strike for late unassignment from flight SK 9921. Current strikes: 1/3.",
    date: "2026-03-15T14:00:00",
    read: true,
    isSystem: true,
    type: "strike",
  },
  {
    id: "3",
    from: "NordicPilot",
    subject: "Schedule Change Request",
    body: "Hey Falke, would you be able to swap shifts on the 22nd? I have a conflict with another event.",
    date: "2026-03-17T10:30:00",
    read: false,
    isSystem: false,
    type: "general",
  },
  {
    id: "4",
    from: "System",
    subject: "Absence Approved",
    body: "Your absence request from March 28 to April 2 has been approved by management.",
    date: "2026-03-16T09:00:00",
    read: true,
    isSystem: true,
    type: "absence_approved",
  },
];

export const currentAbsences: Absence[] = [
  {
    id: "1",
    startDate: "2026-03-28",
    endDate: "2026-04-02",
    reason: "Family vacation",
    status: "approved",
    approvedAt: "2026-03-16",
  },
];

export const expiredAbsences: Absence[] = [
  {
    id: "2",
    startDate: "2026-02-10",
    endDate: "2026-02-14",
    reason: "Medical leave",
    status: "expired",
    approvedAt: "2026-02-09",
  },
  {
    id: "3",
    startDate: "2026-01-20",
    endDate: "2026-01-25",
    reason: "Personal matters",
    status: "expired",
    approvedAt: "2026-01-19",
  },
];

export const allStaff = [
  { discordUsername: "NordicPilot", robloxUsername: "NordicPilotRBX", role: "Hoster" },
  { discordUsername: "SkyCommander", robloxUsername: "SkyCmdRBX", role: "Executive" },
  { discordUsername: "AeroAdmin", robloxUsername: "AeroAdminRBX", role: "Hoster" },
  { discordUsername: "FjordFlyer", robloxUsername: "FjordFlyRBX", role: "Cabin Crew" },
  { discordUsername: "VikingAir", robloxUsername: "VikingAirRBX", role: "Cabin Crew" },
];
