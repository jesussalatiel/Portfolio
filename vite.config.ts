// https://vitejs.dev/config/

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig({
    base: "/jesus-salatiel-portfolio/",
    server: {
        port: 3000,
    },
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "dist",
        rollupOptions: {
            input: resolve(__dirname, "index.html"),
        },
    },
});
