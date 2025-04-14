import type { Template } from 'tinacms'

const Features2: Template = {
  label: 'Features2',
  name: 'Features2',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'boolean',
      name: 'showMember',
      label: 'Show Member'
    },
    {
      type: 'string',
      name: 'title1',
      label: 'Title1'
    },
    {
      type: 'string',
      name: 'text1',
      label: 'Texe1'
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image'
    },
    {
      type: 'string',
      name: 'title2',
      label: 'Title2'
    },
    {
      type: 'string',
      name: 'text2',
      label: 'Texe2'
    },
    {
      type: 'image',
      name: 'cover',
      label: 'Cover'
    },
    {
      type: 'string',
      name: 'video',
      label: 'Video URL'
    }
  ]
}

export default Features2
