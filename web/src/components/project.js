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
const ProjectContainer = styled.div`
  position: relative;
  margin-bottom: 10px;

  &:hover {
    div {
      visibility: visible;
    }
  }
`
const Caption = styled.div`
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
  > div {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  span {
    display: block;
  }
  span:nth-child(1),
  span:nth-child(6) {
    width: 100%;
  }
  span:nth-child(2),
  span:nth-child(3),
  span:nth-child(4),
  span:nth-child(5) {
    width: 100%;
    ${mq('tablet')} {
      width: 49.5%;

    }
  }
`

function Project (props) {
  const {_rawBody, title, heading2, categories, mainImage, mainImage2, mainImage3, mainImage4, mainImage5, publishedAt} = props
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
          <Flex>
            {props.mainImage && mainImage.asset && (
              <ProjectContainer>
                <span className={styles.mainImage1}>
                  <img
                    src={imageUrlFor(buildImageObj(mainImage))
                      .width(1200)
                      .height(Math.floor((9 / 16) * 1200))
                      .fit('crop')
                      .url()}
                    alt={mainImage.alt}
                  />
                </span>

               {props.mainImage.rolloverTitle && (
                  <h2>_Client: {props.mainImage.rolloverTitle}</h2>
                )}
                {props.mainImage.rolloverDesc && (
                  <p>{props.mainImage.rolloverDesc}</p>
                )}
                {props.mainImage.rolloverCategories && props.mainImage.rolloverCategories.length > 0 && (
                  <div>
                    <h3>Project scope</h3>
                    <ul>
                      {props.mainImage.rolloverCategories.map(category => (
                        <li key={category._id}>{category}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </ProjectContainer>

            )}



            {props.mainImage2 && mainImage2.asset && (
              <span className={styles.mainImage2}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage2))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .url()}
                  alt={mainImage2.alt}
                />
              </span>
            )}
            {props.mainImage3 && mainImage3.asset && (
              <span className={styles.mainImage3}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage3))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .url()}
                  alt={mainImage3.alt}
                />
              </span>
            )}
            {props.mainImage4 && mainImage4.asset && (
              <span className={styles.mainImage4}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage4))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .url()}
                  alt={mainImage4.alt}
                />
              </span>
            )}
            {props.mainImage5 && mainImage5.asset && (
              <span className={styles.mainImage5}>
                <img
                  src={imageUrlFor(buildImageObj(mainImage5))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .url()}
                  alt={mainImage5.alt}
                />
              </span>
            )}
          </Flex>
        </Photos>
      </div>
    </BlogPost>
  )
}

export default Project
