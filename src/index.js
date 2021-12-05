import React from "react"
import ReactDOM from "react-dom"
import Index from "./Pages/Index"
import "./styles/main.css"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "./chakraTheme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Signup } from "./Pages/Signup"
import { Login } from "./Pages/Login"
import { ResetPassword } from "./Pages/ResetPassword"
import { AuthProvider } from "./contexts/AuthContext"
import {
  AuthenticatedRoutesWraper,
  UnauthenticatedRoutesWraper,
} from "./components/Wrapers"
import Dashbord from "./Pages/Dashbord"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="signup"
              element={
                <UnauthenticatedRoutesWraper>
                  <Signup />
                </UnauthenticatedRoutesWraper>
              }
            />
            <Route
              path="login"
              element={
                <UnauthenticatedRoutesWraper>
                  <Login />
                </UnauthenticatedRoutesWraper>
              }
            />
            <Route
              path="reset-password"
              element={
                <UnauthenticatedRoutesWraper>
                  <ResetPassword />
                </UnauthenticatedRoutesWraper>
              }
            />
            <Route
              path="dashbord"
              element={
                <AuthenticatedRoutesWraper>
                  <Dashbord />
                </AuthenticatedRoutesWraper>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
