import styles from "./index.module.css";
import Link from "next/link";

export default function RecentArticles() {
  return (
    <section>
      <header className={styles.header}>
        <h2>Recent Articles</h2>
        <Link href="/Articles">
          <button>All Articles</button>
        </Link>
      </header>
      <article className={styles.infoArticle}>
        <ul>
          <Link href={`Articles/${"Test"}`}>
            <li>
              <p>Test</p>
              <p>23/10</p>
            </li>
          </Link>
        </ul>
      </article>
    </section>
  );
}
