import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux.hook";

const PrivateRoutes = () => {
  const { isLogged } = useAppSelector((state) => state.currentUser);

  return isLogged ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoutes;
