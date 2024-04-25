import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center text-white text-xs">
      Built with AO{" "}
      <a
        href="https://ao.arweave.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-900"
      ></a>{" "}
      on{" "}
      <a
        href="https://arweave.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-900"
      >
        Arweave
      </a>
    </footer>
  );
};

export default Footer;
