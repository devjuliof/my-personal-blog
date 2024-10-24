"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import { font_nunito } from "@/app/fonts";
import { useTheme } from "@/Contexts/themeContext";
import Image from "next/image";
import sunIcon from "@/../public/sun_icon.png";
import moonIcon from "@/../public/moon_icon.png";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <header className={`${styles.header} ${font_nunito.className}`}>
      <ul className={styles.listLinks}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.activeLink : ""}>
            Hello
          </Link>
        </li>
        <li>
          <Link
            href="/Articles"
            className={pathname === "/Articles" ? styles.activeLink : ""}
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href="/AboutMe"
            className={pathname === "/AboutMe" ? styles.activeLink : ""}
          >
            AboutMe
          </Link>
        </li>
        <li>
          <button className={styles.darkModeButton} onClick={toggleTheme}>
            {isDarkMode ? (
              <>
                <Image
                  src={sunIcon}
                  className={styles.icon}
                  alt="Sun Icon"
                  width={24}
                  height={24}
                />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Image
                  src={moonIcon}
                  className={styles.icon}
                  alt="Moon Icon"
                  width={24}
                  height={24}
                />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
