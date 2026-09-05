import { stats } from '../data/content.js'

export default function Stats() {
  return (
    <section className="section-tight" style={styles.section}>
      <div className="container" style={styles.grid}>
        {stats.map((s) => (
          <div key={s.label}>
            <h3 style={styles.value}>{s.value}</h3>
            <p style={styles.label}>{s.label}</p>
            <p style={styles.body}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    background: 'var(--ink)',
    color: 'var(--paper)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 30,
  },
  value: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 'clamp(32px, 4vw, 46px)',
    color: 'var(--paper)',
  },
  label: {
    marginTop: 8,
    fontSize: 14.5,
    color: 'var(--sage)',
  },
  body: {
    marginTop: 10,
    fontSize: 13.5,
    color: 'rgba(246,241,231,0.65)',
    lineHeight: 1.5,
  },
}
