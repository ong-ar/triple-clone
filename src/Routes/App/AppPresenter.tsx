import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home";
import "./style.css";

const AppPresenter: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.FC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
  </Switch>
);

export default AppPresenter;
