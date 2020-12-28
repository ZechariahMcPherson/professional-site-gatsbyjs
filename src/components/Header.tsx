import React, { FunctionComponent, ReactPropTypes } from "react";
import { Image, chakra, HStack, Text, Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
import { Logo } from "./Logo"

const NavLink = (props) => {
  const { href, location, ...other } = props;

  const [, group] = href.split("/");
  const isActive = location.pathname.includes(group);

  const Linkk = chakra(Link)

  return (
    <Linkk to={href}
        // aria-current={isActive ? "page" : undefined}
        display="block"
        py="1"
        px="3"
        borderRadius="full"
        transition="all 0.3s"
        color={"gray.600"}
        fontWeight="normal"
        _hover={{ bg: "gray.100" }}
        _activeLink={{
          fontWeight: "semibold",
          color: "blue.500",
        }}
        {...other}
    />
  );
};


const HeaderContent: FunctionComponent = (props) => {
  const {location, ...other} = props
  return (
    <Flex w="100%" h="100%" alignItems="flex-start">
      <HStack w="100%" as="nav" display={{ base: "none", md: "flex" }}>
        <NavLink href="/" location={location}>
          <Logo />
        </NavLink>
        <NavLink href="/about/" location={location}>
          About
        </NavLink>
        <NavLink href="/blog/" location={location}>
          Blog
        </NavLink>
        <NavLink href="/contact/" location={location}>
          Contact
        </NavLink>
      </HStack>
    </Flex>
  );
};

export const Header: FunctionComponent = (props) => {
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      left="0"
      right="0"
      borderTop="6px solid"
      borderTopColor="teal.400"
      width="full"
    >
      <chakra.div height="4.5rem" mx="auto">
        <HeaderContent location={props.location}/>
      </chakra.div>
    </chakra.header>
  );
}