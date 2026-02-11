import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import { Layout } from "./components/layout/Layout";

// Pages
import { HomePage } from "./pages/HomePage";
import { AutostradePage } from "./pages/AutostradePage";
import { TollRoadsPage } from "./pages/TollRoadsPage";
import { TrafficRulesPage } from "./pages/TrafficRulesPage";
import { ScenicRoutesPage } from "./pages/ScenicRoutesPage";
import { GasStationsPage } from "./pages/GasStationsPage";
import { ParkingPage } from "./pages/ParkingPage";
import { RoadSignsPage } from "./pages/RoadSignsPage";
import { SpeedLimitsPage } from "./pages/SpeedLimitsPage";
import { EmergencyPage } from "./pages/EmergencyPage";
import { TipsPage } from "./pages/TipsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/autostrade" element={<AutostradePage />} />
              <Route path="/toll-roads" element={<TollRoadsPage />} />
              <Route path="/traffic-rules" element={<TrafficRulesPage />} />
              <Route path="/scenic-routes" element={<ScenicRoutesPage />} />
              <Route path="/gas-stations" element={<GasStationsPage />} />
              <Route path="/parking" element={<ParkingPage />} />
              <Route path="/road-signs" element={<RoadSignsPage />} />
              <Route path="/speed-limits" element={<SpeedLimitsPage />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/tips" element={<TipsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
