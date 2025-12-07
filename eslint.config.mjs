import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("wikimedia/language/es2018", "wikimedia/jquery"),

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jquery,
        },

        ecmaVersion: 8,
        sourceType: "script",
    },

    rules: {
        "linebreak-style": "off",
        semi: ["error", "never"],
    },
}]);