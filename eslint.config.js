// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    // Static HTML assets are not Angular templates; keep them out of linting.
    ignores: [
      "src/assets/**",
      "src/index.html",
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
      // The codebase predates strict typing; relax the noisiest rules to warnings
      // so `ng lint` stays actionable rather than emitting hundreds of errors.
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-wrapper-object-types": "warn",
      "@typescript-eslint/no-unsafe-function-type": "warn",
      "@angular-eslint/prefer-inject": "warn",
      // We intentionally keep the NgModule architecture for this upgrade.
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/no-empty-lifecycle-method": "warn",
      "@angular-eslint/no-output-native": "warn",
      "@angular-eslint/no-output-on-prefix": "warn",
      "prefer-const": "warn",
      "no-var": "warn",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // The legacy templates use *ngIf/*ngFor and lack some a11y handlers;
      // surface these as warnings rather than blocking errors.
      "@angular-eslint/template/prefer-control-flow": "off",
      "@angular-eslint/template/click-events-have-key-events": "warn",
      "@angular-eslint/template/interactive-supports-focus": "warn",
      "@angular-eslint/template/no-autofocus": "warn",
      "@angular-eslint/template/alt-text": "warn",
      "@angular-eslint/template/label-has-associated-control": "warn",
      "@angular-eslint/template/elements-content": "warn",
    },
  }
);
