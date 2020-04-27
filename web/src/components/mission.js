import React from "react"
import styled from "@emotion/styled"

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
const OurMission = styled.section`
  padding-top: 120px;
  padding-bottom: 106px;
  background-color: #ff5959;
  position: relative;
  z-index: 1;
  ${mq('my')} {
    padding-top: 208px;
    padding-bottom: 195px;
  }
  h2 {
    max-width: 285px;
    font-size: 34px;
    line-height: 1.2;
    font-weight: 500;
  }
  p {
    max-width: 802px;
    font-size: 28px;
    line-height: 1.35;
    font-weight: 300;
  }
`
export const Mission = () => {
  return (
  <OurMission>
    <Container>
      <h2>Hi there! </h2>
      <p>Becoming works with emerging and established companies to create ownable and competitive visual identities and brands.</p>
      <p>
      We offer process-based leadership to our clients to determine exactly what their goals are and what is required to effectively meet those goals. We love art, but above all, we value the success that thoughtful and strategic applied design thinking can bring to a company’s bottom line.
      </p>
      <p>We are a collaborative studio and work with like-minded clients who understand that great design produces tangible results.</p>
    </Container>
  </OurMission>
  )
}


export default Mission
