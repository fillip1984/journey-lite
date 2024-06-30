import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      background: "hsl(231, 24%, 22%)",
      white: "hsl(0, 100%, 100%)",
      black: "hsl(0, 0%, 0%)",
      success: "hsl(141, 66%, 52%)",
      success2: "hsl(160, 86%, 36%)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
