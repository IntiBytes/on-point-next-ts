import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [
    nextui(),
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  }
};
export default config;
