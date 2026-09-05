const links = [
  ['dashboard', '▦', 'Dashboard'],
  ['appointments', '◷', 'Appointments'],
  ['patients', '◎', 'Patients'],
  ['treatments', '✦', 'Treatments'],
  ['gallery', '▧', 'Gallery'],
  ['blog', '▤', 'Blog Posts'],
]

export default function AdminSidebar({ page, navigate, onLogout }) {
  return (
    <aside className="admin-sidebar">
      <button className="sidebar-brand" onClick={() => navigate('/')}>
        <span className="sidebar-logo">AS</span>
        <span><strong>ALDER</strong><small>SMILE STUDIO</small></span>
      </button>

      <p className="sidebar-label">MANAGEMENT</p>
      <nav className="sidebar-nav">
        {links.map(([key, icon, label]) => (
          <button key={key} className={page === key ? 'active' : ''} onClick={() => navigate(`/admin/${key}`)}>
            <span>{icon}</span>{label}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button onClick={() => navigate('/')}><span>↗</span> View Website</button>
        <button onClick={onLogout}><span>⇥</span> Sign Out</button>
      </div>
    </aside>
  )
}
