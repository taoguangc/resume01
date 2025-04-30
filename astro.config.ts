import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://resume01-weld.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/assets/icons'
    })
  ],
  image: {
    experimentalLayout: 'constrained'
  },
  experimental: {
    responsiveImages: true
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  }
})
