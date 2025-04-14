import type { Template } from 'tinacms'

const Testimonials: Template = {
  label: 'Testimonials',
  name: 'Testimonials',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Sub Title',
      name: 'subTitle'
    },
    {
      type: 'object',
      label: 'Customers',
      name: 'customers',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.name }
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
          label: 'job Title',
          name: 'job'
        },
        {
          type: 'image',
          label: 'Avatar',
          name: 'avatar'
        },
        {
          type: 'string',
          label: 'Testimonial',
          name: 'testimonial',
          ui: {
            component: 'textarea'
          }
        }
      ]
    }
  ]
}

export default Testimonials
