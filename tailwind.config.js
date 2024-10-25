/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,tsx,ts}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			roboto: 'Roboto',
  			agdasima: 'Agdasima',
  			montserrat: 'Montserrat'
  		},
  		colors: {
  			'venice-blue': {
  				'50': '#C4E1FA',
  				'100': '#B2D8F8',
  				'200': '#8DC5F4',
  				'300': '#67B2F1',
  				'400': '#429FED',
  				'500': '#1D8CEA',
  				'600': '#1377CB',
  				'700': '#0F61A5',
  				'800': '#0C4B80',
  				'900': '#072D4D',
  				'950': '#051E33',
  				DEFAULT: '#0C4B80'
  			},
  			ignara: {
  				'50': '#FCE8E9',
  				'100': '#F9D2D4',
  				'200': '#F4A9AD',
  				'300': '#EF7B81',
  				'400': '#EA535A',
  				'500': '#E4252F',
  				'600': '#BF1820',
  				'700': '#8D1118',
  				'800': '#5F0C10',
  				'900': '#2D0608',
  				'950': '#170304',
  				DEFAULT: '#E4252F'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
};
