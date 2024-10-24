import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev in Progress | About Me",
};

export default function AboutMePage() {
  return (
    <section>
      <h2>About Me</h2>
      <article
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <p style={{ marginTop: "24px" }}>
          Hey, I'm Júlio! I’m a software developer passionate about creating web
          solutions and solving real-world problems. I’ve been diving into
          programming since I was 14, and I’m always looking to learn new
          technologies and improve my skills.
        </p>
        <p>
          When I’m not coding, you can find me at the gym, reading, or exploring
          new hobbies. I’m also interested in personal development and sharing
          my journey with others.
        </p>
        <p>
          This blog is my space to share knowledge, experiences, and insights
          about coding, web development, and life. Here, you can explore my
          technical articles, check out my projects, and dive into my personal
          thoughts.
        </p>
        <p>
          I believe in community-driven learning, which is why this space is
          free from ads, affiliate links, and distractions. My aim is to inspire
          others to unleash their creativity and embark on their own tech
          journeys.
        </p>
        <p>Thank you for visiting.</p>
      </article>
    </section>
  );
}
