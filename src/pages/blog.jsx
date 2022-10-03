import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";

import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
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
  const { errors } = props;
  if (errors) {
    return (
      <div>
        <GraphQLErrorList errors={errors} />
      </div>
    );
  }

  return (
    <div>

      <div>
        <NavBar />
      </div>

      <div id="blog-page" className="h-screen">
        <header className="text-center pt-10">
          <h1 id="title-page">Blog</h1>
        </header>

        <div className="flex justify-center items-center">
          <BlogCardExternal />
        </div>

        <section className="flex justify-center py-20 my-20 px-10">
          <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row bg-[#ff006e] dark:bg-[#ff006e]/50 rounded-lg">
            <div className="flex flex-col justify-center lg:text-left">
              <h1 className="py-2 text-3xl font-medium leading-tight title-font">See more of my up to date Blog content on...</h1>
            </div>
            <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
              <button className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gray-800">
                <a

                  href="https://dev.to/kwing25"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    className="fill-current w-7 h-7"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                  </svg>
                  <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs">See my Articles</span>
                    <span className="font-semibold title-font">Dev.to</span>
                  </span>
                </a>
              </button>
              <button className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-gray-800">
                <a
                  href="https://linkedin.com/in/kendrawing"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    className="fill-current w-7 h-7"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="flex flex-col items-start ml-4 leading-none">
                    <span className="mb-1 text-xs">See my Posts</span>
                    <span className="font-semibold title-font">LinkedIn</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>

    </div>
  );
};

export default BlogPage;