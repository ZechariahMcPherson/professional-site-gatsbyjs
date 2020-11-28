import React, { FunctionComponent, ReactPropTypes } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Image,
  HTMLChakraProps,
  chakra,
  HStack
} from "@chakra-ui/react";
import { Link } from "gatsby";

const NavLink = (props: HTMLChakraProps<"a">) => {
  const { href, ...other } = props;
  return (
    <Link to={href}>
      <chakra.a
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
          color: "teal.500",
        }}
        {...other}
      />
    </Link>
  );
};


export const Header: FunctionComponent = () => {
  return (
    <HStack
      as="nav"
      spacing="4"
      ml="24px"
      display={{ base: "none", md: "flex" }}
    >
      <NavLink
        href="/"
      >
        Logo
      </NavLink>
      <NavLink
        href="/about/"
      >
        About
      </NavLink>
      <NavLink
        href="/blog/"
      >
        Blog
      </NavLink>
      <NavLink
        href="/contact/"
      >
        Contact
      </NavLink>
    </HStack>
  );
};

//  <NavLink
//         px={4}
//         py={2}
//         transition="all 0.2s"
//         borderWidth="1px"
//         _hover={{ bg: "gray.100" }}
//         _focus={{ outline: 0, boxShadow: "outline" }}
//       ></NavLink>