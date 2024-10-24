"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook para verificar a página atual
import styles from "./index.module.css";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { font_nunito } from "@/app/fonts";
import { useTheme } from "@/Contexts/themeContext";

const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <header className={`${styles.header} ${font_nunito.className}`}>
      <ul className={styles.listLinks}>
        <li>
          <Link href="/" className={pathname === "/" ? styles.activeLink : ""}>
            Julio C. Faria
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
                <SunIcon className={styles.icon} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <MoonIcon className={styles.icon} />
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
