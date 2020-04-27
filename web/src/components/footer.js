import React from "react"
import styled from "@emotion/styled"
import Mailchimp from 'react-mailchimp-form'

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

const Column = styled.div`
`
const FormContainer = styled.div`
  ${mq('tablet')} {
    text-align: right;
  }
  h2 {
    font-weight: 500;
    font-size: 40px;
    max-width: 400px;
  }
  label {

  }
  input {
    color: #fff;
    background: none;
    border: 2px solid #fff;
    display: block;
    outline: none;
    -webkit-appearance: none;
    padding: 12px;
    margin-bottom: 16QZAzZpx;
    ${mq('tablet')} {
      margin: 0 0 0 auto;
    }
    &::placeholder {
      color: #fff;
      opacity: 1;
    }
    &:focus {
      border: 2px solid #ff5959;
    }
    &:focus::placeholder {
      opacity: 0;
    }
  }
  button {
    color: #fff;
    font-weight: 500;
    display: block;
    border: none;
    outline: none;
    background: #ff5959;
    padding: 10px 18px;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 50px;
    ${mq('tablet')} {
      margin: 20px 0 0 auto;
    }
    &:hover {
      background: #fff;
      color: #ff5959;
    }
  }
  p {
    color: #fff!important;
    padding-top: 5px;
  }
`

const Container = styled.div`
  max-width: 990px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  ${mq('tablet')} {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row-reverse;
  }
`
const Contact = styled.footer`
  background-color: #333333;
  padding-top: 150px;
  padding-bottom: 60px;
  position: relative;
  z-index: 1;
  p {
    max-width: 465px;
    font-size: 28px;
    font-weight: 300;
    line-height: 1.35;
  }
  address {
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    margin-top: 200px;
    a {
      text-decoration: none;
    }
  }
  span {
    font-weight: 500;
  }
`
const Intern = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
  margin-bottom: 50px;
`
export const Footer = () => {
  return (
    <Contact id="footer">
      <Container>
        <Column>
          <FormContainer>
            <h2>Subscribe to our monthly newsletter</h2>
            <Mailchimp
              action='https://wearebecoming.us1.list-manage.com/subscribe/post?u=4c927f52c250413a21995799d&amp;id=3fc098e2db'
              fields={[
                {
                  name: 'EMAIL',
                  placeholder: 'Email',
                  type: 'email',
                  required: true
                }
              ]}
               // Change predetermined language
              messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail address.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Subscribe"
                }
              }
            />
          </FormContainer>
         </Column>
        <Column>
          <Intern>
            <span>Work with us by chatting with</span><br/> <a href="mailto:ross@wearebecoming.ca">
            ross@wearebecoming.ca</a>
          </Intern>
          <Intern>
            <span>Jobs & Internships:</span><br/>Becoming is always looking<br/> for
            talented people.
          </Intern>
          <address>
            Becoming Design Office Ltd. <br />
            2031 Store Street Victoria, BC  V8T 5L9 <br />
            <a href="tel:1.604.290.5665 ">+1 604 290 5665 </a><br />
            <a href="mailto:ross@wearebecoming.ca">ross@wearebecoming.ca</a>
          </address>
         </Column>
      </Container>
    </Contact>
  )
}


export default Footer
