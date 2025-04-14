import type { Template } from 'tinacms'

const Story: Template = {
  label: 'Story',
  name: 'Story',
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
      label: 'Button Title',
      name: 'buttonTitle'
    },
    {
      type: 'string',
      label: 'Button Href',
      name: 'buttonHref'
    },
    {
      type: 'string',
      label: 'Card Title',
      name: 'cardTitle'
    },
    {
      type: 'string',
      label: 'Card Text',
      name: 'cardText'
    },
    {
      type: 'image',
      label: 'Big Image',
      name: 'bigImage'
    },
    {
      type: 'image',
      label: 'Small Image',
      name: 'smallImage'
    }
  ]
}

export default Story
