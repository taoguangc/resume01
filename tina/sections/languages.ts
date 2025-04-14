import type { Template } from 'tinacms'

const Languages: Template = {
  label: 'Languages',
  name: 'Languages',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Description',
      name: 'desc',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'object',
      label: 'Languages Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.code} ${item?.name}` }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Language Code',
          name: 'code',
          description: 'Two-letter language code (e.g. EN, FR, ES)'
        },
        {
          type: 'string',
          label: 'Language Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Proficiency Level',
          name: 'level',
          description: 'e.g. Native, Professional, Elementary'
        }
      ]
    }
  ]
}

export default Languages
