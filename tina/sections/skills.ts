import type { Template } from 'tinacms'

const Skills: Template = {
  label: 'Skills',
  name: 'Skills',
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
      label: 'Skill Categories',
      name: 'categories',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: `${item?.category}` }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Category Name',
          name: 'category'
        },
        {
          type: 'object',
          label: 'Skills',
          name: 'skills',
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: `${item?.skill}` }
            }
          },
          fields: [
            {
              type: 'string',
              label: 'Skill Name',
              name: 'skill'
            }
          ]
        }
      ]
    }
  ]
}

export default Skills
