import type { Collection } from 'tinacms'
import Story from '../sections/story'
import Doctor from '../sections/doctor'
import FAQs from '../sections/faqs'
import Features2 from '../sections/features2'
import Lab from '../sections/lab'
import Booking from '../sections/booking'
import Contact from '../sections/contact'

const Pages: Collection = {
  label: 'Pages',
  name: 'pages',
  path: 'src/content/pages',

  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'image',
      name: 'mainImage',
      label: 'Main Image'
    },
    {
      type: 'object',
      name: 'seo',
      label: 'SEO Settings',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Meta Title',
          description: 'This is the meta Title that will appear in search engines'
        },
        {
          type: 'string',
          name: 'description',
          label: 'Meta Description',
          description: 'This is the meta description that will appear in search engines'
        },
        {
          type: 'object',
          name: 'image',
          label: 'Image',
          fields: [
            {
              type: 'image',
              name: 'src',
              label: 'Src'
            },
            {
              type: 'string',
              name: 'alt',
              label: 'Image Alt'
            }
          ]
        }
      ]
    },
    {
      type: 'object',
      name: 'sections',
      label: 'Sections',
      list: true,
      ui: {
        visualSelector: true
      },
      templates: [Story, Doctor, FAQs, Features2, Lab, Booking, Contact]
    },
    {
      type: 'rich-text' as const,
      name: 'body',
      label: 'Body',
      isBody: true
    }
  ]
}

export default Pages
