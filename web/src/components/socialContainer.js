import React from "react"
import SocialFeed from "./socialFeed"
import styled from "@emotion/styled"
import InstagramPosts from '@luchoster/react-ig'

const Social = styled.section`
  background: #fff;
  .alice-carousel__stage-item {
    margin-bottom: 0;
    padding: 2px;
    cursor: grab;
  }
  .alice-carousel {
    background: #fff;
    padding-top: 2px;
    padding-left: 2px;
  }
`

export const SocialContainer = ({ }) => {
  return (
    <Social>
      <InstagramPosts username="becomingdesignoffice" />
    </Social>
  )
}
export default SocialContainer
