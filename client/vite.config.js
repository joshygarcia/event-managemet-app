import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default ({ mode }) => {
  const isProduction = mode === "production"
  console.log("isProduction", isProduction)

  return defineConfig({
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
}
