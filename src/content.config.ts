import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional()
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website')
})

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional()
      })
      .optional(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional()
  })
})

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    featureImage: z
      .object({
        src: z.string(),
        alt: z.string().optional(),
        caption: z.string().optional()
      })
      .optional(),
    seo: seoSchema.optional(),
    // 添加sections字段定义，允许任意结构
    sections: z.array(z.any()).optional()
  })
})

export const collections = { blog, projects, pages }
