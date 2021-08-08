import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Home from "./home";
import State from "./state";
import Chart from "./Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <>
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/state">
        <State />
      </Route>
      <Route path="/dailycases">
        <Chart />
      </Route>
    </Router>
  </>,
  document.getElementById("root")
);
