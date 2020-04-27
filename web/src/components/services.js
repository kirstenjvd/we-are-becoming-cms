import React from "react"
import styled from "@emotion/styled"

import desktopLogos from "../images/desktop-logos.svg"
import mobileLogos from "../images/mobile-logos.svg"

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
const Service = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: white;
  position: relative;
  z-index: 1;
  color: #333333;
  ${mq('my')} {
    padding-top: 221px;
    padding-bottom: 169px;
  }
  p {
    max-width: 840px;
    font-size: 28px;
    line-height: 1.4;
    margin-bottom: 70px;
    margin: 0 auto 70px;
    font-weight: 300;
    span {
      font-weight: 500;
    }
    ${mq('medium')} {
      text-align: center;
    }
  }
`
const MobileImage = styled.div`
  display: block;
  ${mq('small')} {
    display: none;
  }
  img {
    max-width: 100%;
  }
`
const DesktopImage = styled.div`
  display: none;
  ${mq('small')} {
    display: block;
  }
  img {
    max-width: 100%;
  }
`
export const Services = () => {
  return (
  <Service>
    <Container>
      <p>
        <span>Becoming services a broad range of industries including</span> the
        not-for-profit sector, universities, cooperatives, architects,
        science & technology companies, cities and food & beverage companies.
      </p>
      <MobileImage><img src={mobileLogos} alt="Client Logos" /></MobileImage>
      <DesktopImage><img src={desktopLogos} alt="Client Logos" /></DesktopImage>

    </Container>
  </Service>
  )
}


export default Services
