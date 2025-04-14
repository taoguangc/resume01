import type { Template } from 'tinacms'

const Lab: Template = {
  label: 'Lab',
  name: 'Lab',
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline'
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
      type: 'image',
      label: 'Video Cover',
      name: 'cover'
    },
    {
      type: 'string',
      label: 'Video URL',
      name: 'video'
    },
    {
      type: 'object',
      label: 'Sliders',
      name: 'sliders',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          ui: {
            component: 'textarea'
          }
        },
        {
          type: 'image',
          label: 'Icon',
          name: 'icon'
        }
      ]
    }
  ]
}

export default Lab
