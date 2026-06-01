import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  // The original site loaded Tailwind with preflight disabled; the design
  // system in globals.css provides its own resets. Keep this to match.
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};

export default config;
