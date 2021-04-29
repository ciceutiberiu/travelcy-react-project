import React from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/signin" component={Signin} exact></Route>
      </Switch>
    </Router>
  );
};

export default App;
