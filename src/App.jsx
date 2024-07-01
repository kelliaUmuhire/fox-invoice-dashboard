import { Route, Routes } from "react-router-dom";
import InvoiceOverview from "./pages/InvoiceOverview";
import InvoiceDashboard from "./pages/InvoiceDashboard";

export default function App() {
  return (
    <div className="w-full">
      {/* <GamingDashboard /> */}
      <Routes>
        <Route path="/" element={<InvoiceOverview />} />
        <Route path="/dashboard" element={<InvoiceDashboard />} />
      </Routes>
    </div>
  );
}
