import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { chakra } from "@chakra-ui/react"

export const Logo = () => {

  const Imgg = chakra(Img)

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "Logo.png" }) {
            childImageSharp {
              fixed(width: 50, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) => (
        <Imgg
          alt="logo"
          height="8"
          width="auto"
          fixed={data.file.childImageSharp.fixed}
        />
      )}
    />
  );
};

  
  // const query = graphql`
  //   query {
  //     file(relativePath: { eq: "Logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `;

  // return (
  //   <Img loading="eager" fluid={query.childImageSharp.childImageSharp.fluid} />
  // );