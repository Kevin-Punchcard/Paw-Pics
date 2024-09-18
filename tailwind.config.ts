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
        darkGreen:"#0D4736",
        beige: "#FCFAE1",
        foreground: "var(--foreground)",
      },
      fontSize: {
        megaXL: "4rem",
        body: "1.125rem"
      }
    },
  },
  plugins: [],
};
export default config;
