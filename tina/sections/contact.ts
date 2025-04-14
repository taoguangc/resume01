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
      name: 'description'
    },
    {
      type: 'string',
      label: 'Full Name',
      name: 'fullName',
      required: true
    },
    {
      type: 'string',
      label: 'Email',
      name: 'email',
      required: true
    },
    {
      type: 'string',
      label: 'Message',
      name: 'message',
      required: true,
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'object',
      label: 'content',
      name: 'content',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
        max: 4
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'rich-text',
          label: 'Text',
          name: 'text'
        }
      ]
    }
  ]
}

export default Contact
