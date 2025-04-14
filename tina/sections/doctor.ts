import type { Template } from 'tinacms'

const Doctor: Template = {
  label: 'Doctor',
  name: 'Doctor',
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
      type: 'object',
      label: 'staff',
      name: 'staff',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Job',
          name: 'job'
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image'
        },
        {
          type: 'string',
          label: 'Link',
          name: 'link'
        }
      ]
    }
  ]
}

export default Doctor
