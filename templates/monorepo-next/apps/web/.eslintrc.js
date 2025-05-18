/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  overrideConfig: {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
}
