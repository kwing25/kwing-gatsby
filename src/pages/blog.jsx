import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from "../lib/helpers";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import BlogPostPreviewGrid from "../components/blog/blog-post-preview-grid";
import BlogCardExternal from "../components/blog/blog-card-external";

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

      <div id="blog-page" className="h-screen">
        <header className="text-center">
          <h1 id="title-page">Blog</h1>
        </header>

        <div className="p-10">
          <BlogCardExternal />

          {/* {blogNodes && blogNodes.length > 0 && <BlogPostPreviewGrid nodes={blogNodes} />} */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;