import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TrafficPortal from './TrafficPortal'
import AuthPortal from './AuthPortal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TrafficPortal />} />
        <Route path="/auth" element={<AuthPortal />} />
      </Routes>
    </Router>
  )
}

export default App
