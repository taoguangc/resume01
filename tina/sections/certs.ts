import type { Template } from 'tinacms'

const Certs: Template = {
  label: 'Certs',
  name: 'Certs',
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
      label: 'Certs Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name} - ${item?.issuedBy}` }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Certificate Name',
          name: 'name'
        },
        {
          type: 'string',
          label: 'Issued By',
          name: 'issuedBy'
        },
        {
          type: 'datetime',
          label: 'Issue Date',
          name: 'issueDate',
          ui: {
            dateFormat: 'YYYY/MM'
          }
        },
        {
          type: 'string',
          label: 'Credential URL',
          name: 'url'
        }
      ]
    }
  ]
}

export default Certs
