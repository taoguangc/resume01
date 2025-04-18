import type { Collection } from 'tinacms'
import Hero from '../sections/hero'
import Marquee from '../sections/marquee'
import Profile from '../sections/profile'
import Experience from '../sections/experience'
import Education from '../sections/education'
import Certs from '../sections/certs'
import Skills from '../sections/skills'
import Languages from '../sections/languages'
import Awards from '../sections/awards'

const Home: Collection = {
  label: 'Home',
  name: 'home',
  path: 'src/data/home',
  format: 'json',
  ui: {
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
      type: 'object',
      name: 'buttons',
      label: 'Buttons',
      list: true,
      defaultItem: {
        style: 'primary'
      },
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
        max: 2
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Button Title',
          required: true
        },
        {
          type: 'string',
          name: 'icon',
          label: 'Button Icon'
        },
        {
          type: 'string',
          name: 'link',
          label: 'Button Link'
        },
        {
          type: 'string',
          name: 'style',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Borderless', value: 'borderless' }
          ]
        }
      ]
    },
    {
      type: 'object',
      name: 'sections',
      label: 'Page Sections',
      list: true,
      ui: {
        visualSelector: true
      },
      templates: [Hero, Marquee, Profile, Experience, Education, Certs, Skills, Languages, Awards]
    }
  ]
}

export default Home
