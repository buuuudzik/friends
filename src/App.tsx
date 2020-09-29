import React from "react";
import "./App.css";
import About from "./components/AboutPage/AboutPage";
import UsersPage from "./components/UsersPage/UsersPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route
        path="/:index"
        render={(props) => {
          return <UsersPage pageIndex={+props.match.params.index} />;
        }}
      />
      <Route path="/">
        <UsersPage pageIndex={1} />
      </Route>
    </Switch>
  </Router>
);

export default App;
