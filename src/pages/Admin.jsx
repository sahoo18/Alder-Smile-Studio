import { useMemo, useState } from 'react'
import AdminSidebar from '../components/admin/AdminSidebar.jsx'
import StatCard from '../components/admin/StatCard.jsx'

const moduleInfo = {
  appointments: { title: 'Appointment Management', description: 'Review and update customer visit requests.', icon: '◷' },
  patients: { title: 'Patient Management', description: 'View patient information and treatment history.', icon: '◎' },
  treatments: { title: 'Treatment Management', description: 'Add, edit, and organize dental services and treatments.', icon: '✦' },
  gallery: { title: 'Gallery Management', description: 'Manage your clinic images and patient smile transformations.', icon: '▧' },
  blog: { title: 'Blog Management', description: 'Create and update dental health articles and studio news.', icon: '▤' },
}

const demoAppointments = [
  { id:'demo-1', name:'Emma Johnson', service:'Smile Consultation', date:'Today', time:'11:00 AM', status:'Confirmed' },
  { id:'demo-2', name:'Noah Williams', service:'Dental Cleaning', date:'Today', time:'2:30 PM', status:'Pending' },
  { id:'demo-3', name:'Olivia Brown', service:'Invisalign Review', date:'Tomorrow', time:'10:00 AM', status:'Confirmed' },
]

function readAppointments() {
  try { return JSON.parse(localStorage.getItem('alderAppointments') || '[]') } catch { return [] }
}

export default function Admin({ page = 'dashboard', navigate }) {
  const logout = () => { localStorage.removeItem('alderAdmin'); navigate('/login') }
  const [appointments, setAppointments] = useState(() => [...readAppointments(), ...demoAppointments])
  const isDashboard = page === 'dashboard'
  const info = moduleInfo[page]
  const customerCount = appointments.filter((item) => !String(item.id).startsWith('demo')).length

  function updateStatus(id, status) {
    setAppointments((current) => current.map((item) => item.id === id ? { ...item, status } : item))
    const saved = appointments.filter((item) => !String(item.id).startsWith('demo')).map((item) => item.id === id ? { ...item, status } : item)
    localStorage.setItem('alderAppointments', JSON.stringify(saved))
  }

  function deleteAppointment(id) {
    setAppointments((current) => current.filter((item) => item.id !== id))
    const saved = appointments.filter((item) => !String(item.id).startsWith('demo') && item.id !== id)
    localStorage.setItem('alderAppointments', JSON.stringify(saved))
  }

  return (
    <div className="admin-layout">
      <AdminSidebar page={page} navigate={navigate} onLogout={logout} />
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p className="admin-kicker">✦ ADMIN CONTROL CENTER</p>
            <h1>{isDashboard ? <>Alder Smile <span>Dashboard</span></> : info.title}</h1>
            <p>{isDashboard ? 'Welcome back! Your customer bookings are saved locally and appear here instantly.' : info.description}</p>
          </div>
          <button className="admin-add" onClick={() => navigate('/book')}>＋ New Appointment</button>
        </header>
        {isDashboard ? <Dashboard appointments={appointments} customerCount={customerCount} navigate={navigate} /> : page === 'appointments' ? <AppointmentManagement appointments={appointments} onStatus={updateStatus} onDelete={deleteAppointment} /> : <ManagementPage info={info} page={page} />}
      </main>
    </div>
  )
}

