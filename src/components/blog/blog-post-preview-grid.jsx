import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogPostPreviewGrid = () => {
    const data = useStaticQuery(graphql`
    query {
      allSanityBlog {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
    return (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {data.allSanityBlog.edges.map(({ node }) => (
                <div key={node.slug.current} className="bg-slate-400 px-10">
                    <h2 className="text-2xl">{node.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default BlogPostPreviewGrid
