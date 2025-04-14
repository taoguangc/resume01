import type { Template } from 'tinacms'

const Awards: Template = {
  label: 'Awards',
  name: 'Awards',
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
      label: 'Awards Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.award }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Award Name',
          name: 'award'
        },
        {
          type: 'string',
          label: 'Issued By',
          name: 'issuedBy'
        },
        {
          type: 'string',
          label: 'Category',
          name: 'category'
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
          type: 'datetime',
          label: 'Date',
          name: 'Date'
        }
      ]
    }
  ]
}

export default Awards
