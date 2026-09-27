import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts : "a-ta-01m3j9f57bk4vkk4d0wz8wd3hs-5qwetdht3k0v6bjcn7dixregl.w.modal.host" ,
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
