import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "npm",
  proxy: {
    "/api": {
      target: "http://localhost:8008",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
});
