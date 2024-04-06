module.exports = {
  printWidth: 120,
  trailingComma: "all",
  bracketSpacing: true,
  arrowParens: "avoid",
  useTabs: true,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  endOfLine: "auto",
  overrides: [
    {
      files: "src/**/*.html",
      options: {
        parser: "angular",
      },
    },
  ],
};
