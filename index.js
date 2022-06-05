const rules = {
  semi: [
    "error",
    "always"
  ],
  "no-use-before-define": "off",
  "@typescript-eslint/explicit-function-return-type": "error"
}

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: [
    "**/*.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint"
  ],
  overrides: [
    {
      files: [
        "./src/**/*.ts",
        "./__tests__/**/*.ts"
      ],
      rules
    }
  ],
  rules
};
