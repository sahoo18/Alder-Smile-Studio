import { useState } from 'react'

export default function Login({ navigate }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please enter your username and password.')
      return
    }
    localStorage.setItem('alderAdmin', 'true')
    navigate('/admin/dashboard')
  }

  return (
    <main className="login-page">
      <div className="login-orb orb-one" />
      <div className="login-orb orb-two" />
      <section className="login-card">
        <button className="brand-mark" onClick={() => navigate('/')} aria-label="Go to home">
          <span>AS</span>
          <small>ALDER SMILE</small>
        </button>

        <div className="login-heading">
          <p className="admin-pill">✦ ADMIN CONTROL CENTER</p>
          <h1>Welcome Back</h1>
          <p>Sign in to access your Alder Smile Studio administrative dashboard.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username or Email
            <span className="input-wrap">
              <span className="input-icon">◯</span>
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
            </span>
          </label>

          <label>
            Password
            <span className="input-wrap">
              <span className="input-icon">⌑</span>
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
            </span>
          </label>

          {error && <p className="login-error">{error}</p>}
          <button className="login-submit" type="submit">Sign In <span>→</span></button>
        </form>

        <button className="back-home" onClick={() => navigate('/')}>← Back to Main Page</button>
        <p className="demo-note">Demo mode: enter any username and password.</p>
      </section>
    </main>
  )
}
