import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlockContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityBlog {
        nodes {
          title
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default BlockContent
