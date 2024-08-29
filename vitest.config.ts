/// <reference types="vitest" />

import { defineVitestConfig } from "@nuxt/test-utils/config";
import dotenv from "dotenv";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
    include: ["src/**/*.spec.ts"],
    reporters: ["verbose"],
    coverage: {
      provider: "v8",
      all: true,
      include: ["**/composables/**/*.ts", "**/utils/**/*.ts"],
      reportsDirectory: "test-reports",
    },
    env: dotenv.config({ path: ".env.test" }).parsed,
  },
});
