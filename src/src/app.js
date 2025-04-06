import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}