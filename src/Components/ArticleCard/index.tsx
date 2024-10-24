import Link from "next/link";
import styles from "./index.module.css";

interface ArticleCardProps {
  ArticleName: string;
  ArticleDescription: string;
  ArticleDate: string;
}

export default function ArticleCard({
  ArticleName,
  ArticleDescription,
  ArticleDate,
}: ArticleCardProps) {
  return (
    <div className={styles.articleCard}>
      <Link href={`Articles/${ArticleName}`}>
        <h3>{ArticleName}</h3>
      </Link>
      <p>{ArticleDescription}</p>
      <p style={{ color: "#6B7280" }}>{ArticleDate}</p>
    </div>
  );
}
