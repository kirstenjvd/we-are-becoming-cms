import React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'

import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import Header from "../components/header"
import AboveFold from "../components/aboveFold"
import Mission from "../components/mission"
import SocialContainer from "../components/socialContainer"
import Services from "../components/services"
import Testimonials from "../components/testimonials"

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
    services: allSanityServices(
      limit: 6
      sort: {fields: [publishedAt], order: DESC}
      filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
    allInstaNode(filter: { username: { eq: "becomingdesignoffice" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data, errors, siteTitle} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const allInstaNode = (data || {}).allInstaNode
  const site = (data || {}).site
  const servicesNodes = (data || {}).services
    ? mapEdgesToNodes(data.services)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Header />
      <AboveFold />
      <Mission />
      <SocialContainer nodes={allInstaNode} />
      <Services />
      <Testimonials />
      {servicesNodes &&
        servicesNodes.map(node => (
          <span key={node.id}>
            <Link to={`/services/${node.slug.current}`}>
              {node.title}
            </Link>
          </span>
        ))
      }
    </Layout>
  )
}

export default IndexPage
