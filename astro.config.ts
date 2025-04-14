import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://enima.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/assets/icons'
    })
  ],
  image: {
    experimentalLayout: 'responsive'
  },
  experimental: {
    responsiveImages: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