function Dashboard({ appointments, customerCount, navigate }) {
  const modules = [
    ['appointments', '◷', 'Appointments', 'Manage bookings, upcoming visits, and appointment requests.', String(appointments.length)],
    ['patients', '◎', 'Patients', 'View patient profiles and organize patient information.', String(486 + customerCount)],
    ['treatments', '✦', 'Treatments', 'Add or update cosmetic, restorative, and preventive services.', '12'],
    ['blog', '▤', 'Blog Management', 'Publish dental health insights and studio updates.', '24'],
  ]
  return <>
    <section className="stats-grid">
      <StatCard label="TOTAL APPOINTMENTS" value={String(appointments.length)} note={customerCount ? `${customerCount} new website requests` : 'Ready for new requests'} icon="◷" />
      <StatCard label="TOTAL PATIENTS" value={String(486 + customerCount)} note="Including new bookings" icon="◎" accent="sage" />
      <StatCard label="TREATMENTS" value="12" note="Active services" icon="✦" accent="coral" />
      <StatCard label="BLOG POSTS" value="24" note="Published articles" icon="▤" />
    </section>
    <section className="admin-section">
      <div className="section-heading"><div><h2>✦ Management Modules</h2><p>Quick access to your most important studio tools.</p></div></div>
      <div className="module-grid">{modules.map(([key, icon, title, description, count]) => <article className="module-card" key={key}><div className="module-card-top"><span className="module-icon">{icon}</span><span className="module-tag">Management</span></div><h3>{title}</h3><p>{description}</p><div className="module-footer"><span>{count} {key === 'blog' ? 'Articles' : 'Items'}</span><button onClick={() => navigate(`/admin/${key}`)}>Manage <b>↗</b></button></div></article>)}</div>
    </section>
    <section className="admin-section recent-section">
      <div className="section-heading"><h2>Upcoming Appointments</h2><button onClick={() => navigate('/admin/appointments')}>View all →</button></div>
      <div className="appointment-table">{appointments.slice(0,5).map((item) => <AppointmentRow key={item.id} item={item} />)}</div>
    </section>
  </>
}

function AppointmentRow({ item }) {
  const date = item.date === 'Today' || item.date === 'Tomorrow' ? item.date : new Date(item.date + 'T00:00:00').toLocaleDateString(undefined, { month:'short', day:'numeric', year:'numeric' })
  return <div className="appointment-row"><div className="patient-avatar">{item.name.split(' ').map((n) => n[0]).join('').slice(0,2)}</div><div><strong>{item.name}</strong><span>{item.service}</span></div><div className="appointment-time">{date}, {item.time}</div><span className={`status ${String(item.status).toLowerCase()}`}>{item.status}</span></div>
}

function AppointmentManagement({ appointments, onStatus, onDelete }) {
  const [search, setSearch] = useState('')
  const filtered = useMemo(() => appointments.filter((item) => `${item.name} ${item.service} ${item.status}`.toLowerCase().includes(search.toLowerCase())), [appointments, search])
  return <section className="management-page"><div className="management-hero"><span className="large-module-icon">◷</span><div><h2>Live appointment requests</h2><p>Bookings from the website are stored in this browser and can be confirmed or removed.</p></div></div><div className="content-toolbar"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search appointments..." /></div><div className="appointment-table management-table">{filtered.length ? filtered.map((item) => <div className="management-row" key={item.id}><div><strong>{item.name}</strong><span>{item.email || 'Demo patient'}</span></div><div><b>{item.service}</b><span>{item.date}, {item.time}</span></div><span className={`status ${String(item.status).toLowerCase()}`}>{item.status}</span><div className="row-actions"><button onClick={() => onStatus(item.id, item.status === 'Confirmed' ? 'Pending' : 'Confirmed')}>{item.status === 'Confirmed' ? 'Mark Pending' : 'Confirm'}</button><button className="danger" onClick={() => onDelete(item.id)}>Delete</button></div></div>) : <div className="table-empty"><span>◷</span><h3>No appointments found</h3><p>New website booking requests will appear here.</p></div>}</div></section>
}

function ManagementPage({ info, page }) {
  return <section className="management-page"><div className="management-hero"><span className="large-module-icon">{info.icon}</span><div><h2>{info.title}</h2><p>{info.description}</p></div></div><div className="content-toolbar"><input placeholder={`Search ${page}...`} /><button>Filter</button></div><div className="empty-table"><div className="table-empty"><span>{info.icon}</span><h3>Your {page} workspace is ready</h3><p>This front-end module is ready to connect to a database backend.</p><button>＋ Add your first item</button></div></div></section>
}
