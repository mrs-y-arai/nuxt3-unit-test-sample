/// <reference types="vitest" />

import path from "path";
import { defineVitestConfig } from "@nuxt/test-utils/config";
import AutoImport from "unplugin-auto-import/vite";
import dotenv from "dotenv";

export default defineVitestConfig({
  // plugins: [
  //   AutoImport({
  //     imports: [
  //       {
  //         "#app": ["useRuntimeConfig"],
  //       },
  //     ],
  //     dts: false,
  //   }),
  // ],
  // resolve: {
  //   alias: {
  //     "#app": path.resolve(__dirname, "node_modules/nuxt/dist/app"),
  //   },
  // },
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
