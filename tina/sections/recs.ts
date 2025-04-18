import type { Template } from 'tinacms'

const Recs: Template = {
  label: 'Recs',
  name: 'Recs',
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
      label: 'Recs Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name} - ${item?.position}` }
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
          label: 'Position',
          name: 'position'
        },
        {
          type: 'datetime',
          label: 'Date',
          name: 'date',
          ui: {
            dateFormat: 'YYYY/MM'
          }
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

export default Recs
