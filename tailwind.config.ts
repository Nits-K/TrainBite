import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      clipPath: {
        'polygon-0-0-100-0-50-100-0-100': 'polygon(0 0, 100% 0, 50% 100%, 0 100%)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    variants: {
      extend: {
        clipPath: ['hover'],
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
};
export default config;
