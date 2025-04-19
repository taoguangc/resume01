import type { Template } from 'tinacms'

const Contact: Template = {
  label: 'Contact',
  name: 'Contact',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Description',
      name: 'desc'
    },
    {
      type: 'string',
      label: 'Email',
      name: 'email'
    },
    {
      type: 'object',
      label: 'Social Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Social Name',
          name: 'name'
        },
        {
          type: 'image',
          label: 'Social Image',
          name: 'image'
        },
        {
          type: 'string',
          label: 'Social Link',
          name: 'link'
        }
      ]
    },
    {
      type: 'string',
      label: 'Message Title',
      name: 'msgTitle'
    },
    {
      type: 'rich-text',
      label: 'Message Text',
      name: 'msgText'
    }
  ]
}

export default Contact
