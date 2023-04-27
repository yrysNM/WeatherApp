import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";

import { MainDemo, Main, Login } from "../../pages";

import "./app.scss";
const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          element={
            <div className="container">
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<MainDemo />} />
        </Route>
      </Route>
      <Route path="/main" element={<Main />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export { App };
