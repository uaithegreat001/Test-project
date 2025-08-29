import { Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard' 
function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes/components for other sidebar links if needed */}
        </Routes>
      </main>
    </div>
  )
}

export default App
