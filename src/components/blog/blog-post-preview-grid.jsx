import React from "react";

import BlogPostPreview from "./blog-post-preview";

function BlogPostPreviewGrid(props) {
    return (

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {props.nodes &&
                props.nodes.map((node) => (
                    <div key={node.id} className="overflow-hidden rounded-2xl h-full text-center">
                        <BlogPostPreview {...node} />
                    </div>
                ))}
        </div>

    );
}


export default BlogPostPreviewGrid;
