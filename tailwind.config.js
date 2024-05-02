const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join('app', 'components', '**', '*.hbs'),
    join('app', 'templates', '**', '*.hbs'),
],
  theme: {
    extend: {},
  },
  plugins: [],
}

