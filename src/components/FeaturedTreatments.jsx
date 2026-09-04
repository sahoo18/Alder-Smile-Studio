import { treatments } from '../data/content.js'

export default function FeaturedTreatments() {
  return (
    <section className="section section-tight" id="treatments">
      <div className="container">

        <p className="eyebrow">Signature care</p>

        <h2 className="section-title">
          Treatments people ask for by name
        </h2>

        <div style={styles.grid}>
          {treatments.map((t) => (
            <a
              href="#faq"
              key={t.name}
              style={styles.card}
            >

              {/* TREATMENT IMAGE */}
              <img
                src={t.image}
                alt={t.name}
                style={styles.image}
              />

              {/* CONTENT */}
              <div style={styles.cardBody}>

                <span style={styles.tag}>
                  {t.tag}
                </span>

                <h3 style={styles.cardTitle}>
                  {t.name}
                </h3>

                <p style={styles.cardText}>
                  {t.detail}
                </p>

                <p style={styles.duration}>
                  {t.duration}
                </p>

              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

const styles = {

  grid: {
    marginTop: 46,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 26,
  },

  card: {
    textDecoration: 'none',
    color: 'var(--ink)',
    background: 'var(--card)',
    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    display: 'flex',
    flexDirection: 'column',
  },

  image: {
    width: '100%',
    height: 210,
    objectFit: 'cover',
    display: 'block',
  },

  cardBody: {
    padding: '22px 24px 26px',
  },

  tag: {
    fontSize: 12,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--sage-deep)',
  },

  cardTitle: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 21,
    margin: '10px 0',
  },

  cardText: {
    fontSize: 14.5,
    color: 'var(--ink-soft)',
    lineHeight: 1.55,
  },

  duration: {
    marginTop: 16,
    fontSize: 13,
    color: 'var(--ink-faint)',
  },
}