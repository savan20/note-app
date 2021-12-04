import { Alert } from "@chakra-ui/alert"
import { Button } from "@chakra-ui/button"
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control"
import { Input } from "@chakra-ui/input"
import { Flex, Heading, Link as LinkWraper, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Formik } from "formik"
import React, { useState } from "react"
import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"

export const Signup = () => {
  const [error, setError] = useState("")

  return (
    <Layout>
      <Flex
        flexDir="column"
        alignItems="center"
        borderRadius="md"
        m="auto"
        w="max-content"
        shadow="base"
        p="20px 20px"
        maxW="500px"
      >
        <Heading>Sign Up</Heading>
        {error !== "" && (
          <Alert status="error" mt="20px" rounded="md">
            {error}
          </Alert>
        )}
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
          validate={({ email, password, confirmPassword }) => {
            const errors = {}

            if (!email) {
              errors.email = "Required"
            } else if (
              !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
            ) {
              errors.email = "Invalid email"
            } else if (!password) {
              errors.password = "Required"
            } else if (password.length < 8) {
              errors.password = "Password must be 8 characters long"
            } else if (!confirmPassword) {
              errors.confirmPassword = "Required"
            } else if (password !== confirmPassword) {
              errors.confirmPassword = "Passwords does not match"
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
              <FormControl isInvalid={errors.password && touched.password}>
                <Input
                  placeholder="Password"
                  mt="20px"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.confirmPassword && touched.confirmPassword}
              >
                <Input
                  placeholder="Confirm Password"
                  mt="20px"
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                mt="20px"
                variant="outline"
                type="submit"
                isLoading={isSubmitting}
              >
                Sign Up
              </Button>
            </chakra.form>
          )}
        </Formik>
        <Text mt="20px">
          Alredy have an account?{" "}
          <LinkWraper as="span">
            <Link to="/login">Log In</Link>
          </LinkWraper>
        </Text>
      </Flex>
    </Layout>
  )
}
