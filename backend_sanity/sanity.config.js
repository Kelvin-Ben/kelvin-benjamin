import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import works from './schemas/works'
import testimonials from './schemas/testimonials'
import brands from './schemas/brands'
import abouts from './schemas/abouts'
import experiences from './schemas/experiences'
import skills from './schemas/skills'
import workExperience from './schemas/workExperience'
import contact from './schemas/contact'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'kdseu2od',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([
      testimonials, abouts, brands, contact, experiences, skills, workExperience, works
    ])
  },
})
