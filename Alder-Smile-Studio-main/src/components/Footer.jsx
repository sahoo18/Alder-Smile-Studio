import { footerLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer style={styles.wrap}>
      <div style={styles.overlay} />
      <div className="container" style={styles.inner}>
        <h2 style={styles.title}>Care you'll actually look forward to.</h2>
        <a href="#faq" className="btn-primary" style={styles.btn}>Book a Visit</a>

        <div style={styles.linkGrid}>
          <div>
            <p style={styles.colHeading}>Pages</p>
            {footerLinks.pages.map((l) => (
              <a key={l.label} href={l.href} style={styles.link}>{l.label}</a>
            ))}
          </div>
          <div>
            <p style={styles.colHeading}>Info</p>
            {footerLinks.info.map((l) => (
              <a key={l.label} href={l.href} style={styles.link}>{l.label}</a>
            ))}
          </div>
        </div>

        <p style={styles.copyright}>© {new Date().getFullYear()} Alder Dental Studio</p>
      </div>
    </footer>
  )
}

const styles = {
  wrap: {
    position: 'relative',
    background: 'var(--ink)',
    color: 'var(--paper)',
    paddingTop: 90,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(60% 50% at 80% 0%, rgba(140,165,146,0.25), transparent 70%)',
  },
  inner: {
    position: 'relative',
    textAlign: 'center',
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 450,
    fontSize: 'clamp(28px, 4.4vw, 46px)',
    maxWidth: '16ch',
    margin: '0 auto 30px',
  },
  btn: {
    background: 'var(--paper)',
    color: 'var(--ink)',
  },
  linkGrid: {
    marginTop: 70,
    display: 'flex',
    justifyContent: 'center',
    gap: '10vw',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  colHeading: {
    fontSize: 12.5,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'var(--sage)',
    marginBottom: 14,
  },
  link: {
    display: 'block',
    color: 'rgba(246,241,231,0.8)',
    textDecoration: 'none',
    fontSize: 14,
    marginBottom: 10,
  },
  copyright: {
    marginTop: 60,
    paddingBottom: 30,
    fontSize: 12.5,
    color: 'rgba(246,241,231,0.5)',
  },
}
