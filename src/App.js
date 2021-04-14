import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
