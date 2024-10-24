import LinkedinBlack from "@/../public/linkedin_black.png";
import DiscordBlack from "@/../public/discord_black.png";
import GithubBlack from "@/../public/github_black.png";
import GmailBlack from "@/../public/gmail_black.png";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://github.com/devjuliof">
            <img src={GithubBlack.src}></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fariajulio">
            <img src={LinkedinBlack.src}></img>
          </a>
        </li>
        <li>
          <a href="https://discord.com/users/1223311759742599202">
            <img src={DiscordBlack.src}></img>
          </a>
        </li>
        <li>
          <a href="mailto:juliofariadev@gmail.com">
            <img src={GmailBlack.src}></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}
