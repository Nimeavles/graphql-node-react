import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, './dist', './mysql_data', './pnpm-store', './src'],
    root: '.'
  },
})