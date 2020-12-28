import React, { FunctionComponent } from "react";
import { Layout } from "../components/Layout"

const Home: FunctionComponent = () => {
  return <>Hello world!</>;
};

const IndexPage: FunctionComponent = (props) => {
  return (
    <Layout location={props.location}>
      <Home />
    </Layout>
  );
}

export default IndexPage;
