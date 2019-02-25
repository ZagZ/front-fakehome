import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ListCasas from "./components/Casas/ListCasas";
import DetalleCasa from "./components/Casas/DetalleCasa";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListCasas} />
          <Route exact path="/casas" component={ListCasas} />
          <Route exact path="/casas/:id" component={DetalleCasa} />
        </Switch>
      </div>
    );
  }
}

export default App;
