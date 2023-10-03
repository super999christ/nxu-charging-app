import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import svgr from "vite-plugin-svgr";

const host = process.env.HOST || true;
const port = +(process.env.PORT || 80);
const projectRoot = resolve(__dirname, "app");

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "./app",
    server: { host, port },
    preview: { host, port },
    plugins: [
      svgr(),
      react(),
      AutoImport({
        imports: ["vitest"],
        dts: true, // generate Typescript definitions
      }),
    ],
    build: {
      outDir: "../build",
      sourcemap: true,
    },
    define: {
      "process.env": env,
    },
    resolve: {
      alias: {
        "@root": projectRoot,
        "~": projectRoot,
      },
    },
  };
});
