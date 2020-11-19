import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import HeaderAlt from "../components/header-alt"
import styled from "@emotion/styled"

import styles from './project.module.css'

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

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 200;
  max-width: 732px;
`
const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`
const ServicesLink = styled.a`
  color: #FF5959;
  font-weight: 600;
  font-size: 22px;
  text-decoration: none;
  right: 20px;
  position: absolute;
  top: 126px;
  ${mq('medium')} {
    right: 0;
  }
`
const BlogPost = styled.article`
  background: #fff;
  color: #000;
  padding-bottom: 60px;
  p {
    font-size: 20px;
    font-weight: 200;
  }
  ul {
    font-size: 16px;
    font-weight: 200;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`
const Flex = styled.div`
  ${mq('medium')} {
    display: flex;
  }
`
const Grid = styled.div`
  ${mq('medium')} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row: auto auto;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`
const ProjectContainer = styled.div`
  position: relative;
  margin-bottom: 10px;

  &:hover {
    > div {
      visibility: visible;
    }
  }
`
const ProjectWrapper = styled.div`
  margin-bottom: 60px;
`
const RollOver = styled.div`
  position: absolute;
  width: 96%;
  height: 93%;
  top: 0;
  padding: 20px;
  background: #FF5959;
  margin: 2%;
  color: #fff;
  line-height: 1.32;
  visibility: hidden;
  font-size: 20px;
  h2 {
    font-weight: 500;
    line-height: 1.1;
    margin-left: -14px;
    position: relative;
    &:before {
      background: #fff;
      position: absolute;
      right: 102%;
      top: 30px;
      content: '';
      height: 2px;
      width: 30px;
    }
  }
  p,
  h3,
  ul {
    color: #333333;
    font-size: 20px;
    font-weight: 300;
  }
  h3 {
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 3px;
  }
  ul {
    list-style: none;
    margin-left:0;
    li {
      padding-right: 2px;
      display: inline-block;
      &:after {
        content: ',';
      }
      &:last-of-type {
        &:after {
          display: none;
        }
      }
    }
  }
  ${mq('medium')} {
    font-size: 30px;
    padding: 50px 30% 40px 60px;
  }
`

const Right = styled.div`
 ${mq('medium')} {
    flex: 1;
  }
`
const Left = styled.div`
  padding-bottom: 20px;
  ${mq('medium')} {
    flex: 3;
    padding-right: 80px;
    padding-bottom: 70px;
  }
`
const Photos = styled.div`
  img {
    display: block;
    margin-bottom: 0;
    position: relative;
  }
`

function Project (props) {
  const {_rawBody, title, heading2, categories, mainImage, projects, publishedAt} = props
  return (

    <BlogPost className="postStyle">
      <HeaderAlt/>
      <div className="hero wrapper">
        <ServicesLink href="/services">_ All Services</ServicesLink>
        <H1>{title}</H1>
        <Flex>
          <Left>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </Left>
          <Right>
            {categories && categories.length > 0 && (
              <div>
                <H2>{props.heading2}</H2>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category}</li>
                  ))}
                </ul>
              </div>
            )}
          </Right>
        </Flex>
        <Photos>
        {projects.map( project => (
          <ProjectWrapper key={project._key}>
            <ProjectContainer>
              {project.mainProjectImage && project.mainProjectImage.asset && (
              <span className={styles.mainImage}>
                <img
                  src={imageUrlFor(buildImageObj(project.mainProjectImage))
                    .width(1200)
                    .height(720)
                    .fit('crop')
                    .url()}
                  alt={project.mainProjectImage.alt}
                />
              </span>
              )}
              <RollOver>
                {project.rolloverTitle && (
                  <h2>Client: {project.rolloverTitle}</h2>
                )}
                {project.rolloverDesc && (
                  <p>{project.rolloverDesc}</p>
                )}
                {project.rolloverCategories && project.rolloverCategories.length > 0 && (
                  <div>
                    <h3>Project scope</h3>
                    <ul>
                      {project.rolloverCategories.map(category => (
                        <li key={category._id}>{category} </li>
                      ))}
                    </ul>
                  </div>
                )}
              </RollOver>  
            </ProjectContainer>
            <Grid>
            {project.smallImages.map( image => (
              <div key={image._key}>
                {image && image.asset && (
                <span className={styles.mainImage}>
                  <img
                    src={imageUrlFor(buildImageObj(image))
                      .width(868)
                      .height(599)
                      .fit('crop')
                      .url()}
                    alt={image.alt}
                  />
                </span>
                )}
              </div>
            ))}
            </Grid>
          </ProjectWrapper>   
        ))}
        </Photos>
      </div>
    </BlogPost>
  )
}

export default Project
