import type { CSSRuleObject, Config } from "tailwindcss/types/config";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-right": {
          "0%, 100%": {
            translate: "-12%",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            translate: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        wiggle: {
          "0%, 10%, 20%, 30%": { transform: "rotate(-8deg)" },
          "5%, 15%, 25%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(-8deg)" },
        },
        reveal: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "soft-pulse": {
          "50%": { opacity: "0.85" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-right": "bounce-right 1s infinite",
        wiggle: "wiggle 5s ease-in-out infinite",
        reveal: "reveal 3s ease-in-out",
        "soft-pulse": "soft-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        tilt: "tilt 10s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ theme, addUtilities }) => {
      const neonUtilities: CSSRuleObject = {};
      const colors = theme("colors");
      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const brightColor = colors[color]["500"];
          const darkColor = colors[color]["700"];

          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${brightColor}, 0 0 20px ${darkColor}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
} satisfies Config;

export default config;
