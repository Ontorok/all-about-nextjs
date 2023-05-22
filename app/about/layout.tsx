import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-sky-700 flex justify-center items-center">
      <nav className={`${styles.nav} p-2 bg-slate-300`}>
        <ul className={styles.listItems}>
          <li className="mr-6">
            <Link
              className="text-black hover:text-blue-800"
              href="/about/subabout"
            >
              Sub-About
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-black hover:text-blue-800" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
