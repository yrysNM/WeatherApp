import { Outlet, Route, Routes } from "react-router-dom";

import "./app.scss";
import { MainDemo, Main } from "../../pages";

const App = () => {
  return (
    <Routes>
      <Route
        element={
          <div className="container">
            <Outlet />
          </div>
        }
      >
        <Route path="/" element={<MainDemo />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export { App };
