import { Flex, Heading } from "@chakra-ui/layout"
import React from "react"

export const Layout = ({ children }) => {
  return (
    <Flex minH="100vh" flexDir="column">
      <Flex h="70px" shadow="base" justifyContent="center" p="0 20px">
        <Flex w="90rem" alignItems="center" justifyContent="space-between">
          <Heading>Notes</Heading>
        </Flex>
      </Flex>
      <Flex p="0 20px" minH="calc(100vh - 70px)">
        {children}
      </Flex>
    </Flex>
  )
}
