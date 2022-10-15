import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { cdn } from "vite-plugin-cdn2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cdn({
      isProduction: true,
      modules: [
        {
          name: "vue",
          global: "Vue",
        },
        {
          name: "element-plus",
          global: "ElementPlus",
        },
        {
          name: "echarts",
          global: "echarts",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/personality-color-test/",
  build: {
    outDir: "docs",
  },
});
