import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
const isProduction = false //process.env.NODE_ENV == "production"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: isProduction
      ? {
          // production server proxy
          "/api": {
            target: "https://levelup-server.onrender.com",
            changeOrigin: true,
            secure: false,
          },
        }
      : {
          // local server proxy
          "/api": {
            target: "http://localhost:3000",
            changeOrigin: true,
            secure: false,
          },
        },
  },
})
