import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: 'src/helpers/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/app/character/**/*.{ts,tsx}',
        'src/app/characters/**/*.{ts,tsx}',
        'src/app/favorites/**/*.{ts,tsx}',
      ],
      exclude: ['src/helpers/setupTests.ts'],
      reporter: ['html', 'text-summary'],
      thresholds: {
        functions: 90,
        lines: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
