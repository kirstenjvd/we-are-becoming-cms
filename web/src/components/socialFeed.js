import React from "react"
import Img from "gatsby-image"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const handleOnDragStart = e => e.preventDefault()

const Node = ({ node }) => (
  <div role="presentation" onDragStart={handleOnDragStart}>
    <Img width={64} height={64} fluid={node.localFile.childImageSharp.fluid} />
  </div>
)

export const SocialFeed = ({ nodes}) => {

  let responsive = {
    0: { items: 1 },
    400: { items: 2 },
    600: { items: 3 },
    960: { items: 4 },
    1200: { items: 5 },
  }

  let stagePadding = {
    paddingRight: 50,
  }

  return (
    <AliceCarousel
      mouseDragEnabled
      mouseTrackingEnabled={true}
      buttonsDisabled={true}
      autoPlay={false}
      dotsDisabled={true}
      responsive={responsive}
      stagePadding={stagePadding}
      >
      {nodes.edges.map(instagram => (
        <Node key={instagram.node.id} node={instagram.node} />
      ))}
    </AliceCarousel>
  )
}

export default SocialFeed
