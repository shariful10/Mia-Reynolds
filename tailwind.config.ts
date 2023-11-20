import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	mode: "jit",
	theme: {
		container: {
			padding: {
				DEFAULT: "15PX",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1310px",
		},
		extend: {
			backgroundImage: {
				singerOverlay: "url(/assets/hero/singer-overlay.png)",
				newsletter: "url(/assets/newsletter/bg.png)",
			},
			fontFamily: {
				alexBrush: [`--font-alexBrush`, "sans-serif"],
				montserrat: [`--font-montserrat`, "sans-serif"],
			},
			colors: {
				primary: "#06062A",
				secondary: "#151538",
				tertiary: "#242445",
				accent: {
					DEFAULT: "#7F1CFC",
					hover: "#6519C6",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};

export default config;
