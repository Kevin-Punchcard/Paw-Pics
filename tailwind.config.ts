import type { Config } from "tailwindcss";
import daisyui from "daisyui";  // Use ES module import

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
        peach: "#FCB888",
        mustard: "#EDB53E",
        foreground: "var(--foreground)",
      },
      fontSize: {
        megaXL: "4rem",
        body: "1.125rem",
      },
    },
  },
  plugins: [
    daisyui, // Use ES module for DaisyUI
  ],
  daisyui: {
    themes: false, // Choose your theme options as per your needs
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "", // Customize the prefix if needed
    logs: true,
    themeRoot: ":root",
  },
};

export default config;