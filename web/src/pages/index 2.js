import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import AboveFold from "../components/aboveFold"
import Mission from "../components/mission"
import SocialContainer from "../components/socialContainer"
import Services from "../components/services"
import Testimonials from "../components/testimonials"

const IndexPage = ({data: {allInstaNode}}) => (

<Layout>
  <SEO
    title="Strategic brand design, identity design, campaign design, packaging design, graphic design - Victoria, BC"
    description="We offer process-based creative leadership to our clients to determine exactly what their goals are and what is required to effectively meet those goals. We love art, but above all, we value the success that thoughtful and strategic applied design thinking can bring to a company’s bottom line."
    keywords={[`design`, `victoria`, `react`, `graphic design`,`website`,`packaging design`,`campaign design`,`identity design`,`brand design`]}
  />
  <Header />
  <AboveFold />
  <Mission />
  <SocialContainer nodes={allInstaNode} />
  <Services />
  <Testimonials />

</Layout>
)

export const pageQuery = graphql`
  query ScrapingQuery {
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

export default IndexPage
