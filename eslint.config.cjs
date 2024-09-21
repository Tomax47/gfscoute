const globals = require("globals");

module.exports = {
  files: ["**/*.js"], languageOptions: {sourceType: "commonjs"},
  ignores: ["test/**", "node_modules/**", "*.config.*", "*.json", "*.d.ts"],
  languageOptions: {
    globals: globals.browser,
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  linterOptions: {
    reportUnusedDisableDirectives: "error",
    noInlineConfig: true
  },
  rules: {
    indent: [
      'error',
      2
    ],
    semi: [
      'error',
      'always'
    ],
    quotes: [
      'error',
      'double'
    ],
    "linebreak-style": [
      'error',
      "unix"
    ],
    "no-unused-vars": "error",
    "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
    "no-unused-expressions": "error"
  }
};
