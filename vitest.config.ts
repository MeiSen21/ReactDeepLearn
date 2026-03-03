import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,  // 可以用 test/expect 不用导入
    setupFiles: './src/test/setup.ts',
  },
})
