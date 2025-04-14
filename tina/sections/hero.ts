import type { Template } from 'tinacms'

const Hero: Template = {
  name: 'Hero',
  label: 'Hero',
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline'
    },
    {
      type: 'string',
      label: 'Sub Headline',
      name: 'subHeadline',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'object',
      name: 'button',
      label: 'Button',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.text }
        }
      },
      fields: [
        {
          type: 'string',
          name: 'text',
          label: 'Button Text'
        },
        {
          type: 'string',
          name: 'href',
          label: 'Button Link URL'
        }
      ]
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image'
    },
    {
      type: 'string',
      label: 'Video URL',
      name: 'videoURL'
    }
  ]
}

export default Hero