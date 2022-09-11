import * as React from "react";
import "../styles/global.css";

import NavBar from "../components/navbar/navbar";
import BlogPostPreviewGrid from "../components/blog/blog-post-preview-grid";

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <h1 className="text-purple-500">Index Page</h1>

      <div className="container mx-auto">
        {/* <BlogPostPreviewGrid /> */}
      </div>
    </main>
  );
};

export default IndexPage;
