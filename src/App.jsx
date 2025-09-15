import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Homepage from './pages/Home'
import LoginPage from './pages/LoginPage'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}
