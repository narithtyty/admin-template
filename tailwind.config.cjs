/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'
module.exports = withMT({
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bold: 'OverpassBold',
        light: 'OverpassLight',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
});
