import { Route, Routes } from "react-router-dom";

import "./app.scss";
import { MainDemo, Main } from "../../pages";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainDemo />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export { App };
