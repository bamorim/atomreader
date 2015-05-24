import React from "react";
import { RouteHandler, Link } from "react-router";

class HomeHandler extends React.Component {
  static async routerWillRun({flux, state}){
    const postActions = flux.getActions("posts");

    return await postActions.getPosts();
  }

  render(){
    let { posts } = this.props;
    console.log(posts[0]);
    return (
      <div className="wrapper">
        <h1>Welcome to the blog reader</h1>
        <ul>
          { posts.map((p) => <li><Link to={"/posts/"+p.uri}>{p.title}</Link></li>) }
        </ul>
        <RouteHandler/>
      </div>
    );
  }
}

export default HomeHandler;
