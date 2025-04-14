import type { Template } from 'tinacms'

const Experience: Template = {
  label: 'Experience',
  name: 'Experience',
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
      label: 'Experience Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title} at ${item?.company}` }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Job Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Company',
          name: 'company'
        },
        {
          type: 'string',
          label: 'Employment Type',
          name: 'employmentType'
        },
        {
          type: 'string',
          label: 'Location',
          name: 'location'
        },
        {
          type: 'datetime',
          label: 'Start Date',
          name: 'startDate'
        },
        {
          type: 'datetime',
          label: 'End Date',
          name: 'endDate',
          description: 'For current position, please leave this field empty'
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          ui: {
            component: 'textarea'
          }
        }
      ]
    }
  ]
}

export default Experience
