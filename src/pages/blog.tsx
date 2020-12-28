import React, { FunctionComponent } from "react";
import { Layout } from "../components/Layout";

const Blog = (props) => {
  return (
    <Layout location={props.location}>
      I am blog page
    </Layout>);
};

export default Blog;
