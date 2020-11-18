import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ServicesTemplateQuery($id: String!) {
    services: sanityServices(id: {eq: $id}) {
      id
      publishedAt
      categories
      heading2
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
      }
      title
      slug {
        current
      }
      _rawBody
      projects {
        _key
        _type       
        rolloverTitle
        rolloverDesc
        rolloverCategories
        mainProjectImage {
          asset{
            fixed(width: 900) {
              ...GatsbySanityImageFixed_noBase64
            }
            _id
          }
          alt
        }      
        smallImages {
          _key
          _type
          asset{
            fixed(width: 600) {
              ...GatsbySanityImageFixed_noBase64
            }
            _id
          }
          alt
        }
      }
    }
  }
`

const ServicesTemplate = props => {
  const {data, errors} = props
  const services = data && data.services
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {services && <SEO title={services.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {services && <Project {...services} />}
    </Layout>
  )
}

export default ServicesTemplate
