import { Navigate } from "react-router-dom";
import { getUser } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getUser);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
