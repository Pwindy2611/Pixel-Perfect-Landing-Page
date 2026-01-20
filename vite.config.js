import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: "src/**/*", dest: "dist/src" },
          ],
          hook: "writeBundle",
        }),
      ],
    },
  },
});
