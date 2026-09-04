import { navLinks } from '../data/content.js'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>alder<span style={{ color: 'var(--sage-deep)' }}>.</span>dental</a>
      <ul style={styles.links}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} style={styles.link}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="#faq" style={styles.cta}>Book a Visit</a>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'relative',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '34px 6vw',
  },
  logo: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 560,
    fontSize: 21,
    color: 'var(--ink)',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: 36,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'var(--ink-soft)',
    textDecoration: 'none',
    fontSize: 14.5,
  },
  cta: {
    border: '1px solid var(--ink)',
    color: 'var(--ink)',
    padding: '9px 20px',
    borderRadius: 999,
    fontSize: 13.5,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
}
