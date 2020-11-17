export default {
  name: 'rollover',
  title: 'Rollover Details',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Client (Rollover Title)',
      name: 'rolloverTitle',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      title: 'Project Description',
      name: 'rolloverDesc',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'rolloverCategories',
      title: 'Project Scope',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
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
