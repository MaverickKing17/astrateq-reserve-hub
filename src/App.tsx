import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservationProvider } from './context/ReservationContext';
import LandingPage from './pages/LandingPage';
import ReservePage from './pages/ReservePage';
import ConfirmationPage from './pages/ConfirmationPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <ReservationProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/confirmation/:reservationNumber" element={<ConfirmationPage />} />
        </Routes>
        <Toaster position="top-center" theme="dark" />
      </ReservationProvider>
    </Router>
  );
}
