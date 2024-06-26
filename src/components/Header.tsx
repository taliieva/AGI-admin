import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <HStack
      height="70px"
      w="100%"
      position="fixed"
      bg="#191c24"
      color="white"
      padding="20px"
      justifyContent="space-between"
      fontFamily="Inter"
    >
      <Text fontSize="18px">AGT Admin Panel</Text>
      <Text>Username</Text>
    </HStack>
  );
};

export default Header;
