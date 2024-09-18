import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        bgGreen: "var(--background-green)",
        foreground: "var(--foreground)",
        fontColorPrimary: "var(--font-color-primary)",
      },
      fontSize: {
        "mega-xl": "25rem",
      }
    },
  },
  plugins: [],
};
export default config;
