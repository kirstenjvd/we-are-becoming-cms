import React from "react"
import SocialFeed from "./socialFeed"
import styled from "@emotion/styled"

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

export const SocialContainer = ({ nodes }) => {
  return (
    <Social>
      <SocialFeed nodes={nodes} />
    </Social>
  )
}
export default SocialContainer
