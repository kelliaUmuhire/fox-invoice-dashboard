// import InvoiceDashboard from "./pages/InvoiceDashboard";

import SolitaireBoard from "./components/Solitaire";
import CustomDragLayer from "./components/Solitaire/CustomDragLayer";

// import GamingDashboard from "./pages/GamingDashboard";

export default function App() {
  return (
    <div className="w-full">
      {/* <GamingDashboard /> */}
      <SolitaireBoard />
      <CustomDragLayer />
    </div>
  );
}
