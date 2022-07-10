import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import _ from "lodash";

export default function PrivateRoute({
  children,
  redirectPath = "/login",
  allowedRoles,
}) {
  const userState = useSelector((state) => state.user);
  if (!userState.userIsLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  try {
  } catch (error) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
}