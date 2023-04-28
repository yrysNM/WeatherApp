import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

=======
>>>>>>> back-end
import { App } from "./components/App";
import store from "./redux/store";

import "./style/style.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
=======
    <App />
>>>>>>> back-end
  </React.StrictMode>
);
