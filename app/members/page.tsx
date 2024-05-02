"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ArweaveWebWallet } from "arweave-wallet-connector";
import { daostinations } from "../components/daostinations";

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
  const [quantity, setQuantity] = useState<number>(0); // Specify type as number
  const [delay, setDelay] = useState<number>(0); // Specify type as number
  const [voteTarget, setVoteTarget] = useState<string>(""); // Specify type as string
  const [voteSide, setVoteSide] = useState<string>(""); // Specify type as string

  useEffect(() => {
    const connectWallet = async () => {
      await wallet.connect();
      setWalletAddress(wallet.address || ""); // Provide default value for wallet.address
    };

    connectWallet();
  }, []);

  const handleStake = () => {
    // Implement logic to handle stake action
    // Example: Call smart contract function to stake tokens
    console.log("Staking", quantity, "tokens with unstake delay of", delay);
  };

  const handleUnstake = () => {
    // Implement logic to handle unstake action
    // Example: Call smart contract function to unstake tokens
    console.log("Unstaking", quantity, "tokens");
  };

  const handleVote = () => {
    if (!voteTarget) {
      console.log("Please select a daostination");
      return;
    }
    // Implement logic to handle vote action
    // Example: Call smart contract function to vote
    console.log("Voting for", voteTarget, "with side", voteSide);
  };

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
      <h1 className="z-10 text-3xl duration-1000 cursor-default text-edge-outline font-display sm:text-6xl md:text-8xl mb-5 whitespace-nowrap">
        member dashboard
      </h1>
      <div>
        <button
          className="text-md text-zinc-300 my-3 text-center bg-zinc-500 px-4 py-2 rounded-md hover:bg-zinc-600"
          onClick={() => wallet.connect()}
        >
          Connect your Arweave wallet
        </button>
        <p className="text-md text-zinc-300 mt-5 mb-5 text-center">
          Your wallet address:{" "}
          {walletAddress ? (
            <span style={{ color: "#FF8243" }}>{walletAddress}</span>
          ) : (
            "Not connected"
          )}
        </p>
      </div>

      <div className="text-md text-zinc-300 mt-8 mb-2 text-center">
        <p>Select a daostination:</p>
        <select
          value={voteTarget}
          onChange={(e) => setVoteTarget(e.target.value)}
          className="mt-2 border border-zinc-400 rounded-md p-1"
        >
          <option value="">Select</option>
          {daostinations.map((daostination) => (
            <option key={daostination.id} value={daostination.name}>
              {daostination.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-md text-zinc-300 my-10 text-center">
        <div style={{ width: "70%", margin: "0 auto" }}>
          {/* Staking Form */}
          <div className="mb-16">
            <h2 className="text-lg text-zinc-500 mb-2">Stake Tokens</h2>
            <form onSubmit={handleStake} className="flex items-center gap-4">
              <label>
                Quantity:
                <input
                  type="number"
                  value={quantity.toString()}
                  onChange={(e) => setQuantity(parseFloat(e.target.value))}
                  className="border border-zinc-400 rounded-md p-1 input-narrow" // Add input-narrow class
                />
              </label>
              <label>
                Unstake Delay:
                <input
                  type="number"
                  value={delay.toString()}
                  onChange={(e) => setDelay(parseFloat(e.target.value))}
                  className="border border-zinc-400 rounded-md p-1 input-narrow" // Add input-narrow class
                />
              </label>
              <button
                type="submit"
                className="bg-zinc-500 px-4 py-2 rounded-md text-white hover:bg-zinc-600"
              >
                Stake
              </button>
            </form>
          </div>
          {/* Unstaking Form */}
          <div className="mb-16">
            <h2 className="text-lg text-zinc-500 mb-2">Unstake Tokens</h2>
            <form onSubmit={handleUnstake} className="flex items-center gap-4">
              <label>
                Quantity:
                <input
                  type="number"
                  value={quantity.toString()} // Convert to string as it's a text input
                  onChange={(e) => setQuantity(parseFloat(e.target.value))} // Convert to number
                  className="border border-zinc-400 rounded-md p-1"
                />
              </label>
              <button
                type="submit"
                className="bg-zinc-500 px-4 py-2 rounded-md text-white hover:bg-zinc-600"
              >
                Unstake
              </button>
            </form>
          </div>
          {/* Voting Form */}
          <div className="mb-16">
            <h2 className="text-lg text-zinc-500 mb-2">Vote</h2>
            <form onSubmit={handleVote} className="flex items-center gap-4">
              <label>
                Target:
                <input
                  type="text"
                  value={voteTarget}
                  onChange={(e) => setVoteTarget(e.target.value)}
                  className="border border-zinc-400 rounded-md p-1 input-narrow" // Add input-narrow class
                />
              </label>
              <label>
                Side:
                <input
                  type="text"
                  value={voteSide}
                  onChange={(e) => setVoteSide(e.target.value)}
                  className="border border-zinc-400 rounded-md p-1 input-narrow" // Add input-narrow class
                />
              </label>
              <button
                type="submit"
                className="bg-zinc-500 px-4 py-2 rounded-md text-white hover:bg-zinc-600"
              >
                Vote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
