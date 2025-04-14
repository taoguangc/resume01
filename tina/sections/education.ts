import type { Template } from 'tinacms'

const Education: Template = {
  label: 'Education',
  name: 'Education',
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
      label: 'Education Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.degree} at ${item?.school}` }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'School Name',
          name: 'school'
        },
        {
          type: 'string',
          label: 'Degree',
          name: 'degree',
          options: ["Bachelor's degree", "Master's degree", 'Doctoral degree', 'Associate degree', 'Certificate']
        },
        {
          type: 'string',
          label: 'Field of Study',
          name: 'fieldOfStudy'
        },
        {
          type: 'datetime',
          label: 'Start Date',
          name: 'startDate'
        },
        {
          type: 'datetime',
          label: 'End Date',
          name: 'endDate'
        }
      ]
    }
  ]
}

export default Education
