import { gallery } from "../data/content.js";

export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Recent care</p>

        <h2 className="section-title">
          Smile transformations
        </h2>

        <div style={styles.grid}>
          {gallery.map((item) => (
            <div key={item.title} style={styles.card}>

              <img
                src={item.image}
                alt={item.title}
                style={styles.image}
              />

              <div style={styles.body}>

                <span style={styles.tag}>
                  {item.category}
                </span>

                <h3 style={styles.title}>
                  {item.title}
                </h3>

                <p style={styles.text}>
                  {item.body}
                </p>

                <p style={styles.meta}>
                  {item.meta}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    marginTop: 46,
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  },

  card: {
    background: "var(--card)",
    borderRadius: "var(--radius)",
    overflow: "hidden",
    boxShadow: "var(--shadow)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
  },

  body: {
    padding: "20px 22px 24px",
  },

  tag: {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--sage-deep)",
  },

  title: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 18,
    margin: "10px 0",
  },

  text: {
    fontSize: "14px",
    color: "var(--ink-soft)",
    lineHeight: 1.6,
  },

  meta: {
    marginTop: 14,
    fontSize: "13px",
    color: "var(--ink-faint)",
  },
};