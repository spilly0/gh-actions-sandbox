import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vite.dev/config/
export default defineConfig({
  base: "/gh-actions-sandbox/",
  plugins: [react(), EnvironmentPlugin("all")],
});
