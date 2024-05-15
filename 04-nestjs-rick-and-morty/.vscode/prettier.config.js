// prettier.config.js
module.exports = {
    singleQuote: true,  // Use single quotes instead of double quotes where possible
    semi: false,        // Do not add semicolons at the end of statements
    trailingComma: 'none',  // No trailing commas
    jsxSingleQuote: true,  // Use single quotes in JSX
    plugins: [require('prettier-plugin-tailwindcss')]  // TailwindCSS plugin for sorting classes
  };