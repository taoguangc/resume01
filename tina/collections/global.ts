import type { Collection } from 'tinacms'

const Global: Collection = {
  label: 'Global',
  name: 'global',
  path: 'src/data/global',
  format: 'json',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
      createNestedFolder: false
    }
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitle'
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description'
    },
    {
      type: 'image',
      name: 'logo',
      label: 'Logo'
    },
    {
      type: 'object',
      name: 'image',
      label: 'Image',
      fields: [
        {
          name: 'src',
          label: 'Image Source',
          type: 'image'
        },
        {
          name: 'alt',
          label: 'Image Alt Text',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      name: 'navLinks',
      label: 'Navigation Links',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.text || 'Navigation Link' })
      },
      fields: [
        {
          name: 'text',
          label: 'Link Text',
          type: 'string'
        },
        {
          name: 'href',
          label: 'Link URL',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      name: 'footerNavLinks',
      label: 'Footer Navigation Links',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.text || 'Footer Navigation Link' })
      },
      fields: [
        {
          name: 'text',
          label: 'Link Text',
          type: 'string'
        },
        {
          name: 'href',
          label: 'Link URL',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      name: 'socialLinks',
      label: 'Social Links',
      list: true,
      ui: {
        itemProps: (item) => ({ label: item?.text || 'Social Link' })
      },
      fields: [
        {
          name: 'text',
          label: 'Link Text',
          type: 'string'
        },
        {
          name: 'href',
          label: 'Link URL',
          type: 'string'
        }
      ]
    },
    {
      type: 'object',
      name: 'subscribe',
      label: 'Subscribe',
      fields: [
        {
          name: 'title',
          label: 'Subscribe Title',
          type: 'string'
        },
        {
          name: 'text',
          label: 'Subscribe Text',
          type: 'string'
        },
        {
          name: 'formUrl',
          label: 'Form URL',
          type: 'string'
        }
      ]
    },
    {
      type: 'number',
      name: 'postsPerPage',
      label: 'Posts Per Page'
    },
    {
      type: 'number',
      name: 'projectsPerPage',
      label: 'Projects Per Page'
    },
    {
      type: 'boolean',
      name: 'enableSmoothScroll',
      label: 'Enable Smooth Scroll'
    }
  ]
}

export default Global
