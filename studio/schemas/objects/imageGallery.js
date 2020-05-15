export default {
  name: 'imageGallery',
  title: 'Clickable Images',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Service URL',
      name: 'serviceUrl',
      type: 'url',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
