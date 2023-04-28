<<<<<<< HEAD
import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "../../utils/PrivateRoutes";

import { MainDemo, Main, Login, Register } from "../../pages";
import { PageLayout } from "../layouts/pagesLayout";
=======
import { WeatherCard } from "../WeatherCard";
import WeatherProvider from "../../context/weatherContext";

import "./app.scss";
>>>>>>> back-end

import "./app.scss";
const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="container">
      <WeatherProvider>
        <WeatherCard />
      </WeatherProvider>
    </div>
>>>>>>> back-end
  );
};

export { App };
