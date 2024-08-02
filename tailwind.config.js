/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'meli': '#fff159',
        'meli-azul':'#3483FA',
        'meli-verde':'#00A650',
        'customYellow': '#ffe600',
        'customGray': '#ebebeb'
      },
      fontFamily:{
        'melifuente': 'sans-serif,-apple-system,Roboto',
      },
      filter: ['hover'],
    },
  },
  plugins: [],
}