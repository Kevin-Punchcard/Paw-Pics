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
        light: "#FFFEF3",
        grey: "#5B6575",
        dark: "#093327",
        onboarding: "#F7DCA1",
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
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "", // Customize the prefix if needed
    logs: true,
    themeRoot: ":root",
    themes: [
      {
        mytheme: {
          "primary": "#EDB53E",
          'primary-content': '#093327',
          "secondary": "#093327",
          "tertiary": "#5B6575",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ]
  },
};

export default config;