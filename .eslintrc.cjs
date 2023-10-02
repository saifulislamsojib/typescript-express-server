module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    commonjs: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".json"],
      },
      alias: {
        map: [
          ["src", "./src"],
          ["@", "./src"],
        ],
        extensions: [".ts", ".json"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist/"],
  plugins: ["@typescript-eslint", "import"],
  root: true,
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
