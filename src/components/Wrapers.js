import { Navigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"

export const UnauthenticatedRoutesWraper = ({ children }) => {
  const { currentUser } = useAuth()

  if (currentUser) {
    return <Navigate to="/dashbord" />
  } else {
    return children
  }
}

export const AuthenticatedRoutesWraper = ({ children }) => {
  const { currentUser } = useAuth()

  if (currentUser) {
    return children
  } else {
    return <Navigate to="/login" />
  }
}
