import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import MovieTrending from "Routes/MovieTrending";
import TVTrending from "Routes/TVTrending";

const AppRouter = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movie" component={Movie}></Route>
          <Route path="/tv" component={TV}></Route>
          <Route path="/movietrending" component={MovieTrending}></Route>
          <Route path="/tvtrending" component={TVTrending}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/movie/:id" component={Detail}></Route>
          <Route path="/show/:id" component={Detail}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
