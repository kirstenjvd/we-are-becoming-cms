import React from "react"
import styled from "@emotion/styled"

import cyclist from "../images/testimonial-img.webp";
import cyclistMobile from "../images/testimonial-img-mobile.webp";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
const Reputation = styled.section`
  margin-bottom: -1px;
  overflow: hidden;
  padding-top: 120px;
  padding-bottom: 78px;
  position: relative;
  z-index: 1;
  background: url(${cyclistMobile});
  background-size: cover;
  ${mq('tablet')} {
    padding-top: 165px;
    padding-bottom: 78px;
    background: url(${cyclist});
    background-size: cover;
  }
  h2 {
    font-weight: 500;
    max-width: 520px;
    font-size: 33px;
    line-height: 1.2;
    margin-bottom: 50px;
  }
  p {
    font-size: 22px;
    line-height: 1.35;
    font-weight: 300;
    ${mq('my')} {
      font-size: 28px;
    }
  }
  span {
    font-weight: 400;
  }
  .alice-carousel__stage-item {
    cursor: grab;
  }
  .alice-carousel__dots-item:hover,
  .alice-carousel__dots-item.__active {
    background-color: #333;
  }
`
const Small = styled.span`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 300;
`

const handleOnDragStart = e => e.preventDefault()

export const Testimonials = () => {
  return (
  <Reputation>
    <Container>
      <h2>What people are saying</h2>
      <AliceCarousel
        mouseTrackingEnabled={true}
        mouseDragEnabled={true}
        disableAutoPlayOnAction={true}
        buttonsDisabled={true}
        autoPlay={true}
        autoPlayInterval={5000}>

        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <p>
            I had the pleasure of working with Ross throughout a significant brand redevelopment and re-launch project. Ross has an incredible talent for taking a great deal of information and implementing a design system that is not only on brand - and aesthetically beautiful - but also very well planned and intuitive for the end-user. Ross’ easy-going attitude, crossed with his willingness to speak up when he has an opposing view, are a couple more reasons why I wouldn’t hesitate to recommend Ross’ work to any marketer looking for stand-out brand creative.
          </p>
          <Small><span>Jaimie Turkington</span> VP Sales and Marketing, North America</Small>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <p>
            Ross was very professional and easy to work with. Very direct in his approach and direction. I would highly recommend him.
          </p>
          <Small><span>KC Armstrong</span> Photographer - Director</Small>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <p>
            Ross built the brand for Sales Prodigy on a tight schedule. The quality of his work products was very high and he approached the overall design problems with care, experience and a great deal of consideration. I am certain we will rely on Ross in the future as our company and brand evolves and would recommend him to anyone looking for an A player.
          </p>
          <Small><span>Mik Lernout</span> Sr. Director, Products and Labs at Hootsuite</Small>
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className="item">
          <p>
            Ross is an extremely creative and talented designer with a strong understanding of marketing and communications. I have been a client at Simon Fraser University and VGH & UBC Hospital Foundation and have had very positive experiences working with Ross. He delivers high quality work, is very collaborative and is solutions focused in his approach to design. Ross has gone the extra mile delivering great work under tight deadlines, is always professional and a pleasure to work with.
          </p>
          <Small><span>Maureen Broadfoot</span> Managing Director Marketing & Annual Giving, Simon Fraser University</Small>
        </div>
      </AliceCarousel>

    </Container>
  </Reputation>
  )
}

export default Testimonials
