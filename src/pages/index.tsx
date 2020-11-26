import React, { FunctionComponent } from "react";
import { Layout } from "../components/Layout"

const Home: FunctionComponent = () => {
  return <>Hello world!</>;
};

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default IndexPage;
