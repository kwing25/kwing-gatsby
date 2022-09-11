import * as React from "react";
import "../styles/global.css";

import BlogPostPreviewGrid from "../components/blog/blog-post-preview-grid";

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-purple-500">IndexPage</h1>

      <div className="container mx-auto">
        <BlogPostPreviewGrid />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
