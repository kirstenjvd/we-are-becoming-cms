export default {
  type: 'object',
  name: 'project',
  title: 'Project',
  fields: [{
    title: 'Client (Rollover Title)',
    name: 'rolloverTitle',
    type: 'string'
  },
  {
    title: 'Project Description',
    name: 'rolloverDesc',
    type: 'string',
  },
  {
    name: 'rolloverCategories',
    title: 'Project Scope',
    type: 'array',
    of: [{type: 'string'}],
    options: {
      layout: 'tags'
    }
  },
  {
    name: 'mainProjectImage',
    title: 'Main image w/ Rollover',
    type: 'figure'
  },
  {
    type: 'array',
    name: 'smallImages',
    title: 'Small Images',
    of: [{ type: 'figure' }],
    options: {
      layout: 'grid'
    }
  }],
  preview: {
    select: {
      title: 'rolloverTitle',
      media: 'mainProjectImage'
    }
  }
}
