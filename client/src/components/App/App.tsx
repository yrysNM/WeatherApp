import {Outlet, Route, Routes} from 'react-router-dom';
import PrivateRoutes from '../../utils/PrivateRoutes';

import {
  MainDemo,
  Main,
  Login,
  Register,
  MyWeather,
  Reports,
  Map,
  AddReport,
  EditUser,
  EditReport,
} from '../../pages';
import {PageLayout} from '../layouts/pagesLayout';

import './app.scss';
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
          <Route path="weather/:user" element={<MyWeather />} />
          <Route path="edit/user/:user" element={<EditUser />} />
          <Route path="edit/report/:reportId" element={<EditReport />} />
          <Route path="add/report" element={<AddReport />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="map" element={<Map />} />
      </Route>
    </Routes>
  );
};

export {App};
