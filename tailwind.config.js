/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       textShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.5)',
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
        // 他のカスタムシャドウもここに追加できます
      },
    },
  },
  plugins: [
	function ({ addUtilities }) {
         const newUtilities = {
          '.text-shadow': {
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        },
        // 他のカスタムシャドウのユーティリティもここに追加できます
      }
      addUtilities(newUtilities)
    }
  ],
}
