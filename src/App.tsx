import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrowdSparkHero from "./components/WalkingPeepsHero";
import PricingPage from './pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CrowdSparkHero />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;