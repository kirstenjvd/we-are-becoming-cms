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
    home: sanityHome(_id: { regex: "/(drafts.|)home/" }) {
      id
      gallery{
        _key
        _type
        slides{
          asset{
            fixed(width: 1000) {
              ...GatsbySanityImageFixed_noBase64
            }
            _id
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
  const home = data && data.home

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const allInstaNode = (data || {}).allInstaNode
  const site = (data || {}).site

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
      <Mission {...home.gallery} />
      <SocialContainer nodes={allInstaNode} />
      <Services />
      <Testimonials />
    </Layout>
  )
}

export default IndexPage
