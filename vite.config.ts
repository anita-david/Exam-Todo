/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Using 'as any' workaround for TS type issue
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // @ts-expect-error: Vitest adds 'test' to Vite config
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  } as unknown,
})
