import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import { Layout } from "./components/layout/Layout";

// Pages
import { HomePage } from "./pages/HomePage";
import { MotorwaysPage } from "./pages/MotorwaysPage";
import { TollRoadsPage } from "./pages/TollRoadsPage";
import { TrafficRulesPage } from "./pages/TrafficRulesPage";
import { ScenicRoutesPage } from "./pages/ScenicRoutesPage";
import { PetrolStationsPage } from "./pages/PetrolStationsPage";
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
              <Route path="/motorways" element={<MotorwaysPage />} />
              <Route path="/toll-roads" element={<TollRoadsPage />} />
              <Route path="/traffic-rules" element={<TrafficRulesPage />} />
              <Route path="/scenic-routes" element={<ScenicRoutesPage />} />
              <Route path="/petrol-stations" element={<PetrolStationsPage />} />
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
