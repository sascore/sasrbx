import { Settings } from "lucide-react";

const SettingsPage = () => (
  <div className="max-w-4xl">
    <h1 className="text-3xl font-bold mb-6">Settings</h1>
    <div className="bg-card rounded-xl shadow-sas border border-border p-12 text-center">
      <Settings className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
      <p className="text-muted-foreground">Settings will be available soon.</p>
      <p className="text-sm text-muted-foreground mt-1">Profile, notifications, and preferences.</p>
    </div>
  </div>
);

export default SettingsPage;
