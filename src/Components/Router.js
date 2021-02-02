import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

const AppRouter = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        <Route path="/search" component={Search}></Route>
      </>
    </Router>
  );
};

export default AppRouter;
