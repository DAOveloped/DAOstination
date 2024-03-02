"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "Home", href: "/" },
  { name: "DAOstinations", href: "/projects" },
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
    <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4 ">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 "
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in "
        quantity={3000}
      />
      <h1
        className="z-10 text-3xl duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap"
        style={{
          backgroundImage: randomTextGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }} // Apply random text gradient
      >
        About <br />
        DAOstination DAO
      </h1>
      <br />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div
        className="text-md text-zinc-300 my-16 text-center animate-fade-in"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <br />
        <div
          className="text-xl text-zinc-300 my-16 text-center animate-fade-in"
          style={{ width: "70%", margin: "0 auto" }}
        >
          Overview
        </div>
        <div
          className="text-md text-zinc-300 my-16 text-left animate-fade-in"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <p style={{ marginTop: "1em", textIndent: "1.5em" }}>
            DAOstination DAO is a platform where members come together to
            collaboratively fund the purchase, rental, or lease of various
            destinations around the world. Whether it's a cozy cabin in the
            woods, a ski house in Denver during Eth Denver, a sailboat off the
            coast of California during the Pebble Beach golf tournament, or a
            yacht during F1 in Monaco, DAOstination DAO offers its members
            unforgettable experiences in diverse settings.
          </p>
          <br />

          <p style={{ textIndent: "1.5em" }}>
            Designed to provide a dynamic platform with various membership
            tiers, voting mechanisms, and governance structures, its main goal
            is to strike a delicate balance between the diverse interests of
            DAOstinations, legal compliance, and democratic decision-making.
          </p>
          <p style={{ marginTop: "1em", textIndent: "1.5em" }}>
            At the heart of DAOstination DAO lies the DAOstination token. This
            token features a unique transaction tax system, where fees from
            buying and selling contribute to the early stages of membership.
            This innovative approach ensures sustainability and equitable access
            to the platform's features.
          </p>
          <p style={{ marginTop: "1em", textIndent: "1.5em" }}>
            As users progress through the membership tiers, they will encounter
            Non-Fungible Tokens (NFTs). These digital assets grant additional
            privileges, including enhanced voting rights and greater involvement
            in governance processes. They represent a key component of
            DAOstination DAO's commitment to empowering its community.
          </p>
          <p
            style={{
              marginTop: "1em",
              textIndent: "1.5em",
              marginBottom: "4em",
            }}
          >
            To maintain integrity and fairness within the platform, a governance
            board will be established. This board will oversee the distribution
            of membership benefits and uphold the principles of transparency and
            accountability. By fostering a balanced ecosystem, DAOstination DAO
            aims to create a thriving community where every voice is heard.
          </p>

          <br />
          <div
            className="text-xl text-zinc-300 my-16 text-center animate-fade-in"
            style={{ width: "70%", margin: "0 auto" }}
          >
            User Journey
          </div>
          <p
            style={{
              marginTop: "1em",
              textIndent: "1.5em",
              marginBottom: "4em",
            }}
          >
            Token tax will fund experiences, destinations will be voted on
            quarterly, 1 quarter in advance to allow for time to coordinate
            individual travel and airfare, locations will serve as a think tank
            style incubator to help other like minded crypto enthusiasts to
            network and socialize, some funds will be allocated to a scholarship
            program that will fund the accomodations, airfare and daily stipend
            for a selected candidate to attend a crypto conference or
            educational event and stay in the DAO location with other members
          </p>
          <div
            className="text-xl text-zinc-300 my-16 text-center animate-fade-in"
            style={{ width: "70%", margin: "0 auto" }}
          >
            Risk Management
          </div>
          <p
            style={{
              marginTop: "1em",
              textIndent: "1.5em",
              marginBottom: "4em",
            }}
          >
            Royalties from the sales of NFTs will be help in escrow to cover any
            potential damages or insurance claims on property stays, any member
            involved in damages commited to a property will have their status
            revoked, any member involved in any criminal behavior or behavior
            contrary to the code of conduct set forth by the members will also
            have their priveledges revoked
          </p>
        </div>
      </div>
    </div>
  );
}
