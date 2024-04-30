"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArweaveWebWallet } from "arweave-wallet-connector";

const state = { url: "arweave.app" };
const wallet = new ArweaveWebWallet(
  {
    name: "daostination",
    logo: "https://twitter.com/daostination/photo",
  },
  { state }
);
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Daostinations", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const connectWallet = async () => {
      await wallet.connect();
      setWalletAddress(wallet.address);
    };

    connectWallet();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      wallet.off("addressChange");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16">
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
      <h1 className="z-10 text-3xl duration-1000 cursor-default text-edge-outline font-display sm:text-6xl md:text-8xl whitespace-nowrap">
        member dashboard
      </h1>

      <div>
        <p
          className="text-md text-zinc-300 my-3 text-center cursor-pointer"
          onClick={() => wallet.connect()}
        >
          Connect your Arweave wallet
        </p>
        <p className="text-md text-zinc-300 my-3 text-center">
          Your wallet address:
          {walletAddress ? (
            <span style={{ color: "#FF8243" }}>{walletAddress}</span>
          ) : (
            "Not connected"
          )}
        </p>
      </div>

      <div
        className="text-md text-zinc-300 my-16 text-center"
        style={{ width: "70%", margin: "0 auto" }}
      >
        <div
          className="text-md text-zinc-300 my-16 text-left"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <p style={{ marginTop: "1em", textIndent: "1.5em" }}></p>
        </div>
      </div>
    </div>
  );
}
