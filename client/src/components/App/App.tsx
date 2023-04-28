import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";

import { MainDemo, Main, Login, Register } from "../../pages";
import { PageLayout } from "../layouts/pagesLayout";

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
      <Route element={<PageLayout />}>
        <Route path="/main" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export { App };
