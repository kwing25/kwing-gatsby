import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphql-error-list";
import BlogPost from "../components/blog/blog-post";

import NavBar from "../components/navbar/navbar";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    blog: sanityBlog(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })

    }
  }
`;


const BlogPostTemplate = props => {
  const { data, errors } = props;
  const blog = data && data.blog;
  return (
    <div>

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      <div>
        <NavBar />
      </div>
      {blog && <BlogPost {...blog} />}
    </div>
  );
};

export default BlogPostTemplate;
