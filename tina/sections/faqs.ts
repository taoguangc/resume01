import type { Template } from 'tinacms'

const FAQs: Template = {
  label: 'FAQs',
  name: 'FAQs',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'object',
      label: 'FAQs',
      name: 'faqs',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.question }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Question',
          name: 'question'
        },
        {
          type: 'string',
          label: 'Answer',
          name: 'answer',
          ui: {
            component: 'textarea'
          }
        }
      ]
    }
  ]
}

export default FAQs
