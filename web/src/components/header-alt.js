import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import beLogo from "../images/logo-be-dark.svg"
import beLogoText from "../images/logo-text-dark.svg"

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

const HeaderMain = styled.header`
  position: absolute;
  z-index: 4;
`
const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 210px;
  padding-bottom: 95px;
  width: 100%;
  ${mq('medium')} {
    padding-top: 270px;
    padding-bottom: 145px;
  }
  ${mq('my')} {
    padding-top: 310px;
    padding-bottom: 195px;
  }
`
const Logo = styled(Link)`
  position: absolute;
  left: 15px;
  top: 15px;
  max-width: 190px;
  z-index: 4;
  ${mq('my')} {
    position: absolute;
    top: 83px;
    left: 115px;
    max-width: 152.13px;
  }
`
const Be = styled.img`
  max-width: 99px;
  position: fixed;
`
const LogoText = styled.img`
  max-width: 74px;
  z-index: 4;
  position: absolute;
  top: 51px;
  left: 79px;
`
const showDrop = () => {
  document.getElementById("drop").classList.toggle("open");
  document.getElementById("burger").classList.toggle("open");
}
const Hamburger = () => (
  <HamburgerStyle id="burger" onClick={showDrop}>
    <div/><div/><div/>
  </HamburgerStyle>
)

const HamburgerStyle = styled.div`
  ${mq('tablet')}{display: block;}
  width: 45px;
  height: 32px;
  position: fixed;
  z-index: 4;
  cursor: pointer;
  right: 40px;
  top: 40px;
  ${mq('medium')} {
    right: 108px;
    top: 115px;
  }
  &.open {
    div {
      background-color: #ffffff;
    }
  }
  div {
    position: absolute;
    background-color: #FF5959;
  }
  div:first-child {
    width: 38px;
    height: 3px;
    top: 0;
  }
  div:nth-child(2) {
    width: 38px;
    height: 3px;
    top: 14px;
  }
  div:last-child {
    width: 38px;
    height: 3px;
    top: 28px;
  }
`
const Menu = styled.div `
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 0;
  text-align: center;
  background: #FF5959;
  z-index: 3;
  opacity: 0;
  transition: .25s all;
  visibility: hidden;
  &.open {
    display: block;
    height: 100vh;
    opacity: 1;
    padding-top: 160px;
    visibility: visible;
   ${mq('tablet')}{
    padding-top: 155px;
   }
  }
  a {
    text-decoration: none;
    padding: 20px 10px;
    font-size: 50px;
    display: block;
    line-height: 1;
    font-weight: 500;
    &:hover {
      color: #333333;
    }
  }
`

class HeaderAlt extends React.Component {

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
      <HeaderMain>
        <Wrapper>
          <Logo to="/">
            <Be src={beLogo} alt="be/" />
            <LogoText src={beLogoText} alt="Becoming Design Office LTD" />
          </Logo>

          <Hamburger/>
          <Menu id="drop">{/*whole drop down*/}
            <div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/services/" >Services</Link></div>
              <div><a onClick={showDrop} href="#footer">Contact Us</a></div>
            </div>
          </Menu>

        </Wrapper>
      </HeaderMain>
    )
  }
}


export default HeaderAlt
