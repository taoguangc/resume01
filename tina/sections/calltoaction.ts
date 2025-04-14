import type { Template } from 'tinacms'

const CallToAction: Template = {
  label: 'Call To Action',
  name: 'CallToAction',
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline'
    },
    {
      type: 'object',
      label: 'Action Link',
      name: 'actionLink',
      fields: [
        {
          type: 'string',
          label: 'Link Text',
          name: 'text'
        },
        {
          type: 'string',
          label: 'Link URL',
          name: 'href'
        }
      ]
    }
  ]
}

export default CallToAction