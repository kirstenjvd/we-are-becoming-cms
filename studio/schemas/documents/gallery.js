import {format} from 'date-fns'

export default {
  name: 'gallery',
  title: 'Home Gallery',
  type: 'document',
  fields: [
    {
      type: 'array',
      name: 'slides',
      title: 'Slides',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    }
  ]
}
