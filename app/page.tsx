"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "daostinations", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  // Function to generate random color
  const generateRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color.padStart(6, "0")}`;
  };

  // State to store random text gradient
  const [randomTextGradient, setRandomTextGradient] = useState("");

  // Generate random text gradient on component mount
  useEffect(() => {
    const numberOfColors = 5; // You can adjust the number of colors in the gradient
    let gradient = "linear-gradient(to right";
    for (let i = 0; i < numberOfColors; i++) {
      gradient += `, ${generateRandomColor()}`;
    }
    gradient += ")";
    setRandomTextGradient(gradient);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url("/background.jpg")`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-white hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <img
        src="/banner.png"
        alt="Banner"
        className="z-10 w-auto h-auto max-h-80 md:max-h-96 animate-title"
        style={{ width: "50%", height: "auto" }}
      />{" "}
      {/* Replace h1 with banner image */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-white">stay, work, travel - together</h2>
      </div>
    </div>
  );
}
