import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent?: "primary" | "success" | "destructive" | "muted";
}

const accentMap = {
  primary: "text-primary bg-primary/10",
  success: "text-success bg-success/10",
  destructive: "text-destructive bg-destructive/10",
  muted: "text-muted-foreground bg-muted",
};

const StatCard = ({ icon: Icon, label, value, accent = "primary" }: StatCardProps) => (
  <div className="bg-card rounded-xl shadow-sas border border-border p-6 transition-all hover:shadow-sas-hover">
    <div className="flex items-center gap-4">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${accentMap[accent]}`}>
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold tabular-nums">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;
