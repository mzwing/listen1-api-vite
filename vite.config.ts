import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'Listen1Api',
      // the proper extensions will be added
      fileName: 'listen1-api'
    }
  }
})