import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TrafficPortal from './TrafficPortal'
import AuthPortal from './AuthPortal'
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrafficPortal />} />
        <Route path="/auth" element={<AuthPortal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
