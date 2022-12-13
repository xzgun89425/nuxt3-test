import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
    attributify: true,
  },
})