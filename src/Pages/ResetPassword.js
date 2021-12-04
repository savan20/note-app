import { Alert } from "@chakra-ui/alert"
import { Button } from "@chakra-ui/button"
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Flex, Heading, Text, Link as LinkWraper } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Formik } from "formik"
import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

export const ResetPassword = () => {
  const [error, setError] = useState("")
  const [msg, setMsg] = useState("")
  return (
    <Layout>
      <Flex
        flexDir="column"
        alignItems="center"
        borderRadius="md"
        m="auto"
        w="350px"
        shadow="base"
        p="20px 20px"
      >
        <Heading>Reset Password</Heading>
        {error !== "" && (
          <Alert status="error" mt="20px" rounded="md">
            {error}
          </Alert>
        )}
        {msg !== "" && (
          <Alert status="info" mt="20px" rounded="md">
            {msg}
          </Alert>
        )}
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
          validate={({ email, password }) => {
            const errors = {}

            if (!email) {
              errors.email = "Required"
            } else if (
              !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
            ) {
              errors.email = "Invalid email"
            }

            return errors
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
          }) => (
            <chakra.form
              display="flex"
              flexDir="column"
              onSubmit={handleSubmit}
              w="100%"
            >
              <FormControl isInvalid={errors.email && touched.email}>
                <Input
                  placeholder="E-Mail"
                  mt="20px"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                mt="20px"
                variant="outline"
                type="submit"
                isLoading={isSubmitting}
              >
                Reset Password
              </Button>
            </chakra.form>
          )}
        </Formik>
        <Text mt="20px">
          <LinkWraper as="span">
            <Link to="/login">Log In</Link>
          </LinkWraper>
        </Text>
        <Text mt="20px">
          Need an account?{" "}
          <LinkWraper as="span">
            <Link to="/signup">Sign Up</Link>
          </LinkWraper>
        </Text>
      </Flex>
    </Layout>
  )
}
