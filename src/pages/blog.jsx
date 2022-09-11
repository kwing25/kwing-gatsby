import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import BlogPostPreviewGrid from "../components/blog/blog-post-preview-grid";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";
import NavBar from "../components/navbar/navbar";

export const query = graphql`
  query BlogPageQuery {
    blogs: allSanityBlog(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          _rawBody
          body {
            _type
          }
          slug {
            current
          }
          categories {
            _id
            title
          }
          Content
        }
      }
    }
  }
`;

const BlogPage = props => {
    const { data, errors } = props;
    if (errors) {
        return (
            <div>
                <GraphQLErrorList errors={errors} />
            </div>
        );
    }
    const blogNodes =
        data && data.blogs && mapEdgesToNodes(data.blogs).filter(filterOutDocsWithoutSlugs);
    return (
        <div>


            <div>
                <NavBar />
            </div>

            <div id="blog-page">
                <header className="text-center">
                    <h1 className="bold">Blog</h1>
                </header>

                <div className="p-10">
                    {blogNodes && blogNodes.length > 0 && <BlogPostPreviewGrid nodes={blogNodes} />}
                </div>
            </div>

        </div>
    );
};

export default BlogPage;