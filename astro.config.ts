import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from "astro-icon"

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  vite: {
    build: {
      // 启用代码分割
      cssCodeSplit: true,
      // 启用 CSS 压缩
      cssMinify: true,
      rollupOptions: {
        output: {
          // 将大型依赖项拆分为单独的 chunk
          manualChunks: {
            'motion': ['motion'],
            'embla-carousel': ['embla-carousel']
          }
        }
      }
    },
    // 优化资源加载
    optimizeDeps: {
      include: ['motion', 'embla-carousel']
    },
    // 启用构建时优化
    ssr: {
      noExternal: ['@astrojs/mdx']
    }
  },
  // 优化图片处理
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // 默认格式为 avif
    format: 'avif',
    // 默认质量
    quality: 80
  }
})
