import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

function tanstackInjectedHeadScriptsPlugin() {
  return {
    name: "tanstack-start-injected-head-scripts",
    enforce: "pre",
    resolveId(id) {
      if (id === "tanstack-start-injected-head-scripts:v") {
        return id;
      }
      return null;
    },
    load(id) {
      if (id === "tanstack-start-injected-head-scripts:v") {
        return "export const injectedHeadScripts = undefined;";
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    tanstackInjectedHeadScriptsPlugin(),
    ...tanstackStart(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
