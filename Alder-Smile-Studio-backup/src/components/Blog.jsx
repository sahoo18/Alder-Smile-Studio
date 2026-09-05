import { posts } from "../data/content.js";

import teethWhitening from "../assets/gallery/teeth-whitening.png.png";
import kidsDentist from "../assets/gallery/kids-dentist.png.png";
import invisalignVsBraces from "../assets/gallery/invisalign-vs-braces.png.png";

const blogImages = [
  teethWhitening,
  kidsDentist,
  invisalignVsBraces,
];

export default function Blog() {
  return (
    <section className="section section-tight" id="blog">
      <div className="container">

        <p className="eyebrow">
          Dental health insights
        </p>

        <h2 className="section-title">
          Reading, not marketing
        </h2>

        <div style={styles.grid}>
          {posts.map((post, i) => (
            <div key={post.title} style={styles.card}>

              <img
                src={blogImages[i]}
                alt={post.title}
                style={styles.thumb}
              />

              <p style={styles.date}>
                {post.date}
              </p>

              <h3 style={styles.title}>
                {post.title}
              </h3>

              <p style={styles.body}>
                {post.body}
              </p>

              <span style={styles.link}>
                Read more →
              </span>

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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 26,
  },

  card: {
    color: "var(--ink)",
  },

  thumb: {
    width: "100%",
    height: "170px",
    objectFit: "cover",
    display: "block",
    borderRadius: "22px",
    marginBottom: "18px",
  },

  date: {
    fontSize: "12.5px",
    color: "var(--ink-faint)",
  },

  title: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: "19px",
    margin: "8px 0",
  },

  body: {
    fontSize: "14px",
    color: "var(--ink-soft)",
    lineHeight: 1.55,
  },

  link: {
    display: "inline-block",
    marginTop: "14px",
    fontSize: "13.5px",
    color: "var(--sage-deep)",
  },
};