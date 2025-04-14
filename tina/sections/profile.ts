import type { Template } from 'tinacms'

const Profile: Template = {
  label: 'Profile',
  name: 'Profile',
  fields: [
    {
      type: 'image',
      label: 'Icon',
      name: 'icon'
    },
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    },
    {
      type: 'string',
      label: 'Content',
      name: 'content',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image'
    },
    {
      type: 'string',
      label: 'Location',
      name: 'location'
    }
  ]
}

export default Profile
