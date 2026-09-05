import { trustBadges } from "../data/content.js";

import reception from "../assets/gallery/reception.png.png";
import treatmentRoom from "../assets/gallery/treatment-room.png.png";
import waitingRoom from "../assets/gallery/waiting-room.png.png";

export default function AboutHighlight() {
  return (
    <section className="section" id="about">
      <div className="container" style={styles.grid}>

        {/* LEFT IMAGE COLLAGE */}
        <div style={styles.collage}>

          {/* Large image */}
          <img
            src={reception}
            alt="Dental clinic reception"
            style={{
              ...styles.panel,
              gridArea: "a",
            }}
          />

          {/* Top-right image */}
          <img
            src={treatmentRoom}
            alt="Dental treatment room"
            style={{
              ...styles.panel,
              gridArea: "b",
            }}
          />

          {/* Bottom-right image */}
          <img
            src={waitingRoom}
            alt="Dental clinic waiting room"
            style={{
              ...styles.panel,
              gridArea: "c",
            }}
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="eyebrow">
            Our approach
          </p>

          <h2
            className="section-title"
            style={{ maxWidth: "13ch" }}
          >
            A practice built around unhurried care.
          </h2>

          <p style={styles.body}>
            Most dental anxiety isn't about pain — it's about
            feeling rushed and unheard. Alder runs longer
            appointment slots, explains every step before it
            happens, and plans treatment around your actual
            life, not a generic script.
          </p>

          <a
            href="#why-us"
            className="btn-ghost"
            style={{ marginTop: 26 }}
          >
            Know more

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <ul style={styles.badgeList}>
            {trustBadges.map((badge) => (
              <li
                key={badge}
                style={styles.badge}
              >
                {badge}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "6vw",
    alignItems: "center",
  },

  collage: {
    display: "grid",
    gridTemplateAreas: `
      "a a b"
      "a a c"
    `,
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: 14,
    height: 420,
  },

  panel: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    borderRadius: 28,
  },

  body: {
    marginTop: 20,
    color: "var(--ink-soft)",
    lineHeight: 1.7,
    fontSize: 16,
    maxWidth: "42ch",
  },

  badgeList: {
    listStyle: "none",
    padding: 0,
    margin: "34px 0 0 0",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },

  badge: {
    fontSize: 12.5,
    color: "var(--ink-soft)",
    border: "1px solid var(--line)",
    borderRadius: 999,
    padding: "7px 14px",
  },
};