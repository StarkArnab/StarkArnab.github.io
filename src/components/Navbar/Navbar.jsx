import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="nav-menu">
      <a className={styles.title} href="/">
        Arnab Dey
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className="nav-link home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link about">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link contact">
              Contact
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                const url =
                  "https://drive.google.com/file/d/1PJoyibqMFDCPy_q0txUkfrzAfWXv82do/view?usp=sharing";
                const download =
                  "https://drive.google.com/uc?export=download&id=1PJoyibqMFDCPy_q0txUkfrzAfWXv82do";
                window.open(url);
                window.location.href = download;
              }}
              className="nav-link resume"
              id="resume-button-1"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
