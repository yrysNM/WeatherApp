import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hook";

const PrivateRoutes = () => {
  const { user } = useAppSelector((state) => state.currentUser);

  return user?.token ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoutes;
