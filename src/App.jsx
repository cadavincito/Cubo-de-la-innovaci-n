import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importamos los componentes de estructura (Layout)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Importamos las Páginas (Pages)
import Home from './pages/Home/Home';
import Conocenos from './pages/Conocenos/Conocenos';
import HubTics from './pages/HubTics/HubTics';
import SmartCityPage from './pages/SmartCity/SmartCityPage';
import ObservatorioPage from './pages/Observatorio/ObservatorioPage';
import RioGoPage from './pages/RioGo/RioGoPage';
import RioInnovaPage from './pages/RioInnova/RioInnovaPage';
import RioInnovaGovTech from "./pages/RioInnova/components/RioInnovaGovTech";
import TicsAcademyPage from './pages/TicsAcademy/TicsAcademyPage';
import TicsLandPage from './pages/TicsLand/TicsLandPage';
import EspaciosPage from './pages/Espacios/EspaciosPage';
import MakerSpace from './pages/Espacios/components/MakerSpace';
import Coworklabs from './pages/Espacios/components/Coworklabs';
import CuboInnovacion from './pages/Espacios/components/CuboInnovacion';
import OfertasPage from './pages/Ofertas/OfertasPage';
import Contacto from './pages/Contacto/ContactoPage';
import FloatingChatbot from './components/ui/FloatingChatbot';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conocenos" element={<Conocenos />} />
            
            <Route path="/servicios/hubtics" element={<HubTics />} />
            <Route path="/servicios/smartcity" element={<SmartCityPage />} />
            <Route path="/servicios/observatorio" element={<ObservatorioPage />} />
            
            <Route path="/servicios/riogo" element={<RioGoPage />} />
            <Route path="/servicios/rioinnova" element={<RioInnovaPage />} />
            <Route path="/servicios/rioinnova/govtech" element={<RioInnovaGovTech />} />
            <Route path="/servicios/academy" element={<TicsAcademyPage />} />
            
            <Route path="/servicios/land" element={<TicsLandPage />} />
            
            <Route path="/espacios" element={<EspaciosPage />} />

            <Route path="/espacios/maker-space" element={<MakerSpace />} />
            <Route path="/espacios/coworklabs" element={<Coworklabs />} />
            <Route path="/espacios/cubo-innovacion" element={<CuboInnovacion />} />
            <Route path="/ofertas" element={<OfertasPage />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </main>

        <Footer />
        <FloatingChatbot />
      </div>
    </Router>
  );
}

export default App;