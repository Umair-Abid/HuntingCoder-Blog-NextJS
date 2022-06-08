import React from 'react'
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
