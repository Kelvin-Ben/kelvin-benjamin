import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import testimonial from './schemas/testimonial'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'lggxlpb3',
  dataset: 'portfolio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([
      testimonial
    ])
  },
})
