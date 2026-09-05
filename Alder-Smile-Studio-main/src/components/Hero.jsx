export default function Hero() {
  return (
    <section style={styles.hero} id="top">
      <div style={{ ...styles.blob, width: 340, height: 340, top: -80, right: -60,
        background: 'radial-gradient(circle at 30% 30%, rgba(140,165,146,0.55), transparent 70%)' }} />
      <div style={{ ...styles.blob, width: 260, height: 260, bottom: -40, left: -40,
        background: 'radial-gradient(circle at 30% 30%, rgba(226,144,127,0.4), transparent 70%)' }} />

      <div style={styles.main}>
        <p className="eyebrow center">Now welcoming new patients</p>
        <h1 style={styles.headline}>
          Make peace<br />with the{' '}
          <em style={styles.emphasis}>
            dentist
            <svg style={styles.underline} viewBox="0 0 220 14" preserveAspectRatio="none">
              <path
                d="M4,4 C 50,16 170,16 216,4"
                fill="none"
                stroke="var(--coral)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </em>.
        </h1>
        <p style={styles.sub}>
          Alder blends unhurried, modern dental care with a studio that doesn't feel
          like a waiting room. Check-ups you don't dread — that's really the whole idea.
        </p>
        <div style={styles.ctaRow}>
          <a href="/book" className="btn-primary">Book a Visit</a>
          <a href="#about" className="btn-ghost">
            See our approach
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div style={styles.trustStrip}>
        <div style={styles.trustItem}><span style={styles.dot} />Evening &amp; Saturday hours</div>
        <div style={styles.trustItem}><span style={styles.dot} />Most insurance accepted</div>
        <div style={styles.trustItem}><span style={styles.dot} />Same-week appointments</div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '92vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    background:
      'radial-gradient(60% 50% at 82% 12%, rgba(140,165,146,0.35), transparent 70%), radial-gradient(55% 45% at 8% 85%, rgba(226,144,127,0.28), transparent 70%), linear-gradient(180deg, var(--paper) 0%, var(--paper-deep) 100%)',
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(2px)',
    opacity: 0.5,
  },
  main: {
    position: 'relative',
    zIndex: 4,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4vh 6vw 8vh',
  },
  headline: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 450,
    fontSize: 'clamp(40px, 6.4vw, 84px)',
    lineHeight: 1.05,
    maxWidth: '15ch',
    color: 'var(--ink)',
  },
  emphasis: {
    fontStyle: 'italic',
    color: 'var(--sage-deep)',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  underline: {
    position: 'absolute',
    left: '2%',
    right: '2%',
    bottom: '-0.12em',
    height: 14,
  },
  sub: {
    margin: '28px auto 0',
    maxWidth: '46ch',
    fontSize: 'clamp(15.5px, 1.7vw, 18px)',
    lineHeight: 1.6,
    color: 'var(--ink-soft)',
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 22,
    marginTop: 40,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  trustStrip: {
    position: 'relative',
    zIndex: 4,
    borderTop: '1px solid var(--line)',
    padding: '22px 6vw',
    display: 'flex',
    justifyContent: 'center',
    gap: 40,
    flexWrap: 'wrap',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    fontSize: 13,
    color: 'var(--ink-soft)',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: 'var(--sage-deep)',
    flexShrink: 0,
  },
}
