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
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['localhost'],
    remotePatterns: [],
    experimentalLayout: 'responsive'
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  experimental: {
    responsiveImages: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
