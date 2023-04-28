import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";

import {
  MainDemo,
  Main,
  Login,
  Register,
  Setting,
  Calendar,
  SavedLocation,
  Map,
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
          <Route path="setting" element={<Setting />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="map" element={<Map />} />
        <Route path="savedLocation" element={<SavedLocation />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
};

export { App };
