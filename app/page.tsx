"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import styles from "./styles.module.css";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Daostinations", href: "/projects" },
  { name: "Members", href: "/members" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${styles.background}`}
    >
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-white hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <img
        src="/banner.png"
        alt="Banner"
        className={`z-10 w-full max-w-3xl h-auto md:w-1/2 md:max-w-4xl ${styles.banner}`}
      />
      <div className="my-16 text-center">
        <h2 className="text-md text-white">stay, work, travel - together</h2>
      </div>
      <Footer />
    </div>
  );
}
