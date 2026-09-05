import chairsideCare from "../assets/gallery/chairside-care.png.png";
import treatmentPlans from "../assets/gallery/treatment-plans.png.png";
import calmEnvironment from "../assets/gallery/calm-environment.png.png";
import modernTechnology from "../assets/gallery/modern-technology.png.png";

export default function WhyAlder() {
  const standards = [
    {
      title: "Meticulous Chairside Care",
      body: "Every step explained before it happens — no surprises, no rushed hands.",
      image: chairsideCare,
    },
    {
      title: "Personalized Treatment Plans",
      body: "Your plan is built around your mouth, your budget, and your schedule.",
      image: treatmentPlans,
    },
    {
      title: "A Calmer Environment",
      body: "Quiet rooms, warm light, and noise-canceling headphones on request.",
      image: calmEnvironment,
    },
    {
      title: "Modern, Gentle Technology",
      body: "Digital scanning and low-radiation imaging instead of the old goopy trays.",
      image: modernTechnology,
    },
  ];

  return (
    <section className="section" id="why-us">
      <div className="container">

        <p className="eyebrow center">
          The Alder standard
        </p>

        <h2
          className="section-title"
          style={{
            margin: "0 auto",
            textAlign: "center",
            maxWidth: "14ch",
          }}
        >
          The details patients notice
        </h2>

        <div style={styles.grid}>
          {standards.map((item) => (
            <div key={item.title} style={styles.item}>

              <div style={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                />
              </div>

              <h3 style={styles.title}>
                {item.title}
              </h3>

              <p style={styles.body}>
                {item.body}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  grid: {
    marginTop: 50,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 30,
  },

  item: {
    textAlign: "center",
  },

  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 22px",

  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 18.5,
    marginBottom: 10,
  },

  body: {
    fontSize: 14,
    color: "var(--ink-soft)",
    lineHeight: 1.6,
    maxWidth: "26ch",
    margin: "0 auto",
  },
};