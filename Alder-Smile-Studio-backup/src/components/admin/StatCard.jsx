export default function StatCard({ label, value, note, icon, accent }) {
  return (
    <article className={`stat-card ${accent || ''}`}>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
      <span className="stat-icon">{icon}</span>
    </article>
  )
}
