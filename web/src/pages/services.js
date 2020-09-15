import React from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'

import Layout from '../containers/layout'
import {mapEdgesToNodes, filterOutDocsWithoutSlugs} from '../lib/helpers'

import PostLink from "../components/post-link"
import SEO from "../components/seo"
import Header from "../components/header"
import styled from "@emotion/styled"

import background from "../images/hero-bg-services.webp"

const bp = {
  smaller: 300,
  small: 500,
  tablet: 768,
  medium: 1024,
  large: 1200,
  my: 1370,
};

const mq = n => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);
  return result;
};

const Services = styled.div`
  background-size: cover;
  background-color: #333;
  padding-bottom: 80px;
  min-height: 100vh;
`
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 200;
  position: relative;
  z-index: 3;
  ${mq('medium')} {
    font-size: 50px;
  }
`
const Links = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 0;
  a {
    text-decoration: none;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 500;
    padding: 18px 0;
    display: block;
    ${mq('medium')} {
      font-size: 46px;
    }
    &:hover {
      color: #FF5959;
    }
  }
`
const BG = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  transition: all .5s;
  display: none;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    background: rgba(55,55,55,0.6);
  }
  img {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    object-fit: cover;
  }
  ${mq('tablet')} {
    display: block;
  }
`
const Service = styled.li `
  margin-bottom: 0;

  &:hover {
    > div {
      opacity: 1;
      visibility: visible;
    }
  }
  a {
    position: relative;
    z-index: 3;
  }
`

export const query = graphql`
  query ServicesPageQuery {
    services: allSanityServices(
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
            alt
            caption
          }
        }
      }
    }
  }
`
const ServicesPage = props => {
  const {data, errors} = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const servicesNodes =
    data && data.services && mapEdgesToNodes(data.services).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Services' />
      <Header/>
      <Services>
        <div className="hero wrapper">
          <H1>Our Services Include:</H1>
          <Links>
            {servicesNodes &&
              servicesNodes.map(node => (
                <Service key={node.id}>
                  <Link to={`/services/${node.slug.current}`}>
                    {node.title}
                  </Link>
                  {node.mainImage && node.mainImage.asset && (
                    <BG>
                      <img role="presentation"
                        src={imageUrlFor(buildImageObj(node.mainImage))
                          .width(1200)
                          .height(Math.floor((9 / 16) * 1200))
                          .fit('crop')
                          .url()}
                        alt="null"
                      />
                    </BG>
                  )}
                </Service>
              ))}
          </Links>
        </div>
      </Services>
    </Layout>
  )
}

export default ServicesPage
