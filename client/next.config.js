/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-av-s3-images.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};


const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

//https://pm-av-s3-images.s3.ap-south-1.amazonaws.com/i1.jpg

module.exports = withBundleAnalyzer(nextConfig);
