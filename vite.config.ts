import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style.scss";`,
      },
    },
  },
});
