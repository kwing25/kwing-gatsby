const { isFuture, parseISO } = require("date-fns");
const { format } = require("date-fns");

async function createBlogPostPages(graphql, actions) {
    const { createPage } = actions;
    const result = await graphql(`
      {
        allSanityBlog(filter: { slug: { current: { ne: "null" } }, publishedAt: { ne: "null" } }) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `);
    if (result.errors) throw result.errors;
  
    const postEdges = (result.data.allSanityBlog || {}).edges || [];
  
    postEdges
  
      .forEach((edge) => {
        const id = edge.node.id;
        const slug = edge.node.slug.current;
        const path = `/blog/${slug}/`;
  
        createPage({
          path,
          component: require.resolve("./src/templates/blog-post.jsx"),
          context: { id },
        });
      });
  }
  
  exports.createPages = async ({ graphql, actions }) => {
    await createBlogPostPages(graphql, actions);
  };
  
  