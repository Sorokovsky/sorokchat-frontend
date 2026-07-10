// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const importX = require("eslint-plugin-import-x");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    plugins: {
      "import-x": /** @type {any} */ (importX)
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          "patterns": [
            {
              "group": ["@app/**"],
              "message": "Імпорти з глобального @app заборонені в ізольованих шарах."
            },
            {
              "group": ["@shared/*/**", "!@shared/*"],
              "message": "Імпортуйте з @shared тільки через Public API (index.ts)."
            },
            {
              "group": ["@entities/*/**", "!@entities/*"],
              "message": "Імпортуйте з @entities тільки через Public API (index.ts)."
            },
            {
              "group": ["@features/*/**", "!@features/*"],
              "message": "Імпортуйте з @features тільки через Public API (index.ts)."
            },
            {
              "group": ["@widgets/*/**", "!@widgets/*"],
              "message": "Імпортуйте з @widgets тільки через Public API (index.ts)."
            },
            {
              "group": ["@pages/*/**", "!@pages/*"],
              "message": "Імпортуйте з @pages тільки через Public API (index.ts)."
            }
          ]
        }
      ]
    },
  },
  {
    files: ["**/*.html"],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },
]);
