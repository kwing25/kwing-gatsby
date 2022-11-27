import React from "react";
import { useStaticQuery, graphql } from "gatsby"
//import BlogPostPreview from "./blog-post-preview";

function BlogPostPreviewGrid() {

    //     const data = useStaticQuery(graphql`
    //     query {
    //       sanityBlog {
    //         title
    //         slug {
    //           current
    //         }
    //         _rawExcerpt
    //       }
    //     }
    //   `
    //     )


    return (
        <div>
            <h1>Blog Post Preview Grid</h1>

            {/* {data.sanityBlog.title} */}


            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                {/* {props.nodes &&
                props.nodes.map((node) => (
                    <div key={node.id} className="overflow-hidden rounded-2xl h-full text-center">
                        <BlogPostPreview {...node} />
                    </div>
                ))} */}


            </div>
        </div>
    );
}


export default BlogPostPreviewGrid;
