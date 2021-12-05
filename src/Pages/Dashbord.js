import { Button } from "@chakra-ui/button"
import { Heading } from "@chakra-ui/layout"
import React from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../contexts/AuthContext"

function Dashbord() {
  const { logout } = useAuth()

  return (
    <Layout>
      <Heading size="md">Dashbord</Heading>
      <Button colorScheme="teal" onClick={logout}>
        Log Out
      </Button>
    </Layout>
  )
}

export default Dashbord
