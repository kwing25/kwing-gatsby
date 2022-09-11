import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 className="text-purple-500">IndexPage</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
