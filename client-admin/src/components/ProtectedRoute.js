import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, toPath }) {
  const access_token = localStorage.getItem("access_token");

  if (access_token && toPath == "/login") {
    return <Navigate to="/" />;
  } else if (!access_token && toPath == "/") {
    return <Navigate to="/login" />;
  }

  return children;
}

