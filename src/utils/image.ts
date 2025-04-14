import type { ImageMetadata } from 'astro'

// 导入所有图片
const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif}')

export interface ImageOptions {
  formats?: string[]
}

export async function getImage(imagePath: string, options: ImageOptions = {}) {
  if (!imagePath) {
    return null
  }

  // 如果路径以 /src 开头，移除它
  const normalizedPath = imagePath.startsWith('/src') ? imagePath : `/src${imagePath}`

  if (normalizedPath in images) {
    const image = await images[normalizedPath]()
    return {
      ...image.default,
      formats: options.formats
    }
  }

  console.warn(`Image not found: ${normalizedPath}`)
  return null
}
