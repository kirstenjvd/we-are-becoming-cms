import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Links = styled.ul`
  list-style: none;
`

const PostLink = ({ post }) => (
  <li>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
  </li>
)

export default PostLink
