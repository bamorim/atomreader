import { Route, DefaultRoute } from "react-router";
import App from "./components/App";
import HomeHandler from "./components/HomeHandler";
import PostHandler from "./components/PostHandler";
import React from "react";

export default (
  <Route handler={App}>
    <Route handler={HomeHandler}>
      <Route name="post" path="posts/*" handler={PostHandler}/>
    </Route>
  </Route>
);
