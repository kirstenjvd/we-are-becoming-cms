import {format} from 'date-fns'

export default {
  name: 'services',
  title: 'Service List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'heading2',
      title: 'Sub Heading',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'mainImage',
      title: 'Featured Image',
      description: 'Service listing hover background',
      type: 'image'
    },
    {
      type: 'array',
      name: 'projects',
      of: [{type: 'project'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
    },
    prepare({title = 'No title', publishedAt, slug = {} }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${slug.current}/`
      return {
        title
      }
    }
  }
}
