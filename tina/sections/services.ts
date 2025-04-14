import type { Template } from 'tinacms'

const Services: Template = {
  label: 'Services',
  name: 'Services',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Sub Title',
      name: 'subTitle'
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
    },
    {
      type: 'object',
      label: 'Services Items',
      name: 'items',
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
          name: 'description'
        },
        {
          type: 'image',
          label: 'Service Image',
          name: 'serviceImage'
        }
      ]
    }
  ]
}

export default Services
