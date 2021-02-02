import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/tv" component={TV}></Route>
          <Route path="/search" component={Search}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
