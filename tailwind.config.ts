import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        "Dark-Violet": "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "Boost-Mobile": "url('/public/images/bg-boost-mobile.svg')",
        "Boost-Desktop": "url(/public/images/bg-boost-desktop.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
