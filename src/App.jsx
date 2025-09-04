import { Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';
import BuyBin from './pages/BuyBin';
import RequestSchedule from './pages/Request-schedule';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Help from './pages/Help';
import PaymentHistory from './Components/PaymentHistory';

import AdminPanel from "./pages/AdminPanel";
function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/buy-bin" element={<BuyBin />} />
            <Route path="/request-schedule" element={<RequestSchedule />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/help" element={<Help />} />
            <Route path="/payments" element={<PaymentHistory />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;