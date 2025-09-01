import { Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard' 
import BuyBin from './pages/BuyBin';

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
            {/* Add more routes/components for other sidebar links if needed */}
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
