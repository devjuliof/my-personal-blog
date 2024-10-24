import styles from "./index.module.css";
import ramImage from "../../../public/ram.png";

export default function Apresentation() {
  return (
    <section className={styles.sectionApresentation}>
      <h1>Hi, I'm Julio</h1>
      <article>
        <img src={ramImage.src} alt="ram" className={styles.floatImg} />
        <p>
          I’m a software developer passionate about creating web solutions and
          solving real-world problems.
        </p>
        <p>
          I started this blog to share my knowledge and experiences related to
          coding and life.
        </p>
        <p>
          Here, you can expect to find articles on programming concepts, web
          technologies, and personal experiences, along with a bit about my
          journey.
        </p>
        <p>
          I hope this blog provides you with valuable insights and helps you on
          your learning journey!
        </p>
      </article>
    </section>
  );
}
