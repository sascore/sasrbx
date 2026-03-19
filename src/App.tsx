import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Homepage from "./pages/Homepage";
import DeparturesPage from "./pages/DeparturesPage";
import EmployeeLayout from "./components/EmployeeLayout";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import FlightsPage from "./pages/employee/FlightsPage";
import MessagesPage from "./pages/employee/MessagesPage";
import AbsencePage from "./pages/employee/AbsencePage";
import DocumentsPage from "./pages/employee/DocumentsPage";
import SettingsPage from "./pages/employee/SettingsPage";
import LoginPage from "./pages/employee/LoginPage";
import DiscordCallbackPage from "./pages/employee/DiscordCallbackPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <AuthProvider>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/departures" element={<DeparturesPage />} />
          <Route path="/employee" element={<EmployeeLayout />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="callback" element={<DiscordCallbackPage />} />
            <Route path="flights" element={<FlightsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="absence" element={<AbsencePage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
);

export default App;
