import Header from "@/Components/Header";
import styles from "./page.module.css";
import Apresentation from "@/Components/Apresentation";
import Line from "@/Ui/line";
import RecentArticles from "@/Components/RecentArticles";

export default function Home() {
  return (
    <>
      <Apresentation />
      <Line />
      <RecentArticles />
    </>
  );
}
