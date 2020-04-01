const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" }
      }
    }
  },
  variants: {}
};
