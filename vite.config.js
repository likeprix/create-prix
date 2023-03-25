import { defineConfig } from "vite"

export default defineConfig({
  root: "./",
  server: {
    port: 3000,
  },
  build: {
    publicDir: 'assets',
    outDir: "./dist",
    lib: {
      entry: "src/index.js",
      name: "prix",
      fileName: (format) => `prix.${format}.js`,
    },
    rollupOptions: {
      input: 'index.html',
      output: {
        globals: {},
      },
    },
  },
});
