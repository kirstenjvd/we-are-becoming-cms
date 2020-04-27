import React from "react"
import styled from "@emotion/styled"

import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import background from "../images/hero-bg.webp"
import Vimeo from '@u-wave/react-vimeo'

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

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 210px;
  padding-bottom: 95px;
  ${mq('medium')} {
    padding-top: 270px;
    padding-bottom: 145px;
  }
  ${mq('my')} {
    padding-top: 310px;
    padding-bottom: 195px;
  }
`
const Container = styled.div`
  max-width: 990px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
`
const IframeContainer = styled.div`
  display: none;
  z-index: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: -40px;
  iframe {
    transform: scale(1.2);
  }
  ${mq('large')} {
    display: block;
  }
`

const Hero = styled.section`
  background: url( ${background} );
  background-size: cover;
  position: relative;
  z-index: 2;
  ${mq('large')} {
    background: none;
  }
  ${Wrapper} {
    background: none;
    padding-top: 198px;
    ${mq('large')} {
      background: rgba(0,0,0,0.6);
      padding-top: 280px;
    }
  }
  .type {
    height: 50px;
  }
  p {
    max-width: 880px;
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 55px;
    font-weight: 200;
    letter-spacing: .01em;
    h1 {
      color: #ff5959;
      font-weight: 400;
      display: block;
      font-size: 46px;
      padding-right: 5px;
      margin-bottom: 20px;
      ${mq('medium')} {
        font-weight: 500;
        display: inline;
        margin-bottom: 0;
        padding-right: 0;
      }
    }
    ${mq('large')} {
      font-size: 46px;
    }
  }
  .Typist {
    display: inline;
  }
  p.different {
    max-width: 1229px;
  }
`

class AboveFold extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1400;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render () {

    return (

    <div className="header">
      <IframeContainer>
        <Vimeo
          video={250405877}
          autoplay
          loop={true}
          controls={false}
          responsive={true}
          showByline={false}
          background={true}
          showPortrait={false}
          showTitle={false}
          muted={true}
          volume={0}
        />
      </IframeContainer>

      <Hero>
        <Wrapper>
          <Container>
            <p>
              <h1>Our world is in a constant state of change;<br/>of becoming something new. </h1>
              If you or your company are growing, shrinking, announcing, producing,
              evolving or simply just starting out, we can help your brand
              be/
              <TypistLoop interval={1000}>

                {[
                  'loved.',
                  'mused.',
                  'bold.',
                  'smart.',
                  'different.',
                  'you.',
                  'up.',
                  'down.',
                  'big.',
                  'small.',
                ].map(text => <Typist key={text} startDelay={150} cursor={{show: false}}>{text}</Typist>)}

              </TypistLoop>
            </p>
          </Container>
        </Wrapper>
      </Hero>
    </div>
    )
  }
}


export default AboveFold
