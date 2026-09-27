import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    // Vite expects string[] | true. ".w.modal.host" matches any subdomain,
    // so the sandbox hostname keeps working across sessions.
    allowedHosts: [".w.modal.host", "localhost", "127.0.0.1"],
  },
});
