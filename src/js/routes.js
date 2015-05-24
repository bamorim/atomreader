import { Route, DefaultRoute, Redirect } from "react-router";
import App from "./components/App";
import HomeHandler from "./components/HomeHandler";
import PostHandler from "./components/PostHandler";
import React from "react";

export default (
  <Route handler={App}>
    <Route name="blog" path=":blogId" handler={HomeHandler}>
      <Route name="post" path="*" handler={PostHandler}/>
    </Route>
    <Redirect to="blog" params={ {blogId: "miadoimportado"} }/>
  </Route>
);
