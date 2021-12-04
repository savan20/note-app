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

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
