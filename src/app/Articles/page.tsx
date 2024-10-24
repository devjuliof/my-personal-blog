import ArticleCard from "@/Components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev in Progress | Articles",
};

export default function AboutMePage() {
  return (
    <section>
      <ArticleCard
        ArticleName={"Test"}
        ArticleDescription={"teste"}
        ArticleDate={"October 23, 2024 — 3 min read"}
      />
    </section>
  );
}
