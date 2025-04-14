import type { Template } from 'tinacms'

const Map: Template = {
  label: 'Map',
  name: 'Map',
  fields: [
    {
      type: 'string',
      label: 'apiKey',
      name: 'apiKey'
    },
    {
      type: 'string',
      label: 'Latitude',
      name: 'latitude'
    },
    {
      type: 'string',
      label: 'Longitude',
      name: 'longitude'
    },
    {
      type: 'string',
      label: 'Styles',
      name: 'styles'
    },
    {
      type: 'string',
      label: 'Zoom Level',
      name: 'zoom'
    },
    {
      type: 'object',
      label: 'Markers',
      name: 'markers',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        }
      },
      fields: [
        {
          type: 'string',
          label: 'Position',
          name: 'position'
        },
        {
          type: 'string',
          label: 'Title',
          name: 'title'
        },
        {
          type: 'string',
          label: 'Icon',
          name: 'icon'
        }
      ]
    }
  ]
}

export default Map
