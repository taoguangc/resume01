import type { Template } from 'tinacms'

const Projects: Template = {
  label: 'Projects',
  name: 'Projects',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title'
    }
  ]
}

export default Projects
