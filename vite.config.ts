import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style.scss";`,
      },
    },
  },
});
