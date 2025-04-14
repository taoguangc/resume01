import type { Template } from 'tinacms'

const Posts: Template = {
  label: 'Posts',
  name: 'Posts',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    }
  ]
}

export default Posts
