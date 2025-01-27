import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        garet: ["garet", "sans-serif"],
        romantic: ["romantic", "sans-serif"],
        copyduck: ["copyduck", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
