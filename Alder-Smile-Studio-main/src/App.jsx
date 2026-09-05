import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import Booking from './pages/Booking.jsx'

function getPath() {
  return window.location.pathname || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath())

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handlePop = () => setPath(getPath())
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  if (path === '/login') return <Login navigate={navigate} />
  if (path === '/book') return <Booking navigate={navigate} />

  if (path.startsWith('/admin')) {
    if (localStorage.getItem('alderAdmin') !== 'true') return <Login navigate={navigate} />
    const page = path.split('/')[2] || 'dashboard'
    return <Admin page={page} navigate={navigate} />
  }

  return <Home />
}
