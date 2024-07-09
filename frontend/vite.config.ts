import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vitest/config'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts, tsx}"],
    exclude: ["node_modules"],
    // coverage: {
    //   all: true, 
    //   provider: "v8",
    //   reporter: ["lcov", "text-summary"],
    // },
    // setupFiles: ["./src/vitest-setup.ts"],
    poolOptions: {
      threads: {
        singleThread: true,  
      }
    }
    
  },
  // resolve: { alias: { "@": "/src" } },  // i commented this after i install the shacdn and replace the code in line 7
})