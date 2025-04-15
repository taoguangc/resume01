import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://resume01-weld.vercel.app',
  integrations: [
    mdx(),
    sitemap(),
    icon({
      iconDir: 'src/assets/icons'
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false
        }
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1
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
