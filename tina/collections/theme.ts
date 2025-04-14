import type { Collection } from 'tinacms'

const Theme: Collection = {
  label: 'Theme',
  name: 'theme',
  path: 'src/data/theme',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: 'object',
      name: 'colors',
      label: 'Colors',
      fields: [
        {
          type: 'string',
          name: 'primary',
          label: 'Primary Color',
          ui: {
            component: 'color'
          }
        },
        {
          type: 'string',
          name: 'secondary',
          label: 'Secondary Color',
          ui: {
            component: 'color'
          }
        },
        {
          type: 'string',
          name: 'surface',
          label: 'Surface Color',
          ui: {
            component: 'color'
          }
        },
        {
          type: 'string',
          name: 'content',
          label: 'Content Color',
          ui: {
            component: 'color'
          }
        }
      ]
    },
    {
      type: 'object',
      name: 'fonts',
      label: 'Fonts',
      fields: [
        {
          type: 'string',
          name: 'sans',
          label: 'Sans',
          list: true
        },
        {
          type: 'string',
          name: 'serif',
          label: 'Serif',
          list: true
        }
      ]
    },
    {
      type: 'object',
      name: 'letterSpacing',
      label: 'letterSpacing',
      fields: [
        {
          type: 'string',
          name: 'tight',
          label: 'Tight'
        }
      ]
    },
    {
      type: 'object',
      name: 'container',
      label: 'Container',
      fields: [
        {
          type: 'boolean',
          name: 'center',
          label: 'Center'
        },
        {
          type: 'object',
          name: 'screens',
          label: 'Screens',
          fields: [
            {
              type: 'string',
              name: 'sm',
              label: 'Small Screen'
            },
            {
              type: 'string',
              name: 'md',
              label: 'Medium Screen'
            },
            {
              type: 'string',
              name: 'lg',
              label: 'Large Screen'
            },
            {
              type: 'string',
              name: 'xl',
              label: 'Extra Large Screen'
            }
          ]
        }
      ]
    },

    {
      type: 'object',
      name: 'spacing',
      label: 'Spacing',
      fields: [
        {
          type: 'string',
          name: 'sm',
          label: 'Small'
        },
        {
          type: 'string',
          name: 'md',
          label: 'Medium'
        },
        {
          type: 'string',
          name: 'lg',
          label: 'Large'
        },
        {
          type: 'string',
          name: 'xs',
          label: 'Extra Small'
        }
      ]
    },
    {
      type: 'object',
      name: 'typography',
      label: 'Typography',
      fields: [
        {
          type: 'string',
          name: 'fontFamily',
          label: 'Font Family'
        },
        {
          type: 'string',
          name: 'fontSize',
          label: 'Base Font Size'
        },
        {
          type: 'string',
          name: 'lineHeight',
          label: 'Line Height'
        }
      ]
    }
  ]
}

export default Theme
