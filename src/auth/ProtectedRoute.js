import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
