module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["tailwindcss", "react"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
