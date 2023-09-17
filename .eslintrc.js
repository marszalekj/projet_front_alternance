module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest:true
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
    ecmaFeatures: {
      "jsx": true
    }
  },
  plugins: ["tailwindcss", "react"],
  rules: {
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "linebreak-style": 0,
    "no-undefined": "error",
    "no-var": "error",
    "prefer-const": "error",
    "func-names": "error",
    "id-length": "warn",
    "newline-before-return": "error",
    "space-before-blocks": "error",
    "no-alert": "error",
    "indent": [
      "error",
      2
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
