import type { Template } from 'tinacms'

const Booking: Template = {
  label: 'Booking',
  name: 'Booking',
  fields: [
    {
      type: 'string',
      label: 'Headline',
      name: 'headline'
    },
    {
      type: 'string',
      label: 'Button Text',
      name: 'buttonText'
    },
    {
      type: 'string',
      label: 'Button Link',
      name: 'buttonLink'
    }
  ]
}

export default Booking