import path from "path";

import { defineConfig } from "vite";
import dts from "vite-dts";

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);

export default defineConfig(() => ({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      name: "@pruthvi21/use-debounce",
      fileName: (format) => `use-debounce.${format}.js`,
    },
    rollupOptions: {
      external: isExternal,
    },
  },
  plugins: [],
  test: {
    globals: true,

    environment: "jsdom",

    setupFiles: "./src/test/setupTests.js",
  },
}));
