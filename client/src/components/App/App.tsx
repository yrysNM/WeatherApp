import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";

import {
  MainDemo,
  Main,
  Login,
  Register,
  MyWeather,
  Reports,
  Map,
  Profile,
} from "../../pages";
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
          <Route path="/main" element={<MainDemo />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="reports" element={<Reports />} />
          <Route path="weather/:user" element={<MyWeather />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="map" element={<Map />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export { App };
