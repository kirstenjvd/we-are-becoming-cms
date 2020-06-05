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
      title: 'Main image',
      type: 'figure'
    },
    {
      name: 'mainImage2',
      title: 'Main image 2',
      type: 'figure'
    },
    {
      name: 'mainImage3',
      title: 'Main image 3',
      type: 'figure'
    },
    {
      name: 'mainImage4',
      title: 'Main image 4',
      type: 'figure'
    },
    {
      name: 'mainImage5',
      title: 'Main image 5',
      type: 'figure'
    },
    {
      name: 'mainImage6',
      title: 'Main image 6',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
