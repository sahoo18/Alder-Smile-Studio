import { useState } from 'react'
import { faqs } from '../data/content.js'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq">
      <div className="container" style={styles.wrap}>
        <div>
          <p className="eyebrow">FAQs</p>
          <h2 className="section-title" style={{ maxWidth: '12ch' }}>Everything before you book</h2>
        </div>

        <div>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} style={styles.row}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={styles.question}
                >
                  {item.q}
                  <span style={{ ...styles.icon, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {isOpen && <p style={styles.answer}>{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const styles = {
  wrap: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 1.2fr',
    gap: '6vw',
  },
  row: {
    borderBottom: '1px solid var(--line)',
    padding: '22px 0',
  },
  question: {
    width: '100%',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    fontFamily: "'Fraunces', serif",
    fontSize: 18,
    color: 'var(--ink)',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  icon: {
    fontSize: 20,
    color: 'var(--sage-deep)',
    transition: 'transform 0.2s ease',
  },
  answer: {
    marginTop: 14,
    fontSize: 14.5,
    color: 'var(--ink-soft)',
    lineHeight: 1.65,
    maxWidth: '52ch',
  },
}
