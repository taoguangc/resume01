import type { Template } from 'tinacms'

const Features: Template = {
  label: 'Features',
  name: 'Features',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      label: 'Link Title',
      name: 'linkTitle'
    },
    {
      type: 'string',
      label: 'Link URL',
      name: 'link'
    },
    {
      type: 'object',
      label: 'Cards',
      name: 'cards',
      list: true,
      ui: {
        itemProps: (card) => {
          return { label: card?.heading }
        }
      },
      fields: [
        {
          type: 'image',
          label: 'Icon',
          name: 'icon',
          description: 'Input SVG Code'
        },
        {
          type: 'string',
          label: 'Heading',
          name: 'heading'
        },
        {
          type: 'string',
          label: 'Content',
          name: 'content',
          ui: {
            component: 'textarea'
          }
        }
      ]
    }
  ]
}

export default Features
