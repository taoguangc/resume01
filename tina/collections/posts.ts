import type { Collection } from 'tinacms'

const Blog: Collection = {
  label: 'Blog Posts',
  name: 'blog',
  path: 'src/content/blog',
  format: 'md',
  // ui: {
  //     router: ({ document }) => {
  //         return `/blog/${document._sys.breadcrumbs.join('/')}`;
  //     }
  // },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt'
    },
    {
      type: 'datetime',
      name: 'publishDate',
      label: 'Publish Date',
      ui: {
        dateFormat: 'MMMM DD YYYY',
        timeFormat: 'hh:mm A'
      }
    },
    {
      type: 'datetime',
      name: 'updatedDate',
      label: 'Last Updated Date',
      ui: {
        dateFormat: 'MMMM DD YYYY',
        timeFormat: 'hh:mm A'
      }
    },
    {
      type: 'object',
      name: 'featureImage',
      label: 'Feature Image',
      fields: [
        {
          type: 'image',
          name: 'src',
          label: 'Source',
          required: true
        },
        {
          type: 'string',
          name: 'alt',
          label: 'Alt Text'
        }
      ]
    },
    {
      type: 'boolean',
      name: 'isFeatured',
      label: 'Featured Post',
      ui: {
        defaultValue: false
      }
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: 'body',
      isBody: true
    }
  ]
}

export default Blog
