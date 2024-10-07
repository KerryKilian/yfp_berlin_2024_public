
/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  // i18n: {
  //   locales: ['de', 'en'], // Verfügbare Sprachen
  //   defaultLocale: 'de',   // Standardsprache
  // },
  // experimental: {
  //   appDir: true, // Stellt sicher, dass der App Router verwendet wird
  // },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ['localhost:3000', 'localhost', '/'], // Füge hier die Domains hinzu, von denen du Bilder laden möchtest
  },
//   images: {
//     unoptimized: true,
// },
};
