import React from "react"
import {Link} from 'gatsby'
import styled from "@emotion/styled"
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cyclist from "../images/testimonial-img.webp";


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


const Container = styled.div`
  max-width: 990px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`
const Copy = styled.div`
  padding-bottom: 80px;
  a {
    color: #fff;
    text-decoration: none;
  }
  ${mq('tablet')} {
    max-width: 50%;
    padding-right: 30px;
    margin-bottom: 0;
  }
`
const Carousel = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: hidden;
  img {
    transition: all .25s;
  }
  div {
    height: 100%;
  }
  .alice-carousel img {
    display: block;
    object-fit: cover;
    height: 50vh;
    object-fit: cover;
    ${mq('tablet')} {
      width: 100%;
      height: 100%;
    }
  }
  ${mq('tablet')} {
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .alice-carousel__prev-btn {
    text-align: right;
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
  }
  .alice-carousel__next-btn {
    text-align: right;
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
  }
  .alice-carousel__prev-btn [data-area]::after,
  .alice-carousel__next-btn [data-area]::after {
    opacity: 0;
  }
  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  .alice-carousel__prev-btn-item span,
  .alice-carousel__next-btn-item span {
    display: block;
    margin: 30px auto;
    width: 35px;
    height: 35px;
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
  }
  .alice-carousel__prev-btn-item span {
    transform: rotate(-45deg);
  }

  .alice-carousel__next-btn-item span {
    transform: rotate(135deg);
  }
`
const Caption = styled.a`
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  position: absolute;
  width: 50%;
  top: 0;
  height: 100%;
  left: 50%;
  transform: translate(-50%);
  font-size: 40px;
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 0;
  padding-top: 90px;
  padding-left: 70px;
  span {
    font-weight: 500;
    font-size: 70px;
    text-align: left;
    max-width: 500px;
    line-height: 1;
  }
  &:hover {
    padding-bottom: 50px;
    opacity: 1;
    width: 100%;
    color: #fff;
    background: rgba(255,89,89,0.8);
  }
`
const OurMission = styled.section`
  padding-top: 80px;
  background-color: #ff5959;
  position: relative;
  z-index: 1;
  ${mq('tablet')} {
    padding-top: 140px;
  }
  h2 {
    max-width: 285px;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 600;
    color: #333333;
  }
  p {
    max-width: 802px;
    font-size: 24px;
    line-height: 1.35;
    font-weight: 300;
    color: #333333;
  }

`
const ServiceLink = styled(Link)`
  color: #fff;
  display: block;
  font-size: 40px;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 60px;
  &:before {
    background: #fff;
    position: absolute;
    right: 102%;
    top: 30px;
    content: '';
    height: 2px;
    width: 30px;
  }
  &:hover {
    color: #333333;
  }
`

const handleOnDragStart = e => e.preventDefault()

function Mission (props) {


  return (
  <OurMission>
    <Container>
      <Copy>
        <ServiceLink to="/services">
          Services, <br/>
          case studies <br/>
          & process.
        </ServiceLink>
        <h2>Who are we?</h2>
        <p>Hi! We’re graphic designers who like to create  super competitive visual identities and brands.</p>
        <p>Of course we love art, but above all, we value the success that thoughtful and strategic applied design brings to a company’s bottom line.</p>
        <p>Have a project in mind? <a href="#footer">Let’s talk!</a></p>
      </Copy>
    </Container>

    <Carousel>
      <AliceCarousel
        mouseTrackingEnabled={true}
        mouseDragEnabled={true}
        autoPlay={true}
        dotsDisabled={true}
        stopAutoPlayOnHover={false}
        disableAutoPlayOnAction={false}
        autoPlayInterval={5000}>
        {props.slides.map(slide => (
          <div role="presentation" onDragStart={handleOnDragStart} key={slide._key}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(600)
                  .url()}
              />
            )}
            {slide.serviceUrl && slide.caption && (
              <Caption href={slide.serviceUrl}><span>{slide.caption}</span></Caption>
            )}
          </div>
        ))}
      </AliceCarousel>
    </Carousel>

  </OurMission>
  )
}


export default Mission
