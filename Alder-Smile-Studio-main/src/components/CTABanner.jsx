export default function CTABanner() {
  return (
    <section style={styles.wrap}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>Modern dentistry, human pace.</h2>
        <a href="/book" className="btn-primary" style={styles.btn}>Book Appointment</a>
      </div>
    </section>
  )
}

const styles = {
  wrap: {
    position: 'relative',
    minHeight: 360,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(155deg, var(--sage-deep) 0%, var(--ink) 70%)',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(60% 60% at 30% 20%, rgba(226,144,127,0.25), transparent 70%)',
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    padding: '0 6vw',
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 450,
    fontSize: 'clamp(28px, 4.4vw, 48px)',
    color: 'var(--paper)',
    maxWidth: '18ch',
    margin: '0 auto 32px',
    lineHeight: 1.2,
  },
  btn: {
    background: 'var(--paper)',
    color: 'var(--ink)',
  },
}
