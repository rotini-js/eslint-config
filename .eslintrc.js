module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    semi: [
      "error",
      "always"
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "error"
  }
};
