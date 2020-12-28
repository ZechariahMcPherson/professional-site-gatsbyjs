import React, { FunctionComponent } from "react";
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Box, Text } from "@chakra-ui/react"

export const Layout: FunctionComponent = ({children, location}) => {
  return (
    <>
      <Header location={location}/>
      <Box pt={3} px={5} mt="4.5rem" minH="80vh">
        {children}
      </Box>
      <Footer />
    </>
  );
};

