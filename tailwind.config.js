/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'young': ['Young Serif', 'serif']
    },
    colors: {
      'White': 'hsl(0, 0%, 100%)',
 rosewhite: 'hsl(330, 100%, 98%)',
 eggshell: 'hsl(30, 54%, 90%)',
 lightgrey: 'hsl(30, 18%, 87%)',
wengebrown: 'hsl(30, 10%, 34%)',
darkcharcoal: 'hsl(24, 5%, 18%)',
Nutmeg: 'hsl(14, 45%, 36%)',
DarkRaspberry: 'hsl(332, 51%, 32%)',
    },
    extend: {
      backgroundImage: {
        'food': "url('/images/image-omelette.jpeg')",
      }
    },
  },
  plugins: [],
}

