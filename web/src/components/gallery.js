import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import Img from "gatsby-image"


class Gallery extends React.PureComponent {

  state = { mouseTrackingEnabled: true, preventEventOnTouchMove: true }
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
  }

  stagePadding = {
    paddingLeft: 30,
    paddingRight: 30,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mouseTrackingEnabled: false, preventEventOnTouchMove: false })
    }, 5000)
  }

  render() {

    const { mouseTrackingEnabled, preventEventOnTouchMove } = this.state

    const handleOnDragStart = e => e.preventDefault()

    const Node = ({ node }) => (
      <div onDragStart={handleOnDragStart}>
        <Img width={64} height={64} fluid={node.localFile.childImageSharp.fluid} />
      </div>
    )

    let contents = (
      <React.Fragment>
        <div>
          {nodes.edges.map(instagram => (
            <Node key={instagram.node.id} node={instagram.node} />
          ))}
        </div>
      </React.Fragment>
    )

    return (

      <AliceCarousel
        duration={600}
        showSlideInfo={true}
        preventEventOnTouchMove={preventEventOnTouchMove}
        mouseTrackingEnabled={mouseTrackingEnabled}
        onSlideChanged={console.debug}
        responsive={this.responsive}
        stagePadding={this.stagePadding}
      >
      {contents}

      </AliceCarousel>
    )
  }
}

export default Gallery
