import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  typescript: {
    // Custom TypeScript configuration to suppress errors
    // Suppress errors related to the specific TypeScript error codes you encounter
    ignore: [
      // Example: Suppress error TSXXXXX
      // 'TSXXXXX',
      // Add more error codes to ignore as needed
    ],
  },
};

export default withContentlayer(nextConfig);
