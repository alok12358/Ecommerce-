import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: '6i241f1c',
  dataset: 'ecommerce',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
